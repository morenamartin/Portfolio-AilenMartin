import Image from "next/image"
import Phone from "../phone"

const Historias = () => {
    return (
        <div className="flex flex-row gap-12 w-[85%] mx-auto mt-36 pb-32 justify-center">
            
            <div className="flex flex-row gap-2 border-t-4 mt-32 pt-14 border-[#e64141] w-fit">
                <Phone width="15rem" height="76vh" className="border-2 border-gray-400">
                    <div className="relative w-full h-full flex flex-col justify-between rounded-[30px] ">
                        <div className="flex justify-center h-24 pt-3 bg-black">
                            <div className="w-20 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                        <Image src="/montechia/historia/1/H1-A.jpg" fill quality={100} priority alt="Foto de celular" className="object-contain" />                         
                        <div className="h-24 bg-black"></div>
                    </div>
                </Phone>
                <Phone width="15rem" height="76vh" className="border-2 border-gray-400">
                    <div className="relative w-full h-full flex flex-col justify-between rounded-[30px] ">
                        <div className="flex justify-center h-24 pt-3 bg-black">
                            <div className="w-20 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                        <Image src="/montechia/historia/1/H1-A.jpg" fill quality={100} priority alt="Foto de celular" className="object-contain" />                         
                        <div className="h-24 bg-black"></div>
                    </div>
                </Phone>
            </div>

            <div className="flex flex-row gap-2 border-b-4 h-fit pb-14 border-[#e64141] w-fit">
                <Phone width="15rem" height="76vh" className="border-2 border-gray-400">
                    <div className="relative w-full h-full flex flex-col justify-between rounded-[30px] ">
                        <div className="flex justify-center h-24 pt-3 bg-black">
                            <div className="w-20 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                        <Image src="/montechia/historia/2/H1-2.jpg" fill quality={100} priority alt="Foto de celular" className="object-contain" />                         
                        <div className="h-24 bg-black"></div>
                    </div>
                </Phone>
                <Phone width="15rem" height="76vh" className="border-2 border-gray-400">
                    <div className="relative w-full h-full flex flex-col justify-between rounded-[30px] ">
                        <div className="flex justify-center h-24 pt-3 bg-black">
                            <div className="w-20 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                        <Image src="/montechia/historia/2/H2-2.jpg" fill quality={100} priority alt="Foto de celular" className="object-contain" />                         
                        <div className="h-24 bg-black"></div>
                    </div>
                </Phone>
            </div>
        </div>
    )
}

export default Historias