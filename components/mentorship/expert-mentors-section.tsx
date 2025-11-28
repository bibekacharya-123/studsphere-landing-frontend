"use client"

import Image from "next/image"
import { Star, Check } from "lucide-react"
import Link from "next/link"

interface ExpertMentor {
  id: string
  name: string
  title: string
  company: string
  education: string
  rating: number
  avatar: string
  gradientFrom: string
  gradientTo: string
}

const expertMentors: ExpertMentor[] = [
  {
    id: "1",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "2",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "3",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "4",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "5",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "6",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "7",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
  {
    id: "8",
    name: "Roselia Haments",
    title: "Corporate Finance Manager",
    company: "Somany Impresa Group",
    education: "IIM Ranchi MBA'24",
    rating: 4.5,
    avatar: "/professional-mentor-avatar.jpg",
    gradientFrom: "from-orange-400",
    gradientTo: "to-pink-400",
  },
]

export function ExpertMentorsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Meet Our Expert Mentors
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Get career insights, practical advice, and personal guidance.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {expertMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Gradient Background with Available Badge */}
              <div className={`bg-gradient-to-r ${mentor.gradientFrom} ${mentor.gradientTo} h-32 relative`}>
                {/* Available Badge */}
                <div className="absolute top-3 left-3 bg-gray-900 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  Available
                </div>

                {/* Avatar positioned over gradient */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
                  <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-white">
                    <Image
                      src={mentor.avatar || "/placeholder.svg"}
                      alt={mentor.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="pt-16 pb-6 px-4 text-center">
                {/* Star Rating */}
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                  <span className="font-semibold text-gray-900 text-sm">{mentor.rating}</span>
                </div>

                {/* Name with Checkmark */}
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">{mentor.name}</h3>
                  <Check className="w-4 h-4 text-blue-500 fill-blue-500" />
                </div>

                {/* Title and Company */}
                <p className="text-xs sm:text-sm text-gray-600 mb-1">{mentor.title}</p>
                <p className="text-xs text-gray-500 mb-4">
                  @ {mentor.company} | {mentor.education}
                </p>

                {/* View Profile Link */}
                <Link href={`/jobs/mentor/mentor/${mentor.id}`}>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold hover:underline transition-colors">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
