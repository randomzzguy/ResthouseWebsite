"use client"

import { Leaf, Sun, Droplets, Heart } from "lucide-react"
import { motion } from "framer-motion"

const pillars = [
  {
    icon: Sun,
    value: "100%",
    label: "Solar Powered",
  },
  {
    icon: Droplets,
    value: "100%",
    label: "Rainwater",
  },
  {
    icon: Leaf,
    value: "Zero",
    label: "Waste",
  },
]

export function ConservationSection() {
  return (
    <section
      id="conservation"
      className="relative overflow-hidden bg-primary py-24 md:py-32"
    >
      {/* Centered Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10"
        >
          <Heart className="h-6 w-6 text-accent" />
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 text-center text-xs tracking-[0.3em] uppercase text-primary-foreground/50"
        >
          Our Promise
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-center font-serif text-4xl font-light tracking-wide text-primary-foreground md:text-5xl"
        >
          Conservation First
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-16 max-w-xl text-center text-lg font-light leading-relaxed text-primary-foreground/70"
        >
          Every decision we make leaves the island better than we found it.
        </motion.p>

        {/* Stats Grid - Perfectly Symmetrical */}
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-accent/20 bg-accent/10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="group relative bg-primary px-6 py-10 text-center md:py-12"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 transition-colors group-hover:border-accent/50"
              >
                <pillar.icon className="h-5 w-5 text-accent" />
              </motion.div>
              <p className="mb-1 font-serif text-3xl font-light text-primary-foreground md:text-4xl">
                {pillar.value}
              </p>
              <p className="text-xs tracking-widest uppercase text-primary-foreground/60">
                {pillar.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="font-serif text-lg font-light italic leading-relaxed text-primary-foreground/60 md:text-xl">
            &ldquo;This is not our inheritance — it is our loan from the future.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
