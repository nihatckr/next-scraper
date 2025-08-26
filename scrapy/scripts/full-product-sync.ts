// Load environment variables from .env for script runs
import 'dotenv/config'
import { BRAND_CONFIG } from '../config'
import {
  fetchZaraProductIds,
  fetchPullBearProductIds,
} from '../scraper/categories'
import { fetchWithRetry } from '../lib/retry'
import prisma from '../lib/prisma'
import { getCache, cacheKeys, CACHE_TTL } from '../lib/redis-cache'
import fs from 'fs/promises'

// Safety flags
const DRY_RUN =
  process.env.SCRAPER_DRY_RUN === 'true' || process.env.TEST_MODE === 'true'
const MAX_PRODUCTS_PER_CATEGORY = Number(
  process.env.MAX_PRODUCTS_PER_CATEGORY || '3',
)

// Null/undefined değerleri temizle (productDetails.ts'den alındı)
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

// ZARA extra API'lerini çek (productDetails.ts'den alındı)
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
    }
  } catch (error) {
    // Sessizce devam et
  }

  // 2. Sizing Info API (beden önerisi)
  try {
    const sizingUrl = `https://www.zara.com/itxrest/3/returns/store/11766/product/${productId}/sizing-info?locale=tr_TR&visitorId=1936772483.1750440587`
    const response = await fetch(sizingUrl, { headers })
    if (response.ok) {
      extraDetails.sizingInfo = await response.json()
    }
  } catch (error) {
    // Sessizce devam et
  }

  return extraDetails
}

// ZARA ürün detayları çek (productDetails.ts'den alındı)
async function fetchZaraProductDetails(productId: number): Promise<any> {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
    Referer: 'https://www.zara.com/',
  }

  try {
    const url = `https://www.zara.com/tr/tr/products-details?productIds=${productId}&ajax=true`
    const response = await fetchWithRetry(url, { headers })

    if (!response.ok) {
      return null
    }

    const basicData = await response.json()

    // Extra API'leri çek
    const extraDetails = await fetchZaraExtraDetails(productId)

    return {
      basicData: basicData,
      extraDetails: extraDetails,
    }
  } catch (error) {
    return null
  }
}

// Pull&Bear ürün detayları çek (productDetails.ts'den alındı)
async function fetchPullBearProductDetails(productId: number): Promise<any> {
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'tr-TR,tr;q=0.9,en;q=0.8',
    Referer: 'https://www.pullandbear.com/',
  }

  try {
    const url = `https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category/0/product/${productId}/detail?languageId=-43&appId=1`
    const response = await fetchWithRetry(url, { headers })

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data
  } catch (error) {
    return null
  }
}

// Veriyi normalize et (productDetails.ts'den alındı)
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

    // Null/undefined değerleri temizle
    return removeNullValues(normalized)
  } catch (error) {
    console.error(`    ❌ ${brand} normalize hatası:`, error)
    return removeNullValues(normalized)
  }
}

// Paralel işleme için worker pool
class WorkerPool {
  private maxWorkers: number
  private activeWorkers: number = 0
  private queue: Array<() => Promise<any>> = []

  constructor(maxWorkers: number = 10) {
    this.maxWorkers = maxWorkers
  }

  async addTask<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task()
          resolve(result)
          return result
        } catch (error) {
          reject(error)
          throw error
        }
      })
      this.processQueue()
    })
  }

  private async processQueue() {
    if (this.activeWorkers >= this.maxWorkers || this.queue.length === 0) {
      return
    }

    this.activeWorkers++
    const task = this.queue.shift()

    if (task) {
      try {
        await task()
      } finally {
        this.activeWorkers--
        this.processQueue()
      }
    }
  }

  async waitForAll(): Promise<void> {
    while (this.queue.length > 0 || this.activeWorkers > 0) {
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }
}

// Eksik ürün verisi alındığında DB'ye minimal bir "stub" ürün ekleyerek kategori ilişkisini kur
async function createStubProduct(
  productId: number,
  categoryId: number,
  brand: string,
): Promise<any> {
  // Minimal alanlarla upsert yap
  const savedProduct = await prisma.product.upsert({
    where: { productId },
    update: {
      name: `MISSING_PRODUCT_${productId}`,
      description: 'Stub product created due to missing API response',
    },
    create: {
      productId: productId,
      name: `MISSING_PRODUCT_${productId}`,
      price: 0,
      description: 'Stub product created due to missing API response',
      brandName: brand,
    },
  })

  // Kategori ile ilişkilendir
  try {
    await prisma.product.update({
      where: { id: savedProduct.id },
      data: {
        subCategories: { connect: { categoryId: categoryId } },
      },
    })
  } catch (e) {
    // ignore
  }

  return savedProduct
}

