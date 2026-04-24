"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"

const images = [
  {
    src: "/images/gallery-water.jpg",
    alt: "Crystal clear turquoise waters of Perhentian",
    tall: true,
  },
  {
    src: "/images/gallery-brass.jpg",
    alt: "Vintage brass fittings on dark colonial timber",
    tall: false,
  },
  {
    src: "/images/gallery-monkeys.jpg",
    alt: "Macaque monkeys in the surrounding jungle",
    tall: false,
  },
  {
    src: "/images/gallery-turtle.jpg",
    alt: "Sea turtle swimming in clear tropical waters",
    tall: true,
  },
  {
    src: "/images/gallery-interior.jpg",
    alt: "Heritage interior with dark wood beams and white linens",
    tall: false,
  },
  {
    src: "/images/gallery-botanical.jpg",
    alt: "Lush tropical foliage surrounding the resthouse",
    tall: false,
  },
]

export function GallerySection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-3 text-center text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Gallery
          </p>
          <h2 className="text-center font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl text-balance">
            Life on the Island
          </h2>
        </FadeIn>

        {/* Masonry grid */}
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.1}>
              <div
                className={`group relative mb-4 overflow-hidden break-inside-avoid ${
                  image.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm text-primary-foreground/90">{image.alt}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
