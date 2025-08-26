// Gelişmiş normalize edilmiş ürün detayları çekici (ZARA extra API'leri dahil)
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

// Null/undefined değerleri temizle
function removeNullValues(obj: any): any {
  if (Array.isArray(obj)) {
    return obj
      .map(removeNullValues)
      .filter((item) => item !== null && item !== undefined)
  } else if (obj !== null && typeof obj === 'object') {
    const cleanObj: any = {}
    for (const [key, value] of Object.entries(obj)) {
      if (value !== null && value !== undefined && value !== '') {
        const cleanValue = removeNullValues(value)
        if (
          cleanValue !== null &&
          cleanValue !== undefined &&
          cleanValue !== ''
        ) {
          // Boş array'leri de kontrol et
          if (Array.isArray(cleanValue) && cleanValue.length === 0) {
            continue // Boş array'leri dahil etme
          }
          // Boş objeleri de kontrol et
          if (
            typeof cleanValue === 'object' &&
            !Array.isArray(cleanValue) &&
            Object.keys(cleanValue).length === 0
          ) {
            continue // Boş objeleri dahil etme
          }
          cleanObj[key] = cleanValue
        }
      }
    }
    return Object.keys(cleanObj).length > 0 ? cleanObj : null
  }
  return obj
}

// ZARA extra API'lerini çek
async function fetchZaraExtraDetails(productId: number): Promise<any> {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
    Referer: 'https://www.zara.com/',
  }

  const extraDetails: any = {}

  // 1. Extra Detail API (malzeme ve bakım)
  try {
    const extraDetailUrl = `https://www.zara.com/tr/tr/product/${productId}/extra-detail?ajax=true`
    const response = await fetch(extraDetailUrl, { headers })
    if (response.ok) {
      extraDetails.materialsCare = await response.json()
      console.log(`    ✅ Extra detail API: ${productId}`)
    }
  } catch (error) {
    console.log(`    ⚠️ Extra detail API hatası: ${productId}`)
  }

  // 2. Sizing Info API (beden önerisi)
  try {
    const sizingUrl = `https://www.zara.com/itxrest/3/returns/store/11766/product/${productId}/sizing-info?locale=tr_TR&visitorId=1936772483.1750440587`
    const response = await fetch(sizingUrl, { headers })
    if (response.ok) {
      extraDetails.sizingInfo = await response.json()
      console.log(`    ✅ Sizing info API: ${productId}`)
    }
  } catch (error) {
    console.log(`    ⚠️ Sizing info API hatası: ${productId}`)
  }

  // 3. Filters API (kategori filtreleri)
  try {
    const filtersUrl = `https://www.zara.com/tr/tr/category/2432072/filters?ajax=true`
    const response = await fetch(filtersUrl, { headers })
    if (response.ok) {
      extraDetails.filters = await response.json()
      console.log(`    ✅ Filters API: kategori`)
    }
  } catch (error) {
    console.log(`    ⚠️ Filters API hatası`)
  }

  return extraDetails
}

// ZARA ürün detayları çek (extra API'lerle)
async function fetchZaraProductDetails(productId: number): Promise<any> {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
    Referer: 'https://www.zara.com/',
  }

  try {
    console.log(`🔍 ZARA ürün detayı çekiliyor: ${productId}`)

    const url = `https://www.zara.com/tr/tr/products-details?productIds=${productId}&ajax=true`
    const response = await fetch(url, { headers })

    if (!response.ok) {
      console.log(`❌ ZARA HTTP ${response.status}: ${productId}`)
      return null
    }

    const basicData = await response.json()
    console.log(`✅ ZARA temel veri alındı: ${productId}`)

    // Extra API'leri çek
    const extraDetails = await fetchZaraExtraDetails(productId)

    return {
      basicData: basicData,
      extraDetails: extraDetails,
    }
  } catch (error) {
    console.error(`❌ ZARA API hatası:`, error)
    return null
  }
}

