'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { Fragment } from 'react'

// Mapping of paths to Turkish labels
const pathLabels: Record<string, string> = {
  '/': 'Dashboard',
  '/markalar': 'Markalar',
  '/urunler': 'Ürünler',
  '/kategoriler': 'Kategoriler',
  '/stok': 'Stok',
  '/gecmis': 'Geçmiş',
  '/sistem': 'Sistem',
  '/katalog': 'Katalog',
}

interface BreadcrumbItem {
  label: string
  href: string
  isHome?: boolean
  isLast?: boolean
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const pathname = usePathname()

  // Generate breadcrumb items from pathname if no custom items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const segments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Dashboard', href: '/', isHome: true },
    ]

    if (segments.length === 0) {
      return breadcrumbs
    }

    let currentPath = ''
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = pathLabels[currentPath] || segment

      breadcrumbs.push({
        label,
        href: currentPath,
        isHome: false,
        isLast: index === segments.length - 1,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = items || generateBreadcrumbs()

  // Mark the last item as last
  if (breadcrumbs.length > 0) {
    breadcrumbs[breadcrumbs.length - 1].isLast = true
  }

  // Don't show breadcrumb if we're on the home page and no custom items
  if (pathname === '/' && !items) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <Home className="h-4 w-4" />
        <span className="font-medium">Dashboard</span>
      </div>
    )
  }

  return (
    <nav className="flex items-center gap-2 text-sm">
      {breadcrumbs.map((crumb, index) => (
        <Fragment key={crumb.href}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )}
          {crumb.isLast ? (
            <span className="font-medium text-foreground">
              {crumb.isHome ? <Home className="h-4 w-4" /> : crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              {crumb.isHome ? <Home className="h-4 w-4" /> : crumb.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  )
}
