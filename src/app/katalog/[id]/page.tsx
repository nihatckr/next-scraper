import { notFound } from 'next/navigation'
import { getProductById } from '@/lib/data/catalog'
import { ProductDetail } from '@/components/catalog/product-detail'
import { Breadcrumb } from '@/components/dashboard/breadcrumb'

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params
  const productId = parseInt(resolvedParams.id)

  if (isNaN(productId)) {
    notFound()
  }

  const product = await getProductById(productId)

  if (!product) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: 'Dashboard', href: '/' },
          { label: 'Katalog', href: '/katalog' },
          { label: product.name, href: `/katalog/${product.id}` },
        ]}
      />

      <ProductDetail product={product} />
    </div>
  )
}
