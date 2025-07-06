"use client"
import React, { useState } from 'react'
import {SelectTopic} from './_components/SelectTopic'
import {SelectStyle} from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import {CustomLoading} from './_components/CustomLoading';

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoScript, setVideoScript] = useState("");

  const onHandleInputChange = (fieldName, fieldValue)=>{
     setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
     }))
  }

const onCreateClickHandler=()=>{
  GetVideoScript();
}
  const GetVideoScript=async()=>{
    setLoading(true);
    const prompt='write a script to generate '+formData.duration+' video on topic '+formData.topic+' along with  AI image prompt in '+formData.imageStyle+' format for each some and give me result in JSON format with imagePrompt and contentText as field'
     await axios.post("/api/get-video-script",{
      prompt:prompt
    }).then(response=>{
      console.log(response.data);
      setVideoScript(response.data)
    })
    setLoading(false);
  }
  return (
    <div className='lg:flex lg:justify-center lg:w-full'>
       <h2 className='text-2xl text-primary font-bold text-center mb-4'>Create New</h2>
       <div className='mt-10 shadow-xl p-10 border mx-3 lg:flex lg:flex-col lg:justify-center lg:mx-4 lg:absolute'>
         <SelectTopic onUserSelect={onHandleInputChange} />
         <SelectStyle onUserSelect={onHandleInputChange}/>
         <SelectDuration onUserSelect={onHandleInputChange}/>

         <Button className='flex w-full justify-center mt-7 max-w-screen-md' onClick={onCreateClickHandler}>Create Short video</Button>

         <CustomLoading loading={loading}/>
       </div>
    </div>
  )
}

export default CreateNew
