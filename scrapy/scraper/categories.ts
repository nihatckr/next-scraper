import { existsSync, mkdirSync, writeFileSync, statSync } from 'fs'
import { join } from 'path'
import { BRAND_CONFIG } from '../config'

// Çıktı klasörünü temizle
export function clearOutputDirectory() {
  const outputDir = join(__dirname, 'output')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }
  console.log('📁 Output klasörü hazır')
}

// Brand verilerini çek
export async function fetchBrandData(
  brandName: string,
  url: string,
  headers: Record<string, string>,
): Promise<any> {
  console.log(`\n🛒 ${brandName} kategorileri çekiliyor...`)

  try {
    const response = await fetch(url, { headers })
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    console.log(`✅ ${brandName} kategorileri başarıyla çekildi`)
    return data
  } catch (error) {
    console.error(`❌ ${brandName} kategorileri çekilirken hata:`, error)
    return null
  }
}

// Zara ürün ID'lerini garantili şekilde çek
export async function fetchZaraProductIds(
  categoryId: number,
  headers: Record<string, string>,
  maxRetries: number = 3,
): Promise<number[]> {
  let attempt = 0
  let lastError: any = null
  let bestResult: number[] = []

  while (attempt < maxRetries) {
    try {
      const url = `https://www.zara.com/tr/tr/category/${categoryId}/products?ajax=true`
      const response = await fetch(url, { headers })

      if (!response.ok) {
        console.log(`    ⚠️  HTTP ${response.status} - Kategori ${categoryId} (deneme ${attempt + 1}/${maxRetries})`)
        attempt++
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt)) // Exponential backoff
        }
        continue
      }

      const data: any = await response.json()

      if (data && data.productGroups && Array.isArray(data.productGroups)) {
        const productIds: number[] = []

        data.productGroups.forEach((group: any) => {
          if (group.elements && Array.isArray(group.elements)) {
            group.elements.forEach((element: any) => {
              if (
                element.commercialComponents &&
                Array.isArray(element.commercialComponents)
              ) {
                element.commercialComponents.forEach((component: any) => {
                  if (component.id) {
                    productIds.push(parseInt(component.id))
                  }
                })
              }
            })
          }
        })

        const uniqueIds = [...new Set(productIds)] // Duplikatları temizle
        
        // En iyi sonucu sakla (en fazla ürün ID'si olanı)
        if (uniqueIds.length > bestResult.length) {
          bestResult = uniqueIds
        }

        console.log(`    ✅ ${uniqueIds.length} ürün ID (deneme ${attempt + 1})`)
        
        // Eğer anlamlı sayıda ürün bulduysak başarılı
        if (uniqueIds.length > 0) {
          return uniqueIds
        }
      } else {
        console.log(`    ⚠️  Veri yapısı beklenmedik - Kategori ${categoryId} (deneme ${attempt + 1})`)
      }

    } catch (error) {
      console.log(`    ❌ API hatası - Kategori ${categoryId} (deneme ${attempt + 1}):`, error)
      lastError = error
    }
    
    attempt++
    if (attempt < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt)) // Exponential backoff
    }
  }

  // Tüm denemeler başarısızsa en iyi sonucu döndür
  if (bestResult.length > 0) {
    console.log(`    🔄 En iyi sonuç kullanılıyor: ${bestResult.length} ürün ID`)
    return bestResult
  }

  console.log(`    ❌ ${maxRetries} deneme sonrası başarısız - Kategori ${categoryId}`)
  return []
}

