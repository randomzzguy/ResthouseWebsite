"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"

export function QuoteSection() {
  return (
    <section className="paper-texture relative bg-card py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
            {/* Founder Image */}
            <div className="relative w-full max-w-sm shrink-0 lg:w-2/5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/images/hayati.jpeg"
                  alt="Hayati, Founder of The Resthouse Perhentian"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative frame accent */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-lg border border-accent/30" />
            </div>

            {/* Quote Content */}
            <div className="flex-1 lg:pl-4">
              <svg
                className="mb-6 h-8 w-8 text-accent/50 lg:mb-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <blockquote className="font-serif text-xl leading-relaxed font-light text-foreground md:text-2xl lg:text-3xl text-pretty">
                We did not build a resort. We saved a house and gave it a second life by the sea.
                This is not about luxury — it is about remembering. Remembering how Malaya once
                lived, slowly, gracefully, in conversation with the land.
              </blockquote>

              <div className="my-6 h-px w-16 bg-accent/40 lg:my-8" />

              <p className="font-serif text-lg text-accent">Hayati</p>
              <p className="mt-1 text-sm tracking-widest uppercase text-muted-foreground">
                Founder, The Resthouse Perhentian
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
