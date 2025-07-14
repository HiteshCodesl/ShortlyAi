import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
   try {
      const session = await getServerSession({ req, ...authOptions })
      const { videoScript, audioFileUrl, imageList, captions } = await req.json();
console.log("data got to save video api", videoScript, audioFileUrl, imageList, captions)

      const result = await prismaClient.video.create({
         data: {
            videoScript: videoScript,
            audioFileUrl: audioFileUrl,
            captions: captions,
            imageList: imageList,
            createdBy: session?.user.id
         }
      })

      return NextResponse.json({ videoId: result.id, result })
   } catch (e) {
      console.error(e);
   }
}