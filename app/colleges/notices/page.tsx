import React from 'react'
import CollegeNavbar from '@/components/college/college-navbar'
import NoticesHeroSection from '@/components/college/notices/NoticesHeroSection'
import NoticesListSection from '@/components/college/notices/NoticesListSection'
import ImportantNoticesSection from '@/components/college/notices/ImportantNoticesSection'

const page = () => {
    return (
        <div>
            <CollegeNavbar />
            <NoticesHeroSection />
            <ImportantNoticesSection />
            <NoticesListSection />
         
        </div>
    )
}

export default page
