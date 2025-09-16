import Image from "next/image"
import Phone from "../phone"
import PublicacionAbajo from "../phone/PublicacionAbajo"
import PublicacionArriba from "../phone/PublicacionArriba"

const Carrusel2 = () => {
    return (
         <div className="relative flex flex-row gap-1 w-[95%] mx-auto mt-60 h-[80vh] pb-36 items-center justify-center">

            <div className="relative w-[300px] h-[297px] border-[1px] border-gray-600">
                <Image src="/montechia/carru2/PLACA1-3.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] border-[1px] border-gray-600">
                <Image src="/montechia/carru2/PLACA2-3.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div> 

            <div>
                <Phone>
                        <div className="flex flex-col justify-between w-full h-full p-4 pt-16 pb-10">
                            <div className="absolute top-0 z-20 -translate-x-1/2 left-1/2">
                                <div className="w-32 h-3 bg-black rounded-b-xl"></div>
                            </div>
                            <PublicacionArriba />
                                <Image src="/montechia/carru2/PLACA3.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
                            <PublicacionAbajo />
                        </div>
                </Phone>
            </div>

            <div className="relative w-[300px] h-[297px] border-[1px] border-gray-600">
                <Image src="/montechia/carru2/PLACA4.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] ">
                <Image src="/montechia/carru2/PLACA5.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain border-[1px] border-gray-600" />
            </div> 
        </div>
    )
}

export default Carrusel2