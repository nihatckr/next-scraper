import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, ArrowLeft } from 'lucide-react'

export default function ProductNotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardTitle>Ürün Bulunamadı</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Aradığınız ürün bulunamadı. Ürün kaldırılmış olabilir veya yanlış
            bir bağlantı kullanıyor olabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button asChild variant="outline">
              <Link href="/katalog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kataloğa Dön
              </Link>
            </Button>
            <Button asChild>
              <Link href="/">Dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
