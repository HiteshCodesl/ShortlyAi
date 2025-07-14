import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/Firebase";

export async function POST(req: NextRequest) {
    try {
        const {
            text,
            id,
            voiceId = "en-US-charles",
            style = "conversational"
        } = await req.json();

        const storageRef = ref(storage, `shortlyAI/${id}.mp3`);

        const data = { text, voiceId , style};
console.log("data", data)
        const response =  await axios.post('https://api.murf.ai/v1/speech/generate', data, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "api-key": process.env.MURF_API_KEY,
            },
        })
         const audioUrl = response.data.audioFile;
        
         const audioRes = await axios.get(audioUrl, {
            responseType: "arraybuffer"
         })
         const audioBuffer = Buffer.from(audioRes.data)

         await uploadBytes(storageRef, audioBuffer, {contentType:'audio/mp3'})

         const downloadUrl = await getDownloadURL(storageRef);

        return NextResponse.json( downloadUrl )

    } catch (error) {
        console.error("failed  to generate speech", error);
        return NextResponse.json({ success: false, error: "speech not generated" })
    }
}