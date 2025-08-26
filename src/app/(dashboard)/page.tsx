import {
  Tag,
  Package,
  FolderTree,
  Users,
  Activity,
  Clock,
  Warehouse,
  History,
} from 'lucide-react'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ChartWrapper } from '@/components/dashboard/chart-wrapper'
import { CustomPieChart } from '@/components/charts/pie-chart'
import { CustomBarChart } from '@/components/charts/bar-chart'
import { CustomLineChart } from '@/components/charts/line-chart'
import prisma from '@/lib/prisma'

export default async function DashboardPage() {
  // Fetch real data from database
  const [
    brandCount,
    productCount,
    categoryCount,
    userCount,
    stockCount,
    historyCount,
    lastSync,
    syncStats,
    brandData,
    categoryData,
    monthlyData,
  ] = await Promise.all([
    // Count queries
    prisma.brand.count(),
    prisma.product.count(),
    prisma.subCategory.count(),
    prisma.user.count(),
    prisma.productStock.count(),
    prisma.priceHistory.count(),

    // Last synchronization data
    prisma.dataSync.findFirst({
      orderBy: {
        timestamp: 'desc',
      },
    }),

    // Sync statistics (success rate)
    prisma.dataSync.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
    }),

    // Brand distribution data
    prisma.brand.findMany({
      include: {
        _count: {
          select: { products: true },
        },
      },
    }),

    // Category distribution data (top level categories)
    prisma.subCategory.findMany({
      where: {
        level: { lte: 2 }, // Get top level categories
      },
      select: {
        categoryName: true,
        productCount: true,
      },
      orderBy: {
        productCount: 'desc',
      },
      take: 6,
    }),

    // Monthly product trend (last 6 months)
    prisma.product.groupBy({
      by: ['createdAt'],
      _count: {
        id: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }),
  ])

  // Transform brand data for pie chart
  const brandChartData = brandData
    .map((brand) => ({
      name: brand.name,
      value: brand._count.products,
    }))
    .filter((item) => item.value > 0)

  // Transform category data for bar chart
  const categoryChartData = categoryData
    .map((category) => ({
      name: category.categoryName,
      value: category.productCount || 0,
    }))
    .filter((item) => item.value > 0)

  // Transform monthly data for line chart
  const monthlyChartData = monthlyData.reduce(
    (acc: { [key: string]: number }, item) => {
      const month = new Date(item.createdAt).toLocaleDateString('tr-TR', {
        month: 'short',
      })
      acc[month] = (acc[month] || 0) + item._count.id
      return acc
    },
    {},
  )

  const monthlyChartArray = Object.entries(monthlyChartData)
    .map(([name, value]) => ({ name, value }))
    .slice(-6) // Last 6 months

  // Calculate sync success rate
  const totalSyncs = syncStats.reduce(
    (acc, stat) => acc + stat._count.status,
    0,
  )
  const successfulSyncs =
    syncStats.find((stat) => stat.status === 'success')?._count.status || 0
  const syncSuccessRate =
    totalSyncs > 0 ? Math.round((successfulSyncs / totalSyncs) * 100) : 0

  // Format last sync date
  const lastSyncDate = lastSync?.timestamp
    ? new Date(lastSync.timestamp).toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Henüz senkronizasyon yapılmamış'

  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Toplam Markalar"
          value={brandCount.toString()}
          icon={Tag}
          description="Aktif marka sayısı"
          href="/markalar"
        />
        <StatsCard
          title="Toplam Ürünler"
          value={productCount.toString()}
          icon={Package}
          description="Katalogdaki ürün sayısı"
          href="/urunler"
        />
        <StatsCard
          title="Toplam Kategoriler"
          value={categoryCount.toString()}
          icon={FolderTree}
          description="Ana ve alt kategoriler"
          href="/kategoriler"
        />
        <StatsCard
          title="Toplam Kullanıcılar"
          value={userCount.toString()}
          icon={Users}
          description="Kayıtlı kullanıcı sayısı"
        />
      </div>

      {/* Additional Stats Cards */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Stok Kayıtları"
          value={stockCount.toString()}
          icon={Warehouse}
          description="Toplam stok kayıt sayısı"
          href="/stok"
        />
        <StatsCard
          title="Geçmiş Kayıtları"
          value={historyCount.toString()}
          icon={History}
          description="Fiyat değişim kayıtları"
          href="/gecmis"
        />
        <StatsCard
          title="Son Senkronizasyon"
          value={lastSyncDate}
          icon={Clock}
          description={
            lastSync?.status === 'success'
              ? 'Başarılı'
              : lastSync?.status === 'failed'
              ? 'Başarısız'
              : 'Durum bilinmiyor'
          }
          href="/sistem"
          compact={typeof lastSyncDate === 'string' && lastSyncDate.length > 20}
        />
        <StatsCard
          title="Sistem Durumu"
          value={`%${syncSuccessRate}`}
          icon={Activity}
          description="Senkronizasyon başarı oranı"
          trend={
            syncSuccessRate >= 90
              ? {
                  value: syncSuccessRate,
                  isPositive: true,
                  label: 'İyi durumda',
                }
              : {
                  value: syncSuccessRate,
                  isPositive: false,
                  label: 'Dikkat gerekli',
                }
          }
          href="/sistem"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <ChartWrapper
          title="Marka Dağılımı"
          description="Ürün sayısına göre marka dağılımı"
        >
          {brandChartData.length > 0 ? (
            <CustomPieChart data={brandChartData} height={250} />
          ) : (
            <div className="flex items-center justify-center h-[250px] text-muted-foreground">
              Henüz veri bulunmuyor
            </div>
          )}
        </ChartWrapper>

        <ChartWrapper
          title="Kategori Dağılımı"
          description="En popüler ürün kategorileri"
        >
          {categoryChartData.length > 0 ? (
            <CustomBarChart
              data={categoryChartData}
              height={250}
              barColor="#00C49F"
            />
          ) : (
            <div className="flex items-center justify-center h-[250px] text-muted-foreground">
              Henüz veri bulunmuyor
            </div>
          )}
        </ChartWrapper>
      </div>

      <div className="grid gap-4">
        <ChartWrapper
          title="Aylık Ürün Trendi"
          description="Son 6 aydaki ürün ekleme trendi"
        >
          {monthlyChartArray.length > 0 ? (
            <CustomLineChart
              data={monthlyChartArray}
              height={300}
              lineColor="#8884d8"
            />
          ) : (
            <div className="flex items-center justify-center h-[300px] text-muted-foreground">
              Henüz veri bulunmuyor
            </div>
          )}
        </ChartWrapper>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-semibold mb-4">Hoş Geldiniz</h3>
        <p className="text-muted-foreground">
          Bu dashboard e-ticaret veritabanınızdaki tüm verileri
          görselleştirmenizi sağlar. Sol menüden farklı istatistik sayfalarına
          erişebilir, katalog bölümünden ürünleri inceleyebilirsiniz.
        </p>
      </div>
    </div>
  )
}
