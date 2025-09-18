import { ReactNode } from "react"

interface PublicacionProps {
    children: ReactNode;
    historia?: boolean
}

const Publicacion: React.FC<PublicacionProps> = ({children, historia}) => {
    return (
        <div className={`h-fit relative  ${historia && "rounded-t-[25px]"} w-full overflow-hidden`}>
            {children}
        </div>
    )
}

export default Publicacion