// Ürün işleme fonksiyonu (retry mekanizması ile)
export async function processProduct(
  productId: number,
  categoryId: number,
  brand: string,
  retries: number = 3,
): Promise<{ success: boolean; error?: string }> {
  try {
    console.log(
      `    🔍 İşleniyor: ${brand} - ${productId} (kategori: ${categoryId})`,
    )

    // Ürün zaten var mı kontrol et (productId string olarak saklanıyor)
    const existingProduct = await prisma.product.findUnique({
      // productId stored as string in DB; cast to any to avoid TS type mismatch with generated client
      where: { productId: String(productId) as any },
    })

    if (existingProduct) {
      console.log(`    💡 Mevcut ürün bulundu: ${existingProduct.id}`)

      // İlişkiyi Prisma native yöntemle ekle (var olan ilişki tekrar eklenmez)
      try {
        await prisma.product.update({
          where: { id: existingProduct.id },
          data: {
            subCategories: {
              connect: { categoryId: categoryId },
            },
          },
        })
        console.log(
          `    ✅ Mevcut ürün için ilişki kuruldu: ${existingProduct.id} -> ${categoryId}`,
        )
      } catch (error: any) {
        // Prisma zaten var olan ilişki için hata vermez, bu sorun başka bir şey
        console.log(
          `    ⚠️ Mevcut ürün için ilişki kurulamadı: ${error.message}`,
        )
      }
      return { success: true }
    }

    // Cache kontrolü
    const cache = await getCache()
    const cacheKey = cacheKeys.productDetails(productId, brand)
    const cachedData = await cache.get<any>(cacheKey)

    if (cachedData) {
      await saveProductToDatabase(cachedData, categoryId, brand)
      return { success: true }
    }

    // API'den çek (productDetails.ts mantığı ile)
    let productData: any = null

    if (brand === 'ZARA') {
      productData = await fetchZaraProductDetails(productId)
    } else if (brand === 'PULL&BEAR') {
      productData = await fetchPullBearProductDetails(productId)
    }

    if (!productData) {
      const error = `Ürün verisi alınamadı: ${productId}`
      // Eğer ortam değişkeni ile zorla stub oluşturmamız istenmişse, eksik veriyi stub olarak DB'ye ekle
      if (process.env.INSERT_STUB_ON_FAIL === 'true') {
        console.log(`    ⚠️ Veri yok - stub oluşturuluyor: ${productId}`)
        try {
          await createStubProduct(productId, categoryId, brand)
          return { success: true }
        } catch (err: any) {
          console.log(`    ❌ Stub oluşturulamadı: ${err?.message || err}`)
          return { success: false, error: error }
        }
      }

      return { success: false, error }
    }

    // Cache'e kaydet
    await cache.set(cacheKey, productData, CACHE_TTL)

    // Database'e kaydet
    console.log(`    🔍 Database'e kaydediliyor: ${productId}`)
    await saveProductToDatabase(productData, categoryId, brand)
    console.log(`    ✅ Database'e kaydedildi: ${productId}`)

    return { success: true }
  } catch (error: any) {
    const errorMessage = error.message || 'Bilinmeyen hata'

    if (retries > 0) {
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 2000),
      )
      return await processProduct(productId, categoryId, brand, retries - 1)
    }

    return { success: false, error: errorMessage }
  }
}

