import { Suspense } from 'react'
import {
  Package,
  CheckCircle,
  XCircle,
  BarChart3,
  Palette,
  Ruler,
} from 'lucide-react'
import { getStockStats } from '@/lib/data/dashboard'
import { StatsCard } from '@/components/dashboard/stats-card'
import { CustomBarChart } from '@/components/charts/bar-chart'
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

async function StockStatsContent() {
  const stockStats = await getStockStats()

  // Calculate stock availability percentage
  const totalProducts =
    stockStats.inStockProducts + stockStats.outOfStockProducts
  const stockAvailabilityPercentage =
    totalProducts > 0
      ? Math.round((stockStats.inStockProducts / totalProducts) * 100)
      : 0

  // Prepare data for brand stock distribution chart
  const brandStockChartData = stockStats.brandDistribution.map((item) => ({
    name: item.brand,
    inStock: item.inStock,
    outOfStock: item.outOfStock,
  }))

  // Prepare data for size distribution pie chart
  const sizeChartData = stockStats.sizeDistribution.map((item) => ({
    name: item.size,
    value: item.count,
  }))

  // Prepare data for color distribution pie chart
  const colorChartData = stockStats.colorDistribution.map((item) => ({
    name: item.color,
    value: item.count,
  }))

  // Prepare data for stock status pie chart
  const stockStatusData = [
    {
      name: 'Stokta Var',
      value: stockStats.inStockProducts,
      color: '#10b981',
    },
    {
      name: 'Stokta Yok',
      value: stockStats.outOfStockProducts,
      color: '#ef4444',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Toplam Stok Kaydı"
          value={stockStats.totalStockRecords}
          icon={Package}
          description="Sistemdeki toplam stok kayıt sayısı"
        />
        <StatsCard
          title="Stokta Var"
          value={stockStats.inStockProducts}
          icon={CheckCircle}
          description="Stokta bulunan ürün sayısı"
          trend={{
            value: stockAvailabilityPercentage,
            isPositive: stockAvailabilityPercentage >= 50,
          }}
        />
        <StatsCard
          title="Stokta Yok"
          value={stockStats.outOfStockProducts}
          icon={XCircle}
          description="Stokta bulunmayan ürün sayısı"
          trend={{
            value: 100 - stockAvailabilityPercentage,
            isPositive: false,
          }}
        />
        <StatsCard
          title="Stok Oranı"
          value={`%${stockAvailabilityPercentage}`}
          icon={BarChart3}
          description="Genel stok bulunabilirlik oranı"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Stock Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Stok Durumu Dağılımı</CardTitle>
          </CardHeader>
          <CardContent>
            {stockStatusData.some((item) => item.value > 0) ? (
              <CustomPieChart
                data={stockStatusData}
                height={400}
                showLegend={true}
                showTooltip={true}
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">Stok durumu için yeterli veri yok</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Brand Stock Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Marka Bazlı Stok Dağılımı</CardTitle>
          </CardHeader>
          <CardContent>
            {brandStockChartData.length > 0 ? (
              <div className="h-[400px]">
                <CustomBarChart
                  data={brandStockChartData.map((item) => ({
                    name: item.name,
                    value: item.inStock + item.outOfStock,
                  }))}
                  height={400}
                  barColor="#3b82f6"
                  showTooltip={true}
                />
              </div>
            ) : (
              <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">
                    Marka stok dağılımı için yeterli veri yok
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Size Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="h-5 w-5" />
              Beden Bazlı Stok Dağılımı
            </CardTitle>
          </CardHeader>
          <CardContent>
            {sizeChartData.length > 0 ? (
              <CustomPieChart
                data={sizeChartData}
                height={400}
                showLegend={true}
                showTooltip={true}
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">
                    Beden dağılımı için yeterli veri yok
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Color Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Renk Bazlı Stok Dağılımı (Top 10)
            </CardTitle>
          </CardHeader>
          <CardContent>
            {colorChartData.length > 0 ? (
              <CustomPieChart
                data={colorChartData}
                height={400}
                showLegend={true}
                showTooltip={true}
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">Renk dağılımı için yeterli veri yok</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Brand Stock Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Marka Bazlı Stok Detayları</CardTitle>
        </CardHeader>
        <CardContent>
          {stockStats.brandDistribution.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Marka</TableHead>
                  <TableHead className="text-center">Stokta Var</TableHead>
                  <TableHead className="text-center">Stokta Yok</TableHead>
                  <TableHead className="text-center">Toplam</TableHead>
                  <TableHead className="text-center">Stok Oranı</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stockStats.brandDistribution.map((brand) => {
                  const total = brand.inStock + brand.outOfStock
                  const stockRate =
                    total > 0 ? Math.round((brand.inStock / total) * 100) : 0

                  return (
                    <TableRow key={brand.brand}>
                      <TableCell className="font-medium">
                        {brand.brand}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          {brand.inStock}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="default"
                          className="bg-red-100 text-red-800"
                        >
                          {brand.outOfStock}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline">{total}</Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="secondary"
                          className={
                            stockRate >= 50
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }
                        >
                          %{stockRate}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          ) : (
            <div className="flex h-[200px] items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-lg font-medium">Veri bulunamadı</p>
                <p className="text-sm">Stok verisi bulunmuyor</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function StockStatsLoading() {
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
        {/* Loading Charts */}
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="h-6 w-48 animate-pulse rounded bg-muted" />
            </CardHeader>
            <CardContent>
              <div className="h-[400px] animate-pulse rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Loading Table */}
      <Card>
        <CardHeader>
          <div className="h-6 w-48 animate-pulse rounded bg-muted" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                <div className="h-4 w-16 animate-pulse rounded bg-muted" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function StockPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Stok İstatistikleri
        </h1>
        <p className="text-muted-foreground">
          Ürün stoklarının detaylı istatistikleri ve dağılımları
        </p>
      </div>

      <Suspense fallback={<StockStatsLoading />}>
        <StockStatsContent />
      </Suspense>
    </div>
  )
}
