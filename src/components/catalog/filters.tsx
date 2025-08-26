'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Filter, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import type { Brand, SubCategory } from '@/lib/types'

interface FiltersProps {
  brands: Brand[]
  categories: SubCategory[]
  compact?: boolean
}

export function Filters({ brands, categories, compact = false }: FiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(!compact)

  const selectedBrand = searchParams.get('brand') || 'all'
  const selectedCategory = searchParams.get('category') || 'all'

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams)

    if (value && value !== 'all') {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    // Reset to first page when filtering
    params.delete('page')

    router.push(`?${params.toString()}`)
  }

  const clearAllFilters = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('brand')
    params.delete('category')
    params.delete('page')
    router.push(`?${params.toString()}`)
  }

  const hasActiveFilters =
    (selectedBrand && selectedBrand !== 'all') ||
    (selectedCategory && selectedCategory !== 'all')

  const FilterContent = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Brand Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Marka
          </label>
          <Select
            value={selectedBrand}
            onValueChange={(value) => updateFilter('brand', value)}
          >
            <SelectTrigger className={cn(compact && 'h-8 text-sm')}>
              <SelectValue placeholder="Marka seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm markalar</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand.id} value={brand.name}>
                  {brand.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Kategori
          </label>
          <Select
            value={selectedCategory}
            onValueChange={(value) => updateFilter('category', value)}
          >
            <SelectTrigger className={cn(compact && 'h-8 text-sm')}>
              <SelectValue placeholder="Kategori seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tüm kategoriler</SelectItem>
              {categories.map((category) => (
                <SelectItem
                  key={category.categoryId}
                  value={category.categoryName}
                >
                  <span className="truncate">
                    {category.categoryName}
                    <span className="text-muted-foreground ml-1">
                      ({category.gender})
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {selectedBrand && selectedBrand !== 'all' && (
            <Badge variant="secondary" className="gap-1 text-xs">
              <span className="hidden sm:inline">Marka: </span>
              {selectedBrand}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateFilter('brand', 'all')}
                className="h-3 w-3 p-0 hover:bg-transparent"
              >
                <X className="h-2 w-2" />
              </Button>
            </Badge>
          )}
          {selectedCategory && selectedCategory !== 'all' && (
            <Badge variant="secondary" className="gap-1 text-xs">
              <span className="hidden sm:inline">Kategori: </span>
              <span className="truncate max-w-[100px]">{selectedCategory}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateFilter('category', 'all')}
                className="h-3 w-3 p-0 hover:bg-transparent"
              >
                <X className="h-2 w-2" />
              </Button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )

  if (compact) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between">
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filtreler</span>
              {hasActiveFilters && (
                <Badge variant="secondary" className="h-4 px-1 text-xs">
                  {(selectedBrand !== 'all' ? 1 : 0) +
                    (selectedCategory !== 'all' ? 1 : 0)}
                </Badge>
              )}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  isOpen && 'rotate-180',
                )}
              />
            </Button>
          </CollapsibleTrigger>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="h-8 px-2 text-xs"
            >
              <X className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">Temizle</span>
            </Button>
          )}
        </div>
        <CollapsibleContent className="mt-4">
          <FilterContent />
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filtreler</span>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="h-6 px-2 text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Temizle
          </Button>
        )}
      </div>
      <FilterContent />
    </div>
  )
}
