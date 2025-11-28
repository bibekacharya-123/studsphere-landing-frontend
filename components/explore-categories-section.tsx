"use client"

import { FileText, Briefcase, Trophy, Users, UserCheck, Compass, Star, Globe, ChevronRight, Code } from 'lucide-react'

const categories = [
  {
    name: "CV Review",
    icon: FileText,
    bgColor: "bg-white",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    hasArrow: true,
  },
  {
    name: "MBA Preparation",
    icon: Briefcase,
    bgColor: "bg-white",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Case Competition",
    icon: Trophy,
    bgColor: "bg-white",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    name: "Placement Support",
    icon: Users,
    bgColor: "bg-white",
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Interview Preparation",
    icon: UserCheck,
    bgColor: "bg-white",
    iconBgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Career Guidance",
    icon: Compass,
    bgColor: "bg-white",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    name: "Personal Branding",
    icon: Star,
    bgColor: "bg-white",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  { name: "Study Abroad", icon: Globe, bgColor: "bg-white", iconBgColor: "bg-gray-100", iconColor: "text-gray-600" },
  {
    name: "Coding & Software",
    icon: Code,
    bgColor: "bg-white",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
]

export function ExploreCategoriesSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 text-balance">
            Explore Categories
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {/* First Row - 5 items on lg, 2 on sm, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-4">
            {categories.slice(0, 5).map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className={`${category.bgColor} p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 sm:gap-3`}
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <div className={`${category.iconBgColor} rounded-full p-2 sm:p-3 flex-shrink-0`}>
                      <Icon className={`text-base sm:text-lg lg:text-xl ${category.iconColor}`} />
                    </div>
                    <h3 className="font-medium text-gray-900 text-xs sm:text-sm lg:text-base truncate">{category.name}</h3>
                  </div>
                  {category.hasArrow && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />}
                </div>
              )
            })}
          </div>

          {/* Second Row - 4 items on lg, 2 on sm, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {categories.slice(5, 9).map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index + 5}
                  className={`${category.bgColor} p-3 sm:p-4 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2 sm:gap-3`}
                >
                  <div className={`${category.iconBgColor} rounded-full p-2 sm:p-3 flex-shrink-0`}>
                    <Icon className={`text-base sm:text-lg lg:text-xl ${category.iconColor}`} />
                  </div>
                  <h3 className="font-medium text-gray-900 text-xs sm:text-sm lg:text-base truncate">{category.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
