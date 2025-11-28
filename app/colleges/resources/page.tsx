import React from 'react'
import CollegeNavbar from '@/components/college/college-navbar'
import ResourcesHeroSection from '@/components/college/resources/ResourcesHeroSection'
import StudyGoalsSection from '@/components/college/resources/StudyGoalsSection'
import PremiumSection from '@/components/college/resources/PremiumSection'


const page = () => {
    return (
        <div>
            <CollegeNavbar />
            <ResourcesHeroSection />
            <StudyGoalsSection />
            <PremiumSection />


        </div>
    )
}

export default page
