"use client"
import { HeroSection } from "@/components/jobs/hero-section"
import { TopCompaniesSection } from "@/components/top-companies-section"
import { ExploreCategoriesSection } from "@/components/explore-categories-section"
import { FeaturedCompaniesSection } from "@/components/featured-companies-section"
import { JobsInterestedSection } from "@/components/jobs-interested-section"
import { ResumeHelpBanner } from "@/components/resume-help-banner"
import { TopCompaniesHiringSection } from "@/components/top-companies-hiring-section"
import { TrendingJobsSection } from "@/components/trending-jobs-section"
import { StudentsSeeingSection } from "@/components/students-seeking-section"
import { CareerPlatformBanner } from "@/components/career-platform-banner"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MentorsTopCompaniesSection } from "@/components/mentorship/mentors-top-companies-section"

export default function JobsPage() {
  return (
    <>
      <HeroSection />
      <TopCompaniesSection />
      <ExploreCategoriesSection />
      <FeaturedCompaniesSection />
      <JobsInterestedSection />
      <ResumeHelpBanner />
      <TopCompaniesHiringSection />
      <TrendingJobsSection />
      <StudentsSeeingSection />
      <MentorsTopCompaniesSection />
      <CareerPlatformBanner />
      <TestimonialsSection />
    </>
  )
}
