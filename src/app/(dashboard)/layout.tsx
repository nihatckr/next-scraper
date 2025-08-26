import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import { DashboardSidebar } from '@/components/dashboard/sidebar'
import { DashboardHeader } from '@/components/dashboard/header'
import { ErrorBoundary } from '@/components/ui/error-boundary'
import { Suspense } from 'react'
import { PageLoadingSpinner } from '@/components/ui/loading-spinner'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-3 sm:p-4 pt-0">
          <ErrorBoundary>
            <Suspense
              fallback={<PageLoadingSpinner text="Dashboard yükleniyor..." />}
            >
              {children}
            </Suspense>
          </ErrorBoundary>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
