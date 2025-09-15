const arrayEducacion = [
    {
        titulo: "LIC. EN PUBLICIDAD",
        donde: "UAI / 2023-ACTUALIDAD",
    },
    {
        titulo: "CREATIVIDAD INTEGRAL",
        donde: "BROTHER / 2025"
    },
    {
        titulo: "DISEÑO GRÁFIO DIGITAL",
        donde: "ESCUELA DA VINCI / 2023"
    },
    {
        titulo: "CURSO COMMUNITY MANAGER",
        donde: "JULIANA COMUNIDAD / 2024"
    },
    {
        titulo: "CURSO ESTRATÉGIAS ORGÁNICAS",
        donde: "JULIANA COMUNIDAD / 2024"
    },
    {
        titulo: "CURSO MARKETING DE CONTENIDO",
        donde: "LUZZY DIGITAL / 2024"
    }
]

const Educacion = ()  => {
    return (
        <div className="mt-20">
            <h1 className="font-serif text-[#e1b4bf] text-7xl -tracking-[4px] text-center">EDUCACIÓN</h1>
            {
                arrayEducacion.map((educacion, index) => (
                    <div key={index} className="mt-10 w-[60%] m-auto text-center">
                        <h2 className="font-openSans text-2xl -tracking-[1px] text-[#f975b8]"><strong>{educacion.titulo}</strong></h2>
                        <p className="font-serif text-base -tracking-[1px]">{educacion.donde}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Educacion;