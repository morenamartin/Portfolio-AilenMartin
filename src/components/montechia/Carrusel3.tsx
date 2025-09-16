import Image from "next/image"
import Phone from "../phone"
import PublicacionAbajo from "../phone/PublicacionAbajo"
import PublicacionArriba from "../phone/PublicacionArriba"

const Carrusel3 = () => {
    return (
         <div className="relative flex flex-row w-[95%] mx-auto mt-40 h-[80vh] pb-10 items-center justify-center">
            <div>
                <Phone width="16rem" height="32rem">
                        <div className="flex flex-col justify-between w-full h-full p-4 pt-12 pb-6">
                            <div className="absolute top-0 z-20 -translate-x-1/2 left-1/2">
                                <div className="w-32 h-3 bg-black rounded-b-xl"></div>
                            </div>
                            <PublicacionArriba />
                                <Image src="/montechia/carru3/PLACA1.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
                            <PublicacionAbajo />
                        </div>
                </Phone>
            </div>

            <div className="relative w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA2.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA3.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div> 

            <div className="relative w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA4.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>
            
            <div className="relative w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA5.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA6.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain " />
            </div> 


        </div>
    )
}

export default Carrusel3