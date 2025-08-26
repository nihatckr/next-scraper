import { getCategoryStats } from '@/lib/data/dashboard'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { StatsCard } from '@/components/dashboard/stats-card'
import { ChartWrapper } from '@/components/dashboard/chart-wrapper'
import { CustomPieChart } from '@/components/charts/pie-chart'
import { FolderTree, Layers, Users } from 'lucide-react'
import type { CategoryNode } from '@/lib/types'

export default async function KategorilerPage() {
  const categoryStats = await getCategoryStats()

  const genderChartData = categoryStats.genderDistribution.map((item) => ({
    name: item.gender,
    value: item.count,
  }))

  const CategoryTree = ({
    nodes,
    level = 0,
  }: {
    nodes: CategoryNode[]
    level?: number
  }) => {
    if (!nodes.length) return null

    return (
      <ul className={`space-y-2 ${level > 0 ? 'ml-6 mt-2' : ''}`}>
        {nodes.map((node) => (
          <li key={node.id} className="border-l-2 border-gray-200 pl-4">
            <div className="flex items-center justify-between py-1">
              <span className="font-medium text-gray-900">{node.name}</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {node.productCount} ürün
              </span>
            </div>
            {node.children.length > 0 && (
              <CategoryTree nodes={node.children} level={level + 1} />
            )}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Kategori İstatistikleri
        </h1>
        <p className="text-muted-foreground">
          Kategori yapısı ve dağılım analizi
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Ana Kategoriler"
          value={categoryStats.totalMainCategories}
          icon={FolderTree}
        />
        <StatsCard
          title="Alt Kategoriler"
          value={categoryStats.totalSubCategories}
          icon={Layers}
        />
        <StatsCard
          title="Cinsiyet Kategorileri"
          value={categoryStats.genderDistribution.length}
          icon={Users}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Gender Distribution Chart */}
        <ChartWrapper
          title="Cinsiyet Bazlı Kategori Dağılımı"
          description="Kategorilerin cinsiyet bazında dağılımı"
        >
          <CustomPieChart data={genderChartData} />
        </ChartWrapper>

        {/* Category Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Kategori Özeti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium">Toplam Ana Kategori</span>
                <span className="text-2xl font-bold text-blue-600">
                  {categoryStats.totalMainCategories}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium">Toplam Alt Kategori</span>
                <span className="text-2xl font-bold text-green-600">
                  {categoryStats.totalSubCategories}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="font-medium">Ortalama Alt Kategori</span>
                <span className="text-2xl font-bold text-purple-600">
                  {categoryStats.totalMainCategories > 0
                    ? Math.round(
                        categoryStats.totalSubCategories /
                          categoryStats.totalMainCategories,
                      )
                    : 0}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Hierarchy */}
      <Card>
        <CardHeader>
          <CardTitle>Kategori Hiyerarşisi</CardTitle>
          <p className="text-sm text-muted-foreground">
            Tüm kategorilerin ağaç yapısında görünümü
          </p>
        </CardHeader>
        <CardContent>
          {categoryStats.hierarchy.length > 0 ? (
            <div className="max-h-96 overflow-y-auto">
              <CategoryTree nodes={categoryStats.hierarchy} />
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <FolderTree className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <p>Henüz kategori verisi bulunmuyor</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
