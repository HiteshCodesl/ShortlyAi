"use client"
import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Player } from "@remotion/player";
import RemotionVideo from './RemotionVideo';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';

function PlayerDialog({ playVideo, videoId }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [videoData, setVideoData] = useState();
  const [durationInFrame, setDurationInFrame] = useState(100);
  
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setOpenDialog(!openDialog);
    videoId && getVideoData();
  }, [playVideo]);

  useEffect(()=>{
   setOpenDialog(false)
  }, [pathname])

   const getVideoData=async()=>{
       await axios.get(`/api/videoRender/${videoId}`)
      .then((res) => {
        console.log("videoData in the playerdialog:", res.data);
        setVideoData(res.data);
      })
        .catch((err) => console.error("failed to fetch video data", err));
    }
   
  return (
    <AlertDialog open={openDialog}>
      <AlertDialogContent className='bg-white shadow-md flex flex-col items-center'>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl text-primary font-semibold">Your video is Ready</AlertDialogTitle>
          <div className="w-full">
            {videoData ? (
              <Player
                component={RemotionVideo}
                durationInFrames={Number(durationInFrame.toFixed(0))}
                compositionWidth={300}
                compositionHeight={450}
                controls={true}
                fps={30}
                inputProps={{
                ...videoData,
                setDurationInFrame:(frameValue)=>setDurationInFrame(frameValue)
              }}
              />
            ) : (
              <p className="text-center">Loading video preview...</p>
            )}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter className='w-full'>
          <AlertDialogCancel onClick={()=>{router.replace("/dashboard"); setOpenDialog(false)}} className="btn-secondary">Cancel</AlertDialogCancel>
          <AlertDialogAction className='btn-primary'>Export</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default PlayerDialog;