// Pull&Bear ürün detayları çek
async function fetchPullBearProductDetails(productId: number): Promise<any> {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
    Referer: 'https://www.pullandbear.com/',
  }

  try {
    console.log(`🔍 PULL&BEAR ürün detayı çekiliyor: ${productId}`)

    const url = `https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category/0/product/${productId}/detail?languageId=-43&appId=1`
    const response = await fetch(url, { headers })

    if (!response.ok) {
      console.log(`❌ PULL&BEAR HTTP ${response.status}: ${productId}`)
      return null
    }

    const data = await response.json()
    console.log(`✅ PULL&BEAR veri alındı: ${productId}`)
    return data
  } catch (error) {
    console.error(`❌ PULL&BEAR API hatası:`, error)
    return null
  }
}

// Veriyi normalize et
function normalizeProductData(productData: any, brand: string): any {
  const normalized: any = {
    brand: brand,
    productId: null,
    normalizedData: {
      id: null,
      name: null,
      price: null,
      description: null,
      colors: [],
      sizes: [],
      images: [],
      stock: null,
    },
  }

  try {
    if (brand === 'ZARA') {
      const data = Array.isArray(productData.basicData)
        ? productData.basicData[0]
        : productData.basicData

      if (data) {
        normalized.productId = data.id
        normalized.normalizedData = {
          id: data.id,
          name: data.name,
          price: data.detail?.colors?.[0]?.price || null,
          description: data.detail?.colors?.[0]?.description || null,
          colors:
            data.detail?.colors?.map((c: any) => ({
              id: c.id,
              name: c.name,
              hexCode: c.hexCode || undefined,
              price: c.price || undefined,
              description: c.description || undefined,
              images:
                c.xmedia
                  ?.map((m: any) => ({
                    url: m.url,
                    type: m.type,
                    kind: m.kind,
                    order: m.order || 0,
                  }))
                  ?.filter((img: any) => img.type === 'image') || [],
              sizes:
                c.sizes?.map((s: any) => ({
                  id: s.id,
                  name: s.name,
                  availability: s.availability,
                  price: s.price || undefined,
                  sku: s.sku || undefined,
                })) || [],
            })) || [],
          sizes: [], // Tüm renklerden toplam bedenler (aşağıda hesaplanacak)
          images: [], // Tüm renklerden toplam görseller (aşağıda hesaplanacak)
          stock: [], // Tüm renklerden toplam stok (aşağıda hesaplanacak)
        }

        // Tüm renklerin görselleri ve bedenleri için toplam listeleri oluştur
        if (data.detail?.colors) {
          const allImages: any[] = []
          const allSizes: any[] = []
          const allStock: any[] = []

          data.detail.colors.forEach((color: any, colorIndex: number) => {
            // Renk bazlı görseller
            if (color.xmedia) {
              color.xmedia.forEach((media: any) => {
                if (media.type === 'image') {
                  allImages.push({
                    url: media.url,
                    type: media.type,
                    kind: media.kind,
                    order: media.order || 0,
                    colorId: color.id,
                    colorName: color.name,
                    colorIndex: colorIndex,
                  })
                }
              })
            }

            // Renk bazlı bedenler
            if (color.sizes) {
              color.sizes.forEach((size: any) => {
                allSizes.push({
                  id: size.id,
                  name: size.name,
                  availability: size.availability,
                  colorId: color.id,
                  colorName: color.name,
                })

                allStock.push({
                  id: size.id,
                  name: size.name,
                  availability: size.availability,
                  price: size.price || undefined,
                  sku: size.sku || undefined,
                  colorId: color.id,
                  colorName: color.name,
                })
              })
            }
          })

          normalized.normalizedData.images = allImages
          normalized.normalizedData.sizes = allSizes
          normalized.normalizedData.stock = allStock
        }
      }
    } else if (brand === 'PULL&BEAR') {
      normalized.productId = productData.id

      // Pull&Bear'da bazen detail bilgisi bundleProductSummaries içinde olmayabilir
      const bundleDetail = productData.bundleProductSummaries?.[0]?.detail
      const bundleColors = productData.bundleColors || []

      normalized.normalizedData = {
        id: productData.id,
        name: productData.name,
        price: bundleDetail?.colors?.[0]?.sizes?.[0]?.price
          ? parseInt(bundleDetail.colors[0].sizes[0].price)
          : null,
        description: bundleDetail?.longDescription || null,
        colors: [],
        sizes: [],
        images: [],
        stock: [],
      }

      // Eğer bundleDetail varsa (detaylı veri)
      if (bundleDetail && bundleDetail.colors) {
        normalized.normalizedData.colors = bundleDetail.colors.map(
          (c: any) => ({
            id: c.id,
            name: c.name,
            hexCode: undefined, // Pull&Bear'da hexCode yok - kaldırılacak
            price: c.sizes?.[0]?.price ? parseInt(c.sizes[0].price) : undefined,
            description: undefined, // Pull&Bear'da renk bazlı açıklama yok - kaldırılacak
            images: c.image
              ? [
                  // Ana görsel
                  {
                    url: `https://static.pullandbear.net/2/photos${c.image.url}_1_1_8.jpg?t=${c.image.timestamp}`,
                    type: 'image',
                    kind: 'main',
                    order: 1,
                  },
                  // Yardımcı görseller
                  ...(c.image.aux || []).map(
                    (auxIndex: string, index: number) => ({
                      url: `https://static.pullandbear.net/2/photos${c.image.url}_${auxIndex}_1_8.jpg?t=${c.image.timestamp}`,
                      type: 'image',
                      kind: 'aux',
                      order: index + 2,
                    }),
                  ),
                ]
              : [],
            sizes:
              c.sizes?.map((s: any) => ({
                id: s.sku, // ZARA ile uyumlu olması için 'id' kullan
                name: s.name,
                availability: s.isBuyable ? 'in_stock' : 'out_of_stock',
                price: s.price ? parseInt(s.price) : undefined,
                sku: s.sku, // ZARA ile uyumlu
              })) || [],
          }),
        )

        // Tüm renklerin görselleri ve bedenleri için toplam listeleri
        const allImages: any[] = []
        const allSizes: any[] = []
        const allStock: any[] = []

        bundleDetail.colors.forEach((color: any, colorIndex: number) => {
          if (color.image) {
            // Ana görsel
            allImages.push({
              url: `https://static.pullandbear.net/2/photos${color.image.url}_1_1_8.jpg?t=${color.image.timestamp}`,
              type: 'image',
              kind: 'main',
              order: 1,
              colorId: color.id,
              colorName: color.name,
              colorIndex: colorIndex,
            })

            // Yardımcı görseller
            if (color.image.aux) {
              color.image.aux.forEach((auxIndex: string, index: number) => {
                allImages.push({
                  url: `https://static.pullandbear.net/2/photos${color.image.url}_${auxIndex}_1_8.jpg?t=${color.image.timestamp}`,
                  type: 'image',
                  kind: 'aux',
                  order: index + 2,
                  colorId: color.id,
                  colorName: color.name,
                  colorIndex: colorIndex,
                })
              })
            }
          }

          if (color.sizes) {
            color.sizes.forEach((size: any) => {
              allSizes.push({
                id: size.sku, // ZARA ile uyumlu
                name: size.name,
                availability: size.isBuyable ? 'in_stock' : 'out_of_stock',
                colorId: color.id,
                colorName: color.name,
              })

              allStock.push({
                id: size.sku, // ZARA ile uyumlu
                name: size.name,
                availability: size.isBuyable ? 'in_stock' : 'out_of_stock',
                price: size.price ? parseInt(size.price) : undefined,
                sku: size.sku, // ZARA ile uyumlu
                colorId: color.id,
                colorName: color.name,
              })
            })
          }
        })

        normalized.normalizedData.images = allImages
        normalized.normalizedData.sizes = allSizes
        normalized.normalizedData.stock = allStock
      } else if (bundleColors.length > 0) {
        // Eğer sadece temel bundleColors varsa (basit veri)
        console.log(
          `    ⚠️ PULL&BEAR basit veri formatı kullanılıyor: ${productData.id}`,
        )

        normalized.normalizedData.colors = bundleColors.map((c: any) => ({
          id: c.id,
          name: c.name,
          hexCode: undefined, // Basit formatta hexCode yok - kaldırılacak
          price: undefined, // Basit formatta fiyat yok - kaldırılacak
          description: undefined, // Basit formatta açıklama yok - kaldırılacak
          images: [], // Basit formatta görsel bilgisi yok
          sizes: [], // Basit formatta beden bilgisi yok
        }))
      }
    }

    console.log(`    ✅ ${brand} normalize edildi`)

    // Null/undefined değerleri temizle
    return removeNullValues(normalized)
  } catch (error) {
    console.error(`    ❌ ${brand} normalize hatası:`, error)
    return removeNullValues(normalized)
  }
}

