import Carrusel1 from "@/components/puntoYComa/Carrusel1"

const PuntoYComa = () => {
    return (
        <div className="pt-32 pb-40">
            <div className="pl-20 font-"> 
                <h1 className="mb-4 text-3xl -tracking-[2px]">Punto y Coma</h1>
                <p className="text-xl leading-8">
                    Cuando se trata de emprendimientos humanos la estrategia fundamental <br />
                    es siempre hablar desde el lado humano. <br />
                    No vender, conectar. <br />
                </p>
            </div>

            <Carrusel1 />
        </div>

    )
}

export default PuntoYComa