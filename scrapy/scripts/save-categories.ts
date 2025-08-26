// Load environment variables from .env (so scripts run with proper DATABASE_URL)
import 'dotenv/config'
import { BRAND_CONFIG } from '../config'
import { fetchBrandData, structureBrandData } from '../scraper/categories'
import prisma from '../lib/prisma'

// Kategorileri database'e kaydet
async function saveCategoriesToDatabase() {
  console.log("🚀 Kategorileri database'e kaydediliyor...\n")

  // Zara verilerini çek
  const zaraData = await fetchBrandData(
    'ZARA',
    `${BRAND_CONFIG.ZARA.baseUrl}${BRAND_CONFIG.ZARA.endpoints.categories}`,
    BRAND_CONFIG.ZARA.headers,
  )

  if (zaraData) {
    const structuredZara = await structureBrandData(
      'ZARA',
      BRAND_CONFIG.ZARA,
      zaraData,
    )

    // ZARA kategorilerini kaydet
    await saveBrandCategories(structuredZara)
  }

  // Pull&Bear verilerini çek
  const pullBearData = await fetchBrandData(
    'PULL&BEAR',
    `${BRAND_CONFIG.PULLANDBEAR.baseUrl}${BRAND_CONFIG.PULLANDBEAR.endpoints.categories}`,
    BRAND_CONFIG.PULLANDBEAR.headers,
  )

  if (pullBearData) {
    const structuredPullBear = await structureBrandData(
      'PULL&BEAR',
      BRAND_CONFIG.PULLANDBEAR,
      pullBearData,
    )

    // PULL&BEAR kategorilerini kaydet
    await saveBrandCategories(structuredPullBear)
  }

  console.log('✅ Kategoriler başarıyla kaydedildi!')
}

// Brand kategorilerini recursive olarak kaydet
async function saveBrandCategories(brandData: any) {
  console.log(`🏪 ${brandData.brand} kategorileri kaydediliyor...`)

  // Brand'i kaydet
  const brand = await prisma.brand.upsert({
    where: { name: brandData.brand },
    update: {},
    create: {
      id: brandData.brand,
      name: brandData.brand,
    },
  })

  // Ana kategorileri kaydet
  for (const mainCategory of brandData.mainCategories) {
    await saveMainCategory(mainCategory, brand.id)
  }
}

// Ana kategoriyi kaydet
async function saveMainCategory(mainCategory: any, brandId: string) {
  console.log(
    `   🔍 Ana Kategori: ${mainCategory.name}, ID: ${mainCategory.id}`,
  )

  // Ana kategoriyi kaydet
  const savedMainCategory = await prisma.mainCategory.upsert({
    where: { id: mainCategory.id },
    update: {
      name: mainCategory.name,
      brandId: brandId,
      gender: mainCategory.gender,
      level: mainCategory.level,
    },
    create: {
      id: mainCategory.id,
      name: mainCategory.name,
      brandId: brandId,
      gender: mainCategory.gender,
      level: mainCategory.level,
    },
  })

  console.log(
    `   📁 ${mainCategory.name} (${
      mainCategory.subcategories?.length || 0
    } alt kategori)`,
  )

  // Alt kategorileri recursive olarak kaydet
  if (mainCategory.subcategories && mainCategory.subcategories.length > 0) {
    for (const subCategory of mainCategory.subcategories) {
      await saveCategoryRecursive(
        subCategory,
        savedMainCategory.id,
        null,
        brandId,
      )
    }
  }
}

// Kategoriyi recursive olarak kaydet
async function saveCategoryRecursive(
  category: any,
  parentCategoryId: number | null,
  parentSubCategoryId: number | null,
  brandId: string,
) {
  console.log(
    `   🔍 Kategori: ${category.categoryName}, ID: ${category.categoryId}, Level: ${category.level}`,
  )

  // Kategoriyi kaydet
  const savedCategory = await prisma.subCategory.upsert({
    where: { categoryId: category.categoryId },
    update: {
      categoryName: category.categoryName,
      brand: category.brand,
      gender: category.gender,
      level: category.level,
      isLeaf: category.isLeaf,
      productCount: category.productCount || 0,
      parentCategoryId: parentCategoryId,
      parentSubCategoryId: parentSubCategoryId,
    },
    create: {
      categoryId: category.categoryId,
      categoryName: category.categoryName,
      brand: category.brand,
      gender: category.gender,
      level: category.level,
      isLeaf: category.isLeaf,
      productCount: category.productCount || 0,
      parentCategoryId: parentCategoryId,
      parentSubCategoryId: parentSubCategoryId,
    },
  })

  console.log(
    `   📁 ${'  '.repeat(category.level)}${category.categoryName} (${
      category.productCount || 0
    } ürün)`,
  )

  // Alt kategorileri recursive olarak kaydet
  if (category.subcategories && category.subcategories.length > 0) {
    for (const subCategory of category.subcategories) {
      await saveCategoryRecursive(
        subCategory,
        parentCategoryId,
        savedCategory.categoryId,
        brandId,
      )
    }
  }
}

// Script'i çalıştır
saveCategoriesToDatabase()
  .then(() => {
    console.log('\n✅ Kategoriler kaydedildi!')
    process.exit(0)
  })
  .catch((error) => {
    console.error('❌ Hata:', error)
    process.exit(1)
  })
