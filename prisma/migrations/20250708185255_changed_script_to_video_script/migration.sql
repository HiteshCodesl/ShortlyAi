/*
  Warnings:

  - You are about to drop the column `script` on the `video` table. All the data in the column will be lost.
  - Added the required column `videoScript` to the `video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "video" DROP COLUMN "script",
ADD COLUMN     "videoScript" TEXT NOT NULL;