// Pull&Bear ürün ID'lerini garantili şekilde çek
export async function fetchPullBearProductIds(
  categoryId: number,
  headers: Record<string, string>,
  maxRetries: number = 3,
): Promise<number[]> {
  let attempt = 0
  let lastError: any = null
  let bestResult: number[] = []

  while (attempt < maxRetries) {
    try {
      const url = `https://www.pullandbear.com/itxrest/3/catalog/store/25009521/20309457/category/${categoryId}/product?languageId=-7&appId=1&showProducts=false`
      const response = await fetch(url, { headers })

      if (!response.ok) {
        console.log(`    ⚠️  HTTP ${response.status} - Kategori ${categoryId} (deneme ${attempt + 1}/${maxRetries})`)
        attempt++
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt)) // Exponential backoff
        }
        continue
      }

      const data: any = await response.json()

      if (data && data.productIds && Array.isArray(data.productIds)) {
        const productIds = data.productIds
        
        // En iyi sonucu sakla (en fazla ürün ID'si olanı)
        if (productIds.length > bestResult.length) {
          bestResult = productIds
        }

        console.log(`    ✅ ${productIds.length} ürün ID (deneme ${attempt + 1})`)
        
        // Eğer anlamlı sayıda ürün bulduysak başarılı
        if (productIds.length > 0) {
          return productIds
        }
      } else {
        console.log(`    ⚠️  Veri yapısı beklenmedik - Kategori ${categoryId} (deneme ${attempt + 1})`)
      }

    } catch (error) {
      console.log(`    ❌ API hatası - Kategori ${categoryId} (deneme ${attempt + 1}):`, error)
      lastError = error
    }
    
    attempt++
    if (attempt < maxRetries) {
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt)) // Exponential backoff
    }
  }

  // Tüm denemeler başarısızsa en iyi sonucu döndür
  if (bestResult.length > 0) {
    console.log(`    🔄 En iyi sonuç kullanılıyor: ${bestResult.length} ürün ID`)
    return bestResult
  }

  console.log(`    ❌ ${maxRetries} deneme sonrası başarısız - Kategori ${categoryId}`)
  return []
}

// Tüm kategorileri derinlemesine işleyen recursive fonksiyon
export async function processAllCategories(
  categories: any[],
  brandName: string,
  genderName: string,
  level: number = 1,
  maxLevel: number = 5,
  brandConfig?: any,
  parentMatchingId: any = null,
): Promise<any[]> {
  if (!categories || !Array.isArray(categories) || level > maxLevel) {
    return []
  }

  const filteredCategories = categories.filter((category: any) => {
    // "TÜMÜNÜ GÖR" kategorilerini filtrele
    const categoryName = category.name || ''
    return (
      !categoryName.includes('TÜMÜNÜ GÖR') &&
      !categoryName.includes('SEE ALL') &&
      !categoryName.includes('VER TODO')
    )
  })

  const processedCategories = []

  for (const category of filteredCategories) {
    const isLeaf =
      !category.subcategories || category.subcategories.length === 0

    const processedCategory: any = {
      categoryId: category.id,
      categoryName: category.name || `Kategori ${category.id}`,
      brand: brandName,
      gender: genderName,
      level: level,
      isLeaf: isLeaf,
      matchingId: null,
    }

    // Sadece leaf kategorilerde productCount ve productIds ekle
    if (isLeaf) {
      processedCategory.productCount = 0
      processedCategory.productIds = []
    }

    // MatchingId belirleme mantığı
    if (level === 1 && brandConfig && brandConfig.categoryMapping) {
      // Level 1'de kendi mapping'ini kullan
      const categoryId = parseInt(category.id)
      const genderKey = genderName === 'ERKEK' ? 'MEN' : 'WOMEN'
      const mapping = brandConfig.categoryMapping[genderKey]

      if (mapping && mapping[categoryId]) {
        processedCategory.matchingId = mapping[categoryId]
      }
    } else if (level > 1 && parentMatchingId) {
      // Level 2+ kategorilerde parent'ın matchingId'sini kullan
      processedCategory.matchingId = parentMatchingId
    }

    // Leaf kategoriler için ürün ID'lerini çek
    if (isLeaf) {
      console.log(
        `      🔍 Leaf kategori: ${processedCategory.categoryName} (${processedCategory.categoryId})`,
      )

      if (brandName === 'ZARA') {
        const productIds = await fetchZaraProductIds(
          parseInt(processedCategory.categoryId),
          brandConfig.headers,
        )
        processedCategory.productIds = productIds
        processedCategory.productCount = productIds.length
      } else if (brandName === 'PULL&BEAR') {
        const productIds = await fetchPullBearProductIds(
          parseInt(processedCategory.categoryId),
          brandConfig.headers,
        )
        processedCategory.productIds = productIds
        processedCategory.productCount = productIds.length
      }

      // API rate limiting için kısa bir bekleme
      await new Promise((resolve) => setTimeout(resolve, 500))
    }

    // Alt kategoriler varsa recursive olarak işle
    if (
      category.subcategories &&
      category.subcategories.length > 0 &&
      level < maxLevel
    ) {
      processedCategory.subcategories = await processAllCategories(
        category.subcategories,
        brandName,
        genderName,
        level + 1,
        maxLevel,
        brandConfig,
        processedCategory.matchingId, // Parent'ın matchingId'sini geçir
      )
      processedCategory.isLeaf = false
    }

    processedCategories.push(processedCategory)
  }

  return processedCategories
}

