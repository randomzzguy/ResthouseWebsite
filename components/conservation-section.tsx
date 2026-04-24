"use client"

import { FadeIn } from "./fade-in"
import { Sun, Droplets } from "lucide-react"

const stats = [
  {
    icon: Sun,
    value: "100%",
    label: "Solar Powered",
    description: "Zero reliance on fossil fuels",
  },
  {
    icon: Droplets,
    value: "100%",
    label: "Rainwater Harvested",
    description: "No mains water — every drop falls from the sky",
  },
]

export function ConservationSection() {
  return (
    <section id="conservation" className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-3 text-center text-sm tracking-[0.3em] uppercase text-primary-foreground/50">
            Our Mission
          </p>
          <h2 className="text-center font-serif text-4xl font-light tracking-wide text-primary-foreground md:text-6xl text-balance">
            Conservation First
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed font-light text-primary-foreground/70">
            The Resthouse exists not despite the natural world, but because of it. Every decision
            we make — from energy to waste, from building materials to guest activities — is
            guided by a single principle: leave this island better than we found it.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-primary-foreground/60">
            Rainwater is harvested, waste is composted, and nothing is brought to the island that
            cannot be taken back. The Resthouse is proof that comfort and restraint are not
            opposites — that the quietest footprint can leave the deepest impression.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={0.4 + index * 0.15}>
              <div className="flex items-start gap-6 border border-primary-foreground/10 p-8">
                <div className="flex h-14 w-14 flex-none items-center justify-center border border-accent/40">
                  <stat.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="font-serif text-3xl font-light text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm tracking-widest uppercase text-primary-foreground/70">
                    {stat.label}
                  </div>
                  <p className="mt-2 text-sm text-primary-foreground/50">{stat.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
