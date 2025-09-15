import Image from "next/image";
import dibujitoInicio from "../../assets/dibujitoInicio.png"
import estrellita from  "../../assets/estrellitaInicio.png"

const Inicio = () => {
    return (
        <div className="relative">
            <div className="absolute z-10 -top-[410px] right-80">
                <Image width={300} className="-rotate-[36deg]" src={dibujitoInicio} alt="dibujo de inicio" />
            </div>
            <div className="absolute z-10 top-24 right-44">
                <Image width={50} className="-rotate-[36deg]" src={estrellita} alt="dibujo de inicio" />
            </div>
            <div className="flex flex-col mt-56 space-y-0 text-center">
                <h1 className="text-[56vh] italic -tracking-[60px] leading-none font-normal font-poppins">Portfolio</h1>
                <h2 className="text-[44px] -tracking-[5px] font-light leading-none font-poppins">Ailén Martín - 2025</h2>
            </div>
        </div>
    )
}

export default Inicio;