export async function structureBrandData(
  brandName: string,
  brandConfig: any,
  rawData: any,
): Promise<any> {
  const brandId = brandName === 'ZARA' ? '1' : '2'

  const structuredBrand = {
    id: brandId,
    brand: brandName,
    mainCategories: [] as any[],
  }

  if (!rawData || !rawData.categories) {
    console.log(`⚠️  ${brandName}: Ham veri bulunamadı`)
    return structuredBrand
  }

  // Ana kategorileri bul (ERKEK/KADIN)
  const menCategory = rawData.categories.find(
    (cat: any) =>
      cat.id === brandConfig.categories.MEN ||
      parseInt(cat.id) === brandConfig.categories.MEN,
  )

  const womenCategory = rawData.categories.find(
    (cat: any) =>
      cat.id === brandConfig.categories.WOMEN ||
      parseInt(cat.id) === brandConfig.categories.WOMEN,
  )

  // ERKEK kategorisini işle
  if (menCategory) {
    const menMainCategory: any = {
      id: menCategory.id,
      name: 'ERKEK',
      brand: brandName,
      gender: 'ERKEK',
      level: 0, // Ana kategori level 0
      subcategories: [],
    }

    if (menCategory.subcategories && menCategory.subcategories.length > 0) {
      let targetMenCategories: any[] = []

      if (brandName === 'PULL&BEAR') {
        // Pull&Bear için KOLEKSIYON kategorisini bul
        const collectionCategory = menCategory.subcategories.find(
          (cat: any) => cat.name === 'KOLEKSIYON',
        )

        if (collectionCategory && collectionCategory.subcategories) {
          // KOLEKSIYON içindeki hedef kategorileri filtrele
          targetMenCategories = collectionCategory.subcategories.filter(
            (cat: any) =>
              brandConfig.targetCategories.MEN.includes(parseInt(cat.id)),
          )
        }
      } else {
        // Zara için direkt filtreleme
        targetMenCategories = menCategory.subcategories.filter((cat: any) =>
          brandConfig.targetCategories.MEN.includes(parseInt(cat.id)),
        )
      }

      console.log(
        `🔍 ${brandName} ERKEK: ${targetMenCategories.length}/${menCategory.subcategories.length} hedef kategori bulundu (Level 5'e kadar işleniyor...)`,
      )

      if (targetMenCategories.length > 0) {
        menMainCategory.subcategories = await processAllCategories(
          targetMenCategories,
          brandName,
          'ERKEK',
          1,
          5,
          brandConfig,
        )
      }
    }

    structuredBrand.mainCategories.push(menMainCategory)
  }

  // KADIN kategorisini işle
  if (womenCategory) {
    const womenMainCategory: any = {
      id: womenCategory.id,
      name: 'KADIN',
      brand: brandName,
      gender: 'KADIN',
      level: 0, // Ana kategori level 0
      subcategories: [],
    }

    if (womenCategory.subcategories && womenCategory.subcategories.length > 0) {
      let targetWomenCategories: any[] = []

      if (brandName === 'PULL&BEAR') {
        // Pull&Bear için KOLEKSIYON kategorisini bul
        const collectionCategory = womenCategory.subcategories.find(
          (cat: any) => cat.name === 'KOLEKSIYON',
        )

        if (collectionCategory && collectionCategory.subcategories) {
          // KOLEKSIYON içindeki hedef kategorileri filtrele
          targetWomenCategories = collectionCategory.subcategories.filter(
            (cat: any) =>
              brandConfig.targetCategories.WOMEN.includes(parseInt(cat.id)),
          )
        }
      } else {
        // Zara için direkt filtreleme
        targetWomenCategories = womenCategory.subcategories.filter((cat: any) =>
          brandConfig.targetCategories.WOMEN.includes(parseInt(cat.id)),
        )
      }

      console.log(
        `🔍 ${brandName} KADIN: ${targetWomenCategories.length}/${womenCategory.subcategories.length} hedef kategori bulundu (Level 5'e kadar işleniyor...)`,
      )

      if (targetWomenCategories.length > 0) {
        womenMainCategory.subcategories = await processAllCategories(
          targetWomenCategories,
          brandName,
          'KADIN',
          1,
          5,
          brandConfig,
        )
      }
    }

    structuredBrand.mainCategories.push(womenMainCategory)
  }

  return structuredBrand
}

