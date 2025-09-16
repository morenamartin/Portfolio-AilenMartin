import { Bookmark, Heart, MessageCircle, Send } from "lucide-react"

const PublicacionAbajo = () => {
    return (
        <div className="flex flex-col w-full gap-2 mt-96 ">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3 text-gray-900 w-fit">
                    <Heart className="w-6 h-6 " strokeWidth={1}/>
                    <MessageCircle className="w-5 h-5" strokeWidth={1}/>
                    <Send className="w-5 h-5" strokeWidth={1}/>
                </div>
                <div>
                    <Bookmark className="w-6 h-6" strokeWidth={1}/>
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