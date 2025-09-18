"use client"
import { ReactNode, CSSProperties, useState, useEffect } from "react";
import PublicacionArriba from "./phone/PublicacionArriba";
import PublicacionAbajo from "./phone/PublicacionAbajo";
import Publicacion from "./phone/Publicacion";
import DecoHistorias from "./phone/DecoHistorias";

interface PhoneProps {
    children: ReactNode;
    className?: string;
    top?: boolean;
    botones?: boolean;
    publicacionArriba?: ReactNode;
    publicacionAbajo?: ReactNode;
    decoHistorias?: ReactNode;
    historia?: boolean
}

const Phone: React.FC<PhoneProps> = ({className, children, top, botones, publicacionArriba, publicacionAbajo, decoHistorias }) => {
    return (
        <div className={`bg-black relative rounded-[30px] ${!className ? "h-[90vh] w-[21vw]" : className} p-2`}>

    {/* BOTONES IZQUIERDA*/}
            {botones && <div className="absolute flex flex-col -left-1 top-20">
                <div className="w-[8px] h-10 bg-black rounded-l-xl"></div>
                <div className="w-[8px] h-10 bg-black rounded-l-xl"></div>
            </div>}

    {/* COSITO DE ARRIBA */}
            {top && <div className="flex justify-center w-full">
                <div className="bg-black absolute top-2 h-3 rounded-b-xl w-[45%]"></div>
            </div>}
    
    {/* INTERIOR DEL CELULAR */}
            <div className={`w-full flex flex-col justify-between h-full ${publicacionArriba && publicacionAbajo && "py-8"} bg-white rounded-[25px]`}>
                {publicacionArriba && <PublicacionArriba className="p-4"/>}
                    <Publicacion>
                        {decoHistorias && <DecoHistorias />}    
                        {children}
                    </Publicacion>
                {publicacionAbajo && <PublicacionAbajo className="px-4 "/>}
                {decoHistorias && 
                    <div className="absolute flex justify-center items-center w-full bg-black rounded-b-[15px] h-8 bottom-0">
                        <div className="w-[10%] h-4 bg-black border-2 border-gray-600 rounded-full"></div>
                    </div>
                }    
            </div>

    {/* BOTON DERECHA*/}
           {botones && <div className="absolute flex flex-col -right-1 top-24">
                <div className="w-[8px] h-10 bg-black rounded-r-xl"></div>
            </div>}


        </div>     
    );
};

export default Phone;
