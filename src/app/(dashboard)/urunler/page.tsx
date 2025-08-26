import { Suspense } from 'react'
import {
  Package,
  Palette,
  Ruler,
  TrendingUp,
  TrendingDown,
  BarChart3,
} from 'lucide-react'
import { getProductStats } from '@/lib/data/dashboard'
import { StatsCard } from '@/components/dashboard/stats-card'
import { CustomBarChart } from '@/components/charts/bar-chart'
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

async function ProductStatsContent() {
  const productStats = await getProductStats()

  // Format price helper
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR', {
      style: 'currency',
      currency: 'TRY',
      minimumFractionDigits: 2,
    }).format(price / 100) // Convert from kuruş to TL
  }

  // Prepare data for brand distribution bar chart
  const brandChartData = productStats.brandDistribution.map((item) => ({
    name: item.brand,
    value: item.count,
  }))

  // Prepare data for price distribution bar chart
  const priceChartData = productStats.priceDistribution.map((item) => ({
    name: item.range,
    value: item.count,
  }))

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Toplam Ürün"
          value={productStats.totalProducts}
          icon={Package}
          description="Katalogdaki toplam ürün sayısı"
        />
        <StatsCard
          title="Renk Varyantları"
          value={productStats.totalColors}
          icon={Palette}
          description="Toplam renk seçeneği sayısı"
        />
        <StatsCard
          title="Beden Varyantları"
          value={productStats.totalSizes}
          icon={Ruler}
          description="Toplam beden seçeneği sayısı"
        />
        <StatsCard
          title="Fiyat Aralığı"
          value={
            productStats.priceRange.max > 0
              ? `${formatPrice(productStats.priceRange.min)} - ${formatPrice(
                  productStats.priceRange.max,
                )}`
              : 'Veri yok'
          }
          icon={BarChart3}
          description="En düşük - En yüksek fiyat"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Brand Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Markaya Göre Ürün Dağılımı</CardTitle>
          </CardHeader>
          <CardContent>
            {brandChartData.length > 0 ? (
              <CustomBarChart
                data={brandChartData}
                height={400}
                barColor="#3b82f6"
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

        {/* Price Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Fiyat Aralıklarına Göre Dağılım</CardTitle>
          </CardHeader>
          <CardContent>
            {priceChartData.length > 0 ? (
              <CustomBarChart
                data={priceChartData}
                height={400}
                barColor="#10b981"
                showTooltip={true}
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">
                    Fiyat dağılımı için yeterli veri yok
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Product Lists */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Most Expensive Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-500" />
              En Pahalı Ürünler
            </CardTitle>
          </CardHeader>
          <CardContent>
            {productStats.expensiveProducts.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ürün Adı</TableHead>
                    <TableHead>Marka</TableHead>
                    <TableHead className="text-right">Fiyat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productStats.expensiveProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.brand}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-red-600">
                        {formatPrice(product.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">Fiyat bilgisi olan ürün bulunmuyor</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Cheapest Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-green-500" />
              En Ucuz Ürünler
            </CardTitle>
          </CardHeader>
          <CardContent>
            {productStats.cheapProducts.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ürün Adı</TableHead>
                    <TableHead>Marka</TableHead>
                    <TableHead className="text-right">Fiyat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productStats.cheapProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{product.brand}</Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-green-600">
                        {formatPrice(product.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex h-[200px] items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="text-lg font-medium">Veri bulunamadı</p>
                  <p className="text-sm">Fiyat bilgisi olan ürün bulunmuyor</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ProductStatsLoading() {
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
        {[...Array(2)].map((_, i) => (
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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Loading Tables */}
        {[...Array(2)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="h-6 w-32 animate-pulse rounded bg-muted" />
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="flex space-x-4">
                    <div className="h-4 w-32 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-20 animate-pulse rounded bg-muted" />
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

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">
          Ürün İstatistikleri
        </h1>
        <p className="text-muted-foreground">
          Ürün kataloğundaki detaylı istatistikler ve dağılımlar
        </p>
      </div>

      <Suspense fallback={<ProductStatsLoading />}>
        <ProductStatsContent />
      </Suspense>
    </div>
  )
}
