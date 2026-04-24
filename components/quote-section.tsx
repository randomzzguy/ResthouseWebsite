"use client"

import { FadeIn } from "./fade-in"

export function QuoteSection() {
  return (
    <section className="paper-texture relative bg-card py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <svg
              className="mx-auto mb-8 h-10 w-10 text-accent/50"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            <blockquote className="font-serif text-2xl leading-relaxed font-light text-foreground md:text-3xl lg:text-4xl text-pretty">
              We did not build a resort. We saved a house and gave it a second life by the sea.
              This is not about luxury — it is about remembering. Remembering how Malaya once
              lived, slowly, gracefully, in conversation with the land.
            </blockquote>

            <div className="mx-auto my-8 h-px w-16 bg-accent/40" />

            <p className="font-serif text-lg text-accent">Hayati</p>
            <p className="mt-1 text-sm tracking-widest uppercase text-muted-foreground">
              Founder, The Resthouse Perhentian
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
