"use client"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {VideoList} from "../dashboard/_components/VideoList"

export default function DashboardPage() {
  const {data: session, status} = useSession();
  const [videoList, setVideoList] = useState([]);
  console.log("videoList",videoList)

useEffect(()=>{
    const getVideoList=async()=>{
     try{
     const res = await axios.get("/api/user-dashboard-video");
     console.log(res.data)
     setVideoList(res.data);
  } catch(err){
    console.log("failed to load videos", err)
  }
}
  if(status === "authenticated"){
    getVideoList();
  }
},[status])

if(status === "loading") return null;

return (
 <div>   
  <div className="flex flex-col justify-center md:justify-around md:items-center md:flex-row w-full md:gap-44">

  <div className="text-2xl font-semibold tracking-wide flex justify-center md:m-4 max-w-screen-md md:text-3xl xl:text:5xl">Dashboard </div>
  
 
  <div>
    <Link href={"/dashboard/create-new"}>
    <Button className="hidden btn-secondary md:flex mx-auto px-16 mt-2 tracking-wide md:px-8 md:mx-4 lg:justify-end">
      <Plus />
      Create New
    </Button>
    </Link>
  </div>
 

  </div>

{(status === "unauthenticated" || videoList.length === 0) ? (
  <div className="border border-dashed mt-5 py-20 px-auto flex flex-col gap-3 mx-6 max-w-screen-2xl xl:mx-auto">
     <p className="text-foreground flex mx-auto">You haven't any short video created</p>
     <Link href={"/dashboard/create-new"}>
     <Button className="flex btn-primary mx-auto">Create New Short Video</Button>
     </Link>
  </div>
) : (
  <div>
    <VideoList videoList={videoList} />
  </div>
)}
</div>
  )

}

