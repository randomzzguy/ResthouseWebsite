"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"
import { Sun, Droplets, Heart, Leaf, Quote } from "lucide-react"
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

export function ConservationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      ref={sectionRef}
      id="conservation"
      className="relative overflow-hidden bg-muted/20 py-24 md:py-32"
    >
      {/* Organic curved top edge */}
      <div className="absolute inset-x-0 -top-24 h-48">
        <svg viewBox="0 0 1440 120" className="h-full w-full" preserveAspectRatio="none">
          <path
            fill="currentColor"
            className="text-muted/20"
            d="M0,0 C480,120 960,120 1440,0 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Elegant Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
            >
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary">
                Our Mission
              </span>
            </motion.div>
            <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
              Conservation First
            </h2>
          </div>
        </FadeIn>

        {/* Main Layout - Asymmetric with overlapping elements */}
        <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Image Column - Spans 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:col-span-5"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                style={{ y: imageY }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src="/images/entrance.png"
                  alt="The Resthouse entrance surrounded by tropical greenery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-4 right-4 rounded-xl border border-primary/10 bg-background/95 p-4 shadow-lg backdrop-blur-sm lg:-right-8"
              >
                <div className="flex items-center justify-between gap-4">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="flex-1 text-center">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <p className="font-serif text-xl font-light text-foreground">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Accent Corner */}
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border-2 border-dashed border-primary/20" />
            </div>
          </motion.div>

          {/* Content Column - Spans 7 cols */}
          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-8">
            {/* Pledge Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mb-8 rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent p-8"
            >
              <Quote className="absolute -top-3 left-6 h-6 w-6 text-primary/30" />
              <p className="font-serif text-lg font-light italic leading-relaxed text-foreground/90 lg:text-xl">
                &ldquo;For every tree that shaded our path, we plant two more. For every drop of water
                that refreshed our guests, we ensure the spring runs clearer. This is not our
                inheritance — it is our loan from the future.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-primary/20" />
                <span className="text-xs tracking-[0.3em] uppercase text-primary/60">Our Pledge</span>
                <div className="h-px flex-1 bg-primary/20" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-base leading-relaxed text-foreground/80">
                The Resthouse exists not despite the natural world, but because of it. Every
                decision we make — from energy to waste, from building materials to guest
                activities — is guided by a single principle: leave this island better than we
                found it.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Rainwater is harvested, waste is composted, and nothing is brought to the island
                that cannot be taken back. The Resthouse is proof that comfort and restraint are
                not opposites.
              </p>
            </motion.div>

            {/* Eco Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 inline-flex items-center gap-3 self-start rounded-full border border-primary/20 bg-primary px-5 py-2.5 text-primary-foreground shadow-lg"
            >
              <Heart className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium tracking-wide">Eco-Certified Stay</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
