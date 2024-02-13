/*
  Warnings:

  - You are about to drop the column `DataNascimento` on the `user` table. All the data in the column will be lost.
  - Added the required column `dataNascimento` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `DataNascimento`,
    ADD COLUMN `dataNascimento` DATETIME(3) NOT NULL;
