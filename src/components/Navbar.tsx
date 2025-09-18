const items = [
    {
        label:"Ailén Martín", 
        href: "/"
    },
    {
        label: "LAFUERZAARGENTINA",
        href: "lafuerzaargentina"
    },
    {
        label: "MONTECHIA", 
        href: "/montechia"
    },
    {
        label: "VM_ESTHETICA", 
        href: "/"
    },
    {
        label: "PUNTO Y COMA", 
        href: "/punto-y-coma"
    },
    {
        label: "INDIVIDUALES", 
        href: "/"
    },
    {
        label: "LOGOS", 
        href: "/"
    },
    {
        label: "CONTACTO", 
        href: "/"
    }
]

const Navbar = () => {
    return (
        <div className="fixed z-40 flex flex-row items-center justify-end w-full h-12 pr-1 bg-white border-2 border-[#ededed]">
            {items.map((item, index) => (
                <a href={item.href} key={index} className="mx-4 no-underline text-sm text-[#7b7e81] font-normal cursor-pointer hover:text-gray-900">{item.label}</a>
            ))}
        </div>
    )
}

export default Navbar