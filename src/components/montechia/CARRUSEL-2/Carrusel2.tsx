import Image from "next/image"
import Phone from "../../phone"
import { useState } from "react"
import { CarruselModal2Montechia } from "./CarruselModal2"

const Carrusel2 = () => {
    const [modal, setModal] = useState(false)
    return (
         <div className="relative flex flex-row gap-1 w-[95%] mx-auto mt-60 h-[80vh] pb-36 items-center justify-center">

            <div className="relative w-[300px] h-[297px] border-[1px] border-gray-600">
                <Image src="/montechia/carru2/PLACA1-3.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] border-[1px] border-gray-600">
                <Image src="/montechia/carru2/PLACA2-3.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div> 

            <div>
                <Phone publicacionAbajo publicacionArriba>
                    <Image src="/montechia/carru2/PLACA3.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
                </Phone>
            </div>

            <div className="relative w-[300px] h-[297px] border-[1px] border-gray-600">
                <Image src="/montechia/carru2/PLACA4.jpg"onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] ">
                <Image src="/montechia/carru2/PLACA5.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-cover border-[1px] border-gray-600" />
            </div> 

            {modal && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#353232b4]"
                onClick={() => setModal(false)}
                >
                <div
                    className="relative z-20 w-[29%] h-[77%] flex items-center justify-center bg-white"
                    onClick={(e) => e.stopPropagation()}
                >
                    <CarruselModal2Montechia />
                </div>
                </div>
            )}
        </div>
    )
}

export default Carrusel2