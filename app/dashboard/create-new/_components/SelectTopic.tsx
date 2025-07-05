"use client"
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function SelectTopic({onUserSelect}) {
    const options = ["Custom Prompt", "Random AI Story", "Scary Story", "Historic Facts", "Motivational", "Fun Facts", "Bed Time Story"]
    const [selectedContent, setSelectedContent] = useState();
    return (
        <div>
            <h2 className="text-xl font-bold text-primary ">Content</h2>
            <p className="text-gray-500 text-sm">What is the topic of your video</p>
            <Select onValueChange={(value) =>{
                setSelectedContent(value)
                value!="Custom Prompt"&&onUserSelect("topic", value)
                }}>
                <SelectTrigger className="w-full mt-2 text-sm">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent className="bg-primary">
                {options.map((item, index) =>(
                    <SelectItem  className="hover:bg-primary" key={index} value={item}>{item}</SelectItem>
                ))}
                </SelectContent>
            </Select>

            {selectedContent=="Custom Prompt"&&
            <Input 
            className="mt-3 text-sm md:text-md" 
            onChange={(e)=>onUserSelect('topic', e.target.value)}
            placeholder="Write Prompt on which you want to generate video"/>
            }
        </div>
    )
}
