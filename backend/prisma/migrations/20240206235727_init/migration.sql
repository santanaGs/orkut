/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `login` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `dataNascimento`,
    DROP COLUMN `genero`,
    DROP COLUMN `image`,
    DROP COLUMN `login`,
    DROP COLUMN `password`;