export async function saveCategoryData() {
  console.log("🚀 Level 4-5'e kadar tüm kategori verisi toplanıyor...")

  clearOutputDirectory()

  const combinedData = {
    timestamp: new Date().toISOString(),
    totalBrands: 2,
    brands: [] as any[],
  }

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
    combinedData.brands.push(structuredZara)
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
    combinedData.brands.push(structuredPullBear)
  }

  // JSON dosyasına kaydet
  const outputDir = join(__dirname, 'output')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  const filePath = join(outputDir, 'combined-brands-categories.json')
  writeFileSync(filePath, JSON.stringify(combinedData, null, 2), 'utf-8')

  // Özet bilgi
  let totalCategories = 0
  let leafCategories = 0
  let totalProductIds = 0
  let levelStats: any = {}
  let maxLevel = 0

  function analyzeCategories(categories: any[]) {
    categories.forEach((cat: any) => {
      totalCategories++
      const level = cat.level || 1
      levelStats[level] = (levelStats[level] || 0) + 1
      if (level > maxLevel) maxLevel = level

      if (cat.isLeaf) {
        leafCategories++
        totalProductIds += cat.productIds ? cat.productIds.length : 0
      }

      if (cat.subcategories && cat.subcategories.length > 0) {
        analyzeCategories(cat.subcategories)
      }
    })
  }

  combinedData.brands.forEach((brand: any) => {
    brand.mainCategories.forEach((mainCat: any) => {
      analyzeCategories(mainCat.subcategories)
    })
  })

  console.log(`\n🎉 Kategori verisi kaydedildi!`)
  console.log(`📁 Dosya: ${filePath}`)
  console.log(`📄 Boyut: ${(statSync(filePath).size / 1024).toFixed(2)} KB`)
  console.log(`\n📊 Detaylı Analiz:`)
  console.log(`   • Toplam Kategori: ${totalCategories}`)
  console.log(`   • Leaf Kategoriler: ${leafCategories}`)
  console.log(`   • Toplam Ürün ID: ${totalProductIds}`)
  console.log(`   • En Derin Level: ${maxLevel}`)
  console.log(`   • Level Dağılımı:`)

  for (let i = 1; i <= maxLevel; i++) {
    if (levelStats[i]) {
      console.log(`     - Level ${i}: ${levelStats[i]} kategori`)
    }
  }

  // Brand bazında özet
  combinedData.brands.forEach((brand: any) => {
    let brandCategories = 0
    let brandLeafCategories = 0
    let brandProductIds = 0

    function countBrandCategories(categories: any[]) {
      categories.forEach((cat: any) => {
        brandCategories++
        if (cat.isLeaf) {
          brandLeafCategories++
          brandProductIds += cat.productIds ? cat.productIds.length : 0
        }
        if (cat.subcategories && cat.subcategories.length > 0) {
          countBrandCategories(cat.subcategories)
        }
      })
    }

    brand.mainCategories.forEach((mainCat: any) => {
      countBrandCategories(mainCat.subcategories)
    })

    console.log(`\n   🏪 ${brand.brand}:`)
    console.log(`     • Kategoriler: ${brandCategories}`)
    console.log(`     • Leaf Kategoriler: ${brandLeafCategories}`)
    console.log(`     • Ürün ID'ler: ${brandProductIds}`)
  })
}