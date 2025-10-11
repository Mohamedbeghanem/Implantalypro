"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function MainImageCarousel() {
  const images = Array.from({ length: 18 }, (_, i) => `/image${(i + 1).toString().padStart(5, '0')}.jpeg`);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover rounded-lg"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
