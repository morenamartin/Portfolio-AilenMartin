import Carrusel1 from "@/components/lafuerzaargentina/CARRUSEL-1/Carrusel1";
import Carrusel2 from "@/components/lafuerzaargentina/CARRUSEL-2/Carrusel2";
import Carrusel3 from "@/components/lafuerzaargentina/CARRUSEL-3/Carrusel3";
import Historias from "@/components/lafuerzaargentina/HISTORIAS/Historias";

const LaFuerzaArgentina = () => {
    return (
        <div className="pt-32 pb-40">
            <div className="pl-20 font-"> 
                <h1 className="mb-4 text-3xl -tracking-[2px]">Lafuerzaargentina</h1>
                <p className="text-xl leading-8">
                    Las redes sociales son la puerta principal actual para mostrarte a tu público objetivo. <br />
                    Usarlas bien y aprovecharlas al máximo es fundamental. <br />
                    Mostrar los valores de la marca a través del contenido es la mejor forma de establecer un <br />
                    vínculo <br />
                    con los clientes que también los comparten.
                </p>
            </div>

            <Carrusel1 />
            <Carrusel2 />
            <Carrusel3 />

            <Historias />
        </div>
    )
}

export default LaFuerzaArgentina;