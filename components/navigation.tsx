"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "The Story", href: "#story" },
  { label: "The House", href: "#house" },
  { label: "Conservation", href: "#conservation" },
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
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              className="border border-primary-foreground/40 px-5 py-2 text-sm tracking-widest uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              Connect
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-primary-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="mt-4 border border-primary-foreground/40 px-8 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
