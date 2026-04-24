"use client"

import { FadeIn } from "./fade-in"

const timelineItems = [
  {
    year: "1920",
    title: "Ipoh Beginnings",
    description:
      "Built in the heart of Perak's tin mining region, the house stood as a testament to colonial Malayan craftsmanship. Chengal wood beams and intricate joinery told the story of a different era\u2014one of languid afternoons and the steady rhythm of tropical rain on a tin roof.",
  },
  {
    year: "2004",
    title: "Dismantling the Puzzle",
    description:
      "Faced with demolition, every beam, panel, and floorboard was meticulously numbered and catalogued. Over three months, the house was taken apart piece by piece\u2014a jigsaw puzzle of heritage timber waiting to be reassembled.",
  },
  {
    year: "2005",
    title: "The Sea Crossing",
    description:
      "Loaded onto boats, the dismantled house made its extraordinary journey across the South China Sea to Perhentian Besar. Through monsoon winds and against all odds, a century of history sailed toward its new home.",
  },
  {
    year: "Present",
    title: "A Sanctuary",
    description:
      "Reassembled on a secluded promontory overlooking the Perhentian strait, the house lives again. Now powered by the sun and surrounded by ancient jungle, it stands as a sanctuary where heritage meets the wild beauty of island life.",
  },
]

export function TimelineSection() {
  return (
    <section id="story" className="paper-texture relative bg-background py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <FadeIn>
          <p className="mb-3 text-center text-sm tracking-[0.3em] uppercase text-muted-foreground">
            The Journey
          </p>
          <h2 className="text-center font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl text-balance">
            A Century in Motion
          </h2>
        </FadeIn>

        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          {timelineItems.map((item, index) => (
            <FadeIn
              key={item.year}
              delay={index * 0.15}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`relative mb-16 flex flex-col last:mb-0 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <span className="font-serif text-5xl font-light text-accent/60 md:text-6xl">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden flex-none items-center justify-center md:flex">
                  <div className="relative z-10 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden flex-1 md:block" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
