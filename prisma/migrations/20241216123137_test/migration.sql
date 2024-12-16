/*
  Warnings:

  - Added the required column `icon` to the `Passion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Passion" ADD COLUMN     "icon" TEXT NOT NULL;
