import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TimelineSection } from "@/components/timeline-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { ConservationSection } from "@/components/conservation-section"
import { GallerySection } from "@/components/gallery-section"
import { QuoteSection } from "@/components/quote-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TimelineSection />
      <ArchitectureSection />
      <ConservationSection />
      <GallerySection />
      <QuoteSection />
      <Footer />
    </main>
  )
}
