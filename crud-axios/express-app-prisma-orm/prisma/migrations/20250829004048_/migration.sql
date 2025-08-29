-- DropForeignKey
ALTER TABLE `movies` DROP FOREIGN KEY `movies_categoryId_fkey`;

-- DropIndex
DROP INDEX `movies_categoryId_fkey` ON `movies`;

-- AlterTable
ALTER TABLE `movies` MODIFY `categoryId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
