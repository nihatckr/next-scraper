import prisma from '../lib/prisma'
import { fetchBrandData, structureBrandData } from '../scraper/categories'
import { BRAND_CONFIG } from '../config'

// Scraper'dan direkt veri çekip database'e kaydet
export async function saveCategoriesDatabase(forceUpdate: boolean = false) {
  console.log("🚀 Kategoriler scraper'dan çekilerek database'e kaydediliyor...")

  try {
    // Kategoriler zaten var mı kontrol et (sadece ilk kurulumda)
    const existingCategories = await prisma.subCategory.count()
    if (existingCategories > 0 && !forceUpdate) {
      console.log(
        `✅ Kategoriler zaten mevcut (${existingCategories} adet). İşlem atlanıyor.`,
      )
      return
    }

    if (forceUpdate) {
      console.log(`🔄 Güncelleme modu: ${existingCategories} mevcut kategori güncellenecek`)
    }

    console.log('📥 APIlerden kategori verilerini çekiliyor...')

    // Zara verilerini çek
    const zaraData = await fetchBrandData(
      'ZARA',
      `${BRAND_CONFIG.ZARA.baseUrl}${BRAND_CONFIG.ZARA.endpoints.categories}`,
      BRAND_CONFIG.ZARA.headers,
    )

    // Pull&Bear verilerini çek
    const pullBearData = await fetchBrandData(
      'PULL&BEAR',
      `${BRAND_CONFIG.PULLANDBEAR.baseUrl}${BRAND_CONFIG.PULLANDBEAR.endpoints.categories}`,
      BRAND_CONFIG.PULLANDBEAR.headers,
    )

    const brands = []

    // Zara verilerini yapılandır
    if (zaraData) {
      const structuredZara = await structureBrandData(
        'ZARA',
        BRAND_CONFIG.ZARA,
        zaraData,
      )
      brands.push(structuredZara)
    }

    // Pull&Bear verilerini yapılandır
    if (pullBearData) {
      const structuredPullBear = await structureBrandData(
        'PULL&BEAR',
        BRAND_CONFIG.PULLANDBEAR,
        pullBearData,
      )
      brands.push(structuredPullBear)
    }

    console.log(`📊 ${brands.length} marka işlenecek...`)

    // Her marka için işlem yap
    for (const brandData of brands) {
      console.log(`\n🏪 ${brandData.brand} markası işleniyor...`)

      // Brand'i oluştur veya güncelle
      const brand = await prisma.brand.upsert({
        where: { id: brandData.id },
        update: {
          name: brandData.brand,
          timestamp: new Date(),
        },
        create: {
          id: brandData.id,
          name: brandData.brand,
          timestamp: new Date(),
        },
      })

      console.log(`✅ Brand kaydedildi: ${brand.name}`)

      // Ana kategorileri işle (ERKEK/KADIN)
      for (const mainCat of brandData.mainCategories) {
        console.log(`  📂 Ana kategori: ${mainCat.name}`)

        const mainCategory = await prisma.mainCategory.upsert({
          where: { id: mainCat.id },
          update: {
            name: mainCat.name,
            gender: mainCat.gender,
            level: mainCat.level || 0,
          },
          create: {
            id: mainCat.id,
            name: mainCat.name,
            brandId: brand.id,
            gender: mainCat.gender,
            level: mainCat.level || 0,
          },
        })

        console.log(`    ✅ Ana kategori kaydedildi: ${mainCategory.name}`)

        // Alt kategorileri recursive olarak işle
        if (mainCat.subcategories && mainCat.subcategories.length > 0) {
          await processSubCategories(
            mainCat.subcategories,
            mainCategory.id,
            null, // parentSubCategoryId
            brandData.brand,
            mainCat.gender,
          )
        }
      }
    }

    // Sync kaydı oluştur
    await prisma.dataSync.create({
      data: {
        syncType: 'categories',
        status: 'success',
        itemsCount: brands.length,
        timestamp: new Date(),
      },
    })

    console.log("\n🎉 Tüm kategoriler başarıyla database'e kaydedildi!")

    // İstatistik göster
    const stats = await getCategoryStats()
    console.log('\n📊 Database İstatistikleri:')
    console.log(`   • Toplam Brand: ${stats.brands}`)
    console.log(`   • Toplam Ana Kategori: ${stats.mainCategories}`)
    console.log(`   • Toplam Alt Kategori: ${stats.subCategories}`)
    console.log(`   • Leaf Kategoriler: ${stats.leafCategories}`)
  } catch (error) {
    console.error('❌ Kategori kaydetme hatası:', error)

    // Hata kaydı oluştur
    await prisma.dataSync.create({
      data: {
        syncType: 'categories',
        status: 'failed',
        errorMessage:
          error instanceof Error ? error.message : 'Bilinmeyen hata',
        timestamp: new Date(),
      },
    })

    throw error
  }
}

// Alt kategorileri recursive olarak işleyen fonksiyon
async function processSubCategories(
  subcategories: any[],
  parentCategoryId: number,
  parentSubCategoryId: number | null,
  brand: string,
  gender: string,
) {
  for (const subCat of subcategories) {
    console.log(
      `    📁 Alt kategori: ${subCat.categoryName} (Level ${subCat.level})`,
    )

    const subCategory = await prisma.subCategory.upsert({
      where: { categoryId: subCat.categoryId },
      update: {
        categoryName: subCat.categoryName,
        brand: brand,
        gender: gender,
        level: subCat.level,
        isLeaf: subCat.isLeaf || false,
        matchingId: subCat.matchingId,
        productCount: subCat.productCount,
        parentCategoryId: parentCategoryId,
        parentSubCategoryId: parentSubCategoryId,
      },
      create: {
        categoryId: subCat.categoryId,
        categoryName: subCat.categoryName,
        brand: brand,
        gender: gender,
        level: subCat.level,
        isLeaf: subCat.isLeaf || false,
        matchingId: subCat.matchingId,
        productCount: subCat.productCount,
        parentCategoryId: parentCategoryId,
        parentSubCategoryId: parentSubCategoryId,
      },
    })

    console.log(
      `      ✅ Alt kategori kaydedildi: ${subCategory.categoryName}${
        subCategory.isLeaf ? ' (Leaf)' : ''
      }`,
    )

    // Eğer productIds varsa ileride Product tablosuna da kaydetmek için saklayabiliriz
    if (subCat.productIds && subCat.productIds.length > 0) {
      console.log(`        📦 ${subCat.productIds.length} ürün ID'si var`)
    }

    // Alt kategoriler varsa recursive olarak işle
    if (subCat.subcategories && subCat.subcategories.length > 0) {
      await processSubCategories(
        subCat.subcategories,
        parentCategoryId,
        subCategory.categoryId, // Bu kategori artık parent olacak
        brand,
        gender,
      )
    }
  }
}

// Database istatistiklerini getir
async function getCategoryStats() {
  const [brands, mainCategories, subCategories, leafCategories] =
    await Promise.all([
      prisma.brand.count(),
      prisma.mainCategory.count(),
      prisma.subCategory.count(),
      prisma.subCategory.count({ where: { isLeaf: true } }),
    ])

  return {
    brands,
    mainCategories,
    subCategories,
    leafCategories,
  }
}
