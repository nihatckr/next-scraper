import { useState, useCallback } from 'react'
import { useDebounce } from './use-debounce'
import type { Product } from '@prisma/client'

export function useSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const debouncedQuery = useDebounce(query, 300)

  const search = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    try {
      // Implementation will be added in later tasks
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery)}`,
      )
      const data = await response.json()
      setResults(data.products || [])
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    query,
    setQuery,
    results,
    isLoading,
    search,
    debouncedQuery,
  }
}
