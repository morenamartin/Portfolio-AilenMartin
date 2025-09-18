"use client"
import Carrusel1 from "@/components/montechia/HISTORIAS-1/carrusel1"
import Carrusel2 from "@/components/montechia/CARRUSEL-2/Carrusel2"
import Carrusel3 from "@/components/montechia/CARRUSEL-3/Carrusel3"
import { CarruselModal1Montechia } from "@/components/montechia/CARRUSEL-1/CarruselModal1"
import Historias from "@/components/montechia/HISTORIAS-2/Historias"
import Phone from "@/components/phone"
import Image from "next/image"
import { useState } from "react"

const Montechia = () => {
    const [modal, setModal] = useState(false);
    return (
        <div>
            <div className="grid items-center grid-cols-2 pt-24">
                <div className="pl-20 font-"> 
                    <h1 className="mb-4 text-3xl -tracking-[2px]">Montechia</h1>
                    <p className="text-xl leading-8">
                        Marcas hay muchas y si no te diferencias del resto, <br/>
                        la gente no te elige. <br />
                        En un mundo colapsado de información <br />
                        es importante buscar un marco diferencial del resto, <br />
                        encontrar la respuesta a un problema de la gente es el mayor <br />
                        desafío. <br />
                        Pero hacerlo es el primer paso <br />
                        para lograr todos los objetivos de tu marca. <br />
                    </p>
                </div>

                <div className="relative flex flex-row w-[90%] mt-20 h-[80vh] items-center">
                    <div className="relative z-10 left-[47px] w-[274px] h-[345px]">
                        <Image src="/montechia/primero/PLACA1.jpg" fill quality={95} onClick={() => setModal(true)} priority alt="Foto de celular" className="object-contain border-2 border-black" />
                    </div> 

                    <div className="absolute right-0 pt-1">
                    <Phone historia className="w-72 h-[34rem] ">
                        <div className="rounded-t-[25px] h-full flex flex-col justify-center">
                            <Image src="/montechia/primero/PLACA2.jpg" onClick={() => setModal(true)} width={400} height={0} quality={100} priority alt="Foto de celular " className=""/>                         
                        </div>
                    </Phone>
                    </div>
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
                        <CarruselModal1Montechia />
                    </div>
                    </div>
                )}
            </div>
            <Carrusel1 />
            <Carrusel2 />
            <Carrusel3 />
            <Historias />
        </div>
    )
}

export default Montechia