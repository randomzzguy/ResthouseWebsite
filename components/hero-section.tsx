"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7 // 70% speed - slower, more cinematic
    }
  }, [])

  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-[0.85]"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-4 text-sm tracking-[0.3em] uppercase text-primary-foreground/70"
        >
          Perhentian Besar, Malaysia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-serif text-5xl leading-tight font-light tracking-wide text-primary-foreground md:text-7xl lg:text-8xl"
        >
          The House That Moved
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto my-8 h-px w-24 bg-accent"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mx-auto max-w-2xl font-sans text-base leading-relaxed font-light text-primary-foreground/80 md:text-lg"
        >
          A 1920s heritage home, salvaged from the mainland and reborn on the shores of Perhentian Besar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-12"
        >
          <a
            href="#story"
            className="inline-flex flex-col items-center gap-2 text-primary-foreground/60 transition-colors hover:text-primary-foreground"
            aria-label="Scroll to discover the story"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Discover</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-primary-foreground/60"
            >
              <path
                d="M10 3v14m0 0l-5-5m5 5l5-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