// Database'e kaydetme fonksiyonu
export async function saveProductToDatabase(
  productData: any,
  categoryId: number,
  brand: string,
): Promise<void> {
  const normalizedData = normalizeProductData(productData, brand)

  if (!normalizedData || !normalizedData.normalizedData) {
    console.log(`    ⚠️ Normalize edilemedi: ${brand}`)
    return
  }

  const normalized = normalizedData.normalizedData

  if (!normalized.id) {
    console.log(`    ⚠️ Geçersiz productId: ${brand}`)
    return
  }
  // If DRY_RUN is enabled, skip DB writes and print summary
  if (DRY_RUN) {
    console.log(
      `    🟡 DRY RUN - would save product: ${normalized.id} - ${normalized.name}`,
    )
    console.log(`       • Brand: ${brand}`)
    console.log(
      `       • Images: ${
        Array.isArray(normalized.images) ? normalized.images.length : 0
      }`,
    )
    console.log(
      `       • Colors: ${
        Array.isArray(normalized.colors) ? normalized.colors.length : 0
      }`,
    )
    console.log(
      `       • Sizes: ${
        Array.isArray(normalized.sizes) ? normalized.sizes.length : 0
      }`,
    )
    console.log(
      `       • Stock entries: ${
        Array.isArray(normalized.stock) ? normalized.stock.length : 0
      }`,
    )
    return
  }

  // Ürün kaydet
  const savedProduct = await prisma.product.upsert({
    where: { productId: String(normalized.id) as any },
    update: {},
    create: {
      productId: String(normalized.id) as any,
      name: normalized.name || '',
      // Fiyat boşsa ilk bulunan beden/stock fiyatı veya 0
      price:
        (typeof normalized.price === 'number'
          ? normalized.price
          : normalized.sizes?.find((s: any) => typeof s.price === 'number')
              ?.price ??
            normalized.stock?.find((s: any) => typeof s.price === 'number')
              ?.price ??
            0) || 0,
      description: normalized.description || '',
      brandName: brand,
    },
  })

  // Kategori-ürün ilişkisini kaydet (Prisma native connect ile)
  try {
    await prisma.product.update({
      where: { id: savedProduct.id },
      data: {
        subCategories: {
          connect: { categoryId: categoryId },
        },
      },
    })
    console.log(`    ✅ İlişki kuruldu: ${savedProduct.id} -> ${categoryId}`)
  } catch (error: any) {
    console.log(`    ❌ İlişki hatası: ${error.message}`)
  }

  // Renkleri kaydet (ZARA ve varsa diğerleri)
  if (normalized.colors && normalized.colors.length > 0) {
    for (const color of normalized.colors) {
      await prisma.productColor.upsert({
        where: {
          productId_colorId: {
            productId: savedProduct.id,
            colorId: String(color.id),
          },
        },
        update: {
          name: color.name || '',
          hexCode: color.hexCode || null,
          price: typeof color.price === 'number' ? color.price : null,
          description: color.description || null,
        },
        create: {
          productId: savedProduct.id,
          colorId: String(color.id),
          name: color.name || '',
          hexCode: color.hexCode || null,
          price: typeof color.price === 'number' ? color.price : null,
          description: color.description || null,
        },
      })
    }
  }

  // Ürün için renk id eşlemesi (original colorId string -> ProductColor.id)
  const colorIdMap = new Map<string, number>()
  try {
    const colorRows = await prisma.productColor.findMany({
      where: { productId: savedProduct.id },
      select: { id: true, colorId: true },
    })
    for (const row of colorRows) {
      colorIdMap.set(String(row.colorId), row.id)
    }
  } catch {}

  // Mevcut detay kayıtlarını temizle ve tekrar ekle (nullsuz, defaults ile)
  try {
    await prisma.productImage.deleteMany({
      where: { productId: savedProduct.id },
    })
    await prisma.productSize.deleteMany({
      where: { productId: savedProduct.id },
    })
    await prisma.productStock.deleteMany({
      where: { productId: savedProduct.id },
    })
  } catch (e) {
    // ignore
  }

  // Images
  if (Array.isArray(normalized.images) && normalized.images.length > 0) {
    const imagesData = normalized.images.map((img: any) => {
      const colorNumericId = img.colorId
        ? colorIdMap.get(String(img.colorId)) ?? null
        : null
      return {
        url: String(img.url || ''),
        type: String(img.type || 'image'),
        kind: String(img.kind || 'main'),
        order: typeof img.order === 'number' ? img.order : 0,
        productId: savedProduct.id,
        colorId: colorNumericId,
        // colorName/colorIndex opsiyonel alanlar
        colorName: img.colorName || null,
        colorIndex: typeof img.colorIndex === 'number' ? img.colorIndex : null,
      }
    })
    // createMany için schema'daki alanlara uyum
    await prisma.productImage.createMany({
      data: imagesData,
      skipDuplicates: true,
    })
  }

  // Sizes
  if (Array.isArray(normalized.sizes) && normalized.sizes.length > 0) {
    // Stock'tan aynı sizeId için fallback fiyat/sku haritası oluştur
    const stockFallbackBySizeId = new Map<
      number,
      { price: number | null; sku: number | null }
    >()
    if (Array.isArray(normalized.stock)) {
      for (const st of normalized.stock) {
        const sid = Number(st.id ?? st.sizeId)
        if (!Number.isNaN(sid)) {
          const price = typeof st.price === 'number' ? st.price : null
          const skuNum =
            typeof st.sku === 'number' ? st.sku : st.sku ? Number(st.sku) : null
          if (!stockFallbackBySizeId.has(sid)) {
            stockFallbackBySizeId.set(sid, { price, sku: skuNum })
          }
        }
      }
    }

    const sizesData = normalized.sizes.map((sz: any, idx: number) => {
      const parsedId = Number(sz.id ?? sz.sizeId)
      const baseSizeId =
        !Number.isNaN(parsedId) && parsedId > 0 ? parsedId : idx + 1
      const sizeName = String(sz.name || 'UNKNOWN')
      const availability = String(sz.availability || 'unknown')
      const sidForFallback = baseSizeId
      const colorNumericId = sz.colorId
        ? colorIdMap.get(String(sz.colorId)) ?? null
        : null
      const price = (() => {
        const direct = typeof sz.price === 'number' ? sz.price : null
        if (direct !== null) return direct
        const fromStock =
          stockFallbackBySizeId.get(sidForFallback)?.price ?? null
        if (fromStock !== null) return fromStock
        return typeof normalized.price === 'number' ? normalized.price : 0
      })()
      const sku = (() => {
        if (typeof sz.sku === 'number') return sz.sku
        const asNum = sz.sku ? Number(sz.sku) : NaN
        if (!Number.isNaN(asNum)) return asNum
        const fromStock = stockFallbackBySizeId.get(sidForFallback)?.sku ?? null
        if (fromStock !== null) return fromStock
        return 0
      })()

      return {
        sizeId: baseSizeId,
        name: sizeName,
        availability,
        price,
        sku,
        productId: savedProduct.id,
        colorId: colorNumericId,
        colorName: sz.colorName || null,
      }
    })
    await prisma.productSize.createMany({
      data: sizesData,
      skipDuplicates: true,
    })
  }

  // Stock
  if (Array.isArray(normalized.stock) && normalized.stock.length > 0) {
    const stockData = normalized.stock.map((st: any) => {
      const colorNumericId = st.colorId
        ? colorIdMap.get(String(st.colorId)) ?? null
        : null
      return {
        sizeId: Number(st.id) || Number(st.sizeId) || 0,
        name: String(st.name || ''),
        availability: String(st.availability || 'unknown'),
        price:
          typeof st.price === 'number'
            ? st.price
            : typeof normalized.price === 'number'
            ? normalized.price
            : 0,
        sku: typeof st.sku === 'number' ? st.sku : st.sku ? Number(st.sku) : 0,
        productId: savedProduct.id,
        colorId: colorNumericId,
        colorName: st.colorName || null,
      }
    })
    await prisma.productStock.createMany({
      data: stockData,
      skipDuplicates: true,
    })
  }
}

