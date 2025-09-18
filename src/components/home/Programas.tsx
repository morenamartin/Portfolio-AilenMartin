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
        titulo: "Notion",
        icono: Notion
    },
    {
        titulo: "Illustrator",
        icono: illustrator
    },
    {
        titulo: "Trello",
        icono: Trello
    },
    {
        titulo: "Premier Pro",
        icono: premierpro
    },
    {
        titulo: "Excel",
        icono: Excel
    },
    {
        titulo: "Indesign",
        icono: Indesign
    },
    {
        titulo: "Word",
        icono: Word
    },
    {
        titulo: "Canva",
        icono: Canva
    },
    {
        titulo: "Power Point",
        icono: PowerPoint
    },
    {
        titulo: "Capcut",
        icono: Capcut
    },
    {
        titulo: "Drive",
        icono: Drive
    },
]

const Programas = () => {
    return (
        <div className="mt-24">
            <h1 className="font- text-[#e1b4bf] text-7xl -tracking-[4px] text-center">PROGRAMAS QUE <br /> UTILIZO</h1>
            <div className="grid grid-cols-2 gap-x-40 w-[45%] mt-10 mx-auto">
                {arrayProgramas.map((programa, index) => (
                    <div key={index} className="flex flex-row items-center mb-4 w-80">
                        <div className="w-[70px] h-fit flex justify-center items-center mr-4">
                            <Image src={programa.icono} alt={programa.titulo} />    
                        </div>
                        <span className="text-3xl font-">{programa.titulo}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programas