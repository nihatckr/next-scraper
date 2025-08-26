'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useDebounce } from '@/hooks/use-debounce'
import type { CatalogProduct } from '@/lib/types'

export function GlobalSearch() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<CatalogProduct[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Handle search
  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
        setResults([])
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      try {
        const response = await fetch(
          `/api/search?q=${encodeURIComponent(debouncedSearchTerm)}`,
        )
        const data = await response.json()
        setResults(data.products || [])
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }

    performSearch()
  }, [debouncedSearchTerm])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/katalog?search=${encodeURIComponent(searchTerm.trim())}`)
      setIsOpen(false)
      setSearchTerm('')
    }
  }

  const handleProductClick = () => {
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Ürün ara..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
            className="pl-10 pr-4"
          />
        </div>
      </form>

      {/* Search Results Dropdown */}
      {isOpen && (searchTerm.length >= 2 || results.length > 0) && (
        <Card className="absolute top-full z-50 mt-1 w-full shadow-lg">
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                <span className="text-sm text-muted-foreground">
                  Aranıyor...
                </span>
              </div>
            ) : results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((product) => {
                  const mainImage =
                    product.images.find((img) => img.kind === 'main') ||
                    product.images[0]
                  const formattedPrice = product.price
                    ? (product.price / 100).toFixed(2)
                    : null

                  return (
                    <Link
                      key={product.id}
                      href={`/katalog/${product.id}`}
                      onClick={handleProductClick}
                      className="flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors border-b last:border-b-0"
                    >
                      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                        {mainImage ? (
                          <Image
                            src={mainImage.url}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                            Resim Yok
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {product.brandName}
                        </p>
                        {product.categories.length > 0 && (
                          <div className="flex gap-1 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {product.categories[0].categoryName}
                            </Badge>
                          </div>
                        )}
                      </div>

                      {formattedPrice && (
                        <div className="flex-shrink-0">
                          <Badge variant="secondary" className="text-xs">
                            ₺{formattedPrice}
                          </Badge>
                        </div>
                      )}
                    </Link>
                  )
                })}

                <div className="p-3 border-t bg-muted/30">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      router.push(
                        `/katalog?search=${encodeURIComponent(searchTerm)}`,
                      )
                      setIsOpen(false)
                      setSearchTerm('')
                    }}
                    className="w-full justify-start text-xs"
                  >
                    <Search className="h-3 w-3 mr-2" />
                    &ldquo;{searchTerm}&rdquo; için tüm sonuçları gör
                  </Button>
                </div>
              </div>
            ) : searchTerm.length >= 2 ? (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Sonuç bulunamadı
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    router.push(
                      `/katalog?search=${encodeURIComponent(searchTerm)}`,
                    )
                    setIsOpen(false)
                    setSearchTerm('')
                  }}
                  className="mt-2 text-xs"
                >
                  Yine de ara
                </Button>
              </div>
            ) : (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  En az 2 karakter girin
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
