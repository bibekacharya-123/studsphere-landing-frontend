"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface MentorCard {
  id: string
  name: string
  company: string
  rating: number
  reviews: number
  avatar: string
  bgColor: string
}

const mentors: MentorCard[] = [
  {
    id: "1",
    name: "Nabil Bank",
    company: "Nabil Bank",
    rating: 4.5,
    reviews: 209,
    avatar: "/professional-mentor-avatar.jpg",
    bgColor: "bg-blue-100",
  },
  {
    id: "2",
    name: "Nabil Bank",
    company: "Nabil Bank",
    rating: 4.5,
    reviews: 209,
    avatar: "/professional-mentor-avatar.jpg",
    bgColor: "bg-green-100",
  },
  {
    id: "3",
    name: "Nabil Bank",
    company: "Nabil Bank",
    rating: 4.5,
    reviews: 209,
    avatar: "/professional-mentor-avatar.jpg",
    bgColor: "bg-pink-100",
  },
  {
    id: "4",
    name: "Nabil Bank",
    company: "Nabil Bank",
    rating: 4.5,
    reviews: 209,
    avatar: "/professional-mentor-avatar.jpg",
    bgColor: "bg-yellow-100",
  },
  {
    id: "5",
    name: "Nabil Bank",
    company: "Nabil Bank",
    rating: 4.5,
    reviews: 209,
    avatar: "/professional-mentor-avatar.jpg",
    bgColor: "bg-purple-100",
  },
]

export function MentorsTopCompaniesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            Mentors From Top Companies
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Connect with mentors from global brands who bring real-world experience to your learning journey.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            >
              {/* Avatar */}
              <div className="flex justify-center pt-6 pb-4">
                <div className="relative w-20 h-20 rounded-full border-4 border-gray-200 overflow-hidden">
                  <Image
                    src={mentor.avatar || "/placeholder.svg"}
                    alt={mentor.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Background Color Section with Info */}
              <div className={`${mentor.bgColor} p-4 text-center`}>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">{mentor.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                    <span className="font-semibold text-gray-900 text-sm">{mentor.rating}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{mentor.reviews} reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
