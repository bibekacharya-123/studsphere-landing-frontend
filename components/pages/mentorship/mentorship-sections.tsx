"use client"

import { useState } from "react"
import { MentorshipHeroSection } from "@/components/mentorship/hero-section"
import { CareerDomainsSection } from "@/components/mentorship/career-domains-section"
import { OrganizationsSection } from "@/components/mentorship/organizations-section"
import { MentorsTopCompaniesSection } from "@/components/mentorship/mentors-top-companies-section"
import { ExpertMentorsSection } from "@/components/mentorship/expert-mentors-section"
import { MentorshipJourneySection } from "@/components/mentorship/mentorship-journey-section"
import { CommunityLearnersSection } from "@/components/mentorship/community-learners-section"
import { BecomeMentorSection } from "@/components/mentorship/become-mentor-section"
import { MentorTestimonialsSection } from "@/components/mentorship/mentor-testimonials-section"

export function MentorshipPageSections() {
  const [mentorModalOpen, setMentorModalOpen] = useState(false)

  const handleBecomeMentorClick = () => {
    setMentorModalOpen(true)
  }

  return (
    <>
      <MentorshipHeroSection onBecomeMentorClick={handleBecomeMentorClick} />
      <OrganizationsSection />
      <CareerDomainsSection />
      <MentorsTopCompaniesSection />
      <ExpertMentorsSection />
      <MentorshipJourneySection />
      <CommunityLearnersSection />
      <BecomeMentorSection mentorModalOpen={mentorModalOpen} setMentorModalOpen={setMentorModalOpen} />
      <MentorTestimonialsSection />
    </>
  )
}
