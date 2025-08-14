import axios from "axios"
import Image from "next/image"
import React, { useEffect, useState } from "react"

export  function TokenHeader(){
   const [credits, setCredits] = useState<number | null>(null)
   
   useEffect(()=>{
   const fetchCredits = async() =>{
   const res = await axios.get("/api/credits/get-token");
   setCredits(res.data.credits);
   }
   fetchCredits(); 
}, [])

   return(
     <div className="flex items-center gap-1 justify-center border px-4 py-1 rounded-lg ">
        <Image src={"/coin.png"} alt="credits" height={20} width={20}/>
        <h2>{credits}</h2>
     </div>
   )
}