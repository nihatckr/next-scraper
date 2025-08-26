# Tasarım Dökümanı

## Genel Bakış

Bu tasarım, e-ticaret veritabanı için basit bir istatistik dashboard'u ve ürün katalogu oluşturmayı amaçlar. Sistem, mevcut Next.js 15 ve React 19 teknoloji yığını üzerine kurulacak ve Prisma ORM kullanarak MySQL veritabanından veri okuyacaktır. Dashboard, sadece okuma işlemleri yapacak ve karmaşık CRUD işlemleri içermeyecektir.

## Mimari

### Teknoloji Yığını

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui (new-york style)
- **Database**: MySQL, Prisma ORM
- **Charts**: Recharts
- **Icons**: Lucide React, Tabler Icons
- **UI Components**: Radix UI primitives
- **State Management**: React Server Components + Client Components (minimal state)

### Klasör Yapısı

```
src/
├── app/
│   ├── (dashboard)/
│   │   ├── layout.tsx          # Dashboard layout with sidebar
│   │   ├── page.tsx            # Ana dashboard sayfası
│   │   ├── markalar/
│   │   │   └── page.tsx        # Marka istatistikleri
│   │   ├── urunler/
│   │   │   └── page.tsx        # Ürün istatistikleri
│   │   ├── kategoriler/
│   │   │   └── page.tsx        # Kategori istatistikleri
│   │   ├── stok/
│   │   │   └── page.tsx        # Stok istatistikleri
│   │   ├── gecmis/
│   │   │   └── page.tsx        # Geçmiş analizleri
│   │   └── sistem/
│   │       └── page.tsx        # Sistem durumu
│   ├── katalog/
│   │   ├── page.tsx            # Ürün katalogu listesi
│   │   └── [id]/
│   │       └── page.tsx        # Ürün detay sayfası
│   ├── api/
│   │   └── search/
│   │       └── route.ts        # Arama API endpoint
│   ├── globals.css
│   └── layout.tsx              # Root layout
├── components/
│   ├── ui/                     # shadcn/ui components
│   ├── dashboard/
│   │   ├── sidebar.tsx         # Dashboard sidebar navigation
│   │   ├── stats-card.tsx      # İstatistik kartları
│   │   ├── chart-wrapper.tsx   # Grafik wrapper component
│   │   └── breadcrumb.tsx      # Breadcrumb navigation
│   ├── catalog/
│   │   ├── product-card.tsx    # Ürün kartı
│   │   ├── product-grid.tsx    # Ürün grid layout
│   │   ├── search-bar.tsx      # Arama kutusu
│   │   ├── filters.tsx         # Filtre komponenti
│   │   └── product-detail.tsx  # Ürün detay komponenti
│   └── charts/
│       ├── pie-chart.tsx       # Pasta grafiği
│       ├── bar-chart.tsx       # Bar grafiği
│       ├── line-chart.tsx      # Çizgi grafiği
│       └── area-chart.tsx      # Alan grafiği
├── lib/
│   ├── prisma.ts              # Prisma client
│   ├── utils.ts               # Utility functions
│   ├── data/
│   │   ├── dashboard.ts       # Dashboard veri fonksiyonları
│   │   ├── catalog.ts         # Katalog veri fonksiyonları
│   │   └── mock-data.ts       # Mock veri (development için)
│   └── types.ts               # TypeScript type definitions
└── hooks/
    ├── use-search.ts          # Arama hook'u
    └── use-debounce.ts        # Debounce hook'u
```

## Bileşenler ve Arayüzler

### Ana Layout Bileşenleri

#### 1. Dashboard Layout (`app/(dashboard)/layout.tsx`)

- Kenar çubuğu navigasyon
- Ana içerik alanı
- Responsive tasarım (mobilde collapsible sidebar)
- Breadcrumb navigasyon

#### 2. Sidebar Navigation (`components/dashboard/sidebar.tsx`)

