'use client'

import { ProductCard } from './product-card'
import { ResponsiveGrid } from '@/components/ui/responsive-grid'

import { Package } from 'lucide-react'
import type { CatalogProduct } from '@/lib/types'
import { memo } from 'react'

interface ProductGridProps {
  products: CatalogProduct[]
  loading?: boolean
}

const ProductGridSkeleton = memo(() => (
  <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3, xl: 4 }} gap="md">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="aspect-[3/4] rounded-lg bg-muted" />
        <div className="mt-4 space-y-2">
          <div className="h-4 rounded bg-muted" />
          <div className="h-3 w-2/3 rounded bg-muted" />
          <div className="h-3 w-1/2 rounded bg-muted" />
        </div>
      </div>
    ))}
  </ResponsiveGrid>
))

ProductGridSkeleton.displayName = 'ProductGridSkeleton'

const EmptyState = memo(() => (
  <div className="flex min-h-[400px] items-center justify-center">
    <div className="text-center space-y-4">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Package className="h-8 w-8 text-muted-foreground" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-2">Ürün bulunamadı</h3>
        <p className="text-muted-foreground">
          Arama kriterlerinizi değiştirerek tekrar deneyin.
        </p>
      </div>
    </div>
  </div>
))

EmptyState.displayName = 'EmptyState'

export function ProductGrid({ products, loading = false }: ProductGridProps) {
  if (loading) {
    return <ProductGridSkeleton />
  }

  if (products.length === 0) {
    return <EmptyState />
  }

  return (
    <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3, xl: 4 }} gap="md">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 4} // Priority loading for first 4 products
        />
      ))}
    </ResponsiveGrid>
  )
}
