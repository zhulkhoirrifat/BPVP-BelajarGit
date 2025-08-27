/*
  Warnings:

  - You are about to drop the `_moviestouser` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `_moviestouser` DROP FOREIGN KEY `_MoviesToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_moviestouser` DROP FOREIGN KEY `_MoviesToUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `movies` DROP FOREIGN KEY `movies_categoryId_fkey`;

-- DropIndex
DROP INDEX `movies_categoryId_fkey` ON `movies`;

-- AlterTable
ALTER TABLE `movies` ADD COLUMN `userId` INTEGER NULL,
    MODIFY `categoryId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_moviestouser`;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `movies` ADD CONSTRAINT `movies_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
