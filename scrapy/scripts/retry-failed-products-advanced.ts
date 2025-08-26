import 'dotenv/config'
import fs from 'fs/promises'
import path from 'path'
import prisma from '../lib/prisma'
import { saveProductToDatabase } from './full-product-sync'

async function tryFetchVariants(productId: number) {
  const variants = [
    // current endpoint used in productDetails.ts
    `https://www.pullandbear.com/itxrest/2/catalog/store/25009521/20309457/category/0/product/${productId}/detail?languageId=-43&appId=1`,
    // alternative: version 3 and languageId -7
    `https://www.pullandbear.com/itxrest/3/catalog/store/25009521/20309457/category/0/product/${productId}/detail?languageId=-7&appId=1`,
    // try without store/catalog (less likely but harmless)
    `https://www.pullandbear.com/itxrest/2/catalog/product/${productId}/detail?languageId=-43&appId=1`,
  ]

  for (const url of variants) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
      if (res.ok) {
        const data = await res.json()
        return { ok: true, data, url }
      }
      // if 404, continue to next variant
    } catch (err) {
      // network error, continue
    }
  }
  return { ok: false }
}

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

  const remaining: typeof failures = []

  for (const f of failures) {
    console.log(`
    🔍 Deneniyor: ${f.brand} - ${f.productId} (kategori: ${f.categoryId})`)
    if (f.brand !== 'PULL&BEAR') {
      // fallback to regular retry via existing process (not implemented here)
      remaining.push(f)
      console.log(
        '    ⚠️ Sadece PULL&BEAR için gelişmiş retry uygulanır. Atlandı.',
      )
      continue
    }

    const attempt = await tryFetchVariants(f.productId)
    if (!attempt.ok) {
      console.log(
        `    ❌ Hiçbir alternatif endpoint başarılı olmadı: ${f.productId}`,
      )
      remaining.push(f)
      continue
    }

    console.log(
      `    ✅ Veri bulundu (url: ${attempt.url}). DB'ye kaydediliyor...`,
    )
    try {
      await saveProductToDatabase(attempt.data, f.categoryId, f.brand)
      console.log(`    ✅ Kaydedildi: ${f.brand} - ${f.productId}`)
    } catch (err: any) {
      console.log(`    ❌ Kaydetme sırasında hata: ${err?.message || err}`)
      remaining.push(f)
    }

    // küçük bekleme
    await new Promise((r) => setTimeout(r, 300))
  }

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
    console.error('retry-failed-products-advanced hata:', e)
    process.exit(1)
  })
}
