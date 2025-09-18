import Image from "next/image"
import Phone from "../phone"

const Carrusel1 = () => {
    return (
         <div className="relative pl-24 flex flex-row w-[90%] mt-20 h-[80vh] items-center ">
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
                    <Phone top botones publicacionArriba publicacionAbajo>
                        <Image src="/lafuerza/carru1/placa4.jpg" width={300} height={0} quality={95} priority alt="Foto de celular"  />
                    </Phone>
                </div>
            </div>
    )
}

export default Carrusel1