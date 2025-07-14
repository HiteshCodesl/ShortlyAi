import { NextRequest, NextResponse } from "next/server";
import { AssemblyAI } from "assemblyai";

export async function POST(req: NextRequest) {
    try{
    const { audioFileUrl } = await req.json();

    const client = new AssemblyAI({
        apiKey: process.env.ASSEMBLY_CAPTION_API_KEY as string,
    });

    const data = {
        audio: audioFileUrl,
    };
        const transcript = await client.transcripts.transcribe(data);
      
        return NextResponse.json(transcript.words);

    }catch(e){
        return NextResponse.json({"error":e || "Captions generation failed"})
    }
}