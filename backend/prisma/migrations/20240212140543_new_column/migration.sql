/*
  Warnings:

  - Added the required column `DataNascimento` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `DataNascimento` DATETIME(3) NOT NULL,
    ADD COLUMN `genero` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;
