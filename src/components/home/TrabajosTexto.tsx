import Image from "next/image"
import circuloTitulo from "../../assets/circuloTitulo.png"

const TrabajosTexto = () => {  
    return (
        <div className="relative flex flex-col items-center pb-24 mt-28">
            <Image className="absolute z-10 h-20 w-72" src={circuloTitulo} alt="linea decorativa"/>
            <h1 className="font-serif z-20 text-6xl mt-5 -tracking-[4px] text-center">Trabajos</h1>
            <div className="w-[90%] mt-10 text-center ">
                <p className="font-serif text-[23px] leading-9 -tracking-[1px]">
                   Trabajé con cuentas de indumentaria, de tecnología, de cosmetología, de gastronomía y más. <br />
                   En todas ellas busqué que su perfil represente los valores, la esencia y los propósitos <br />
                   que los impulsan a seguir creciendo. <br />
                   Porque una publicación no es solo una foto con colores y linda tipografía. <br />
                   Es la posibilidad de mostrarse a su público, para llegar con el mensaje justo, en el momento justo, a la persona justa. 
                </p>
                <div className="mt-10 space-y-4 font-serif text-[28px] -tracking-[2px]">
                    <h2 className="font-semibold">Podés ver mi experiencia con cuentas en la parte superior</h2>
                    <h3>O también visitar mi portfolio de publicidades acá abajo</h3>
                    <a href="https://martinnaailena0e6.myportfolio.com/" target="_blank" className="font-semibold text-[#f975b8] underline">Portfolio publicidades</a>
                </div>
                
                <div className="flex flex-col items-center space-y-4 mt-14">
                    <div className="w-fit font-poppins py-1 px-10 text-xl border-[1px] border-gray-900 rounded-full">
                        ailen.martin.arg@gmail.com
                    </div>
                    <div className="w-fit px-10 font-poppins py-1 text-xl border-[1px] border-gray-900 rounded-full">
                        +54 1122385268
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TrabajosTexto
