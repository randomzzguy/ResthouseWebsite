"use client"

import { FadeIn } from "./fade-in"

export function Footer() {
  return (
    <footer id="connect" className="bg-primary py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="mb-3 text-sm tracking-[0.3em] uppercase text-primary-foreground/40">
              Connect
            </p>
            <h2 className="font-serif text-3xl font-light tracking-wide text-primary-foreground md:text-4xl text-balance">
              Begin Your Journey
            </h2>
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-primary-foreground/60">
              The Resthouse Perhentian welcomes a limited number of guests each season. Reach out
              to begin a conversation about your stay.
            </p>
            <a
              href="mailto:hello@theresthouseperhentian.com"
              className="mt-8 inline-block border border-primary-foreground/30 px-8 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>

        <div className="mt-20 border-t border-primary-foreground/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="font-serif text-lg tracking-wide text-primary-foreground/70">
              The Resthouse
            </p>

            <div className="flex items-center gap-8">
              <a
                href="#story"
                className="text-xs tracking-widest uppercase text-primary-foreground/40 transition-colors hover:text-primary-foreground"
              >
                The Story
              </a>
              <a
                href="#house"
                className="text-xs tracking-widest uppercase text-primary-foreground/40 transition-colors hover:text-primary-foreground"
              >
                The House
              </a>
              <a
                href="#conservation"
                className="text-xs tracking-widest uppercase text-primary-foreground/40 transition-colors hover:text-primary-foreground"
              >
                Conservation
              </a>
            </div>

            <p className="text-xs text-primary-foreground/30">
              Perhentian Besar, Terengganu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
