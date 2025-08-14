"use client"
import React, { useContext, useEffect, useState } from 'react'
import { SelectTopic } from './_components/SelectTopic'
import { SelectStyle } from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { CustomLoading } from './_components/CustomLoading';
import { v4 as uuidv4 } from "uuid";
import { VideoDataContext } from '@/app/_context/VideoDataContext';
import PlayerDiaglog from '../_components/PlayerDiaglog';
import { Subscription } from './_components/SubScription';


export type FormData = {
  duration:string; 
  topic:string ;
  imageStyle:string;
}

function CreateNew() {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState([]);
  const [audioFileUrl, setAudioFileUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [imageList, setImageList] = useState([]);
  const {videoData, setVideoData } = useContext(VideoDataContext)
  const [playVideo, setPlayVideo] = useState(false);
  const [videoId, setVideoId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: fieldValue
    }))
  }

  const onCreateClickHandler = () => {
    GetVideoScript();
  }

  const GetVideoScript = async () => {
    console.log(formData)
    setLoading(true);
    const prompt = `write a script to generate ${formData.duration} video on topic ${formData.topic} along with  AI image prompt in ${formData.imageStyle} format for each some and give me result in JSON format with imagePrompt and contentText as field`

    const response = await axios.post("/api/get-video-script", {
      prompt: prompt
    })

    if(response.data.videoScript){
      setVideoData(prev =>({
        ...prev,
        "videoScript": response.data.videoScript
      }))
      console.log(response.data.videoScript);
      setVideoScript(response.data.videoScript);
      await GetAudioScript(response.data.videoScript);
    }
    setLoading(false);
  }

  const GetAudioScript = async (videoScriptData) => {
    setLoading(true);
    let script = "";
    const id = uuidv4();
    videoScriptData.forEach(item => {
      script = script + item.contentText + ' ';
    })

    const response = await axios.post("/api/get-Audio", {
      "text": script,
      "voiceId": "en-US-charles",
      id: id
    })
    setVideoData(prev => ({
      ...prev,
      "audioFileUrl": response.data
    }))
    setAudioFileUrl(response.data)
    response.data && await GetAudioCaptions(response.data, videoScriptData)
    setLoading(false);
  }

  const GetAudioCaptions = async (fileUrl, videoScriptData) => {
    setLoading(true);
    console.log(fileUrl)
    const response = await axios.post("/api/get-caption", {
      audioFileUrl: fileUrl
    })
    setCaptions(response.data)
    setVideoData(prev => ({
      ...prev,
      "captions": response.data
    }))
    response.data && await GetImage(videoScriptData);

    setLoading(false);
  }

  const GetImage = async (videoScriptData) => {
    setLoading(true);
    let images = [];
    for (const element of videoScriptData) {
      try {
        const response = await axios.post("/api/get-Image", {
           prompt: element.imagePrompt
        });
        console.log("images in pagee.tsx dashbaord", response.data.result);

        images.push(response.data.result);
      } catch (e) {
        console.log('error', e)
      }
    }
    setVideoData(prev => ({
      ...prev,
      "imageList": images
    }))

    setImageList(images);
    setLoading(false);
  }

  useEffect(() => {

    console.log("videodata", videoData)
    if (
      videoData.videoScript &&
      videoData.audioFileUrl &&
      videoData.captions &&
      videoData.imageList &&
      videoData.imageList.length > 4
    ) {
      SaveVideoData(videoData);
    }
  }, [videoData])


  const SaveVideoData = async (videoData) => {
    setLoading(true);
    const result = await axios.post("/api/save-video", {
      videoScript: videoData.videoScript,
      audioFileUrl: videoData.audioFileUrl,
      captions: videoData.captions,
      imageList: videoData.imageList,
    })
    setPlayVideo(true);
    setVideoId(result.data.videoId);
    setLoading(false);
    updateToken();
  }

  const updateToken = async () => {
     await axios.post("/api/credits/use-token")
     setVideoData(null);
  }

return (
    <div className='lg:flex lg:justify-center lg:w-full'>
      <h2 className='text-2xl text-primary font-bold text-center mb-4'>Create New</h2>
      <div className='mt-10 shadow-xl p-10 border mx-3 lg:flex lg:flex-col lg:justify-center lg:mx-4 lg:absolute'>
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle onUserSelect={onHandleInputChange} />
        <SelectDuration onUserSelect={onHandleInputChange} />

        <Button className='flex w-full bg-gradient-to-r from-orange-400 to-amber-300  text-black justify-center mt-7 max-w-screen-md' onClick={() => setIsOpen(true)}>Create Short video</Button>
        
        <Subscription isOpen={isOpen} setIsOpen={setIsOpen} />
        <CustomLoading loading={loading} />
        <PlayerDiaglog playVideo={playVideo} videoId={videoId} />
      </div>
    </div>
  )
}

export default CreateNew
