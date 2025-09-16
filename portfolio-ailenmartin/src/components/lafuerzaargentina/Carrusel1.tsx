
import PublicacionArriba from "../phone/PublicacionArriba"
import PublicacionAbajo from "../phone/PublicacionAbajo"
import Image from "next/image"
import Phone from "../phone"

const Carrusel1 = () => {
    return (
         <div className="relative pl-20 flex flex-row w-[90%] mt-20 h-[80vh] items-center ">
                <div className="relative w-[274px] h-[345px]">
                    <Image src="/lafuerza/carru1/placa1.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div>

                <div className="relative w-[274px] h-[345px]">
                    <Image src="/lafuerza/carru1/placa2.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div>

                <div className="relative z-10  w-[274px] h-[345px]">
                    <Image src="/lafuerza/carru1/placa3.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div> 

                <div className="absolute pt-1 right-[0px]">
                    <Phone>
                        <div className="flex flex-col justify-between w-full h-full p-4 pt-16 pb-10">
                            <div className="absolute top-0 z-20 -translate-x-1/2 left-1/2">
                                <div className="w-32 h-3 bg-black rounded-b-xl"></div>
                            </div>
                            <PublicacionArriba />
                                <Image src="/lafuerza/carru1/placa4.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain" />
                            <PublicacionAbajo />
                        </div>
                    </Phone>
                </div>
            </div>
    )
}

export default Carrusel1