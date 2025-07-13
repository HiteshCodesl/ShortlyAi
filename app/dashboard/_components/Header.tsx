import { ModeToggle } from '@/components/ui/toggle'
import { Sparkles, Video } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { TokenHeader } from './Token'

export function Header() {
  return (
    <div className='sticky flex items-center mt-2 gap-18 justify-around w-screen border-b pb-3'>
         <div className="relative flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center glow-primary">
                <Video className="h-6 w-6 text-white " />
              </div>
              <Sparkles className="h-4 w-4 text-yellow-400 absolute -top-1 ml-7" />
              <div className="text-xl font-bold font-poppins text-foreground ">
                Shortly<span className="text-primary">AI</span>
              </div>
         </div>
             <div className="flex md:flex items-center space-x-4 justify-end">
           <TokenHeader />
           <ModeToggle />
         
           <Link href={"/signup"}>
            <button className="hidden md:flex text-foreground transition-colors px-4 py-2 rounded-lg border hover:bg-primary">
              Sign In
            </button>
            </Link>
            <Link href={"/dashboard"}>
            <button className="hidden md:flex btn-primary items-center mb-2">
             Dashboard
            </button>
            </Link>
          </div>
    </div>
  )
}