```typescript
interface SidebarItem {
  title: string
  href: string
  icon: LucideIcon
  badge?: number
}

const sidebarItems: SidebarItem[] = [
  { title: 'Dashboard', href: '/', icon: Home },
  { title: 'Markalar', href: '/markalar', icon: Tag },
  { title: 'Ürünler', href: '/urunler', icon: Package },
  { title: 'Kategoriler', href: '/kategoriler', icon: FolderTree },
  { title: 'Stok', href: '/stok', icon: Warehouse },
  { title: 'Geçmiş', href: '/gecmis', icon: History },
  { title: 'Sistem', href: '/sistem', icon: Settings },
  { title: 'Katalog', href: '/katalog', icon: Search },
]
```

### Dashboard Bileşenleri

#### 1. Stats Card (`components/dashboard/stats-card.tsx`)

```typescript
interface StatsCardProps {
  title: string
  value: number | string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  href?: string
}
```

#### 2. Chart Components

- **PieChart**: Marka dağılımı, kategori dağılımı
- **BarChart**: Markaya göre ürün sayıları, fiyat aralıkları
- **LineChart**: Zaman bazlı değişimler (fiyat, stok geçmişi)
- **AreaChart**: Senkronizasyon aktiviteleri

### Katalog Bileşenleri

#### 1. Product Card (`components/catalog/product-card.tsx`)

```typescript
interface ProductCardProps {
  product: {
    id: number
    name: string
    brandName: string
    price: number | null
    images: ProductImage[]
  }
}
```

#### 2. Search Bar (`components/catalog/search-bar.tsx`)

```typescript
interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
  debounceMs?: number
}
```

#### 3. Filters (`components/catalog/filters.tsx`)

```typescript
interface FiltersProps {
  brands: Brand[]
  categories: Category[]
  selectedBrand?: string
  selectedCategory?: string
  onBrandChange: (brand: string) => void
  onCategoryChange: (category: string) => void
}
```

## Veri Modelleri

### Dashboard İstatistik Tipleri

```typescript
interface DashboardStats {
  totalBrands: number
  totalProducts: number
  totalCategories: number
  totalUsers: number
  lastSyncDate: Date | null
}

interface BrandStats {
  id: string
  name: string
  productCount: number
  categoryCount: number
  createdAt: Date
}

interface ProductStats {
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
}

interface CategoryStats {
  totalMainCategories: number
  totalSubCategories: number
  genderDistribution: Array<{
    gender: string
    count: number
  }>
  hierarchy: CategoryNode[]
}

interface CategoryNode {
  id: number
  name: string
  productCount: number
  children: CategoryNode[]
}
```

### Katalog Veri Tipleri

```typescript
interface CatalogProduct {
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

interface ProductDetail extends CatalogProduct {
  stock: ProductStock[]
  priceHistory: PriceHistory[]
}

interface SearchResult {
  products: CatalogProduct[]
  totalCount: number
  currentPage: number
  totalPages: number
}
```

## Veri Erişim Katmanı

### Dashboard Veri Fonksiyonları (`lib/data/dashboard.ts`)

```typescript
export async function getDashboardStats(): Promise<DashboardStats>
export async function getBrandStats(): Promise<BrandStats[]>
export async function getProductStats(): Promise<ProductStats>
export async function getCategoryStats(): Promise<CategoryStats>
export async function getStockStats(): Promise<StockStats>
export async function getHistoryStats(): Promise<HistoryStats>
export async function getSystemStats(): Promise<SystemStats>
```

### Katalog Veri Fonksiyonları (`lib/data/catalog.ts`)

```typescript
export async function getProducts(params: {
  page?: number
  limit?: number
  search?: string
  brand?: string
  category?: string
}): Promise<SearchResult>

export async function getProductById(id: number): Promise<ProductDetail | null>
export async function getBrands(): Promise<Brand[]>
export async function getCategories(): Promise<SubCategory[]>
export async function searchProducts(query: string): Promise<CatalogProduct[]>
```

