import cron from 'node-cron'
import { saveCategoriesDatabase } from '../services/categoryService'
import { saveProductsToDatabase } from '../services/productService'
import { logger } from '../lib/logger'
import prisma from '../lib/prisma'
import { env } from '../lib/env'

interface HistoryData {
  productId: number
  colorId?: number | null
  oldPrice?: number | null
  newPrice?: number | null
  oldStock?: boolean | null
  newStock?: boolean | null
}

async function trackPriceChanges(historyData: HistoryData) {
  const { productId, colorId, oldPrice, newPrice } = historyData
  
  if (oldPrice !== newPrice && newPrice !== null) {
    await prisma.priceHistory.create({
      data: {
        productId,
        colorId: colorId || null,
        price: newPrice || 0
      }
    })

    // Önemli fiyat değişikliklerini logla
    const priceChange = oldPrice && newPrice ? ((newPrice - oldPrice) / oldPrice) * 100 : 0
    if (Math.abs(priceChange) > 20) {
      logger.info(`Önemli fiyat değişikliği`, {
        productId,
        colorId,
        oldPrice,
        newPrice,
        changePercent: priceChange.toFixed(2)
      })
    }
  }
}

async function trackStockChanges(historyData: HistoryData) {
  const { productId, colorId, oldStock, newStock } = historyData
  
  if (oldStock !== newStock && newStock !== null) {
    await prisma.stockHistory.create({
      data: {
        productId,
        colorId: colorId || null,
        available: newStock || false,
        sizeId: 0 // TODO: Size tracking eklenecek
      }
    })

    // Stok değişikliklerini logla
    if (oldStock === true && newStock === false) {
      logger.info(`Ürün tükendi`, { productId, colorId })
    } else if (oldStock === false && newStock === true) {
      logger.info(`Ürün tekrar stokta`, { productId, colorId })
    }
  }
}

async function trackCategoryChanges(
  categoryId: number,
  action: 'added' | 'removed' | 'modified',
  changes?: any
) {
  await prisma.categoryHistory.create({
    data: {
      categoryId,
      action,
      changes
    }
  })
}

export async function runWeeklySync() {
  logger.info('🔄 Haftalık senkronizasyon başlıyor...', {
    environment: env.NODE_ENV,
    timestamp: new Date()
  })

  try {
    // 1. Mevcut durumu kaydet
    const existingProducts = await prisma.product.findMany({
      include: {
        colors: true,
        stock: true
      }
    })

    const existingCategories = await prisma.subCategory.findMany()

    // 2. Yeni verileri çek (güncelleme modunda)
    await saveCategoriesDatabase(true)
    await saveProductsToDatabase(true)

    // 3. Yeni durumu al
    const newProducts = await prisma.product.findMany({
      include: {
        colors: true,
        stock: true
      }
    })

    const newCategories = await prisma.subCategory.findMany()

    // 4. Değişiklikleri karşılaştır ve kaydet
    for (const newProduct of newProducts) {
      const existingProduct = existingProducts.find(p => p.productId === newProduct.productId)

      // Yeni ürün
      if (!existingProduct) {
        await trackPriceChanges({
          productId: newProduct.id,
          newPrice: newProduct.price || 0
        })
        continue
      }

      // Fiyat değişikliği
      if (existingProduct.price !== newProduct.price) {
        await trackPriceChanges({
          productId: newProduct.id,
          oldPrice: existingProduct.price || 0,
          newPrice: newProduct.price || 0
        })
      }

      // Renk ve stok değişiklikleri
      for (const newColor of newProduct.colors) {
        const existingColor = existingProduct.colors.find(c => c.colorId === newColor.colorId)
        
        if (existingColor?.price !== newColor.price) {
          await trackPriceChanges({
            productId: newProduct.id,
            colorId: newColor.id,
            oldPrice: existingColor?.price || 0,
            newPrice: newColor.price || 0
          })
        }
      }

      // Stok değişiklikleri
      for (const newStock of newProduct.stock) {
        const existingStock = existingProduct.stock.find(
          s => s.sizeId === newStock.sizeId && s.colorId === newStock.colorId
        )

        const oldAvailable = existingStock?.availability === 'in_stock'
        const newAvailable = newStock.availability === 'in_stock'

        if (oldAvailable !== newAvailable) {
          await trackStockChanges({
            productId: newProduct.id,
            colorId: newStock.colorId,
            oldStock: oldAvailable,
            newStock: newAvailable
          })
        }
      }
    }

    // 5. Kategori değişikliklerini izle
    for (const newCategory of newCategories) {
      const existingCategory = existingCategories.find(c => c.categoryId === newCategory.categoryId)

      if (!existingCategory) {
        await trackCategoryChanges(newCategory.categoryId, 'added')
      } else if (
        existingCategory.categoryName !== newCategory.categoryName ||
        existingCategory.level !== newCategory.level ||
        existingCategory.isLeaf !== newCategory.isLeaf
      ) {
        await trackCategoryChanges(newCategory.categoryId, 'modified', {
          oldName: existingCategory.categoryName,
          newName: newCategory.categoryName,
          oldLevel: existingCategory.level,
          newLevel: newCategory.level,
          oldIsLeaf: existingCategory.isLeaf,
          newIsLeaf: newCategory.isLeaf
        })
      }
    }

    // Silinen kategorileri kontrol et
    for (const existingCategory of existingCategories) {
      if (!newCategories.find(c => c.categoryId === existingCategory.categoryId)) {
        await trackCategoryChanges(existingCategory.categoryId, 'removed')
      }
    }

    logger.info('✅ Haftalık senkronizasyon başarıyla tamamlandı', {
      timestamp: new Date()
    })
  } catch (error) {
    logger.error('❌ Haftalık senkronizasyon hatası:', error)
    throw error
  }
}

export function startWeeklySync() {
  // Her Pazar 03:00'da çalış
  cron.schedule('0 3 * * 0', async () => {
    try {
      await runWeeklySync()
    } catch (error) {
      logger.error('❌ Cron job hatası:', error)
    }
  })

  logger.info('📅 Haftalık senkronizasyon planlandı', {
    schedule: 'Her Pazar 03:00'
  })
}
