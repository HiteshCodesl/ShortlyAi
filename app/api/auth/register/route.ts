import { prismaClient } from "@/prisma/src";
import { hash } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    const {email, password, name} = await req.json();

    const isUserExists = await prismaClient.user.findUnique({
        where: {
            email: email
        }
    })
    if(isUserExists){
        return NextResponse.json({message: "user already exists"}, {status: 401})
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await prismaClient.user.create({
        data: {
        email: email,
        password: hashedPassword,
        name: name
        }
    })

    return NextResponse.json(newUser)
}