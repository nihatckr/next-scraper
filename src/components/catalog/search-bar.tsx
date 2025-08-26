'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDebounce } from '@/hooks/use-debounce'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  className?: string
  compact?: boolean
}

export function SearchBar({
  placeholder = 'Ürün, marka veya açıklama ara...',
  className = '',
  compact = false,
}: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '')
  const [isFocused, setIsFocused] = useState(false)

  // Debounce search term to avoid too many API calls
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    const params = new URLSearchParams(searchParams)

    if (debouncedSearchTerm) {
      params.set('search', debouncedSearchTerm)
    } else {
      params.delete('search')
    }

    // Reset to first page when searching
    params.delete('page')

    router.push(`?${params.toString()}`)
  }, [debouncedSearchTerm, router, searchParams])

  const handleClear = () => {
    setSearchTerm('')
  }

  // Responsive placeholder
  const responsivePlaceholder = compact
    ? 'Ara...'
    : window?.innerWidth < 640
    ? 'Ürün ara...'
    : placeholder

  return (
    <div className={cn('relative', className)}>
      <Search
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors',
          isFocused && 'text-primary',
          compact ? 'h-3 w-3' : 'h-4 w-4',
        )}
      />
      <Input
        type="text"
        placeholder={responsivePlaceholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          'pl-10 pr-10 transition-all',
          compact && 'h-8 text-sm',
          isFocused && 'ring-2 ring-primary/20',
        )}
      />
      {searchTerm && (
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClear}
          className={cn(
            'absolute right-1 top-1/2 -translate-y-1/2 p-0 hover:bg-muted',
            compact ? 'h-6 w-6' : 'h-7 w-7',
          )}
        >
          <X className={cn(compact ? 'h-3 w-3' : 'h-4 w-4')} />
        </Button>
      )}
    </div>
  )
}
