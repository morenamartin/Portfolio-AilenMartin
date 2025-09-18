"use client"
import Image from "next/image"
import Phone from "../../phone"
import { useState } from "react"
import { CarouselHistorias2Montechia } from "./CarruselHistorias2Montechia"

const Carrusel1 = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className="flex flex-row justify-center w-full gap-2 mt-44">
            <Phone historia  top className="border-4 border-gray-600 h-[30rem] w-64 ">
                <Image src="/montechia/carru1/H1.jpg" onClick={() => setModal(true)} width={400} height={0} quality={100} priority alt="Foto de celular" className="rounded-xl"/>                         
            </Phone>
            <Phone historia  top className="w-64 border-4 border-gray-600">
                <Image src="/montechia/carru1/H2.jpg" onClick={() => setModal(true)} width={400} height={0} quality={100} priority alt="Foto de celular" className="rounded-xl"/>                         
            </Phone>

        {modal && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#353232b4]"
            onClick={() => setModal(false)}
            >
            <div
                className="relative z-20 w-fit h-fit"
                onClick={(e) => e.stopPropagation()}
            >
                <CarouselHistorias2Montechia />
            </div>
            </div>
        )}
        </div>
    )
}

export default Carrusel1