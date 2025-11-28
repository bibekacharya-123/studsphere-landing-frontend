import CollegeNavbar from '@/components/college/college-navbar'
import CollegeListingSection from '@/components/college/CollegeListingSection'
import HeroSection from '@/components/college/HeroSection'
import StudyGoalSection from '@/components/college/StudyGoalSection'
import SuccessSection from '@/components/college/SuccessSection'
import TeacherProfilesSection from '@/components/college/TeacherProfilesSection'
import TestimonialsSection from '@/components/college/TestimonialsSection'
import LatestNewsSection from '@/components/college/LatestNewsSection'
import React from 'react'
import { AdsSection } from '@/components/college/ads-section'
import ExploreCourses from '@/components/college/CoursesSection'


const page = () => {
  return (
    <div>
      <CollegeNavbar />
      <HeroSection />
      <StudyGoalSection />
      <AdsSection />
      <SuccessSection />
      <CollegeListingSection />
      <AdsSection />
      <ExploreCourses/>
      <TeacherProfilesSection />
      <AdsSection />
      <LatestNewsSection />
      <TestimonialsSection />
    </div>
  )
}

export default page