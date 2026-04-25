"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"

const features = [
  {
    image: "/images/28.png",
    title: "Chengal Wood",
    subtitle: "Heritage Timber",
    description:
      "Prized for centuries by Malay craftsmen, Chengal is one of the hardest tropical timbers in existence. Each beam in the Resthouse carries the grain and character of over a hundred years.",
  },
  {
    image: "/images/13.png",
    title: "Solar-Powered Life",
    subtitle: "Off-Grid Living",
    description:
      "Entirely powered by the equatorial sun, the Resthouse operates independently from the mainland grid. A commitment to treading lightly on this fragile island ecosystem.",
  },
  {
    image: "/images/30.png",
    title: "Secluded Promontory",
    subtitle: "The Location",
    description:
      "Perched on a rocky headland at the quiet end of the island, the house commands sweeping views of the strait. Accessible only by boat or jungle trail.",
  },
]

export function ArchitectureSection() {
  return (
    <section id="house" className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-3 text-center text-sm tracking-[0.3em] uppercase text-muted-foreground">
            The House
          </p>
          <h2 className="text-center font-serif text-4xl font-light tracking-wide text-card-foreground md:text-5xl text-balance">
            Built to Endure
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 0.2}>
              <div className="group cursor-default overflow-hidden bg-background">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-opacity duration-500 group-hover:opacity-0" />
                </div>
                <div className="p-6">
                  <p className="mb-1 text-xs tracking-[0.2em] uppercase text-accent">
                    {feature.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
