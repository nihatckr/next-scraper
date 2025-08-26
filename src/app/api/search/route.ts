import { NextRequest, NextResponse } from 'next/server'
import { searchProducts } from '@/lib/data/catalog'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.length < 2) {
      return NextResponse.json({ products: [] })
    }

    const products = await searchProducts(query)

    return NextResponse.json({ products })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
