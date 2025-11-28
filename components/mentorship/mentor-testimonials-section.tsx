"use client"

import Image from "next/image"
import { Heart } from "lucide-react"

interface MentorTestimonial {
  id: string
  name: string
  title: string
  company: string
  sessions: number
  reviews: number
  avatar: string
  testimonial: string
  clientName: string
  clientTitle: string
  clientAvatar: string
}

const mentorTestimonials: MentorTestimonial[] = [
  {
    id: "1",
    name: "Jagdish Dhami",
    title: "Product Manager",
    company: "xyz",
    sessions: 189,
    reviews: 10,
    avatar: "/professional-mentor-avatar.jpg",
    testimonial:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us with quality talent.",
    clientName: "Jagdish Dhami",
    clientTitle: "STAR Intern, SAP",
    clientAvatar: "/professional-avatar.png",
  },
  {
    id: "2",
    name: "Jagdish Dhami",
    title: "Product Manager",
    company: "xyz",
    sessions: 189,
    reviews: 10,
    avatar: "/professional-mentor-avatar.jpg",
    testimonial:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us with quality talent.",
    clientName: "Jagdish Dhami",
    clientTitle: "STAR Intern, SAP",
    clientAvatar: "/professional-avatar.png",
  },
  {
    id: "3",
    name: "Jagdish Dhami",
    title: "Product Manager",
    company: "xyz",
    sessions: 189,
    reviews: 10,
    avatar: "/professional-mentor-avatar.jpg",
    testimonial:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us with quality talent.",
    clientName: "Jagdish Dhami",
    clientTitle: "STAR Intern, SAP",
    clientAvatar: "/professional-avatar.png",
  },
]

export function MentorTestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4">
            How Studsphere Helps Job Seekers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mentorTestimonials.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Light Blue Background Section with Mentor Info */}
              <div className="bg-blue-50 p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  {/* Avatar */}
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-full border-2 border-blue-400 overflow-hidden">
                    <Image
                      src={mentor.avatar || "/placeholder.svg"}
                      alt={mentor.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Mentor Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{mentor.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Heart className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                      <p className="text-xs sm:text-sm text-blue-600 font-semibold">
                        {mentor.title} at {mentor.company}
                      </p>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">
                      {mentor.sessions} sessions ({mentor.reviews} reviews)
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-4 sm:p-5 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">{mentor.testimonial}</p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-semibold inline-flex items-center gap-1 mb-4"
                >
                  Read More
                  <span className="text-lg">›</span>
                </a>

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4 mt-4"></div>

                {/* Client Info */}
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-full border-2 border-gray-200 overflow-hidden">
                    <Image
                      src={mentor.clientAvatar || "/placeholder.svg"}
                      alt={mentor.clientName}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm">{mentor.clientName}</p>
                    <p className="text-xs text-gray-600">{mentor.clientTitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
