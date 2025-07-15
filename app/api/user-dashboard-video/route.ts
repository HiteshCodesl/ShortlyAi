import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(){
    try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const videos = await prismaClient.video.findMany({
      where: {
        createdBy: session.user.id,
      },
      orderBy:{
        id: "desc"
      }
    });

return NextResponse.json(videos);
    }catch(e){
      console.log(e);
      return NextResponse.json({error: e.message || "Internal server error"})
    }
  }


