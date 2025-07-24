-- CreateTable
CREATE TABLE "video" (
    "id" TEXT NOT NULL,
    "script" TEXT NOT NULL,
    "audioFileUrl" TEXT NOT NULL,
    "captions" TEXT NOT NULL,
    "imageList" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "video_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "video" ADD CONSTRAINT "video_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
