import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const session = await getServerSession(authOptions);

    const result = await prismaClient.user.findUnique({
       where:{
          email: session?.user.email,
       }, 
        select:{
            credits: true
        }
    })
     if (!result) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
    return NextResponse.json({credits: result.credits})
}
