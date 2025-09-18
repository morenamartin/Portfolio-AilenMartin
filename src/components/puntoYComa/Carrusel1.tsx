import Image from "next/image"
import PublicacionAbajo from "../phone/PublicacionAbajo"
import PublicacionArriba from "../phone/PublicacionArriba"

const Carrusel1 = () => {
    return (
         <div className="relative flex flex-row justify-between w-[94%] mx-auto h-[80vh] items-center ">
            
            <div className="flex flex-row items-center">
                <div className="relative w-[230px] h-[288px]">
                    <Image src="/puntoYcoma/PLACA1.png" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div>
                <div className="relative w-[230px] h-[288px]">
                    <Image src="/puntoYcoma/PLACA2.png" fill quality={95} priority alt="Foto de celular" className="object-contain w-full h-full" />
                </div>
            </div>

                <div className="flex flex-col z-30 justify-center gap-2 py-4 absolute mx-[29rem] rounded-[15px] w-80 h-[70vh] bg-gray-2100">
                    <PublicacionArriba className="px-2 "/>
                    <div className="relative h-[70%] w-full bg-green-400 overflow-hidden">
                        <Image src="/puntoYcoma/PLACA3.jpg" fill quality={95} priority alt="Foto" className="object-cover object-bottom" />
                    </div>
                    <PublicacionAbajo className="px-2"/>
                </div>

            <div className="flex flex-row items-center">
                <div className="relative w-[230px] h-[288px]">
                    <Image src="/puntoYcoma/PLACA4.png" fill quality={95} priority alt="Foto de celular" className="object-contain" />
                </div>

                <div className="relative w-[250px] h-[288px] ">
                    <Image src="/puntoYcoma/PLACA5.jpg" fill quality={95} priority alt="Foto de celular" className="object-contain border-[1px] border-black" />
                </div> 
            </div>
        </div>
    )
}

export default Carrusel1