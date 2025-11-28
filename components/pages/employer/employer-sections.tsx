"use client"

import { EmployerHeroSection } from "@/components/employer/employer-hero-section"
import { TrustedBySection } from "@/components/employer/trusted-by-section"
import { JobOffersSection } from "@/components/employer/job-offers-section"
import { HiringPlansSection } from "@/components/employer/hiring-plans-section"
import { EmployerHelpCtaSection } from "@/components/employer/employer-help-cta-section"
import { TestimonialsSection } from "@/components/employer/testimonials-section"
import { FAQSection } from "@/components/employer/faq-section"

export function EmployerPageSections() {
  return (
    <>
      <EmployerHeroSection />
      <EmployerHelpCtaSection />
      <TrustedBySection />
      <JobOffersSection />
      <HiringPlansSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  )
}
