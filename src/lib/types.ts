// Dashboard Statistics Types
export interface DashboardStats {
  totalBrands: number
  totalProducts: number
  totalCategories: number
  totalUsers: number
  lastSyncDate: Date | null
}

export interface BrandStats {
  id: string
  name: string
  productCount: number
  categoryCount: number
  createdAt: Date
}

export interface ProductStats {
  totalProducts: number
  totalColors: number
  totalSizes: number
  priceRange: {
    min: number
    max: number
  }
  brandDistribution: Array<{
    brand: string
    count: number
  }>
  priceDistribution: Array<{
    range: string
    count: number
  }>
  expensiveProducts: Array<{
    id: number
    name: string
    brand: string
    price: number
  }>
  cheapProducts: Array<{
    id: number
    name: string
    brand: string
    price: number
  }>
}

export interface CategoryStats {
  totalMainCategories: number
  totalSubCategories: number
  genderDistribution: Array<{
    gender: string
    count: number
  }>
  hierarchy: CategoryNode[]
}

export interface CategoryNode {
  id: number
  name: string
  productCount: number
  children: CategoryNode[]
}

export interface StockStats {
  totalStockRecords: number
  inStockProducts: number
  outOfStockProducts: number
  brandDistribution: Array<{
    brand: string
    inStock: number
    outOfStock: number
  }>
  sizeDistribution: Array<{
    size: string
    count: number
  }>
  colorDistribution: Array<{
    color: string
    count: number
  }>
}

export interface HistoryStats {
  totalPriceChanges: number
  totalStockChanges: number
  totalCategoryChanges: number
  last30DaysPriceChanges: Array<{
    date: string
    count: number
  }>
  last30DaysStockChanges: Array<{
    date: string
    count: number
  }>
}

export interface SystemStats {
  totalSyncs: number
  successfulSyncs: number
  failedSyncs: number
  lastSyncDate: Date | null
  successRate: number
  last7DaysActivity: Array<{
    date: string
    syncs: number
    success: number
    failed: number
  }>
}

// Search and Pagination Types
export interface SearchParams {
  page?: number
  limit?: number
  search?: string
  brand?: string
  category?: string
}

export interface SearchResult<T> {
  data: T[]
  totalCount: number
  currentPage: number
  totalPages: number
}

// Chart Data Types
export interface ChartDataPoint {
  name: string
  value: number
  color?: string
}

export interface TimeSeriesDataPoint {
  date: string
  value: number
  label?: string
}

// Navigation Types
export interface SidebarItem {
  title: string
  href: string
  icon: string
  badge?: number
}

// Error Types
export interface AppError {
  code: string
  message: string
  details?: unknown
}

export const ERROR_CODES = {
  DATABASE_CONNECTION: 'DB_CONNECTION_ERROR',
  PRODUCT_NOT_FOUND: 'PRODUCT_NOT_FOUND',
  INVALID_SEARCH_QUERY: 'INVALID_SEARCH_QUERY',
  SYNC_FAILED: 'SYNC_FAILED',
  UNAUTHORIZED: 'UNAUTHORIZED',
} as const

// Catalog Types
export interface CatalogProduct {
  id: number
  productId: string
  name: string
  brandName: string
  price: number | null
  description: string | null
  images: ProductImage[]
  colors: ProductColor[]
  sizes: ProductSize[]
  categories: SubCategory[]
}

export interface ProductImage {
  id: number
  url: string
  type: string
  kind: string
  order: number
  colorId: number | null
  colorName: string | null
}

export interface ProductColor {
  id: number
  colorId: string
  name: string
  hexCode: string | null
  price: number | null
}

export interface ProductSize {
  id: number
  sizeId: number
  name: string
  availability: string
  price: number | null
}

export interface SubCategory {
  categoryId: number
  categoryName: string
  brand: string
  gender: string
}

export interface ProductDetail extends CatalogProduct {
  stock: ProductStock[]
  priceHistory: PriceHistory[]
}

export interface ProductStock {
  id: number
  sizeId: number
  name: string
  availability: string
  price: number | null
  colorName: string | null
}

export interface PriceHistory {
  id: number
  price: number
  timestamp: Date
  colorId: number | null
}

export interface Brand {
  id: string
  name: string
}

export interface CatalogFilters {
  brands: Brand[]
  categories: SubCategory[]
}
