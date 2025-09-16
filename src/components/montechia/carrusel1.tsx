import Image from "next/image"
import Phone from "../phone"

const Carrusel1 = () => {
    return (
        <div className="flex flex-row justify-center w-full gap-2 mt-44">
            <div>
                <Phone className="border-4 border-gray-600">
                    <div className="relative w-full h-full flex flex-col justify-between rounded-[30px] ">
                        <div className="flex justify-center h-24 pt-3 bg-black">
                            <div className="w-20 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                        <Image src="/montechia/carru1/H1.jpg" fill quality={100} priority alt="Foto de celular" className="object-contain" />                         
                        <div className="h-24 bg-black"></div>
                    </div>
                </Phone>
            </div>
            <div>
                <Phone className="border-4 border-gray-600">
                    <div className="relative w-full h-full flex flex-col justify-between rounded-[30px] ">
                        <div className="flex justify-center h-24 pt-3 bg-black">
                            <div className="w-20 h-1 bg-gray-900 rounded-full"></div>
                        </div>
                        <Image src="/montechia/carru1/H2.jpg" fill quality={100} priority alt="Foto de celular" className="object-contain" />                         
                        <div className="h-24 bg-black"></div>
                    </div>
                </Phone>
            </div>
        </div>
    )
}

export default Carrusel1