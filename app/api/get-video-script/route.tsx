import { NextRequest, NextResponse } from "next/server";
import { getStoryScript } from "@/lib/AiModel";

export async function POST(req: NextRequest) {
   try{
     const {prompt} = await req.json();
     console.log(prompt);

     const result = await getStoryScript(prompt);

     console.log("result", result)

     return NextResponse.json({"videoScript": JSON.parse(result)})
   } catch(err){
    console.log(err);
   }
}
