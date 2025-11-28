"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote:
      "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
    author: "Jagdish Dhami",
    image: "/professional-avatar.png",
  },
  {
    quote:
      "StudSphere helped me land my dream job within 3 months. The platform's AI-powered recommendations matched me with the perfect roles, and the video resume feature really made me stand out from other candidates.",
    author: "Sarah Chen",
    image: "/professional-avatar.png",
  },
  {
    quote:
      "As a fresh grad, I was unsure how to approach job hunting. StudSphere gave me the tools, mentorship, and connections I needed to secure a role at a top tech company. It's a game-changer.",
    author: "Emily Rodriguez",
    image: "/professional-avatar.png",
  },
  {
    quote:
      "The mentor network on StudSphere is incredible. I got guidance from industry professionals that shaped my career path. Within 6 months, I was hired at a leading startup with a competitive offer.",
    author: "Maya Patel",
    image: "/professional-avatar.png",
  },
  {
    quote:
      "StudSphere's skill-building courses combined with job matching made all the difference. I not only found a job but found a role that aligned with my passion and growth goals.",
    author: "Alex Johnson",
    image: "/professional-avatar.png",
  },
  {
    quote:
      "The interview preparation resources and resume optimization tools on StudSphere were invaluable. I received multiple offers and chose the perfect fit for my career goals.",
    author: "David Kim",
    image: "/professional-avatar.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const displayedTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ]

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 text-balance">
            How Studsphere Helps Job Seekers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayedTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-md transition-shadow"
            >
              {/* Quote Mark Icon */}
              <div className="text-4xl text-blue-600 font-bold mb-4"></div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-6">{testimonial.quote}</p>

              {/* Dotted Divider */}
              <div className="border-t border-dashed border-gray-300 mb-4"></div>

              {/* Read More Link */}
              <Link href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 mb-4 inline-block">
                Read More &gt;
              </Link>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-400"
                />
                <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
