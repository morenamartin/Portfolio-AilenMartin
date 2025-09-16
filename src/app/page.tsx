import Educacion from "@/components/home/Educacion";
import Inicio from "@/components/home/Inicio";
import Programas from "@/components/home/Programas";
import QuienSoy from "@/components/home/QuienSoy";
import Trabajos from "@/components/home/Trabajos";
import TrabajosTexto from "@/components/home/TrabajosTexto";

export default function Home() {
  return (
    <>
      <Inicio />
      <QuienSoy />
      <Trabajos />
      <Educacion />
      <Programas />
      <TrabajosTexto />
    </>
  )
}