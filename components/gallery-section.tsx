"use client"

import Image from "next/image"
import { FadeIn } from "./fade-in"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Waves,
  Fish,
  Sailboat,
  Palmtree,
  Eye,
  Droplets,
  Wind,
  Sun,
  Wifi,
  Utensils,
  Bed,
  Bath,
  BookOpen,
  Baby,
  Fan,
  FlameKindling,
  Car,
  Sparkles,
  Check,
  X,
  Camera,
  Tv,
  WavesIcon,
  Thermometer,
  Droplet,
  ShowerHead,
  ChevronRight,
  ChevronLeft,
  Flame,
} from "lucide-react"

const images = [
  {
    src: "/images/gallery-water.jpg",
    alt: "Crystal clear turquoise waters of Perhentian",
    tall: true,
  },
  {
    src: "/images/gallery-brass.jpg",
    alt: "Vintage brass fittings on dark colonial timber",
    tall: false,
  },
  {
    src: "/images/gallery-monkeys.jpg",
    alt: "Macaque monkeys in the surrounding jungle",
    tall: false,
  },
  {
    src: "/images/gallery-turtle.jpg",
    alt: "Sea turtle swimming in clear tropical waters",
    tall: true,
  },
  {
    src: "/images/gallery-interior.jpg",
    alt: "Heritage interior with dark wood beams and white linens",
    tall: false,
  },
  {
    src: "/images/gallery-botanical.jpg",
    alt: "Lush tropical foliage surrounding the resthouse",
    tall: false,
  },
]

const activities = [
  { icon: Waves, title: "Snorkeling", description: "Explore vibrant coral reefs" },
  { icon: Fish, title: "Diving", description: "Discover underwater wonders" },
  { icon: Sailboat, title: "Kayaking", description: "Paddle through calm waters" },
  { icon: Palmtree, title: "Island Hopping", description: "Visit nearby islands" },
  { icon: Eye, title: "Turtle Watching", description: "Spot sea turtles nesting" },
  { icon: Droplets, title: "Swimming", description: "Swim in crystal clear seas" },
]

const amenityCategories = [
  {
    title: "Scenic Views",
    icon: Eye,
    items: ["Beach view", "Sea view", "Ocean view"],
  },
  {
    title: "Bathroom",
    icon: Bath,
    items: [
      "Cleaning products",
      "Naturals shampoo",
      "Naturals conditioner",
      "Body soap",
      "Bidet",
      "Outdoor shower",
      "Shower gel",
    ],
  },
  {
    title: "Bedroom & Laundry",
    icon: Bed,
    items: [
      "Towels, bed sheets, soap, toilet paper",
      "Hangers",
      "Bed linens",
      "Extra pillows and blankets",
      "Room-darkening shades",
      "Drying rack for clothing",
      "Safe",
      "Mosquito net",
    ],
  },
  {
    title: "Entertainment",
    icon: BookOpen,
    items: ["Books and reading material"],
  },
  {
    title: "Family",
    icon: Baby,
    items: ["Crib", "Window guards", "Board games"],
  },
  {
    title: "Heating & Cooling",
    icon: Fan,
    items: ["Ceiling fan", "Portable fans"],
  },
  {
    title: "Home Safety",
    icon: FlameKindling,
    items: ["Fire extinguisher", "First aid kit"],
  },
  {
    title: "Internet & Office",
    icon: Wifi,
    items: [
      "Fast wifi - 95 Mbps",
      "Dedicated workspace in common space",
    ],
  },
  {
    title: "Kitchen & Dining",
    icon: Utensils,
    items: [
      "Kitchen - guests can cook",
      "Refrigerator",
      "Cooking basics",
      "Pots, pans, oil, salt & pepper",
      "Dishes and silverware",
      "Bowls, chopsticks, plates, cups",
      "Freezer",
      "Gas stove",
      "Hot water kettle",
      "Coffee maker",
      "Wine glasses",
      "Blender",
      "Barbecue utensils",
      "Dining table",
      "Coffee",
    ],
  },
  {
    title: "Location Features",
    icon: WavesIcon,
    items: [
      "Waterfront - right next to water",
      "Beach access - nearby beach",
      "Private entrance - separate building entrance",
    ],
  },
  {
    title: "Outdoor",
    icon: Sun,
    items: [
      "Private patio or balcony",
      "Backyard - grass-covered space",
      "Fire pit",
      "Outdoor furniture",
      "Hammock",
      "Outdoor dining area",
      "Outdoor kitchen with sink",
      "Private BBQ grill - charcoal/wood-burning",
      "Beach essentials - towels, umbrella, blanket, snorkeling gear",
      "Sun loungers",
    ],
  },
  {
    title: "Parking & Facilities",
    icon: Car,
    items: ["Paid parking lot off premises"],
  },
  {
    title: "Services",
    icon: Sparkles,
    items: [
      "Luggage dropoff allowed",
      "Smoking allowed",
      "Cleaning available during stay",
      "Host greets you",
    ],
  },
]

