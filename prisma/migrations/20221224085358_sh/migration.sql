-- DropIndex
DROP INDEX `User_email_key` ON `User`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `userUuid` VARCHAR(191) NULL;
