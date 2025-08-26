import prisma from '@/lib/prisma'
import type {
  DashboardStats,
  BrandStats,
  ProductStats,
  CategoryStats,
  CategoryNode,
  StockStats,
  HistoryStats,
  SystemStats,
} from '@/lib/types'

export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const [
      totalBrands,
      totalProducts,
      totalMainCategories,
      totalSubCategories,
      totalUsers,
      lastSync,
    ] = await Promise.all([
      prisma.brand.count(),
      prisma.product.count(),
      prisma.mainCategory.count(),
      prisma.subCategory.count(),
      prisma.user.count(),
      prisma.dataSync.findFirst({
        orderBy: { timestamp: 'desc' },
        where: { status: 'success' },
      }),
    ])

    return {
      totalBrands,
      totalProducts,
      totalCategories: totalMainCategories + totalSubCategories,
      totalUsers,
      lastSyncDate: lastSync?.timestamp || null,
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalBrands: 0,
      totalProducts: 0,
      totalCategories: 0,
      totalUsers: 0,
      lastSyncDate: null,
    }
  }
}

export async function getBrandStats(): Promise<BrandStats[]> {
  try {
    const brands = await prisma.brand.findMany({
      include: {
        products: {
          select: { id: true },
        },
        mainCategories: {
          include: {
            subcategories: {
              select: { categoryId: true },
            },
          },
        },
      },
    })

    return brands.map(
      (brand): BrandStats => ({
        id: brand.id,
        name: brand.name,
        productCount: brand.products.length,
        categoryCount: brand.mainCategories.reduce(
          (acc: number, mc: { subcategories: unknown[] }) =>
            acc + mc.subcategories.length,
          0,
        ),
        createdAt: brand.timestamp,
      }),
    )
  } catch (error) {
    console.error('Error fetching brand stats:', error)
    return []
  }
}

export async function getProductStats(): Promise<ProductStats> {
  try {
    const [
      totalProducts,
      totalColors,
      totalSizes,
      priceStats,
      brandDistribution,
      expensiveProducts,
      cheapProducts,
    ] = await Promise.all([
      // Total products count
      prisma.product.count(),

      // Total unique colors count
      prisma.productColor.count(),

      // Total unique sizes count
      prisma.productSize.count(),

      // Price range statistics
      prisma.product.aggregate({
        _min: { price: true },
        _max: { price: true },
      }),

      // Brand distribution
      prisma.product.groupBy({
        by: ['brandName'],
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
      }),

      // Most expensive products
      prisma.product.findMany({
        orderBy: { price: 'desc' },
        take: 5,
        select: {
          id: true,
          name: true,
          brandName: true,
          price: true,
        },
        where: {
          price: { not: null },
        },
      }),

      // Cheapest products
      prisma.product.findMany({
        orderBy: { price: 'asc' },
        take: 5,
        select: {
          id: true,
          name: true,
          brandName: true,
          price: true,
        },
        where: {
          price: { not: null },
        },
      }),
    ])

    // Calculate price ranges distribution
    const priceRanges = await prisma.product.findMany({
      select: { price: true },
      where: { price: { not: null } },
    })

    const priceDistribution = [
      { range: '0-50 TL', min: 0, max: 5000, count: 0 },
      { range: '50-100 TL', min: 5000, max: 10000, count: 0 },
      { range: '100-200 TL', min: 10000, max: 20000, count: 0 },
      { range: '200-500 TL', min: 20000, max: 50000, count: 0 },
      { range: '500+ TL', min: 50000, max: Infinity, count: 0 },
    ]

    priceRanges.forEach((product) => {
      if (product.price) {
        const range = priceDistribution.find(
          (r) => product.price! >= r.min && product.price! < r.max,
        )
        if (range) range.count++
      }
    })

    return {
      totalProducts,
      totalColors,
      totalSizes,
      priceRange: {
        min: priceStats._min.price || 0,
        max: priceStats._max.price || 0,
      },
      brandDistribution: brandDistribution.map((item) => ({
        brand: item.brandName,
        count: item._count.id,
      })),
      priceDistribution: priceDistribution.map((item) => ({
        range: item.range,
        count: item.count,
      })),
      expensiveProducts: expensiveProducts.map((product) => ({
        id: product.id,
        name: product.name,
        brand: product.brandName,
        price: product.price || 0,
      })),
      cheapProducts: cheapProducts.map((product) => ({
        id: product.id,
        name: product.name,
        brand: product.brandName,
        price: product.price || 0,
      })),
    }
  } catch (error) {
    console.error('Error fetching product stats:', error)
    return {
      totalProducts: 0,
      totalColors: 0,
      totalSizes: 0,
      priceRange: { min: 0, max: 0 },
      brandDistribution: [],
      priceDistribution: [],
      expensiveProducts: [],
      cheapProducts: [],
    }
  }
}

