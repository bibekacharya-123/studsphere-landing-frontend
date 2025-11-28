"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export function TopCompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const animate = () => {
      scrollPosition += 1
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPosition = 0
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  const companies = Array(7).fill({
    name: "Studsphere Education",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/education%201-weKFVnoZgki6lVydV0SWA9E3gJfLmc.png",
  })

  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 text-balance">
            Top Companies Listing On Studsphere
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Find jobs that fit your career aspirations.</p>
        </div>

        {/* Scrolling companies carousel */}
        <div ref={scrollRef} className="overflow-x-hidden pb-4 -mx-4 sm:mx-0 hover:pause-animation">
          <div className="flex gap-6 sm:gap-8 min-w-max justify-center px-4 sm:px-0">
            {companies.map((company, index) => (
              <div key={index} className="shrink-0">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={150}
                  height={50}
                  className="h-12 sm:h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
