const arrayTrabajos = [
    "Gestión de cuentas",
    "Diseño de posteos",
    "Creación de contenido",
    "Edición de videos",
    "Redaccion de copys",
    "Creación de logos"
]

const Trabajos = () => {
    return (
        <div className="text-center mt-36 ">
            <h1 className="font- text-[#e1b4bf] text-7xl -tracking-[4px]">TRABAJOS QUE REALIZO</h1>
            <div className="grid grid-cols-2 w-[75%] m-auto gap-8 mt-12">
                {arrayTrabajos.map((trabajo, index) => (
                    <div key={index} className="w-full font- font-medium -tracking-[1px] py-1 text-3xl border-[1px] border-gray-900 rounded-full"><strong>{trabajo}</strong></div>
                ))}
                    
            </div>
            <div className="mt-14 w-[30%] m-auto">
                <span className="font- text-2xl text-center">Podés ver mi experiencia con cuentas en la parte superior</span>
            </div>
        </div>
    )
}

export default Trabajos 