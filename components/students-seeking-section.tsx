"use client"

import Image from "next/image"
import { Star, CheckCircle } from "lucide-react"

const students = [
  {
    name: "Roselia Haments",
    rating: 4.5,
    reviews: 209,
    role: "Full Stack Developer",
    image: "/young-professional-student-portrait.jpg",
    verified: true,
  },
  {
    name: "Roselia Haments",
    rating: 4.5,
    reviews: 209,
    role: "Full Stack Developer",
    image: "/young-professional-student-portrait.jpg",
    verified: true,
  },
  {
    name: "Roselia Haments",
    rating: 4.5,
    reviews: 209,
    role: "Full Stack Developer",
    image: "/young-professional-student-portrait.jpg",
    verified: true,
  },
  {
    name: "Roselia Haments",
    rating: 4.5,
    reviews: 209,
    role: "Full Stack Developer",
    image: "/young-professional-student-portrait.jpg",
    verified: true,
  },
]

export function StudentsSeeingSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 text-balance">
            Students Seeking Opportunities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        {/* Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              {/* Student Image */}
              <div className="relative mb-4">
                <Image
                  src={student.image || "/placeholder.svg"}
                  alt={student.name}
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                />
                {student.verified && (
                  <CheckCircle className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 text-blue-600 bg-white rounded-full" />
                )}
              </div>

              {/* Student Name */}
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-3">{student.name}</h3>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                  <span className="font-semibold text-gray-900 text-sm">{student.rating}</span>
                </div>
                <span className="text-gray-600 text-xs sm:text-sm">{student.reviews} reviews</span>
              </div>

              {/* Role */}
              <p className="text-gray-600 text-xs sm:text-sm mb-6">{student.role}</p>

              {/* View Details Button */}
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
