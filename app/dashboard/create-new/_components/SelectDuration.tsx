import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function SelectDuration({onUserSelect}) {
  return (
     <div className='mt-6'>
            <h2 className="text-xl font-bold text-primary ">Duration</h2>
            <p className="text-gray-500 text-sm">Select the duration of your video</p>
            <Select onValueChange={(value) =>{
                value!="Custom Prompt"&&onUserSelect("duration", value)
                }}>
                <SelectTrigger className="w-full mt-2 text-sm max-w-screen-md">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent className="bg-primary">
              
                    <SelectItem value="30 seconds">30 seconds</SelectItem>
                    <SelectItem value="60 seconds">60 seconds</SelectItem>
            
                </SelectContent>
            </Select>
      
    </div>
  )
}

export default SelectDuration
