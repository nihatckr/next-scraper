import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Admin Dashboard - Next Scraper',
    template: '%s | Admin Dashboard',
  },
  description:
    'Comprehensive e-commerce admin dashboard for product and inventory management',
  keywords: [
    'admin',
    'dashboard',
    'e-commerce',
    'inventory',
    'products',
    'analytics',
  ],
  authors: [{ name: 'Nihat Çakır', url: 'https://github.com/nihatckr' }],
  creator: 'Nihat Çakır',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://github.com/nihatckr/next-scraper',
    title: 'Admin Dashboard - Next Scraper',
    description:
      'Comprehensive e-commerce admin dashboard for product and inventory management',
    siteName: 'Next Scraper Admin',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Dashboard - Next Scraper',
    description:
      'Comprehensive e-commerce admin dashboard for product and inventory management',
    creator: '@nihatckr',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
