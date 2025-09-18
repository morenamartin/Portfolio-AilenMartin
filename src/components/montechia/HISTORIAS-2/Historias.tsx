"use client"
import Image from "next/image"
import Phone from "../../phone"
import { useState } from "react"
import { CarouselHistorias3Montechia } from "./CarruselHistorias3"

const Historias = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className="flex flex-row gap-12 w-[85%] mx-auto mt-36 pb-32 justify-center">  
            <div className="flex flex-row gap-2 border-t-4 mt-32 pt-14 border-[#e64141] w-fit">
                <Phone historia className="border-2 border-gray-400 h-[24rem]">
                    <Image src="/montechia/historia/1/H1-A.jpg" onClick={() => setModal(true)} height={0} width={180} quality={100} priority alt="Foto de celular" className="h-full py-8 rounded-2xl"/>                         
                </Phone>
                <Phone historia className="border-2 border-gray-400 h-[24rem]">
                    <Image src="/montechia/historia/1/H1-b.jpg" onClick={() => setModal(true)} height={0} width={180} quality={100} priority alt="Foto de celular" className="h-full py-8 rounded-2xl" />                         
                </Phone>
            </div>

            <div className="flex flex-row gap-2 border-b-4 h-fit pb-14 border-[#e64141] w-fit">
                <Phone historia className="border-2 border-gray-400 h-[24rem]">
                    <Image src="/montechia/historia/2/H1-2.jpg" onClick={() => setModal(true)} height={0} width={180} quality={100} priority alt="Foto de celular" className="h-full rounded-2xl" />                         
                </Phone>
                <Phone historia className="border-2 border-gray-400 h-[24rem]">
                    <Image src="/montechia/historia/2/H2-2.jpg" onClick={() => setModal(true)} height={0} width={180} quality={100} priority alt="Foto de celular" className="h-full rounded-2xl" />                         
                </Phone>
            </div>

            {modal && (
                <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#353232b4]"
                onClick={() => setModal(false)}
                >
                <div
                    className="relative z-20 w-fit h-fit"
                    onClick={(e) => e.stopPropagation()}
                >
                    <CarouselHistorias3Montechia />
                </div>
                </div>
            )}
        </div>
    )
}

export default Historias