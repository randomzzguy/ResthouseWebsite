"use client"

import { useState } from "react"
import Image from "next/image"
import { FadeIn } from "./fade-in"
import { X, Check } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({ name: "", email: "", message: "" })
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    setIsSuccess(false)
    setErrors({ name: "", email: "", message: "" })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setFormData({ name: "", email: "", message: "" })
    setErrors({ name: "", email: "", message: "" })
    setIsSuccess(false)
    setIsSubmitting(false)
  }

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Mock API call - replace with actual email logic later
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

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
            <button
              onClick={openModal}
              className="mt-8 inline-block border border-primary-foreground/30 px-8 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-all hover:bg-primary-foreground hover:text-primary"
            >
              Get in Touch
            </button>

            {/* Social Media Links */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.a
                href="https://www.instagram.com/the_resthouse_perhentian/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary-foreground/30 transition-all hover:border-primary-foreground hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Follow us on Instagram"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </motion.a>
              <motion.a
                href="https://www.airbnb.com/rooms/12310498?guests=1&adults=1&s=67&unique_share_id=5333bb9d-a421-4847-9210-cc1311e803fe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-primary-foreground/30 transition-all hover:border-primary-foreground hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="View on Airbnb"
              >
                <Image
                  src="/icons/airbnb.png"
                  alt="Airbnb"
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </motion.a>
            </div>

            {/* Copyright */}
            <p className="mt-8 text-xs tracking-widest uppercase text-primary-foreground/30">
              © 2026 The Resthouse Perhentian. All rights reserved.
            </p>
          </div>
        </FadeIn>

        {/* Contact Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />

            {/* Modal */}
            <div className="relative w-full max-w-md rounded-lg bg-background p-6 shadow-2xl">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {isSuccess ? (
                /* Success State */
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <Check className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-light text-foreground">
                    Message Sent
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Thank you for reaching out. We will be in touch soon.
                  </p>
                  <button
                    onClick={closeModal}
                    className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Close
                  </button>
                </div>
              ) : (
                /* Form */
                <>
                  <h3 className="mb-1 font-serif text-xl font-light text-foreground">
                    Get in Touch
                  </h3>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Send us a message and we will respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary ${
                          errors.name ? "border-red-500" : "border-border"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary ${
                          errors.email ? "border-red-500" : "border-border"
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full resize-none rounded-md border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary ${
                          errors.message ? "border-red-500" : "border-border"
                        }`}
                        placeholder="Tell us about your stay..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="flex-1 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        <div className="mt-20 border-t border-primary-foreground/10 pt-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-serif text-lg tracking-wide text-primary-foreground/70">
              The Resthouse
            </p>

            <p className="text-xs text-primary-foreground/30">
              Perhentian Besar, Terengganu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
