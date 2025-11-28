import { EmployerNavbar } from "@/components/employer/employer-navbar"
import { PricingHeader } from "@/components/employer/pricing-header"
import { PricingCards } from "@/components/employer/pricing-cards"
import { NeedHelpSection } from "@/components/employer/need-help-section"
import { JoinBusinessesSection } from "@/components/employer/join-businesses-section"
import { FAQSection } from "@/components/employer/faq-section"

export const metadata = {
  title: "Pricing - Studsphere Employer",
  description: "Choose the perfect plan for your hiring needs",
}

export default function PricingPage() {
  return (
    <>
      <EmployerNavbar />
      <main>
        <PricingHeader />
        <PricingCards />
        <NeedHelpSection />
        <JoinBusinessesSection />
        <FAQSection />
      </main>
    </>
  )
}
