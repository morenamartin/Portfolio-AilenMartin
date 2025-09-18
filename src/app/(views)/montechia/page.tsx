import Carrusel1 from "@/components/montechia/carrusel1"
import Carrusel2 from "@/components/montechia/Carrusel2"
import Carrusel3 from "@/components/montechia/Carrusel3"
import Historias from "@/components/montechia/Historias"
import Phone from "@/components/phone"
import FaceAbajo from "@/components/phone/FaceAbajo"
import FaceArriba from "@/components/phone/FaceArriba"
import PublicacionAbajo from "@/components/phone/PublicacionAbajo"
import PublicacionArriba from "@/components/phone/PublicacionArriba"
import Image from "next/image"

const Montechia = () => {
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
                    <div className="relative z-10 left-[25px] w-[274px] h-[345px]">
                        <Image src="/montechia/primero/PLACA1.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain border-2 border-black" />
                    </div> 

                    <div className="absolute right-0 pt-1">
                        <Phone>
                        <div className="flex flex-col justify-between w-full h-full p-4 pt-16 pb-10">
                            <div className="absolute top-0 z-20 -translate-x-1/2 left-1/2">
                                <div className="w-32 h-3 bg-black rounded-b-xl"></div>
                            </div>
                            <PublicacionArriba />
                                <Image src="/montechia/primero/PLACA2.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
                            <PublicacionAbajo />
                        </div>
                        </Phone>
                    </div>
                </div>
                

            </div>
            <Carrusel1 />
            <Carrusel2 />
            <Carrusel3 />

            <Historias />
        </div>
    )
}

export default Montechia