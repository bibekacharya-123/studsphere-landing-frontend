"use client"

import type React from "react"

import { Users, Briefcase, BookOpen, Code, Globe, Zap } from "lucide-react"

interface CareerDomain {
  id: string
  label: string
  icon: React.ReactNode
  color: string
}

const careerDomains: CareerDomain[] = [
  { id: "1", label: "CV Review", icon: <BookOpen className="w-6 h-6" />, color: "bg-blue-100" },
  { id: "2", label: "MBA Preparation", icon: <Briefcase className="w-6 h-6" />, color: "bg-purple-100" },
  { id: "3", label: "Case Competition", icon: <Zap className="w-6 h-6" />, color: "bg-pink-100" },
  { id: "4", label: "Placement Support", icon: <Users className="w-6 h-6" />, color: "bg-yellow-100" },
  { id: "5", label: "Interview Preparation", icon: <Briefcase className="w-6 h-6" />, color: "bg-green-100" },
  { id: "6", label: "Career Guidance", icon: <BookOpen className="w-6 h-6" />, color: "bg-orange-100" },
  { id: "7", label: "Personal Branding", icon: <Users className="w-6 h-6" />, color: "bg-blue-100" },
  { id: "8", label: "Study Abroad", icon: <Globe className="w-6 h-6" />, color: "bg-purple-100" },
  { id: "9", label: "Coding & Software", icon: <Code className="w-6 h-6" />, color: "bg-green-100" },
]

export function CareerDomainsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Explore Trending Career Domains
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Connect with mentors from global brands who bring real-world experience to your learning journey.
          </p>
        </div>

        {/* Career Domains Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {careerDomains.map((domain) => (
            <div
              key={domain.id}
              className="bg-white rounded-lg p-4 sm:p-5 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow duration-200"
            >
              <div className={`${domain.color} rounded-full p-2 flex-shrink-0`}>{domain.icon}</div>
              <span className="text-sm sm:text-base font-medium text-gray-800">{domain.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
