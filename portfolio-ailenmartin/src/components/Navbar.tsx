const items = [
    "Ailén Martín", 
    "LAFUERZAARGENTINA",
    "MONTECHIA", 
    "VM_ESTHETICA",
    "PUNTO Y COMA", 
    "INDIVIDUALES", 
    "LOGOS", 
    "CONTACTO"
]

const Navbar = () => {
    return (
        <div className="fixed z-40 flex flex-row items-center justify-end w-full h-12 pr-1 bg-white border-2 border-[#ededed]">
            {items.map((item, index) => (
                <button key={index} className="mx-4 text-sm font-serif text-[#7b7e81] font-light cursor-pointer hover:text-gray-900">{item}</button>
            ))}
        </div>
    )
}

export default Navbar