## Hata Yönetimi

### Error Boundaries

- Dashboard seviyesinde error boundary
- Sayfa seviyesinde error handling
- Loading states için Suspense kullanımı

### Error Types

```typescript
interface AppError {
  code: string
  message: string
  details?: any
}

// Error codes
const ERROR_CODES = {
  DATABASE_CONNECTION: 'DB_CONNECTION_ERROR',
  PRODUCT_NOT_FOUND: 'PRODUCT_NOT_FOUND',
  INVALID_SEARCH_QUERY: 'INVALID_SEARCH_QUERY',
} as const
```

## Test Stratejisi

### Unit Tests

- Veri fonksiyonları için unit testler
- Utility fonksiyonları için testler
- Component logic testleri

### Integration Tests

- API endpoint testleri
- Database query testleri
- Component integration testleri

### Mock Data

Prisma şemasına %100 uyumlu kapsamlı mock veri oluşturulacak. Tüm modeller için gerçekçi veriler sağlanacak:

```typescript
// lib/data/mock-data.ts

// Brands - 5 popüler marka
export const mockBrands: Brand[] = [
  { id: 'zara', name: 'Zara', timestamp: new Date('2023-01-15') },
  { id: 'hm', name: 'H&M', timestamp: new Date('2023-02-20') },
  { id: 'pullbear', name: 'Pull&Bear', timestamp: new Date('2023-03-10') },
  { id: 'bershka', name: 'Bershka', timestamp: new Date('2023-04-05') },
  { id: 'mango', name: 'Mango', timestamp: new Date('2023-05-12') },
]

// Users - Admin ve normal kullanıcılar
export const mockUsers: User[] = [
  {
    id: 1,
    email: 'admin@example.com',
    passwordHash: 'hashed_password',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  // ... 20+ kullanıcı
]

// Main Categories - Her marka için ERKEK/KADIN
export const mockMainCategories: MainCategory[] = [
  {
    id: 1,
    name: 'ERKEK',
    brandId: 'zara',
    gender: 'ERKEK',
    level: 0,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15'),
  },
  // ... her marka için 2 ana kategori (10 toplam)
]

// Sub Categories - Hiyerarşik kategori yapısı
export const mockSubCategories: SubCategory[] = [
  {
    categoryId: 101,
    categoryName: 'Gömlek',
    brand: 'zara',
    gender: 'ERKEK',
    level: 1,
    isLeaf: true,
    matchingId: 1001,
    productCount: 25,
    parentCategoryId: 1,
    parentSubCategoryId: null,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15'),
  },
  // ... 50+ alt kategori (hiyerarşik yapı ile)
]

// Products - 100+ ürün
export const mockProducts: Product[] = [
  {
    id: 1,
    brandName: 'Zara',
    productId: 'zara-001',
    name: 'Slim Fit Gömlek',
    price: 12999, // 129.99 TL (kuruş cinsinden)
    description: 'Pamuklu slim fit erkek gömleği',
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2023-06-01'),
  },
  // ... 100+ ürün
]

// Product Colors - Her ürün için 2-5 renk
export const mockProductColors: ProductColor[] = [
  {
    id: 1,
    colorId: 'blue-001',
    name: 'Mavi',
    hexCode: '#0066CC',
    price: 12999,
    description: 'Koyu mavi renk',
    productId: 1,
  },
  // ... 300+ renk varyantı
]

// Product Sizes - Her renk için S,M,L,XL,XXL
export const mockProductSizes: ProductSize[] = [
  {
    id: 1,
    sizeId: 1,
    name: 'S',
    availability: 'in_stock',
    price: 12999,
    sku: 100001,
    productId: 1,
    colorId: 1,
    colorName: 'Mavi',
  },
  // ... 1500+ beden varyantı
]

// Product Images - Her renk için 3-5 resim
export const mockProductImages: ProductImage[] = [
  {
    id: 1,
    url: 'https://picsum.photos/400/600?random=1',
    type: 'image',
    kind: 'main',
    order: 0,
    productId: 1,
    colorId: 1,
    colorName: 'Mavi',
    colorIndex: 0,
  },
  // ... 1200+ ürün resmi
]

// Product Stock - Her ürün-renk-beden kombinasyonu
export const mockProductStock: ProductStock[] = [
  {
    id: 1,
    sizeId: 1,
    name: 'S',
    availability: 'in_stock',
    price: 12999,
    sku: 100001,
    productId: 1,
    colorId: 1,
    colorName: 'Mavi',
  },
  // ... 1500+ stok kaydı
]

// Data Sync - Son 30 günlük sync kayıtları
export const mockDataSync: DataSync[] = [
  {
    id: 1,
    syncType: 'products',
    status: 'success',
    itemsCount: 150,
    errorMessage: null,
    timestamp: new Date('2024-01-20T10:30:00'),
  },
  // ... 60+ sync kaydı
]

// Price History - Fiyat değişim geçmişi
export const mockPriceHistory: PriceHistory[] = [
  {
    id: 1,
    productId: 1,
    price: 11999, // Eski fiyat
    colorId: 1,
    timestamp: new Date('2023-12-01'),
  },
  // ... 500+ fiyat değişim kaydı
]

// Stock History - Stok değişim geçmişi
export const mockStockHistory: StockHistory[] = [
  {
    id: 1,
    productId: 1,
    sizeId: 1,
    colorId: 1,
    available: true,
    timestamp: new Date('2024-01-15'),
  },
  // ... 800+ stok değişim kaydı
]

// Category History - Kategori değişim geçmişi
export const mockCategoryHistory: CategoryHistory[] = [
  {
    id: 1,
    categoryId: 101,
    action: 'added',
    changes: { name: 'Gömlek', productCount: 25 },
    timestamp: new Date('2023-01-15'),
  },
  // ... 200+ kategori değişim kaydı
]

// İstatistik hesaplama fonksiyonları
export function calculateDashboardStats(): DashboardStats
export function calculateBrandStats(): BrandStats[]
export function calculateProductStats(): ProductStats
export function calculateCategoryStats(): CategoryStats
export function calculateStockStats(): StockStats
export function calculateHistoryStats(): HistoryStats
export function calculateSystemStats(): SystemStats
```