export async function getCategoryStats(): Promise<CategoryStats> {
  try {
    const [
      totalMainCategories,
      totalSubCategories,
      genderDistribution,
      mainCategoriesWithSubs,
    ] = await Promise.all([
      // Total main categories count
      prisma.mainCategory.count(),

      // Total subcategories count
      prisma.subCategory.count(),

      // Gender distribution
      prisma.subCategory.groupBy({
        by: ['gender'],
        _count: { categoryId: true },
        orderBy: { _count: { categoryId: 'desc' } },
      }),

      // Main categories with their subcategories for hierarchy
      prisma.mainCategory.findMany({
        include: {
          subcategories: {
            select: {
              categoryId: true,
              categoryName: true,
              productCount: true,
              parentSubCategoryId: true,
              level: true,
            },
            orderBy: { categoryName: 'asc' },
          },
        },
        orderBy: { name: 'asc' },
      }),
    ])

    // Build category hierarchy
    const hierarchy: CategoryNode[] = mainCategoriesWithSubs.map((mainCat) => {
      // Group subcategories by level to build hierarchy
      const subsByLevel = mainCat.subcategories.reduce((acc, sub) => {
        if (!acc[sub.level]) acc[sub.level] = []
        acc[sub.level].push(sub)
        return acc
      }, {} as Record<number, typeof mainCat.subcategories>)

      // Build tree structure recursively
      const buildTree = (
        parentId: number | null,
        level: number,
      ): CategoryNode[] => {
        const children =
          subsByLevel[level]?.filter(
            (sub) => sub.parentSubCategoryId === parentId,
          ) || []

        return children.map((sub) => ({
          id: sub.categoryId,
          name: sub.categoryName,
          productCount: sub.productCount || 0,
          children: buildTree(sub.categoryId, level + 1),
        }))
      }

      return {
        id: mainCat.id,
        name: mainCat.name,
        productCount: mainCat.subcategories.reduce(
          (sum, sub) => sum + (sub.productCount || 0),
          0,
        ),
        children: buildTree(null, 1),
      }
    })

    return {
      totalMainCategories,
      totalSubCategories,
      genderDistribution: genderDistribution.map((item) => ({
        gender: item.gender || 'Belirtilmemiş',
        count: item._count.categoryId,
      })),
      hierarchy,
    }
  } catch (error) {
    console.error('Error fetching category stats:', error)
    return {
      totalMainCategories: 0,
      totalSubCategories: 0,
      genderDistribution: [],
      hierarchy: [],
    }
  }
}

export async function getStockStats(): Promise<StockStats> {
  try {
    const [
      totalStockRecords,
      inStockCount,
      outOfStockCount,
      brandStockDistribution,
      sizeDistribution,
      colorDistribution,
    ] = await Promise.all([
      // Total stock records count
      prisma.productStock.count(),

      // In stock products count
      prisma.productStock.count({
        where: { availability: 'in_stock' },
      }),

      // Out of stock products count
      prisma.productStock.count({
        where: { availability: 'out_of_stock' },
      }),

      // Brand-based stock distribution
      prisma.productStock.findMany({
        include: {
          product: {
            select: { brandName: true },
          },
        },
      }),

      // Size distribution
      prisma.productStock.groupBy({
        by: ['name'],
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
      }),

      // Color distribution
      prisma.productStock.groupBy({
        by: ['colorName'],
        _count: { id: true },
        orderBy: { _count: { id: 'desc' } },
        take: 10, // Top 10 colors
      }),
    ])

    // Process brand stock distribution
    const brandStockMap = new Map<
      string,
      { inStock: number; outOfStock: number }
    >()

    brandStockDistribution.forEach((stock) => {
      const brandName = stock.product?.brandName || 'Bilinmeyen'
      if (!brandStockMap.has(brandName)) {
        brandStockMap.set(brandName, { inStock: 0, outOfStock: 0 })
      }

      const brandData = brandStockMap.get(brandName)!
      if (stock.availability === 'in_stock') {
        brandData.inStock++
      } else {
        brandData.outOfStock++
      }
    })

    const brandDistribution = Array.from(brandStockMap.entries()).map(
      ([brand, data]) => ({
        brand,
        inStock: data.inStock,
        outOfStock: data.outOfStock,
      }),
    )

    return {
      totalStockRecords,
      inStockProducts: inStockCount,
      outOfStockProducts: outOfStockCount,
      brandDistribution,
      sizeDistribution: sizeDistribution.map((item) => ({
        size: item.name,
        count: item._count.id,
      })),
      colorDistribution: colorDistribution.map((item) => ({
        color: item.colorName || 'Bilinmeyen',
        count: item._count.id,
      })),
    }
  } catch (error) {
    console.error('Error fetching stock stats:', error)
    return {
      totalStockRecords: 0,
      inStockProducts: 0,
      outOfStockProducts: 0,
      brandDistribution: [],
      sizeDistribution: [],
      colorDistribution: [],
    }
  }
}
export async function getHistoryStats(): Promise<HistoryStats> {
  try {
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const [
      totalPriceChanges,
      totalStockChanges,
      totalCategoryChanges,
      priceChangesLast30Days,
      stockChangesLast30Days,
    ] = await Promise.all([
      // Total price changes count
      prisma.priceHistory.count(),

      // Total stock changes count
      prisma.stockHistory.count(),

      // Total category changes count
      prisma.categoryHistory.count(),

      // Price changes in last 30 days
      prisma.priceHistory.findMany({
        where: {
          timestamp: {
            gte: thirtyDaysAgo,
          },
        },
        select: {
          timestamp: true,
        },
        orderBy: {
          timestamp: 'asc',
        },
      }),

      // Stock changes in last 30 days
      prisma.stockHistory.findMany({
        where: {
          timestamp: {
            gte: thirtyDaysAgo,
          },
        },
        select: {
          timestamp: true,
        },
        orderBy: {
          timestamp: 'asc',
        },
      }),
    ])

    // Group price changes by date
    const priceChangesByDate = new Map<string, number>()
    priceChangesLast30Days.forEach((change) => {
      const dateKey = change.timestamp.toISOString().split('T')[0]
      priceChangesByDate.set(
        dateKey,
        (priceChangesByDate.get(dateKey) || 0) + 1,
      )
    })

    // Group stock changes by date
    const stockChangesByDate = new Map<string, number>()
    stockChangesLast30Days.forEach((change) => {
      const dateKey = change.timestamp.toISOString().split('T')[0]
      stockChangesByDate.set(
        dateKey,
        (stockChangesByDate.get(dateKey) || 0) + 1,
      )
    })

    // Generate last 30 days array with counts
    const last30DaysPriceChanges = []
    const last30DaysStockChanges = []

    for (let i = 29; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateKey = date.toISOString().split('T')[0]

      last30DaysPriceChanges.push({
        date: dateKey,
        count: priceChangesByDate.get(dateKey) || 0,
      })

      last30DaysStockChanges.push({
        date: dateKey,
        count: stockChangesByDate.get(dateKey) || 0,
      })
    }

    return {
      totalPriceChanges,
      totalStockChanges,
      totalCategoryChanges,
      last30DaysPriceChanges,
      last30DaysStockChanges,
    }
  } catch (error) {
    console.error('Error fetching history stats:', error)
    return {
      totalPriceChanges: 0,
      totalStockChanges: 0,
      totalCategoryChanges: 0,
      last30DaysPriceChanges: [],
      last30DaysStockChanges: [],
    }
  }
}

