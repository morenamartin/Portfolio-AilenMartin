import photoshop from "../../assets/programas/photoshop.png"
import illustrator from "../../assets/programas/ilustrator.png"
import premierpro from "../../assets/programas/Premier Pro.png"
import Indesign from "../../assets/programas/Indesign.png"
import Canva from "../../assets/programas/canva.png"
import Capcut from "../../assets/programas/capcut.png"
import Notion from "../../assets/programas/notion.png"
import Trello from "../../assets/programas/trello.png"
import Excel from "../../assets/programas/excel.png"
import Word from "../../assets/programas/word.png"
import PowerPoint from "../../assets/programas/powerpoint.png"
import Drive from "../../assets/programas/drive.png"
import Image from "next/image"



const arrayProgramas = [
    {
        titulo: "Photoshop",
        icono: photoshop
    },
    {
        titulo: "Illustrator",
        icono: illustrator
    },
    {
        titulo: "Premier Pro",
        icono: premierpro
    },
    {
        titulo: "Indesign",
        icono: Indesign
    },
    {
        titulo: "Canva",
        icono: Canva
    },
    {
        titulo: "Capcut",
        icono: Capcut
    },
    {
        titulo: "Notion",
        icono: Notion
    },
    {
        titulo: "Trello",
        icono: Trello
    },
    {
        titulo: "Excel",
        icono: Excel
    },
    {
        titulo: "Word",
        icono: Word
    },
    {
        titulo: "Power Point",
        icono: PowerPoint
    },
    {
        titulo: "Drive",
        icono: Drive
    },
]

const Programas = () => {
    return (
        <div className="mt-20">
            <h1 className="font-serif text-[#e1b4bf] text-7xl -tracking-[4px] text-center">PROGRAMAS QUE <br /> UTILIZO</h1>
            <div className="grid grid-cols-2 gap-6 w-[40%] mx-auto bg-green-400">
                {arrayProgramas.map((programa, index) => (
                    <div key={index} className="flex flex-row items-center">
                        <Image src={programa.icono} width={80} height={80} alt={programa.titulo} />    
                        <span className="font-serif text-xl text-center">{programa.titulo}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programas