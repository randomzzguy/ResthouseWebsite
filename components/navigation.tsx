"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "The Story", href: "#story" },
  { label: "The House", href: "#house" },
  { label: "Conservation", href: "#conservation" },
  { label: "Reviews", href: "#reviews" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="font-serif text-lg tracking-wide text-primary-foreground">
            The Resthouse
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-0 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-sm tracking-widest uppercase transition-colors ${
                  index % 2 === 0
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              className="bg-black px-5 py-2 text-sm tracking-widest uppercase text-white transition-all hover:bg-neutral-800"
            >
              Inquire
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-primary-foreground md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-stretch justify-center bg-primary"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`w-full py-6 text-center font-serif text-3xl transition-colors ${
                  index % 2 === 0
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-100"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="w-full py-6 text-center text-sm tracking-widest uppercase bg-black text-white transition-all hover:bg-neutral-800"
            >
              Inquire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