export async function getSystemStats(): Promise<SystemStats> {
  try {
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const [totalSyncs, successfulSyncs, failedSyncs, lastSync, last7DaysSyncs] =
      await Promise.all([
        // Total sync operations count
        prisma.dataSync.count(),

        // Successful syncs count
        prisma.dataSync.count({
          where: { status: 'success' },
        }),

        // Failed syncs count
        prisma.dataSync.count({
          where: { status: 'failed' },
        }),

        // Last sync operation
        prisma.dataSync.findFirst({
          orderBy: { timestamp: 'desc' },
        }),

        // Last 7 days sync activity
        prisma.dataSync.findMany({
          where: {
            timestamp: {
              gte: sevenDaysAgo,
            },
          },
          select: {
            timestamp: true,
            status: true,
          },
          orderBy: {
            timestamp: 'asc',
          },
        }),
      ])

    // Calculate success rate
    const successRate =
      totalSyncs > 0 ? (successfulSyncs / totalSyncs) * 100 : 0

    // Group syncs by date for last 7 days
    const syncsByDate = new Map<
      string,
      { syncs: number; success: number; failed: number }
    >()

    last7DaysSyncs.forEach((sync) => {
      const dateKey = sync.timestamp.toISOString().split('T')[0]
      if (!syncsByDate.has(dateKey)) {
        syncsByDate.set(dateKey, { syncs: 0, success: 0, failed: 0 })
      }

      const dayData = syncsByDate.get(dateKey)!
      dayData.syncs++

      if (sync.status === 'success') {
        dayData.success++
      } else {
        dayData.failed++
      }
    })

    // Generate last 7 days array with counts
    const last7DaysActivity = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateKey = date.toISOString().split('T')[0]

      const dayData = syncsByDate.get(dateKey) || {
        syncs: 0,
        success: 0,
        failed: 0,
      }

      last7DaysActivity.push({
        date: dateKey,
        syncs: dayData.syncs,
        success: dayData.success,
        failed: dayData.failed,
      })
    }

    return {
      totalSyncs,
      successfulSyncs,
      failedSyncs,
      lastSyncDate: lastSync?.timestamp || null,
      successRate: Math.round(successRate * 100) / 100, // Round to 2 decimal places
      last7DaysActivity,
    }
  } catch (error) {
    console.error('Error fetching system stats:', error)
    return {
      totalSyncs: 0,
      successfulSyncs: 0,
      failedSyncs: 0,
      lastSyncDate: null,
      successRate: 0,
      last7DaysActivity: [],
    }
  }
}
