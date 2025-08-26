'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatPrice, cn } from '@/lib/utils'
import { Package } from 'lucide-react'
import type { CatalogProduct } from '@/lib/types'
import { memo, useState } from 'react'

interface ProductCardProps {
  product: CatalogProduct
  priority?: boolean
}

export const ProductCard = memo(function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const mainImage =
    product.images.find((img) => img.kind === 'main') || product.images[0]

  return (
    <Link href={`/katalog/${product.id}`} className="group">
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
        <div className="aspect-[3/4] overflow-hidden bg-muted relative">
          {mainImage && !imageError ? (
            <Image
              src={mainImage.url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={priority}
              loading={priority ? 'eager' : 'lazy'}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
              <Package className="h-8 w-8" />
            </div>
          )}
        </div>

        <CardContent className="p-3 sm:p-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="line-clamp-2 text-sm font-medium leading-tight">
                {product.name}
              </h3>
              {product.price && (
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {formatPrice(product.price)}
                  </Badge>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground truncate">
                {product.brandName}
              </p>

              {product.colors.length > 0 && (
                <div className="flex items-center gap-1 flex-shrink-0">
                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    {product.colors.length} renk
                  </span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color) => (
                      <div
                        key={color.id}
                        className={cn(
                          'rounded-full border border-border',
                          'h-2.5 w-2.5 sm:h-3 sm:w-3',
                        )}
                        style={{
                          backgroundColor: color.hexCode || '#ccc',
                        }}
                        title={color.name}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <div
                        className={cn(
                          'flex items-center justify-center rounded-full bg-muted text-muted-foreground',
                          'h-2.5 w-2.5 sm:h-3 sm:w-3 text-[8px] sm:text-[10px]',
                        )}
                      >
                        +{product.colors.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {product.categories.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {product.categories.slice(0, 2).map((category) => (
                  <Badge
                    key={category.categoryId}
                    variant="outline"
                    className="text-[10px] sm:text-xs px-1 py-0"
                  >
                    {category.categoryName}
                  </Badge>
                ))}
                {product.categories.length > 2 && (
                  <Badge
                    variant="outline"
                    className="text-[10px] sm:text-xs px-1 py-0"
                  >
                    +{product.categories.length - 2}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
})
