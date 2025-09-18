"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

const arrayHistorias = [
  {id: 1, hist: "/montechia/historia/1/H1-A.jpg"},
  {id: 2, hist: "/montechia/historia/1/H1-b.jpg"},
  {id: 3, hist: "/montechia/historia/2/H1-2.jpg"},
  {id: 4, hist: "/montechia/historia/2/H2-2.jpg"},
];

const barritas = [ 1, 2, 3, 4]


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselHistorias3Montechia() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[
        plugin.current,
        Autoplay({
          delay: 8000,
        }),
      ]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {arrayHistorias.map((hist) => (
          <CarouselItem key={hist.id} >
              <Card>
                <CardContent className="flex items-center justify-center aspect-square" >
                    <div className="absolute grid grid-cols-4 gap-2 w-[90%] justify-between items-center px-2 top-0 h-8 ">
                      {
                        barritas.map((barr) => (
                          <div key={barr} className="w-full h-1 bg-gray-500 rounded-full">
                            <div className={`h-1 bg-[#f975b8] ${hist.id === barr ? `w-full duration-700` : "bg-gray-500 w-full"}`}></div>
                          </div>
                        ))
                      }
                    </div>
                  <Image
                    src={hist.hist}
                    width={300}
                    height={0}
                    quality={100}
                    priority
                    alt="Foto de celular "
                    className="rounded-xl"
                  />
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
