import 'dotenv/config'
import fs from 'fs/promises'
import path from 'path'
import { processProduct } from './full-product-sync'

async function main() {
  const filePath = path.join(__dirname, 'failed-products.json')

  let raw: string
  try {
    raw = await fs.readFile(filePath, 'utf-8')
  } catch (err: any) {
    console.error(
      'failed-products.json bulunamadı veya açılamadı:',
      err?.message || err,
    )
    process.exit(1)
  }

  let failures: Array<{
    productId: number
    categoryId: number
    brand: string
    error?: string
  }>
  try {
    failures = JSON.parse(raw)
  } catch (err: any) {
    console.error('failed-products.json parse edilemedi:', err?.message || err)
    process.exit(1)
  }

  if (!Array.isArray(failures) || failures.length === 0) {
    console.log('Yeniden işlenecek başarısız kayıt yok.')
    return
  }

  console.log(`${failures.length} başarısız kayıt yeniden işlenecek`)

  const remaining: typeof failures = []

  for (const f of failures) {
    try {
      const res = await processProduct(f.productId, f.categoryId, f.brand, 2)
      if (!res.success) {
        remaining.push(f)
        console.log(
          `⚠️ Yeniden işleme başarısız: ${f.brand} - ${f.productId} (${res.error})`,
        )
      } else {
        console.log(`✅ Yeniden işlendi: ${f.brand} - ${f.productId}`)
      }
      // küçük gecikme
      await new Promise((r) => setTimeout(r, 200))
    } catch (err: any) {
      remaining.push(f)
      console.log(
        `⚠️ Yeniden işleme hata: ${f.brand} - ${f.productId} (${
          err?.message || err
        })`,
      )
    }
  }

  // Kalanları tekrar kaydet
  try {
    if (remaining.length > 0) {
      await fs.writeFile(filePath, JSON.stringify(remaining, null, 2), 'utf-8')
      console.log(
        `${remaining.length} kayıt hala başarısız, ${filePath} güncellendi.`,
      )
    } else {
      await fs.unlink(filePath)
      console.log(
        'Tüm başarısız kayıtlar başarıyla işlendi. failed-products.json silindi.',
      )
    }
  } catch (err: any) {
    console.error('failed-products.json güncellenemedi:', err?.message || err)
  }
}

if (require.main === module) {
  main().catch((e) => {
    console.error('retry-failed-products hata:', e)
    process.exit(1)
  })
}
