/*
  Warnings:

  - Changed the type of `captions` on the `video` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `imageList` on the `video` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `videoScript` on the `video` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN "credits" INTEGER DEFAULT 50 NOT NULL; 

-- AlterTable
ALTER TABLE "video" DROP COLUMN "captions",
ADD COLUMN     "captions" JSONB NOT NULL,
DROP COLUMN "imageList",
ADD COLUMN     "imageList" JSONB NOT NULL,
DROP COLUMN "videoScript",
ADD COLUMN     "videoScript" JSONB NOT NULL;
