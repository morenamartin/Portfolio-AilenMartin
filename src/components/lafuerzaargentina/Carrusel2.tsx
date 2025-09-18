import PublicacionArriba from "../phone/PublicacionArriba"
import PublicacionAbajo from "../phone/PublicacionAbajo"
import Image from "next/image"
import Phone from "../phone"

const Carrusel2 = () => {
    return (
         <div className="relative pl-20 flex flex-row w-[90%] mt-60 h-[80vh] items-center ">
                <div className="relative w-[274px] h-[345px]">
                    <Image src="/lafuerza/carru2/PLACA1.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div>

                <div className="pt-1 ">
                    <Phone publicacionAbajo publicacionArriba top>
                        <Image src="/lafuerza/carru2/PLACA2.jpg" width={300} height={0} quality={95} priority alt="Foto de celular" />
                    </Phone>
                </div>

                <div className="relative w-[274px] h-[345px]">
                    <Image src="/lafuerza/carru2/placa3.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div>

                <div className="relative z-10  w-[274px] h-[345px] ">
                    <Image src="/lafuerza/carru2/placa4.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full border-[1px] border-black" />
                </div> 


            </div>
    )
}

export default Carrusel2