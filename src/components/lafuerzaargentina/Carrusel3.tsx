import PublicacionArriba from "../phone/PublicacionArriba"
import PublicacionAbajo from "../phone/PublicacionAbajo"
import Image from "next/image"
import Phone from "../phone"

const Carrusel3 = () => {
    return (
         <div className="relative flex flex-row w-[90%] gap-2 mx-auto mt-60 h-[80vh] items-center justify-center">

            <Phone publicacionAbajo publicacionArriba top botones>
                <Image src="/lafuerza/carru3/PLACA1.jpg" width={300} height={0} quality={95} priority alt="Foto de celular" />
            </Phone>

            <div className="flex flex-row items-center bg-green-600">
                    <Image src="/lafuerza/carru3/placa2.jpg" width={270} height={0} quality={95} priority alt="Foto de celular" />
                    <Image src="/lafuerza/carru3/placa3.jpg" width={270} height={0} quality={95} priority alt="Foto de celular" />
            </div>


            </div>
    )
}

export default Carrusel3