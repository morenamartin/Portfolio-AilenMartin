import Image from "next/image"
import Phone from "../phone"
import DecoHistorias from "../phone/DecoHistorias"

const arrayHistorias = [
    "/lafuerza/historias/h1-3.jpg",
    "/lafuerza/historias/h2.jpg",
    "/lafuerza/historias/h3.jpg",
    "/lafuerza/historias/h4.jpg",
    "/lafuerza/historias/h5.jpg",
    "/lafuerza/historias/h6.jpg",
]

const Historias = () => {
    return (
        <div className="flex flex-col items-center w-full mt-40">
            <div className="h-1 w-[90%] bg-pink-500"></div>


                <div className="grid grid-cols-3 gap-10 my-16 ">
                {arrayHistorias.map((hist, index) => (
                    <Phone key={index}  width="16rem" height="76vh">
                        <div className="relative w-full h-full overflow-hidden rounded-[30px] ">
                            <DecoHistorias />
                            <Image src={hist} fill quality={100} priority alt="Foto de celular" className="object-cover" />                         
                        </div>
                    </Phone>
                ))}
                </div>
            <div className="h-1 w-[90%] bg-[#f975b8]"></div>
        </div>
    )
}

export default Historias