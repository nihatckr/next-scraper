import { ResponsiveGrid } from '@/components/ui/responsive-grid'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface PageLoadingProps {
  showBreadcrumb?: boolean
  statsCount?: number
  showChart?: boolean
  showTable?: boolean
}

export function PageLoading({
  showBreadcrumb = true,
  statsCount = 4,
  showChart = true,
  showTable = false,
}: PageLoadingProps) {
  return (
    <div className="space-y-6">
      {showBreadcrumb && (
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-20" />
          <span className="text-muted-foreground">/</span>
          <Skeleton className="h-4 w-24" />
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-9 w-48 mb-2" />
          <Skeleton className="h-5 w-64" />
        </div>
      </div>

      {/* Stats Cards */}
      {statsCount > 0 && (
        <ResponsiveGrid cols={{ default: 1, sm: 2, lg: statsCount }} gap="sm">
          {Array.from({ length: statsCount }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-1" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      )}

      {/* Chart */}
      {showChart && (
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[300px] w-full" />
          </CardContent>
        </Card>
      )}

      {/* Table */}
      {showTable && (
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-4 w-4" />
                  <Skeleton className="h-4 flex-1" />
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