// Ana fonksiyon
export async function saveNormalizedProductDetails() {
  console.log('🚀 Gelişmiş normalize edilmiş ürün detayları toplanıyor...')

  const zaraProductId = 470151268
  const pullBearProductId = 695434698

  const results = {
    timestamp: new Date().toISOString(),
    totalProducts: 2,
    products: [] as any[],
  }

  // ZARA ürünü çek ve normalize et
  const zaraData = await fetchZaraProductDetails(zaraProductId)
  if (zaraData) {
    const normalizedZara = normalizeProductData(zaraData, 'ZARA')
    results.products.push(normalizedZara)
  }

  // Rate limiting
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Pull&Bear ürünü çek ve normalize et
  const pullBearData = await fetchPullBearProductDetails(pullBearProductId)
  if (pullBearData) {
    const normalizedPullBear = normalizeProductData(pullBearData, 'PULL&BEAR')
    results.products.push(normalizedPullBear)
  }

  // Kaydet
  const outputDir = join(__dirname, 'output')
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
  }

  const filePath = join(outputDir, 'final-normalized-product-details.json')
  writeFileSync(filePath, JSON.stringify(results, null, 2), 'utf-8')

  console.log(`\n🎉 Final normalize edilmiş ürün detayları kaydedildi!`)
  console.log(`📁 Dosya: ${filePath}`)
  console.log(`📊 Toplam Ürün: ${results.products.length}`)
  console.log(
    `📄 Dosya Boyutu: ${(
      Buffer.byteLength(JSON.stringify(results, null, 2)) / 1024
    ).toFixed(2)} KB`,
  )

  // Özet bilgi
  results.products.forEach((product, index) => {
    console.log(`\n${index + 1}. ${product.brand} (ID: ${product.productId})`)
    console.log(`   📝 İsim: ${product.normalizedData.name}`)
    console.log(`   💰 Fiyat: ${product.normalizedData.price} TL`)
    console.log(`   🎨 Renk sayısı: ${product.normalizedData.colors.length}`)
    console.log(`   📏 Beden sayısı: ${product.normalizedData.sizes.length}`)
    console.log(`   🖼️ Görsel sayısı: ${product.normalizedData.images.length}`)
    console.log(`   ✅ Temizlenmiş normalize edilmiş veri`)
  })

  console.log(
    `\n🎯 Normalize edilmiş özellikler: ID, İsim, Fiyat, Açıklama, Renkler, Bedenler, Görseller, Stok`,
  )
  console.log(
    `📊 Toplam: ${results.products.length} ürün normalize edildi ve kaydedildi!`,
  )
}