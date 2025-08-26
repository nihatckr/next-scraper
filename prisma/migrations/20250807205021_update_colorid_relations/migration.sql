/*
  Warnings:

  - You are about to alter the column `colorId` on the `product_stock` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `product_stock` MODIFY `colorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `product_stock` ADD CONSTRAINT `product_stock_colorId_fkey` FOREIGN KEY (`colorId`) REFERENCES `product_colors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
