"use client";
import Image from "next/image";
import Phone from "../../phone";
import { useState } from "react";
import { CarruselModulo2 } from "./CarruselModulo2";

const Carrusel2 = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="relative pl-20 flex flex-row w-[90%] mt-60 h-[80vh] items-center ">
      <div className="relative w-[274px] h-[345px]">
        <Image
          src="/lafuerza/carru2/PLACA1.jpg"
          onClick={() => setModal(true)}
          fill
          quality={95}
          priority
          alt="Foto de celular"
          className="object-contain duration-300 ease-in cursor-pointer hover:scale-105"
        />
      </div>

      <button onClick={() => setModal(true)} className="pt-1 ">
        <Phone publicacionAbajo publicacionArriba top>
          <Image
            src="/lafuerza/carru2/PLACA2.jpg"
            onClick={() => setModal(true)}
            width={300}
            height={0}
            quality={95}
            priority
            alt="Foto de celular"
            className="duration-300 ease-in hover:scale-125 "
          />
        </Phone>
      </button>

      <div className="relative w-[274px] h-[345px]">
        <Image
          src="/lafuerza/carru2/placa3.jpg"
          onClick={() => setModal(true)}
          fill
          quality={95}
          priority
          alt="Foto de celular"
          className="object-contain duration-300 ease-in cursor-pointer hover:scale-105"
        />
      </div>

      <div className="relative z-10  w-[274px] h-[345px] ">
        <Image
          src="/lafuerza/carru2/placa4.jpg"
          onClick={() => setModal(true)}
          fill
          quality={95}
          priority
          alt="Foto de celular"
          className="object-contain  border-[1px] border-black duration-300 ease-in cursor-pointer hover:scale-105"
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
            <CarruselModulo2 />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrusel2;
