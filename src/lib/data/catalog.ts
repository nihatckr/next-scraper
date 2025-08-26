import prisma from '@/lib/prisma'
import type {
  CatalogProduct,
  ProductDetail,
  SearchResult,
  SearchParams,
  Brand,
  CatalogFilters,
  SubCategory,
} from '@/lib/types'

export async function getProducts(
  params: SearchParams = {},
): Promise<SearchResult<CatalogProduct>> {
  try {
    const {
      page = 1,
      limit = 12,
      search = '',
      brand = '',
      category = '',
    } = params

    const skip = (page - 1) * limit

    // Build where clause
    const where: Record<string, unknown> = {}

    // Search filter
    if (search) {
      where.OR = [
        { name: { contains: search } },
        { brandName: { contains: search } },
        { description: { contains: search } },
      ]
    }

    // Brand filter
    if (brand) {
      where.brandName = brand
    }

    // Category filter
    if (category) {
      where.subCategories = {
        some: {
          categoryName: { contains: category },
        },
      }
    }

    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take: limit,
        include: {
          images: {
            where: { kind: 'main' },
            orderBy: { order: 'asc' },
            take: 1,
          },
          colors: {
            select: {
              id: true,
              colorId: true,
              name: true,
              hexCode: true,
              price: true,
            },
          },
          sizes: {
            select: {
              id: true,
              sizeId: true,
              name: true,
              availability: true,
              price: true,
            },
          },
          subCategories: {
            select: {
              categoryId: true,
              categoryName: true,
              brand: true,
              gender: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ])

    const catalogProducts: CatalogProduct[] = products.map((product) => ({
      id: product.id,
      productId: product.productId,
      name: product.name,
      brandName: product.brandName,
      price: product.price,
      description: product.description,
      images: product.images.map((img) => ({
        id: img.id,
        url: img.url,
        type: img.type,
        kind: img.kind,
        order: img.order,
        colorId: img.colorId,
        colorName: img.colorName,
      })),
      colors: product.colors,
      sizes: product.sizes,
      categories: product.subCategories,
    }))

    const totalPages = Math.ceil(totalCount / limit)

    return {
      data: catalogProducts,
      totalCount,
      currentPage: page,
      totalPages,
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      data: [],
      totalCount: 0,
      currentPage: 1,
      totalPages: 0,
    }
  }
}

export async function getProductById(
  id: number,
): Promise<ProductDetail | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: [{ colorId: 'asc' }, { order: 'asc' }],
        },
        colors: {
          include: {
            images: {
              orderBy: { order: 'asc' },
            },
          },
        },
        sizes: {
          orderBy: { name: 'asc' },
        },
        subCategories: {
          select: {
            categoryId: true,
            categoryName: true,
            brand: true,
            gender: true,
          },
        },
        stock: {
          orderBy: [{ colorName: 'asc' }, { name: 'asc' }],
        },
        priceHistory: {
          orderBy: { timestamp: 'desc' },
          take: 10,
        },
      },
    })

    if (!product) {
      return null
    }

    return {
      id: product.id,
      productId: product.productId,
      name: product.name,
      brandName: product.brandName,
      price: product.price,
      description: product.description,
      images: product.images.map((img) => ({
        id: img.id,
        url: img.url,
        type: img.type,
        kind: img.kind,
        order: img.order,
        colorId: img.colorId,
        colorName: img.colorName,
      })),
      colors: product.colors.map((color) => ({
        id: color.id,
        colorId: color.colorId,
        name: color.name,
        hexCode: color.hexCode,
        price: color.price,
      })),
      sizes: product.sizes,
      categories: product.subCategories,
      stock: product.stock.map((stock) => ({
        id: stock.id,
        sizeId: stock.sizeId,
        name: stock.name,
        availability: stock.availability,
        price: stock.price,
        colorName: stock.colorName,
      })),
      priceHistory: product.priceHistory.map((history) => ({
        id: history.id,
        price: history.price,
        timestamp: history.timestamp,
        colorId: history.colorId,
      })),
    }
  } catch (error) {
    console.error('Error fetching product by id:', error)
    return null
  }
}

export async function getBrands(): Promise<Brand[]> {
  try {
    const brands = await prisma.brand.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: { name: 'asc' },
    })

    return brands
  } catch (error) {
    console.error('Error fetching brands:', error)
    return []
  }
}

export async function getCategories(): Promise<SubCategory[]> {
  try {
    const categories = await prisma.subCategory.findMany({
      select: {
        categoryId: true,
        categoryName: true,
        brand: true,
        gender: true,
      },
      where: {
        isLeaf: true, // Only leaf categories
      },
      orderBy: { categoryName: 'asc' },
    })

    return categories.map((cat) => ({
      categoryId: cat.categoryId,
      categoryName: cat.categoryName,
      brand: cat.brand,
      gender: cat.gender,
    }))
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getCatalogFilters(): Promise<CatalogFilters> {
  try {
    const [brands, categories] = await Promise.all([
      getBrands(),
      getCategories(),
    ])

    return {
      brands,
      categories,
    }
  } catch (error) {
    console.error('Error fetching catalog filters:', error)
    return {
      brands: [],
      categories: [],
    }
  }
}

export async function searchProducts(query: string): Promise<CatalogProduct[]> {
  try {
    if (!query || query.length < 2) {
      return []
    }

    const products = await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query } },
          { brandName: { contains: query } },
          { description: { contains: query } },
        ],
      },
      include: {
        images: {
          where: { kind: 'main' },
          orderBy: { order: 'asc' },
          take: 1,
        },
        colors: {
          select: {
            id: true,
            colorId: true,
            name: true,
            hexCode: true,
            price: true,
          },
        },
        sizes: {
          select: {
            id: true,
            sizeId: true,
            name: true,
            availability: true,
            price: true,
          },
        },
        subCategories: {
          select: {
            categoryId: true,
            categoryName: true,
            brand: true,
            gender: true,
          },
        },
      },
      take: 10, // Limit search results
      orderBy: { createdAt: 'desc' },
    })

    return products.map((product) => ({
      id: product.id,
      productId: product.productId,
      name: product.name,
      brandName: product.brandName,
      price: product.price,
      description: product.description,
      images: product.images.map((img) => ({
        id: img.id,
        url: img.url,
        type: img.type,
        kind: img.kind,
        order: img.order,
        colorId: img.colorId,
        colorName: img.colorName,
      })),
      colors: product.colors,
      sizes: product.sizes,
      categories: product.subCategories,
    }))
  } catch (error) {
    console.error('Error searching products:', error)
    return []
  }
}
