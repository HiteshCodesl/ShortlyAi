import { storage } from "@/lib/Firebase";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
  });

  const input = {
    prompt,
    height: 1280,
    width: 1024,
    num_outputs: 1
  };

  try {
    const output = await replicate.run(
      "bytedance/sdxl-lightning-4step:6f7a773af6fc3e8de9d5a3c00be77c17308914bf67772726aff83496ba1e3bbe",
      { input }
    );

    const imageUrl = output[0]; 
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    const buffer = Buffer.from(response.data);
    const fileName = `images/${Date.now()}.png`;
    const imageRef = ref(storage, fileName);

    await uploadBytes(imageRef, buffer, { contentType: "image/png" });
    const downloadURL = await getDownloadURL(imageRef);

    return NextResponse.json({ result: downloadURL });
  } catch (e) {
    console.error("Image generation/upload failed:", e);
    return NextResponse.json({ error: "Image generation failed" }, { status: 500 });
  }
}
