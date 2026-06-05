import { HeroCarousel } from "@/components/home/hero-carousel"
import { IntroSection } from "@/components/home/intro-section"
import { ImpactStatisticsSection } from "@/components/home/impact-statistics-section"
import { MissionSection } from "@/components/home/mission-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { BeautySection } from "@/components/home/beauty-section"
import { TrainingSection } from "@/components/home/training-section"
import { SuccessStorySection } from "@/components/home/success-story-section"
import { AlbumCarousel } from "@/components/home/album-carousel"
import { DocumentsSection } from "@/components/home/documents-section"
import { FundraiserSection } from "@/components/home/fundraiser-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PartnersSection } from "@/components/home/partners-section"
import { ContactCtaSection } from "@/components/home/contact-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <IntroSection />
      <ImpactStatisticsSection />
      <MissionSection />
      <ProgramsSection />
      <BeautySection />
      <TrainingSection />
      <SuccessStorySection />
      <AlbumCarousel />
      <DocumentsSection />
      <FundraiserSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactCtaSection />
    </>
  )
}
