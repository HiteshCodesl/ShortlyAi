import prismaClient from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, 
     context : { params: { id: string } }) {
    try {
        const {id} =  await context.params;

        const response = await prismaClient.video.findUnique({
            where: {
                id
            }
        })
        return NextResponse.json(response)
    } catch(e) {
        console.log(e)
    }

} 