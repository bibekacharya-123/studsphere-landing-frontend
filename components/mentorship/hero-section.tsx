"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"

interface MentorshipHeroSectionProps {
  onBecomeMentorClick: () => void
}

export function MentorshipHeroSection({ onBecomeMentorClick }: MentorshipHeroSectionProps) {
  return (
    <section className="w-full bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            {/* Heading with colored text */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-black">Learn, </span>
              <span className="text-orange-500">Grow, </span>
              <span className="text-green-500">Achieve</span>
              <br />
              <span className="text-black">And Succeed</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 max-w-md leading-relaxed">
              Get guided by industry mentors who help you unlock your potential and reach your career goals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/jobs/mentor/find-mentor">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold flex items-center justify-center gap-2 w-full sm:w-fit">
                  <Search className="w-4 sm:w-5 h-4 sm:h-5" />
                  Find Mentor
                </Button>
              </Link>
              <Button
                onClick={onBecomeMentorClick}
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-semibold w-full sm:w-fit bg-transparent"
              >
                Be a Mentor
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl">
              <Image
                src="/mentorship-hero-image.png"
                alt="Mentorship - Student and Mentor Learning"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blue Statistics Section */}
      <div className="w-full bg-blue-600 py-6 sm:py-8 mt-6 sm:mt-12 lg:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="flex flex-col items-center text-center text-white">
                <div className="bg-white rounded-full p-2 sm:p-3 mb-2 sm:mb-3">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="font-bold text-sm sm:text-base mb-1">50,000 Online Courses</p>
                <p className="text-xs sm:text-sm text-blue-100">Enjoy A Variety Of Fresh Topics</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
