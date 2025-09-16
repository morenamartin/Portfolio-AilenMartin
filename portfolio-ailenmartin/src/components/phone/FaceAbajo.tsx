import { Bookmark, Forward, Heart, MessageCircle, MessageSquare, Send, Share, ThumbsUp } from "lucide-react"

const FaceAbajo = () => {
    return (
        <div className="flex flex-col w-full gap-2 mt-[21rem]">
            <div className="flex flex-row gap-[2px]">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
            </div>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-1">
                    <ThumbsUp className="w-[14px] text-gray-400 fill-gray-600 border-gray-600"/>
                    <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <MessageSquare className="w-[14px] text-gray-400 fill-gray-600 border-gray-600"/>
                    <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <div className="flex flex-row items-center gap-1">
                    <Forward className="w-[14px] text-gray-400 fill-gray-600 border-gray-600"/>
                    <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </div>
    )
}

export default FaceAbajo