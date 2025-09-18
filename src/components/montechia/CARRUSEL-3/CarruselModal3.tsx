import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image"
import React from "react"

import Autoplay from "embla-carousel-autoplay"

export function CarruselModal3Montechia() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel      
      plugins={[
        Autoplay({}),
      ]}
      setApi={setApi} >
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
            <Image src="/montechia/carru3/PLACA1.jpg" width={400} quality={100} height={10} alt="imagen 1" className="mx-auto"/>
        </CarouselItem>
        <CarouselItem>
            <Image src="/montechia/carru3/PLACA2.jpg" width={400} quality={100} height={10} alt="imagen" className="mx-auto " />
        </CarouselItem>
        <CarouselItem>
            <Image src="/montechia/carru3/PLACA3.jpg" width={400} quality={100} height={10} alt="imagen" className="mx-auto " />
        </CarouselItem>
        <CarouselItem>
            <Image src="/montechia/carru3/PLACA4.jpg" width={400} quality={100} height={10} alt="imagen" className="mx-auto " />
        </CarouselItem>
        <CarouselItem>
            <Image src="/montechia/carru3/PLACA5.jpg" width={400} quality={100} height={10} alt="imagen" className="mx-auto " />
        </CarouselItem>
        <CarouselItem>
            <Image src="/montechia/carru3/PLACA6.jpg" width={400} quality={100} height={10} alt="imagen" className="mx-auto " />
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
      
    </Carousel>
  )
}