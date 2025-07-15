import React, { useState } from 'react'
import {Thumbnail} from '@remotion/player';
import RemotionVideo from './RemotionVideo';
import PlayerDialog from './PlayerDiaglog';

export function VideoList({ videoList}) {
   const [openPlayDialog, setOpenPlayDialog] = useState(false);
   const [videoId, setVideoId] = useState();
  return (
    <div className='xl:mx-[15vw]'>
    <div className='mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  max-w-screen-lg gap-10 align-middle items-center md:mx-5'>
      {videoList.map((video, id) => (
        <div key={id} className='cursor-pointer hover:scale-105 transition-all mx-auto' onClick={()=>{setOpenPlayDialog(Date.now()); setVideoId(video?.id)} 
        }>
          <Thumbnail
            component={RemotionVideo}
            compositionWidth={200}
            compositionHeight={300}
            frameToDisplay={30}
            durationInFrames={120}
            fps={30}
            inputProps={{
              ...video,
            }}
            style={{
              borderRadius: "15px"
            }}
          />
        </div>
      ))}
      <PlayerDialog videoId={videoId} playVideo={openPlayDialog} />
    </div>
    </div>
  )
}