const notIncluded = [
  { icon: Camera, name: "Exterior security cameras" },
  { icon: Tv, name: "TV" },
  { icon: WavesIcon, name: "Washer" },
  { icon: Wind, name: "Dryer" },
  { icon: Thermometer, name: "Air conditioning" },
  { icon: Flame, name: "Smoke alarm" },
  { icon: Droplet, name: "Carbon monoxide alarm" },
  { icon: Sun, name: "Heating" },
  { icon: ShowerHead, name: "Hot water" },
]

interface AmenityCategory {
  title: string
  icon: React.ElementType
  items: string[]
}

interface NotIncludedItem {
  icon: React.ElementType
  name: string
}

function AmenityCardStack({
  categories,
  notIncluded,
}: {
  categories: AmenityCategory[]
  notIncluded: NotIncludedItem[]
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + categories.length) % categories.length

    if (diff === 0) {
      return {
        zIndex: categories.length,
        scale: 1,
        y: 0,
        opacity: 1,
        rotate: 0,
      }
    } else if (diff === 1 || diff === categories.length - 1) {
      const isNext = diff === 1
      return {
        zIndex: categories.length - 1,
        scale: 0.95,
        y: 8,
        opacity: 0.7,
        rotate: isNext ? 2 : -2,
      }
    } else if (diff === 2 || diff === categories.length - 2) {
      const isNext = diff === 2
      return {
        zIndex: categories.length - 2,
        scale: 0.9,
        y: 16,
        opacity: 0.5,
        rotate: isNext ? 4 : -4,
      }
    } else {
      return {
        zIndex: 0,
        scale: 0.85,
        y: 24,
        opacity: 0,
        rotate: 0,
      }
    }
  }

  return (
    <div className="mx-auto max-w-md">
      {/* Card Stack Container */}
      <div className="relative h-[420px] sm:h-[400px]">
        {categories.map((category, index) => {
          const style = getCardStyle(index)
          return (
            <motion.div
              key={category.title}
              className="absolute inset-0 rounded-2xl border border-border/50 bg-muted/40 p-6 shadow-lg backdrop-blur-sm"
              initial={false}
              animate={{
                scale: style.scale,
                y: style.y,
                opacity: style.opacity,
                rotateZ: style.rotate,
                zIndex: style.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                zIndex: style.zIndex,
              }}
            >
              {/* Card Header */}
              <div className="mb-4 flex items-center gap-3 border-b border-border/50 pb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{category.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {category.items.length} items
                  </p>
                </div>
              </div>

              {/* Card Content - Scrollable */}
              <div className="h-[280px] overflow-y-auto pr-2 sm:h-[260px]">
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prevCard}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-muted/30 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Progress Dots */}
        <div className="flex gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-muted/30 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
          aria-label="Next card"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-muted-foreground">
        {currentIndex + 1} of {categories.length}
      </p>

      {/* Not Included Section - Below Cards */}
      <div className="mt-10 rounded-xl border border-border/50 bg-muted/10 p-5">
        <h4 className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wide">
          <X className="h-4 w-4" />
          Not Included
        </h4>
        <div className="flex flex-wrap gap-2">
          {notIncluded.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-1.5 rounded-full border border-border/50 bg-muted/30 px-3 py-1.5 text-xs text-muted-foreground/70"
            >
              <item.icon className="h-3 w-3" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function GallerySection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <p className="mb-3 text-center text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Experience
          </p>
          <h2 className="text-center font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl text-balance">
            Life on the Island
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground">
            Discover all that Perhentian Besar has to offer — from thrilling water activities to comfortable amenities that make your stay unforgettable.
          </p>
        </FadeIn>

        {/* Activities Section */}
        <FadeIn delay={0.1}>
          <div className="mt-20">
            <h3 className="mb-8 text-center font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
              Island Activities
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className="group flex items-center gap-4 rounded-lg border border-border/50 bg-muted/30 p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <activity.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Amenities Card Stack Section */}
        <FadeIn delay={0.2}>
          <div className="mt-20">
            <h3 className="mb-2 text-center font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
              What This Place Offers
            </h3>
            <p className="mb-10 text-center text-sm text-muted-foreground">
              50+ amenities across {amenityCategories.length} categories
            </p>

            <AmenityCardStack categories={amenityCategories} notIncluded={notIncluded} />
          </div>
        </FadeIn>

        {/* Gallery Section */}
        <FadeIn delay={0.3}>
          <div className="mt-20">
            <h3 className="mb-8 text-center font-serif text-2xl font-light tracking-wide text-foreground md:text-3xl">
              Gallery
            </h3>
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {images.map((image, index) => (
                <FadeIn key={image.src} delay={index * 0.1}>
                  <div
                    className={`group relative mb-4 overflow-hidden break-inside-avoid ${
                      image.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                      <p className="text-sm text-primary-foreground/90">{image.alt}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
