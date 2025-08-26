/*
  Warnings:

  - The primary key for the `product_colors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `product_colors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `colorId` on the `product_images` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `colorId` on the `product_sizes` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - A unique constraint covering the columns `[productId,colorId]` on the table `product_colors` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `colorId` to the `product_colors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product_images` DROP FOREIGN KEY `product_images_colorId_fkey`;

-- DropForeignKey
ALTER TABLE `product_sizes` DROP FOREIGN KEY `product_sizes_colorId_fkey`;

-- DropIndex
DROP INDEX `product_images_colorId_fkey` ON `product_images`;

-- DropIndex
DROP INDEX `product_sizes_colorId_fkey` ON `product_sizes`;

-- AlterTable
ALTER TABLE `product_colors` DROP PRIMARY KEY,
    ADD COLUMN `colorId` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `product_images` MODIFY `colorId` INTEGER NULL;

-- AlterTable
ALTER TABLE `product_sizes` MODIFY `colorId` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `product_colors_productId_colorId_key` ON `product_colors`(`productId`, `colorId`);

-- AddForeignKey
ALTER TABLE `product_sizes` ADD CONSTRAINT `product_sizes_colorId_fkey` FOREIGN KEY (`colorId`) REFERENCES `product_colors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_images` ADD CONSTRAINT `product_images_colorId_fkey` FOREIGN KEY (`colorId`) REFERENCES `product_colors`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
