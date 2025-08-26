import { saveCategoriesDatabase } from './services/categoryService'
import { saveProductsToDatabase } from './services/productService'
import prisma from './lib/prisma'
import { logger } from './lib/logger'
import { env, isProduction } from './lib/env'
import { onShutdown } from './lib/shutdown'
import { performHealthCheck, startHealthCheckSchedule } from './lib/health'

async function showStatus() {
  const categoriesCount = await prisma.subCategory.count()
  const productsCount = await prisma.product.count()
  const brandsCount = await prisma.brand.count()

  logger.info('Database Status', {
    brands: brandsCount,
    categories: categoriesCount,
    products: productsCount,
  })
}

async function main() {
  logger.info('🚀 Simple Project - Data Pipeline başlatılıyor...', {
    environment: env.NODE_ENV,
    productLimit: isProduction()
      ? env.PRODUCT_LIMIT_PROD
      : env.PRODUCT_LIMIT_DEV,
  })

  // Initial health check
  const healthStatus = await performHealthCheck()
  if (healthStatus.status === 'unhealthy') {
    logger.error('System health check failed, exiting', { healthStatus })
    process.exit(1)
  }

  // Start health monitoring in production
  if (isProduction()) {
    startHealthCheckSchedule()
  }

  // Setup shutdown handlers
  onShutdown(async () => {
    logger.info('Cleaning up data pipeline resources...')
    // Add any cleanup logic here
  })

  // Mevcut durumu göster
  await showStatus()

  // 1. Kategorileri direkt API'den çekip database'e kaydet
  logger.info("💾 1. Kategorileri APIden çekip database'e kaydet...")
  await saveCategoriesDatabase()

  // 2. Ürün detaylarını leaf kategorilerden çekip database'e kaydet
  logger.info(
    "📦 2. Ürün detaylarını leaf kategorilerden çekip database'e kaydet...",
  )
  await saveProductsToDatabase()

  // Final durumu göster
  logger.info('🎉 İşlemler tamamlandı!')
  await showStatus()
}

main().catch((error) => {
  logger.error('Main process failed', { error })
  process.exit(1)
})
