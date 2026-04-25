"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "./fade-in"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Aditya",
    location: "9 years on Airbnb",
    rating: 5,
    date: "September 2025",
    text: "Amer was an amazing host. Very proactive, nice and responsive. The place is as advertised. I wished I could have spent a week here instead of just 3 nights. The porch facing the sea is truly beautiful and private. Mindblowing place.",
    highlight: "Mindblowing place",
  },
  {
    id: 2,
    name: "Qila",
    location: "10 years on Airbnb",
    rating: 5,
    date: "July 2025",
    text: "Amazing. I cannot think of any other word than that. The hosts are very nice and let us checked in early, helped assist with all our needs during the stay and the chef's food? AMAZING. We celebrated our friend's birthday and the chef baked us a lemon cheesecake and it was marvellous.",
    highlight: "Amazing experience",
  },
  {
    id: 3,
    name: "Agnese",
    location: "5 years on Airbnb",
    rating: 5,
    date: "July 2025",
    text: "Wonderful! the house, the people and the location. We were very sad to leave this paradise, but hopefully we'll get to come back! The house and location are just otherworldly. The owners and volunteers were very nice, always going above and beyond for us.",
    highlight: "Otherworldly",
  },
  {
    id: 4,
    name: "Federica",
    location: "11 years on Airbnb",
    rating: 5,
    date: "August 2025",
    text: "How could be possible to describe a place like this? You only have to experience it. These past 4 days have been a mixture of peace, nature love, monkey's laughs, Tiger's cans, burglars squirrels, barefoots, windy salty air, playing cards, mugs of coffee.",
    highlight: "Unforgettable",
  },
  {
    id: 5,
    name: "Kourtney",
    location: "8 years on Airbnb",
    rating: 5,
    date: "August 2025",
    text: "Second time back and we love it just as much, if not more! Amer and Salma were so helpful with our requests. The Resthouse was amazing as always. Looking forward to our return already.",
    highlight: "Second time back",
  },
  {
    id: 6,
    name: "Jack",
    location: "9 years on Airbnb",
    rating: 5,
    date: "June 2025",
    text: "Back to 'Kampung' vibes. Great host and the owner, helped us a lot. Definitely coming back in the future.",
    highlight: "Kampung vibes",
  },
  {
    id: 7,
    name: "Peter",
    location: "Zurich, Switzerland",
    rating: 5,
    date: "September 2025",
    text: "Perfect place for me: peaceful, nature, gorgeous old house, fresh air from the sea and lovely host (and dive master). Stayed with kids.",
    highlight: "Perfect with kids",
  },
  {
    id: 8,
    name: "Xim",
    location: "12 years on Airbnb",
    rating: 5,
    date: "October 2024",
    text: "We just spent a few days here and it was awesome. The house is beautiful, in a great location right by the beach. The host was super friendly. There are lots of adorable animals around. At night, the sky full of stars is incredibly relaxing.",
    highlight: "Sky full of stars",
  },
  {
    id: 9,
    name: "Miguel",
    location: "9 years on Airbnb",
    rating: 5,
    date: "October 2025",
    text: "The accommodation is simply spectacular. In a privileged enclave of one of the most beautiful islands I have ever visited. A memory in every corner of that house that will remain forever in my memory. Amer was charming and welcomed us very warmly.",
    highlight: "Spectacular",
  },
  {
    id: 10,
    name: "Giona",
    location: "13 years on Airbnb",
    rating: 5,
    date: "August 2025",
    text: "A unique place in the world. A house recovered and moved to the most beautiful spot on the island. If you happen to find a free date (you need to book well in advance) don't miss this wonderful place. The experience is completed by a wonderful family.",
    highlight: "Unique in the world",
  },
  {
    id: 11,
    name: "Gio",
    location: "10 years on Airbnb",
    rating: 5,
    date: "August 2024",
    text: "The perfect stay for us…quiet, big, comfortable, clean…just beautiful. We highly recommend. Gio + Sandra",
    highlight: "Perfect stay",
  },
  {
    id: 12,
    name: "Nicole",
    location: "11 years on Airbnb",
    rating: 5,
    date: "August 2024",
    text: "Staying at the resthouse was a magical experience. Everything was superb; the wonderful people, host Alia and cook Moumen, the beautiful house, off the grid, perched on the rocks by the sea. We felt like staying with friends.",
    highlight: "Magical experience",
  },
  {
    id: 13,
    name: "Jasmine",
    location: "7 years on Airbnb",
    rating: 5,
    date: "July 2024",
    text: "We chose The Resthouse because how often can you stay right on a beach with the sound of the sea? We were won over by the beautiful coral right in front of your doorstep. It has the best and most stunning location of any accommodation I saw on the Perhentian Islands.",
    highlight: "Stunning location",
  },
  {
    id: 14,
    name: "Roberta",
    location: "11 years on Airbnb",
    rating: 5,
    date: "July 2024",
    text: "We had a wonderful time at the Resthouse. The property is beautiful and very well kept. We loved the casual chic vibe of the decoration and the setting. Their in house chef Moumen is amazing and the food is very well served and delicious, specially the barbecue, a must try.",
    highlight: "Must try BBQ",
  },
  {
    id: 15,
    name: "Ezalina",
    location: "11 years on Airbnb",
    rating: 5,
    date: "June 2024",
    text: "My family and I had a wonderful stay at this property. The place was private and beautiful just as described. The hosts, Hayati, Svea and Adrian really went out of their way to make us feel welcome. A great place to escape from busy city life.",
    highlight: "Wonderful stay",
  },
  {
    id: 16,
    name: "Faisal",
    location: "8 years on Airbnb",
    rating: 5,
    date: "April 2024",
    text: "Rest house is very private and best for large families. We had elderly people and it was doable. Beautiful surroundings and it's a great place to relax and enjoy the ocean. The house is the original classic old style home with great views from all directions.",
    highlight: "Great for families",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-accent text-accent" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextReview = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section id="reviews" className="relative overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Guest Experiences
            </p>
            <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl text-balance">
              Words from the Island
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              170 reviews · 5.0 average rating
            </p>
          </div>
        </FadeIn>

        {/* Featured Review Carousel */}
        <FadeIn delay={0.1}>
          <div className="relative mx-auto max-w-3xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:-top-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 lg:h-16 lg:w-16">
                <Quote className="h-5 w-5 text-accent lg:h-6 lg:w-6" />
              </div>
            </div>

            {/* Main Card */}
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border/50 bg-muted/20 p-8 pt-12 lg:min-h-[280px] lg:p-12 lg:pt-16">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Highlight Badge */}
                  <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-accent">
                    {reviews[activeIndex].highlight}
                  </span>

                  {/* Review Text */}
                  <blockquote className="mb-6 font-serif text-lg font-light leading-relaxed text-foreground lg:text-xl">
                    "{reviews[activeIndex].text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="mb-4">
                    <StarRating rating={reviews[activeIndex].rating} />
                  </div>

                  {/* Author */}
                  <div className="text-center">
                    <p className="font-medium text-foreground">
                      {reviews[activeIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {reviews[activeIndex].location} • {reviews[activeIndex].date}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-muted/30 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1)
                      setActiveIndex(index)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-6 bg-accent"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-muted/30 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              {activeIndex + 1} of {reviews.length}
            </p>
          </div>
        </FadeIn>

        {/* Review Grid Preview */}
        <FadeIn delay={0.2}>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group cursor-pointer rounded-lg border border-border/30 bg-muted/10 p-5 transition-all hover:border-accent/30 hover:bg-muted/20 ${
                  index === activeIndex ? "border-accent/50 bg-accent/5" : ""
                }`}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <p className="mb-3 line-clamp-3 text-sm text-muted-foreground">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
