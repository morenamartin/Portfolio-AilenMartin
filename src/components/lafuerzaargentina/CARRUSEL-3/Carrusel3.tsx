"use client";
import Image from "next/image";
import Phone from "../../phone";
import { useState } from "react";
import { CarruselModulo3 } from "./CarruselModulo3";

const Carrusel3 = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="relative flex flex-row w-[90%] gap-2 mx-auto mt-60 h-[80vh] items-center justify-center">
      <Phone publicacionAbajo publicacionArriba top botones>
        <Image
          src="/lafuerza/carru3/PLACA1.jpg"
          onClick={() => setModal(true)}
          width={300}
          height={0}
          quality={95}
          priority
          alt="Foto de celular"
          className="object-contain duration-500 ease-in cursor-pointer hover:scale-125"
        />
      </Phone>

      <div className="flex flex-row items-center bg-green-600">
        <Image
          src="/lafuerza/carru3/placa2.jpg"
          onClick={() => setModal(true)}
          width={270}
          height={0}
          quality={95}
          priority
          alt="Foto de celular"
          className="object-contain duration-300 ease-in cursor-pointer hover:scale-105"
        />
        <Image
          src="/lafuerza/carru3/placa3.jpg"
          onClick={() => setModal(true)}
          width={270}
          height={0}
          quality={95}
          priority
          alt="Foto de celular"
          className="object-contain duration-300 ease-in cursor-pointer hover:scale-105"
        />
      </div>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#353232b4]"
          onClick={() => setModal(false)}
        >
          <div
            className="relative z-20 w-[29%] h-[77%] flex items-center justify-center bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <CarruselModulo3 />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel3;
