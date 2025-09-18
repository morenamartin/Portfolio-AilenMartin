"use client"
import Image from "next/image"
import Phone from "../../phone"
import { useState } from "react"
import { CarruselModal3Montechia } from "./CarruselModal3"


const Carrusel3 = () => {
     const [modal, setModal] = useState(false)
    return (
         <div className="relative flex flex-row w-[95%] mx-auto mt-40 h-[80vh] pb-10 items-center justify-center">
            <div>
                <Phone className="w-[16rem] h-[32rem]" >
                    <Image src="/montechia/carru3/PLACA1.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
                </Phone>
            </div>

            <div className="relative w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA2.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA3.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div> 

            <div className="relative w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA4.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>
            
            <div className="relative w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA5.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain" />
            </div>

            <div className="relative z-10  w-[300px] h-[297px] ">
                <Image src="/montechia/carru3/PLACA6.jpg" onClick={() => setModal(true)} fill quality={95} priority alt="Foto de celular" className="object-contain " />
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
                    <CarruselModal3Montechia />
                </div>
                </div>
            )}
        </div>
    )
}

export default Carrusel3