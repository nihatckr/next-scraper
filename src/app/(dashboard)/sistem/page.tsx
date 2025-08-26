import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Badge } from '@/components/ui/badge'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ChartWrapper } from '@/components/dashboard/chart-wrapper'
import { CustomBarChart } from '@/components/charts/bar-chart'
import { getSystemStats } from '@/lib/data/dashboard'
import {
  Activity,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  Server,
  Zap,
} from 'lucide-react'

async function SystemContent() {
  const systemStats = await getSystemStats()

  // Format data for activity chart
  const activityData = systemStats.last7DaysActivity.map((item) => ({
    name: new Date(item.date).toLocaleDateString('tr-TR', {
      weekday: 'short',
      day: 'numeric',
    }),
    toplam: item.syncs,
    başarılı: item.success,
    başarısız: item.failed,
  }))

  // Format last sync date
  const formatLastSync = (date: Date | null) => {
    if (!date) return 'Henüz senkronizasyon yapılmamış'

    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    if (diffHours > 24) {
      return date.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } else if (diffHours > 0) {
      return `${diffHours} saat ${diffMinutes} dakika önce`
    } else {
      return `${diffMinutes} dakika önce`
    }
  }

  // Get status color based on success rate
  const getStatusColor = (rate: number) => {
    if (rate >= 95) return 'bg-green-500'
    if (rate >= 80) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const getStatusText = (rate: number) => {
    if (rate >= 95) return 'Mükemmel'
    if (rate >= 80) return 'İyi'
    return 'Dikkat Gerekli'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sistem Durumu</h1>
        <p className="text-muted-foreground">
          Senkronizasyon işlemleri ve sistem sağlığı istatistikleri
        </p>
      </div>

      {/* Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Sistem Durumu Özeti
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${getStatusColor(
                  systemStats.successRate,
                )}`}
              />
              <div>
                <p className="text-sm font-medium">
                  {getStatusText(systemStats.successRate)}
                </p>
                <p className="text-xs text-muted-foreground">Sistem Durumu</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">
                  {formatLastSync(systemStats.lastSyncDate)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Son Senkronizasyon
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">
                  %{systemStats.successRate}
                </p>
                <p className="text-xs text-muted-foreground">Başarı Oranı</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">
                  {systemStats.last7DaysActivity.reduce(
                    (sum, day) => sum + day.syncs,
                    0,
                  )}
                </p>
                <p className="text-xs text-muted-foreground">
                  Son 7 Gün Aktivite
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Toplam Senkronizasyon"
          value={systemStats.totalSyncs.toLocaleString('tr-TR')}
          icon={Activity}
          description="Tüm zamanlar"
        />
        <StatsCard
          title="Başarılı İşlemler"
          value={systemStats.successfulSyncs.toLocaleString('tr-TR')}
          icon={CheckCircle}
          description="Başarıyla tamamlanan"
          trend={{
            value: systemStats.successRate,
            isPositive: systemStats.successRate >= 80,
          }}
        />
        <StatsCard
          title="Başarısız İşlemler"
          value={systemStats.failedSyncs.toLocaleString('tr-TR')}
          icon={XCircle}
          description="Hata ile sonuçlanan"
          trend={{
            value: 100 - systemStats.successRate,
            isPositive: false,
          }}
        />
        <StatsCard
          title="Başarı Oranı"
          value={`%${systemStats.successRate}`}
          icon={TrendingUp}
          description="Genel performans"
          trend={{
            value: systemStats.successRate,
            isPositive: systemStats.successRate >= 80,
          }}
        />
      </div>

      {/* Activity Chart */}
      <ChartWrapper
        title="Son 7 Gün Senkronizasyon Aktivitesi"
        description="Günlük senkronizasyon işlem sayıları ve başarı durumları"
      >
        <CustomBarChart
          data={activityData}
          xAxisKey="name"
          showLegend={true}
          bars={[
            { dataKey: 'başarılı', color: '#22c55e', name: 'Başarılı' },
            { dataKey: 'başarısız', color: '#ef4444', name: 'Başarısız' },
          ]}
        />
      </ChartWrapper>

      {/* Detailed Stats */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Başarılı İşlemler Detayı
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Toplam başarılı işlem
                </span>
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700"
                >
                  {systemStats.successfulSyncs.toLocaleString('tr-TR')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Son 7 gün başarılı
                </span>
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700"
                >
                  {systemStats.last7DaysActivity
                    .reduce((sum, day) => sum + day.success, 0)
                    .toLocaleString('tr-TR')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Günlük ortalama (7 gün)
                </span>
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700"
                >
                  {Math.round(
                    systemStats.last7DaysActivity.reduce(
                      (sum, day) => sum + day.success,
                      0,
                    ) / 7,
                  ).toLocaleString('tr-TR')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  En aktif gün (7 gün)
                </span>
                <Badge
                  variant="secondary"
                  className="bg-green-50 text-green-700"
                >
                  {(() => {
                    const maxDay = systemStats.last7DaysActivity.reduce(
                      (max, day) => (day.success > max.success ? day : max),
                      systemStats.last7DaysActivity[0] || {
                        success: 0,
                        date: '',
                      },
                    )
                    return maxDay.success > 0
                      ? `${maxDay.success} işlem`
                      : 'Veri yok'
                  })()}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              Başarısız İşlemler Detayı
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Toplam başarısız işlem
                </span>
                <Badge variant="secondary" className="bg-red-50 text-red-700">
                  {systemStats.failedSyncs.toLocaleString('tr-TR')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Son 7 gün başarısız
                </span>
                <Badge variant="secondary" className="bg-red-50 text-red-700">
                  {systemStats.last7DaysActivity
                    .reduce((sum, day) => sum + day.failed, 0)
                    .toLocaleString('tr-TR')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Günlük ortalama (7 gün)
                </span>
                <Badge variant="secondary" className="bg-red-50 text-red-700">
                  {Math.round(
                    systemStats.last7DaysActivity.reduce(
                      (sum, day) => sum + day.failed,
                      0,
                    ) / 7,
                  ).toLocaleString('tr-TR')}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  Hata oranı
                </span>
                <Badge variant="secondary" className="bg-red-50 text-red-700">
                  %{(100 - systemStats.successRate).toFixed(1)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performans Öngörüleri
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-green-600">
                {systemStats.successRate >= 95
                  ? '🟢'
                  : systemStats.successRate >= 80
                  ? '🟡'
                  : '🔴'}
              </div>
              <p className="text-sm font-medium mt-2">Sistem Sağlığı</p>
              <p className="text-xs text-muted-foreground">
                {systemStats.successRate >= 95
                  ? 'Sistem mükemmel çalışıyor'
                  : systemStats.successRate >= 80
                  ? 'Sistem iyi durumda'
                  : 'Sistem dikkat gerektiriyor'}
              </p>
            </div>

            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-blue-600">
                {systemStats.last7DaysActivity.reduce(
                  (sum, day) => sum + day.syncs,
                  0,
                ) > 0
                  ? '📈'
                  : '📉'}
              </div>
              <p className="text-sm font-medium mt-2">Aktivite Durumu</p>
              <p className="text-xs text-muted-foreground">
                {systemStats.last7DaysActivity.reduce(
                  (sum, day) => sum + day.syncs,
                  0,
                ) > 0
                  ? 'Son 7 günde aktif'
                  : 'Son 7 günde aktivite yok'}
              </p>
            </div>

            <div className="text-center p-4 rounded-lg bg-muted/50">
              <div className="text-2xl font-bold text-purple-600">
                {systemStats.lastSyncDate &&
                new Date().getTime() - systemStats.lastSyncDate.getTime() <
                  24 * 60 * 60 * 1000
                  ? '🔄'
                  : '⏰'}
              </div>
              <p className="text-sm font-medium mt-2">Senkronizasyon</p>
              <p className="text-xs text-muted-foreground">
                {systemStats.lastSyncDate &&
                new Date().getTime() - systemStats.lastSyncDate.getTime() <
                  24 * 60 * 60 * 1000
                  ? 'Son 24 saatte güncellendi'
                  : 'Güncelleme gerekebilir'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SystemLoadingSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96 mt-2" />
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-3 h-3 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-20 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
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

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-4 w-96" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full" />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-muted/50">
                <Skeleton className="h-8 w-8 mx-auto" />
                <Skeleton className="h-4 w-24 mx-auto mt-2" />
                <Skeleton className="h-3 w-32 mx-auto mt-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function SystemPage() {
  return (
    <Suspense fallback={<SystemLoadingSkeleton />}>
      <SystemContent />
    </Suspense>
  )
}
