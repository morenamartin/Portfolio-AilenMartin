"use client"
import Image from "next/image";
import Phone from "../../phone";
import { useState } from "react";
import { CarouselHistorias } from "./CarruselHistorias";

const arrayHistorias = [
  "/lafuerza/historias/h1-3.jpg",
  "/lafuerza/historias/h2.jpg",
  "/lafuerza/historias/h3.jpg",
  "/lafuerza/historias/h4.jpg",
  "/lafuerza/historias/h5.jpg",
  "/lafuerza/historias/h6.jpg",
];

const Historias = () => {
const [modal, setModal] = useState(false);
  return (
    <div className="flex flex-col items-center w-full mt-40">
      <div className="h-1 w-[90%] bg-pink-500"></div>

      <div className="flex flex-row flex-wrap gap-2 my-16 " onClick={() => setModal(true)}>
        {arrayHistorias.map((hist, index) => (
          <Phone
            historia
            decoHistorias
            key={index}
            className="p-1 overflow-hidden w-52 h-96"
          >
            <Image
              src={hist}
              width={200}
              height={0}
              quality={100}
              priority
              alt="Foto de celular "
              className="object-contain rounded-t-[25px]"
            />
          </Phone>
        ))}
      </div>
      <div className="h-1 w-[90%] bg-[#f975b8]"></div>

        {modal && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#353232b4]"
            onClick={() => setModal(false)}
            >
            <div
                className="relative z-20 w-fit h-fit"
                onClick={(e) => e.stopPropagation()}
            >
                <CarouselHistorias />
            </div>
            </div>
        )}
    </div>
  );
};

export default Historias;
