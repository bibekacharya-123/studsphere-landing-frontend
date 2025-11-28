"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  avatar: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
    author: "Jagdish Dhami",
    title: "TA Leader",
    avatar: "/professional-avatar.png",
    logo: "/bread-financial-logo.jpg",
  },
  {
    id: 2,
    quote:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
    author: "Jagdish Dhami",
    title: "TA Leader",
    avatar: "/professional-avatar.png",
    logo: "/bread-financial-logo.jpg",
  },
  {
    id: 3,
    quote:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
    author: "Jagdish Dhami",
    title: "TA Leader",
    avatar: "/professional-avatar.png",
    logo: "/bread-financial-logo.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">How Studsphere Helps Job Seekers</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-600 fill-blue-600" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-sm mb-6 line-clamp-6">{testimonial.quote}</p>

              {/* Read More Link */}
              <a
                href="#"
                className="text-blue-600 font-semibold text-sm hover:text-blue-700 mb-6 inline-flex items-center gap-1"
              >
                Read More <span className="text-lg">›</span>
              </a>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Author Section */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={56}
                  height={56}
                  className="rounded-full border-2 border-blue-600 w-14 h-14 object-cover"
                />

                {/* Author Info */}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                  <p className="text-gray-500 text-xs">{testimonial.title}</p>
                </div>

                {/* Logo */}
                <Image
                  src={testimonial.logo || "/placeholder.svg"}
                  alt="StudSphere"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
