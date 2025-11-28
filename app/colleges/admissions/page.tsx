import React from 'react'
import CollegeNavbar from '@/components/college/college-navbar'
import AdmissionsHeroSection from '@/components/college/admissions/AdmissionsHeroSection'
import AdmissionCollegeListings from '@/components/college/admissions/AdmissionCollegeListings'

const page = () => {
    return (
        <div>
            <CollegeNavbar />
            <AdmissionsHeroSection />
            <AdmissionCollegeListings />
        </div>
    )
}

export default page