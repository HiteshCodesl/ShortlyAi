"use client"
import React, { useState } from 'react'
import {SelectTopic} from './_components/SelectTopic'
import {SelectStyle} from './_components/SelectStyle';

function CreateNew() {

  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) =>{
  console.log(fieldName, fieldValue)
  }
  return (
    <div>
       <h2 className='text-2xl text-primary font-bold text-center mb-4'>Create New</h2>
       <div className='mt-10 shadow-xl p-10 border border-violet-400 mx-3'>
         <SelectTopic onUserSelect={onHandleInputChange} />
         <SelectStyle />
       </div>
    </div>
  )
}

export default CreateNew
