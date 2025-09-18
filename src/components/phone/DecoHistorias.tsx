import { Heart } from "lucide-react"

const DecoHistorias = () => {
    return (
        <div className="absolute flex flex-col justify-between w-full h-[100%] py-4 px-2">
            <div className="flex flex-row items-center gap-2">
                <div className="w-6 h-6 bg-blue-300 rounded-full"></div>

                <div className="flex flex-col gap-2">
                    <div className="h-2 bg-[#eeeeee] rounded-full w-14"></div>
                </div>
            </div>

            <div className="flex flex-row items-center w-full gap-2">
                <div className="w-[83%] bg-[#c5c5c563] rounded-full h-6"></div>
                <Heart strokeWidth={1} className="w-5 h-5 text-white"/>
            </div>
        </div>
    )
}

export default DecoHistorias