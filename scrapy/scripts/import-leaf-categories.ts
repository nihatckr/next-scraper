import 'dotenv/config'
import fs from 'fs/promises'
import path from 'path'
import prisma from '../lib/prisma'

async function main() {
  const filePath = path.join(
    __dirname,
    '../scraper/output/combined-brands-categories.json',
  )
  const raw = await fs.readFile(filePath, 'utf-8')
  const data = JSON.parse(raw)

  if (!data || !Array.isArray(data.brands)) {
    console.error('No brands found in JSON')
    process.exit(1)
  }

  for (const brand of data.brands) {
    const brandId = String(brand.id)
    const brandName = brand.brand

    // Upsert brand
    await prisma.brand.upsert({
      where: { id: brandId },
      update: { name: brandName },
      create: { id: brandId, name: brandName },
    })

    // Iterate main categories
    for (const main of brand.mainCategories || []) {
      const mainId = Number(main.id)
      // Upsert main category
      await prisma.mainCategory.upsert({
        where: { id: mainId },
        update: {
          name: main.name || (mainId === 0 ? 'MAIN' : String(mainId)),
          brandId: brandId,
          gender: main.gender || 'UNKNOWN',
        },
        create: {
          id: mainId,
          name: main.name || (mainId === 0 ? 'MAIN' : String(mainId)),
          brandId: brandId,
          gender: main.gender || 'UNKNOWN',
        },
      })

      // Walk subcategories recursively
      async function walk(
        nodes: any[],
        parentSubId: number | null,
        level: number,
      ) {
        if (!nodes || nodes.length === 0) return
        for (const node of nodes) {
          const categoryId = Number(node.categoryId || node.id || 0)
          const isLeaf = !!node.isLeaf
          const matchingId = node.matchingId ?? null
          const productCount = node.productCount ?? null
          const categoryName =
            node.categoryName || node.name || `cat-${categoryId}`

          // Upsert this subcategory
          await prisma.subCategory.upsert({
            where: { categoryId },
            update: {
              categoryName: categoryName,
              brand: brandName,
              gender: node.gender || main.gender || 'UNKNOWN',
              level: level,
              isLeaf: isLeaf,
              matchingId: matchingId,
              productCount: productCount,
              parentCategoryId: mainId,
              parentSubCategoryId: parentSubId,
            },
            create: {
              categoryId,
              categoryName: categoryName,
              brand: brandName,
              gender: node.gender || main.gender || 'UNKNOWN',
              level: level,
              isLeaf: isLeaf,
              matchingId: matchingId,
              productCount: productCount,
              parentCategoryId: mainId,
              parentSubCategoryId: parentSubId,
            },
          })

          // Recurse into children
          if (node.subcategories && node.subcategories.length > 0) {
            await walk(node.subcategories, categoryId, level + 1)
          }
        }
      }

      await walk(main.subcategories || [], null, 1)
    }
  }

  console.log('Import completed')
}

if (require.main === module) {
  main()
    .then(() => {
      console.log('Done')
      process.exit(0)
    })
    .catch((err) => {
      console.error('Import failed', err)
      process.exit(1)
    })
}
