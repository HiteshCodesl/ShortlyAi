import Image from "next/image"
import { useState } from "react";

export function SelectStyle({onUserSelect}) {
    const [selectedOption, setSelectedOption] = useState("");
    const styles = [
        {
            name: "Real",
            image: "/real.jpg"
        },
        {
            name: "Cartoon",
            image: "/cartoon.jpg"
        },
        {
            name: "Comic",
            image: "/comic.jpg"
        },
        {
            name: "Watercolor",
            image: "/watercolor.jpg"
        },
        {
            name: "GTA",
            image: "/gta.jpg"
        },
        
    ]
  return (
    <div>
         <h2 className="text-xl font-bold text-primary mt-6 tracking-wide">Style</h2>
         <p className="text-gray-500 text-sm mb-3">Select your Video Style</p>
         <div className="grid grid-cols-2 md:grid-cols-5 max-w-screen-md gap-5 overflow-hidden aspect-auto max-width:600px">
            {styles.map((item) =>(
                
                <div key={item.name} className={`relative hover:scale-105 transition-all hover:cursor-pointer rounded-xl
                ${selectedOption==item.name&&"border-4 border-primary"}
                `}>
                <Image alt={item.name} src={item.image} width={100} height={100} 
                className="h-28 md:h-48 w-full object-cover rounded-lg max-w-screen-lg"
                onClick={() =>{
                    setSelectedOption(item.name)
                    onUserSelect("imageStyle", item.name)
                }}
                />
                <h2 className="absolute rounded-b-md bg-gradient-to-r from-orange-400 to-amber-300 text-center py-1 bottom-0 w-full text-black">{item.name}</h2>
                </div>
            ))}
         </div>
    </div>
  )
}


