import { Suspense } from 'react'
import { Package, Tag, Calendar, TrendingUp } from 'lucide-react'
import { getBrandStats } from '@/lib/data/dashboard'
import { StatsCard } from '@/components/dashboard/stats-card'
import { CustomPieChart } from '@/components/charts/pie-chart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

async function BrandStatsContent() {
  const brandStats = await getBrandStats()

  // Calculate totals for stats cards
  const totalBrands = brandStats.length
  const totalProducts = brandStats.reduce(
    (sum: number, brand) => sum + brand.productCount,
    0,
  )
  const totalCategories = brandStats.reduce(
    (sum: number, brand) => sum + brand.categoryCount,
    0,
  )
  const avgProductsPerBrand =
    totalBrands > 0 ? Math.round(totalProducts / totalBrands) : 0

  // Prepare data for pie chart
  const pieChartData = brandStats.map((brand) => ({
    name: brand.name,
    value: brand.productCount,
  }))

  // Format date helper
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date)
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Toplam Marka"
          value={totalBrands}
          icon={Tag}
          description="Sistemdeki toplam marka sayısı"
        />
        <StatsCard
          title="Toplam Ürün"
          value={totalProducts}
          icon={Package}
          description="Tüm markalardaki ürün sayısı"
        />
        <StatsCard
          title="Toplam Kategori"
          value={totalCategories}
          icon={Calendar}
          description="Tüm markalardaki kategori sayısı"
        />
        <StatsCard
          title="Ortalama Ürün/Marka"
          value={avgProductsPerBrand}
          icon={TrendingUp}
          description="Marka başına düşen ortalama ürün"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Marka Dağılımı</CardTitle>
          </CardHeader>
          <CardContent>
            {pieChartData.length > 0 ? (
              <CustomPieChart
                data={pieChartData}
                height={400}
                showLegend={true}
                showTooltip={true}
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">
                    Marka dağılımı için yeterli veri yok
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Brand Table */}
        <Card>
          <CardHeader>
            <CardTitle>Marka Detayları</CardTitle>
          </CardHeader>
          <CardContent>
            {brandStats.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Marka</TableHead>
                    <TableHead className="text-center">Ürün</TableHead>
                    <TableHead className="text-center">Kategori</TableHead>
                    <TableHead>Oluşturulma</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {brandStats.map((brand) => (
                    <TableRow key={brand.id}>
                      <TableCell className="font-medium">
                        {brand.name}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">{brand.productCount}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{brand.categoryCount}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatDate(brand.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Henüz marka bulunamadı</p>
                  <p className="text-sm">
                    Veritabanında marka verisi bulunmuyor
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function BrandStatsLoading() {
  return (
    <div className="space-y-6">
      {/* Loading Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
            </CardHeader>
            <CardContent>
              <div className="h-8 w-16 animate-pulse rounded bg-muted" />
              <div className="mt-1 h-3 w-32 animate-pulse rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Loading Chart */}
        <Card>
          <CardHeader>
            <div className="h-6 w-32 animate-pulse rounded bg-muted" />
          </CardHeader>
          <CardContent>
            <div className="h-[400px] animate-pulse rounded bg-muted" />
          </CardContent>
        </Card>

        {/* Loading Table */}
        <Card>
          <CardHeader>
            <div className="h-6 w-32 animate-pulse rounded bg-muted" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-12 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-12 animate-pulse rounded bg-muted" />
                  <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function BrandsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Marka İstatistikleri
        </h1>
        <p className="text-muted-foreground">
          Sistemdeki markaların detaylı istatistikleri ve dağılımları
        </p>
      </div>

      <Suspense fallback={<BrandStatsLoading />}>
        <BrandStatsContent />
      </Suspense>
    </div>
  )
}
