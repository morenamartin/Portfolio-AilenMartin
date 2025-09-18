"use client";
import Image from "next/image";
import Phone from "../../phone";
import { useState } from "react";
import { Carrusel } from "./CarruselModulo1";

const Carrusel1 = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="relative pl-24 flex flex-row w-[90%] mt-20 h-[80vh] items-center">
        <div className="relative w-[274px] h-[345px]">
          <Image
            src="/lafuerza/carru1/placa1.jpg"
            onClick={() => setModal(true)}
            fill
            quality={95}
            priority
            alt="Foto de celular"
            className="object-contain w-full h-full duration-300 ease-in cursor-pointer hover:scale-105"
          />
        </div>

        <div className="relative w-[274px] h-[345px]">
          <Image
            src="/lafuerza/carru1/placa2.jpg"
            onClick={() => setModal(true)}
            fill
            quality={95}
            priority
            alt="Foto de celular"
            className="object-contain w-full h-full duration-300 ease-in cursor-pointer hover:scale-105"
          />
        </div>

        <div className="relative z-10  w-[274px] h-[345px]">
          <Image
            src="/lafuerza/carru1/placa3.jpg"
            onClick={() => setModal(true)}
            fill
            quality={95}
            priority
            alt="Foto de celular"
            className="object-contain w-full h-full duration-300 ease-in cursor-pointer hover:scale-105"
          />
        </div>

        <div
          className="absolute pt-1 right-[0px] cursor-pointer "
          onClick={() => setModal(true)}
        >
          <Phone top botones publicacionArriba publicacionAbajo>
            <Image
              src="/lafuerza/carru1/placa4.jpg"
              width={300}
              height={0}
              quality={95}
              priority
              alt="Foto de celular"
              className="duration-300 ease-in hover:scale-125 "
            />
          </Phone>
        </div>
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
            <Carrusel />
          </div>
        </div>
      )}
    </>
  );
};

export default Carrusel1;
