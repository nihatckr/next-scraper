import { ProductGrid } from '@/components/catalog/product-grid'
import { Breadcrumb } from '@/components/dashboard/breadcrumb'

export default function CatalogLoading() {
  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Katalog', href: '/katalog' },
        ]}
      />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ürün Katalogu</h1>
          <p className="text-muted-foreground">
            Tüm ürünleri görüntüleyin ve arama yapın
          </p>
        </div>
      </div>

      {/* Search and Filter Section Skeleton */}
      <div className="rounded-lg border bg-card p-6">
        <div className="h-4 w-64 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Results Summary Skeleton */}
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
        <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Product Grid Loading */}
      <ProductGrid products={[]} loading />
    </div>
  )
}
