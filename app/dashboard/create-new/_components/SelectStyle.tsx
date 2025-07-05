import Image from "next/image"

export function SelectStyle() {
    const styles = [
        {
            name: "Realstice",
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
            {styles.map((item, index) =>(
                <Image  alt={item.name} key={index} src={item.image} width={100} height={100} 
                className="h-28 w-24 md:w-28 lg:h-32 lg:w-32  object-cover rounded-lg max-w-screen-lg"/>
            ))}
         </div>
    </div>
  )
}