// Ana fonksiyon - her markadan 30'ar ürün
export async function fullProductSync() {
  console.log(
    '🚀 Tam ürün senkronizasyonu başlatılıyor... (productDetails.ts mantığı ile)\n',
  )

  const startTime = Date.now()

  // Tüm leaf kategorileri al
  const categories = await prisma.subCategory.findMany({
    where: { isLeaf: true },
    select: {
      categoryId: true,
      categoryName: true,
      brand: true,
      productCount: true,
    },
    orderBy: { productCount: 'desc' },
  })

  console.log(`📊 ${categories.length} kategori işlenecek\n`)

  let totalProcessed = 0
  let totalSuccess = 0
  let totalFailure = 0
  const failures: Array<{
    productId: number
    categoryId: number
    brand: string
    error?: string
  }> = []

  // Tüm ürünleri çek (sınırsız)
  const brandCounts: Record<string, number> = { ZARA: 0, 'PULL&BEAR': 0 }
  const maxProductsPerBrand = Number.MAX_SAFE_INTEGER

  for (const category of categories) {
    // Marka limiti yok

    try {
      console.log(
        `🎯 ${category.brand} - ${category.categoryName} (${category.productCount} ürün)`,
      )

      // Ürün ID'lerini al
      let productIds: number[] = []

      if (category.brand === 'ZARA') {
        productIds = await fetchZaraProductIds(
          category.categoryId,
          BRAND_CONFIG.ZARA.headers,
        )
      } else if (category.brand === 'PULL&BEAR') {
        productIds = await fetchPullBearProductIds(
          category.categoryId,
          BRAND_CONFIG.PULLANDBEAR.headers,
        )
      }

      if (productIds.length === 0) {
        console.log(`   ⚠️  Ürün bulunamadı`)
        continue
      }

      // Kalan ürün sayısını hesapla
      const remainingSlots = maxProductsPerBrand - brandCounts[category.brand]!
      // Apply per-category max (safety)
      const perCategoryLimit = Math.max(
        1,
        Math.min(MAX_PRODUCTS_PER_CATEGORY, productIds.length),
      )
      const productsToProcess = Math.min(
        productIds.length,
        remainingSlots,
        perCategoryLimit,
      )
      const selectedProductIds = productIds.slice(0, productsToProcess)

      console.log(
        `   📦 ${selectedProductIds.length} ürün işlenecek (bugüne kadar: ${
          brandCounts[category.brand]
        })`,
      )
      if (DRY_RUN) console.log('   🟡 DRY RUN MODE - no DB writes will occur')

      let success = 0
      let failure = 0

      for (const productId of selectedProductIds) {
        const result = await processProduct(
          productId,
          category.categoryId,
          category.brand,
        )

        if (result.success) {
          success++
          brandCounts[category.brand]!++
        } else {
          failure++
          failures.push({
            productId,
            categoryId: category.categoryId,
            brand: category.brand,
            error: result.error,
          })
        }

        // Kısa bekleme (API nazikliği)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      totalProcessed += selectedProductIds.length
      totalSuccess += success
      totalFailure += failure

      console.log(`   ✅ ${success} başarılı, ${failure} başarısız`)

      // Kategori arası bekleme (API nazikliği)
      await new Promise((resolve) => setTimeout(resolve, 300))
    } catch (error) {
      console.error(`❌ Kategori hatası (${category.categoryName}):`, error)
    }
  }

  const endTime = Date.now()
  const duration = Math.round((endTime - startTime) / 1000)

  console.log(`\n🎉 Tam ürün senkronizasyonu tamamlandı!`)
  console.log(`⏱️  Süre: ${duration} saniye`)
  console.log(`📊 Toplam işlenen: ${totalProcessed}`)
  console.log(`✅ Başarılı: ${totalSuccess}`)
  console.log(`❌ Başarısız: ${totalFailure}`)
  console.log(
    `📈 Başarı oranı: ${((totalSuccess / totalProcessed) * 100).toFixed(2)}%`,
  )

  // Brand bazında özet
  console.log(`\n📊 Brand Özeti:`)
  Object.entries(brandCounts).forEach(([brand, count]) => {
    console.log(`   • ${brand}: ${count} ürün`)
  })

  // Database'deki toplam ürün sayısı
  const dbCount = await prisma.product.count()
  console.log(`💾 Database'deki toplam ürün: ${dbCount}`)

  // İlişki sayısı
  const relationCount =
    await prisma.$queryRaw`SELECT COUNT(*) as count FROM _SubCategoryProducts`
  console.log(
    `🔗 Kategori-ürün ilişkisi sayısı: ${(relationCount as any)[0].count}`,
  )

  // Eğer başarısız kayıtlar varsa dosyaya yaz (aynı dizinde)
  try {
    const outPath = 'libs/scripts/failed-products.json'
    if (failures && failures.length > 0) {
      await fs.writeFile(outPath, JSON.stringify(failures, null, 2), 'utf-8')
      console.log(
        `\n⚠️ ${failures.length} başarısız kayıt kaydedildi: ${outPath}`,
      )
    } else {
      // Önceki başarısız dosyası varsa sil
      try {
        await fs.unlink(outPath)
      } catch (_) {}
    }
  } catch (err: any) {
    console.error('⚠️ Başarısız kayıt dosyası yazılamadı:', err?.message || err)
  }
}

// Script'i çalıştır
// Script'i çalıştır doğrudan çağırma; CLI'de bu dosyayı çalıştırdığınızda otomatik çalışsın
if (require.main === module) {
  fullProductSync()
    .then(() => {
      console.log('\n✅ Script tamamlandı!')
      process.exit(0)
    })
    .catch((error) => {
      console.error('❌ Script hatası:', error)
      process.exit(1)
    })
}
