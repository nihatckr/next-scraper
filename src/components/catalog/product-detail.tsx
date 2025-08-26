'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { formatPrice } from '@/lib/utils'
import type { ProductDetail as ProductDetailType } from '@/lib/types'

interface ProductDetailProps {
  product: ProductDetailType
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColorId, setSelectedColorId] = useState<number | null>(
    product.colors[0]?.id || null,
  )
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  // Get images for selected color or all images if no color selected
  const availableImages = selectedColorId
    ? product.images.filter((img) => img.colorId === selectedColorId)
    : product.images.filter((img) => img.kind === 'main')

  // Get current image
  const currentImage = availableImages[selectedImageIndex] || availableImages[0]

  // Get stock for selected color
  const colorStock = selectedColorId
    ? product.stock.filter(
        (stock) =>
          product.colors.find((c) => c.id === selectedColorId)?.name ===
          stock.colorName,
      )
    : product.stock

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-square relative overflow-hidden rounded-lg border bg-muted">
          {currentImage ? (
            <Image
              src={currentImage.url}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Resim bulunamadı
            </div>
          )}
        </div>

        {/* Image Thumbnails */}
        {availableImages.length > 1 && (
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-2">
            {availableImages.slice(0, 8).map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-square relative overflow-hidden rounded border-2 transition-all hover:scale-105 ${
                  selectedImageIndex === index
                    ? 'border-primary ring-2 ring-primary/20'
                    : 'border-muted hover:border-muted-foreground'
                }`}
              >
                <Image
                  src={image.url}
                  alt={`${product.name} - ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 16vw, 12vw"
                />
              </button>
            ))}
            {availableImages.length > 8 && (
              <div className="aspect-square flex items-center justify-center rounded border-2 border-dashed border-muted text-muted-foreground text-xs">
                +{availableImages.length - 8}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        {/* Basic Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{product.brandName}</Badge>
            <Badge variant="outline">#{product.productId}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
          {product.price && (
            <p className="text-2xl font-semibold text-primary mt-2">
              {formatPrice(product.price)}
            </p>
          )}
        </div>

        {/* Description */}
        {product.description && (
          <div>
            <h3 className="font-semibold mb-2">Açıklama</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
        )}

        {/* Color Selection */}
        {product.colors.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Renkler</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => {
                    setSelectedColorId(color.id)
                    setSelectedImageIndex(0) // Reset image index when color changes
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md border transition-all hover:scale-[1.02] ${
                    selectedColorId === color.id
                      ? 'border-primary bg-primary/10 ring-2 ring-primary/20'
                      : 'border-muted hover:border-muted-foreground hover:bg-muted/50'
                  }`}
                >
                  {color.hexCode && (
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: color.hexCode }}
                    />
                  )}
                  <div className="flex-1 text-left">
                    <span className="text-sm font-medium">{color.name}</span>
                    {color.price && color.price !== product.price && (
                      <div className="text-xs text-muted-foreground">
                        {formatPrice(color.price)}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size and Stock Information */}
        {colorStock.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Bedenler ve Stok Durumu</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {colorStock.map((stock) => (
                <div
                  key={stock.id}
                  className={`p-3 rounded-md border text-center transition-all hover:scale-105 ${
                    stock.availability === 'in_stock'
                      ? 'border-green-200 bg-green-50 text-green-800 hover:bg-green-100'
                      : 'border-red-200 bg-red-50 text-red-800 hover:bg-red-100'
                  }`}
                >
                  <div className="font-medium text-sm">{stock.name}</div>
                  <div className="text-xs mt-1">
                    {stock.availability === 'in_stock'
                      ? 'Stokta'
                      : 'Stokta Yok'}
                  </div>
                  {stock.price && stock.price !== product.price && (
                    <div className="text-xs mt-1 font-medium">
                      {formatPrice(stock.price)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories */}
        {product.categories.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Kategoriler</h3>
            <div className="flex flex-wrap gap-2">
              {product.categories.map((category) => (
                <Badge key={category.categoryId} variant="outline">
                  {category.gender} - {category.categoryName}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Additional Information Tabs */}
      <div className="lg:col-span-2 mt-8">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Detaylar</TabsTrigger>
            <TabsTrigger value="stock">Stok Durumu</TabsTrigger>
            <TabsTrigger value="history">Fiyat Geçmişi</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Ürün Detayları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">
                      Ürün Kodu
                    </h4>
                    <p className="font-mono">{product.productId}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">
                      Marka
                    </h4>
                    <p>{product.brandName}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">
                      Renk Sayısı
                    </h4>
                    <p>{product.colors.length} renk</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">
                      Beden Sayısı
                    </h4>
                    <p>{product.sizes.length} beden</p>
                  </div>
                </div>
                {product.description && (
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">
                      Açıklama
                    </h4>
                    <p className="text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stock" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Stok Durumu</CardTitle>
              </CardHeader>
              <CardContent>
                {product.stock.length > 0 ? (
                  <div className="space-y-4">
                    {/* Group stock by color */}
                    {product.colors.map((color) => {
                      const colorStock = product.stock.filter(
                        (stock) => stock.colorName === color.name,
                      )
                      if (colorStock.length === 0) return null

                      return (
                        <div key={color.id} className="space-y-2">
                          <div className="flex items-center gap-2">
                            {color.hexCode && (
                              <div
                                className="w-4 h-4 rounded-full border"
                                style={{ backgroundColor: color.hexCode }}
                              />
                            )}
                            <h4 className="font-medium">{color.name}</h4>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                            {colorStock.map((stock) => (
                              <div
                                key={stock.id}
                                className={`p-2 rounded border text-center text-sm ${
                                  stock.availability === 'in_stock'
                                    ? 'border-green-200 bg-green-50 text-green-800'
                                    : 'border-red-200 bg-red-50 text-red-800'
                                }`}
                              >
                                <div className="font-medium">{stock.name}</div>
                                <div className="text-xs">
                                  {stock.availability === 'in_stock'
                                    ? 'Stokta'
                                    : 'Yok'}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Stok bilgisi bulunamadı.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Fiyat Geçmişi</CardTitle>
              </CardHeader>
              <CardContent>
                {product.priceHistory.length > 0 ? (
                  <div className="space-y-2">
                    {product.priceHistory.map((history) => {
                      const color = product.colors.find(
                        (c) => c.id === history.colorId,
                      )
                      return (
                        <div
                          key={history.id}
                          className="flex items-center justify-between py-2 border-b last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            {color && (
                              <>
                                {color.hexCode && (
                                  <div
                                    className="w-3 h-3 rounded-full border"
                                    style={{ backgroundColor: color.hexCode }}
                                  />
                                )}
                                <span className="text-sm text-muted-foreground">
                                  {color.name}
                                </span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-medium">
                              {formatPrice(history.price)}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {new Date(history.timestamp).toLocaleDateString(
                                'tr-TR',
                              )}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Fiyat geçmişi bulunamadı.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
