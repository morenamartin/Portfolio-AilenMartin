"use client"
import { Bookmark, Heart, MessageCircle, Send } from "lucide-react"
import { useState } from "react";

interface PublicacionAbajoProps {
  className?: string;
}


const PublicacionAbajo: React.FC<PublicacionAbajoProps> = ({className}) => {
    const [corazones, setCorazones] = useState(false)
    return (
        <div className={`flex flex-col w-full gap-2 ${className}`} >
                <div  className={`absolute bottom-0 left-14 flex flex-col w-20`}>
                    <Heart className={`w-10 h-10 fill-red-600 -rotate-6 transition-all duration-1000  
                    ${corazones ? "opacity-100 -translate-y-40 -translate-x-6" : "opacity-0 -translate-y-2 scale-0"} delay-0`} strokeWidth={0}/>

                    <Heart className={`w-10 h-10 fill-red-600 -rotate-6 transition-all duration-1000
                    ${corazones ? "-translate-y-36 opacity-100 -translate-x-10" : "opacity-0 -translate-y-6 scale-0"} delay-100`} strokeWidth={0}/>

                    <Heart className={`w-10 h-10 fill-red-600 -rotate-6 transition-all duration-1000
                    ${corazones ? "-translate-y-32 -translate-x-2 opacity-100" : "opacity-0 -translate-y-8 scale-0" } delay-200`} strokeWidth={0}/>

                    <Heart className={`w-10 h-10 fill-red-600 -rotate-6 transition-all duration-1000
                    ${corazones ? "-translate-y-32 -translate-x-8 opacity-100 " : "opacity-0 -translate-y-10 scale-0"} delay-300`} strokeWidth={0}/>
                </div>

                
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3 text-gray-900 w-fit">
                    <Heart className={`w-6 h-6 hover:fill-red-600 `} strokeWidth={1} 
                    onClick={(e) => {
                        setCorazones(true)
                        e.stopPropagation()
                        setTimeout(() => {
                            setCorazones(false)
                        },1200)
                    }}/>
                    <MessageCircle className={`w-5 h-5 z-40 hover:fill-black`} strokeWidth={1}/>
                    <Send className="w-5 h-5" strokeWidth={1}/>
                </div>
                <div>
                    <Bookmark className={`w-6 h-6 hover:fill-black `} strokeWidth={1}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-14 h-1 bg-[#8b8b8b] rounded-full"></div>
                <div className="flex flex-row gap-2">
                    <div className="w-16 h-2 bg-[#66b4cc] rounded-full"></div>
                    <div className="w-32 h-2 bg-[#a9a9a9] rounded-full"></div>
                    <div className="w-8 h-2 bg-[#a9a9a9] rounded-full"></div>
                </div>
                <div className="w-32 h-2 bg-[#a9a9a9] rounded-full"></div>
            </div>
        </div>
    )
}

export default PublicacionAbajo