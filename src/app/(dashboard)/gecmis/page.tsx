import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ChartWrapper } from '@/components/dashboard/chart-wrapper'
import { CustomLineChart } from '@/components/charts/line-chart'
import { getHistoryStats } from '@/lib/data/dashboard'
import { TrendingUp, TrendingDown, BarChart3 } from 'lucide-react'

async function HistoryContent() {
  const historyStats = await getHistoryStats()

  // Format data for line charts
  const priceChangeData = historyStats.last30DaysPriceChanges.map((item) => ({
    name: new Date(item.date).toLocaleDateString('tr-TR', {
      month: 'short',
      day: 'numeric',
    }),
    value: item.count,
  }))

  const stockChangeData = historyStats.last30DaysStockChanges.map((item) => ({
    name: new Date(item.date).toLocaleDateString('tr-TR', {
      month: 'short',
      day: 'numeric',
    }),
    value: item.count,
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Geçmiş Analizleri</h1>
        <p className="text-muted-foreground">
          Fiyat, stok ve kategori değişikliklerinin geçmiş analizi
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Toplam Fiyat Değişiklikleri"
          value={historyStats.totalPriceChanges.toLocaleString('tr-TR')}
          icon={TrendingUp}
          description="Tüm zamanlar"
        />
        <StatsCard
          title="Toplam Stok Değişiklikleri"
          value={historyStats.totalStockChanges.toLocaleString('tr-TR')}
          icon={TrendingDown}
          description="Tüm zamanlar"
        />
        <StatsCard
          title="Toplam Kategori Değişiklikleri"
          value={historyStats.totalCategoryChanges.toLocaleString('tr-TR')}
          icon={BarChart3}
          description="Tüm zamanlar"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <ChartWrapper
          title="Son 30 Gün Fiyat Değişiklikleri"
          description="Günlük fiyat değişikliği sayıları"
        >
          <CustomLineChart
            data={priceChangeData}
            dataKey="value"
            xAxisKey="name"
            lineColor="#8884d8"
          />
        </ChartWrapper>

        <ChartWrapper
          title="Son 30 Gün Stok Değişiklikleri"
          description="Günlük stok değişikliği sayıları"
        >
          <CustomLineChart
            data={stockChangeData}
            dataKey="value"
            xAxisKey="name"
            lineColor="#82ca9d"
          />
        </ChartWrapper>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Fiyat Değişiklikleri Özeti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Son 30 gün toplam
                </span>
                <span className="font-semibold">
                  {historyStats.last30DaysPriceChanges
                    .reduce((sum, item) => sum + item.count, 0)
                    .toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Günlük ortalama
                </span>
                <span className="font-semibold">
                  {Math.round(
                    historyStats.last30DaysPriceChanges.reduce(
                      (sum, item) => sum + item.count,
                      0,
                    ) / 30,
                  ).toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  En yoğun gün
                </span>
                <span className="font-semibold">
                  {(() => {
                    const maxDay = historyStats.last30DaysPriceChanges.reduce(
                      (max, item) => (item.count > max.count ? item : max),
                      historyStats.last30DaysPriceChanges[0] || {
                        count: 0,
                        date: '',
                      },
                    )
                    return maxDay.count > 0
                      ? `${maxDay.count} değişiklik`
                      : 'Veri yok'
                  })()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Stok Değişiklikleri Özeti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Son 30 gün toplam
                </span>
                <span className="font-semibold">
                  {historyStats.last30DaysStockChanges
                    .reduce((sum, item) => sum + item.count, 0)
                    .toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Günlük ortalama
                </span>
                <span className="font-semibold">
                  {Math.round(
                    historyStats.last30DaysStockChanges.reduce(
                      (sum, item) => sum + item.count,
                      0,
                    ) / 30,
                  ).toLocaleString('tr-TR')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  En yoğun gün
                </span>
                <span className="font-semibold">
                  {(() => {
                    const maxDay = historyStats.last30DaysStockChanges.reduce(
                      (max, item) => (item.count > max.count ? item : max),
                      historyStats.last30DaysStockChanges[0] || {
                        count: 0,
                        date: '',
                      },
                    )
                    return maxDay.count > 0
                      ? `${maxDay.count} değişiklik`
                      : 'Veri yok'
                  })()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function HistoryLoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96 mt-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-20" />
              <Skeleton className="h-3 w-24 mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-64 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default function HistoryPage() {
  return (
    <Suspense fallback={<HistoryLoadingSkeleton />}>
      <HistoryContent />
    </Suspense>
  )
}
