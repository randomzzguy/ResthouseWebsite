"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"
import { Sun, Droplets, Leaf, Heart } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

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

function FloatingLeaf({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.15, y: [0, -15, 0] }}
      transition={{
        opacity: { delay, duration: 1 },
        y: { delay, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
    >
      <Leaf className="h-8 w-8 text-accent" />
    </motion.div>
  )
}

export function ConservationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      ref={sectionRef}
      id="conservation"
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      {/* Floating decorative leaves */}
      <FloatingLeaf delay={0.2} x="10%" y="15%" />
      <FloatingLeaf delay={0.8} x="85%" y="25%" />
      <FloatingLeaf delay={1.4} x="5%" y="70%" />
      <FloatingLeaf delay={2} x="90%" y="80%" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M30 10c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
                fill="currentColor"
                className="text-accent"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-accent/10"
            >
              <Heart className="h-7 w-7 text-accent" />
            </motion.div>
            <p className="mb-3 text-sm tracking-[0.3em] uppercase text-primary-foreground/50">
              Our Mission
            </p>
            <h2 className="font-serif text-4xl font-light tracking-wide text-primary-foreground md:text-6xl text-balance">
              Conservation First
            </h2>
          </div>
        </FadeIn>

        {/* Our Pledge - Special quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <div className="relative border-y border-accent/20 py-8 text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-4 text-xs tracking-[0.4em] uppercase text-accent/70">
              Our Pledge
            </span>
            <p className="font-serif text-xl font-light italic leading-relaxed text-primary-foreground/90 md:text-2xl">
              &ldquo;For every tree that shaded our path, we plant two more. For every drop of water
              that refreshed our guests, we ensure the spring runs clearer. This is not our
              inheritance — it is our loan from the future.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Main Content - Symmetrical Two Column */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/entrance.png"
                alt="The Resthouse entrance surrounded by tropical greenery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </motion.div>
            {/* Decorative frame with offset */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-lg border border-accent/30" />
            <div className="absolute -top-3 -left-3 -z-10 h-24 w-24 rounded-full border border-accent/20" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-full bg-primary-foreground px-5 py-3 shadow-xl"
            >
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Eco-Certified</span>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <p className="text-lg leading-relaxed font-light text-primary-foreground/80">
                The Resthouse exists not despite the natural world, but because of it. Every
                decision we make — from energy to waste, from building materials to guest
                activities — is guided by a single principle: leave this island better than we
                found it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="leading-relaxed text-primary-foreground/60">
                Rainwater is harvested, waste is composted, and nothing is brought to the island
                that cannot be taken back. The Resthouse is proof that comfort and restraint are
                not opposites — that the quietest footprint can leave the deepest impression.
              </p>
            </motion.div>

            {/* Stats with animated dividers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="space-y-4 pt-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
                  className="group flex items-center gap-6 border-l-2 border-accent/40 pl-6 transition-colors hover:border-accent/70"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-accent/30 transition-colors group-hover:border-accent/60"
                  >
                    <stat.icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-3xl font-light text-primary-foreground">
                        {stat.value}
                      </span>
                      <span className="text-sm tracking-widest uppercase text-primary-foreground/70">
                        {stat.label}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-primary-foreground/50">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
