import prisma from './lib/prisma'

async function resetDatabase() {
  console.log('🔄 Database reset işlemi başlatılıyor...\n')

  try {
    // Silinecek kayıt sayılarını göster
    const productsCount = await prisma.product.count()
    const productColorsCount = await prisma.productColor.count()
    const productImagesCount = await prisma.productImage.count()
    const productSizesCount = await prisma.productSize.count()
    const categoriesCount = await prisma.subCategory.count()
    const brandsCount = await prisma.brand.count()

    console.log('📊 Silinecek kayıtlar:')
    console.log(`   🖼️  Ürün resimleri: ${productImagesCount}`)
    console.log(`   📏 Ürün bedenleri: ${productSizesCount}`)
    console.log(`   🎨 Ürün renkleri: ${productColorsCount}`)
    console.log(`   📦 Ürünler: ${productsCount}`)
    console.log(`   📁 Kategoriler: ${categoriesCount}`)
    console.log(`   🏷️  Markalar: ${brandsCount}`)

    // İlişkili verileri sırayla sil (foreign key constraints'den dolayı)
    console.log('\n🗑️  Veriler siliniyor...')

    await prisma.productImage.deleteMany()
    console.log('   ✅ Ürün resimleri silindi')

    await prisma.productSize.deleteMany()
    console.log('   ✅ Ürün bedenleri silindi')

    await prisma.productColor.deleteMany()
    console.log('   ✅ Ürün renkleri silindi')

    await prisma.product.deleteMany()
    console.log('   ✅ Ürünler silindi')

    await prisma.subCategory.deleteMany()
    console.log('   ✅ Kategoriler silindi')

    await prisma.mainCategory.deleteMany()
    console.log('   ✅ Ana kategoriler silindi')

    await prisma.brand.deleteMany()
    console.log('   ✅ Markalar silindi')

    console.log('\n🎉 Database başarıyla resetlendi!')
  } catch (error: any) {
    console.error('❌ Reset hatası:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

resetDatabase()
