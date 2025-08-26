'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Tag,
  Package,
  FolderTree,
  Warehouse,
  History,
  Settings,
  Search,
  BarChart3,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'

// Navigation items for the sidebar
const navigationItems = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home,
    description: 'Ana sayfa ve genel istatistikler',
  },
  {
    title: 'Markalar',
    href: '/markalar',
    icon: Tag,
    description: 'Marka istatistikleri ve dağılımı',
  },
  {
    title: 'Ürünler',
    href: '/urunler',
    icon: Package,
    description: 'Ürün katalog istatistikleri',
  },
  {
    title: 'Kategoriler',
    href: '/kategoriler',
    icon: FolderTree,
    description: 'Kategori hiyerarşisi ve dağılımı',
  },
  {
    title: 'Stok',
    href: '/stok',
    icon: Warehouse,
    description: 'Stok durumu ve envanter',
  },
  {
    title: 'Geçmiş',
    href: '/gecmis',
    icon: History,
    description: 'Geçmiş veri analizleri',
  },
  {
    title: 'Sistem',
    href: '/sistem',
    icon: Settings,
    description: 'Sistem durumu ve senkronizasyon',
  },
]

const catalogItems = [
  {
    title: 'Katalog',
    href: '/katalog',
    icon: Search,
    description: 'Ürün katalogu ve arama',
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <BarChart3 className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Admin Dashboard</span>
            <span className="truncate text-xs text-sidebar-foreground/70">
              E-ticaret İstatistikleri
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>İstatistikler</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.description}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Katalog</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {catalogItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.description}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-2 text-xs text-sidebar-foreground/70">
          © 2024 Admin Dashboard
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
