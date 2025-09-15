import Image from "next/image";
import fotoCelu from "../assets/fondoprueba.jpg"

const Phone = () => {
    return (
        <div className="flex flex-cols-[1fr_2fr_1fr]">
        
        <div className="flex flex-col mt-16">
            <div className="w-1 h-8 bg-black rounded-l-xl"></div>
            <div className="w-1 h-8 bg-black rounded-l-xl"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center w-48 px-[6px] py-2 overflow-hidden bg-black rounded-2xl h-96">
            <div className="absolute top-1">
                <div className="w-20 h-3 bg-black rounded-b-xl"></div>
            </div>
            <Image src={fotoCelu} alt="Phone" className="w-full h-full rounded-xl" />
        </div>

        <div className="mt-20">
            <div className="w-1 h-8 bg-black rounded-r-xl"></div>
        </div>
        </div>
    )
}

export default Phone;