import { ReactNode, CSSProperties } from "react";

interface PhoneProps {
    children: ReactNode;
    width?: string | number;
    height?: string | number;
    className?: string;
}

const Phone = ({
    children,
    width = "19rem",
    height = "96vh",
    className = "",
}: PhoneProps) => {
    return (
        <div className="flex flex-cols-[1fr_2fr_1fr]">
            <div className="flex flex-col mt-16">
                <div className="w-1 h-8 bg-black rounded-l-xl"></div>
                <div className="w-1 h-8 bg-black rounded-l-xl"></div>
            </div>
            <div
                className={`relative flex flex-col items-center justify-center overflow-hidden bg-black rounded-[40px] p-2 ${className}`}
                style={{
                    width,
                    height,
                }}
            >

                <div className="relative flex flex-col rounded-[30px] w-full h-full bg-gray-100">
                    {children}
                </div>
            </div>
            <div className="mt-20">
                <div className="w-1 h-8 bg-black rounded-r-xl"></div>
            </div>
        </div>
    );
};

export default Phone;
