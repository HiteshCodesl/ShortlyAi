import { authOptions } from "@/lib/auth";
import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse , NextRequest} from "next/server";

export async function POST(req:NextRequest) {
    const session = await getServerSession(authOptions);

    const user = await prismaClient.user.findUnique({
        where: {
            email: session?.user.email
        }
    })
    if(!user){
        return NextResponse.json({error: "User not found"})
    }

    const updateToken = await prismaClient.user.update({
        where:{
            email: session?.user.email
            },
            data:{
                credits: {
                    decrement: 50
                },
            }
    })
    return NextResponse.json({sucess: true, credits: updateToken.credits})
}