Mock veriler gerçekçi e-ticaret senaryolarını yansıtacak şekilde tasarlanacak:

- 5 popüler marka (Zara, H&M, Pull&Bear, Bershka, Mango)
- 100+ ürün (giyim kategorilerinde)
- Her ürün için 2-5 renk varyantı
- Her renk için 5 beden (S,M,L,XL,XXL)
- Her renk için 3-5 ürün resmi
- Gerçekçi fiyat aralıkları (50-500 TL)
- Son 3 aylık geçmiş veriler
- Başarılı/başarısız sync kayıtları

## Performans Optimizasyonları

### Server-Side Rendering

- Dashboard istatistikleri SSR ile render edilecek
- Katalog sayfaları ISR (Incremental Static Regeneration) kullanacak

### Caching Strategy

- Dashboard verileri için 5 dakika cache
- Katalog verileri için 1 saat cache
- Search sonuçları client-side cache

### Database Optimizations

- Gerekli indexler tanımlanacak
- Aggregate queries kullanılacak
- Connection pooling yapılandırılacak

### Client-Side Optimizations

- Image lazy loading
- Virtual scrolling (büyük listeler için)
- Debounced search
- Component memoization

## Responsive Tasarım

### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Adaptations

- Collapsible sidebar
- Stack layout for stats cards
- Simplified charts
- Touch-friendly interactions

### Accessibility

- ARIA labels
- Keyboard navigation
- Screen reader support
- Color contrast compliance
