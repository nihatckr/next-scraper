import { Suspense } from 'react'
import { getProducts, getCatalogFilters } from '@/lib/data/catalog'
import { ProductGrid } from '@/components/catalog/product-grid'
import { Pagination } from '@/components/catalog/pagination'
import { SearchBar } from '@/components/catalog/search-bar'
import { Filters } from '@/components/catalog/filters'
import { Breadcrumb } from '@/components/dashboard/breadcrumb'
import type { SearchParams } from '@/lib/types'

interface CatalogPageProps {
  searchParams: Promise<{
    page?: string
    search?: string
    brand?: string
    category?: string
  }>
}

export default async function CatalogPage({ searchParams }: CatalogPageProps) {
  const resolvedSearchParams = await searchParams

  const params: SearchParams = {
    page: resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1,
    search: resolvedSearchParams.search || '',
    brand: resolvedSearchParams.brand || '',
    category: resolvedSearchParams.category || '',
    limit: 12,
  }

  const [result, filters] = await Promise.all([
    getProducts(params),
    getCatalogFilters(),
  ])

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

      {/* Search and Filter Section */}
      <div className="rounded-lg border bg-card p-4 sm:p-6 space-y-4">
        <SearchBar />
        <div className="block sm:hidden">
          <Filters
            brands={filters.brands}
            categories={filters.categories}
            compact
          />
        </div>
        <div className="hidden sm:block">
          <Filters brands={filters.brands} categories={filters.categories} />
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          {result.totalCount > 0 ? (
            <>
              <span className="font-medium">{result.totalCount}</span> ürün
              bulundu
              {params.search && (
                <>
                  {' '}
                  &ldquo;<span className="font-medium">{params.search}</span>
                  &rdquo; için
                </>
              )}
            </>
          ) : (
            'Ürün bulunamadı'
          )}
        </div>

        {result.totalPages > 1 && (
          <div className="text-sm text-muted-foreground">
            Sayfa {result.currentPage} / {result.totalPages}
          </div>
        )}
      </div>

      {/* Product Grid */}
      <Suspense fallback={<ProductGrid products={[]} loading />}>
        <ProductGrid products={result.data} />
      </Suspense>

      {/* Pagination */}
      {result.totalPages > 1 && (
        <Pagination
          currentPage={result.currentPage}
          totalPages={result.totalPages}
          totalCount={result.totalCount}
        />
      )}
    </div>
  )
}
