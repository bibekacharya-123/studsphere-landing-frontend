"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

const companiesData = [
  {
    id: 1,
    category: "Internet",
    count: 247,
    logos: ["/images/frame.png", "/images/frame.png", "/images/frame.png", "/images/frame.png"],
  },
  {
    id: 2,
    category: "Internet",
    count: 247,
    logos: ["/images/frame.png", "/images/frame.png", "/images/frame.png", "/images/frame.png"],
  },
  {
    id: 3,
    category: "Internet",
    count: 247,
    logos: ["/images/frame.png", "/images/frame.png", "/images/frame.png", "/images/frame.png"],
  },
  {
    id: 4,
    category: "Internet",
    count: 247,
    logos: ["/images/frame.png", "/images/frame.png", "/images/frame.png", "/images/frame.png"],
  },
  {
    id: 5,
    category: "Internet",
    count: 247,
    logos: ["/images/frame.png", "/images/frame.png", "/images/frame.png", "/images/frame.png"],
  },
]

export function TopCompaniesHiringSection() {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-8 sm:mb-12 w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 text-balance">
            Top Companies Hiring Now
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        <div className="w-full overflow-x-auto pb-4">
          <div className="flex gap-6 sm:gap-8 pb-4 justify-center">
            {companiesData.map((item) => (
              <Link key={item.id} href={`/jobs/companies/${item.id}`} className="flex-shrink-0 min-w-max block">
                <div className="hover:shadow-md transition-shadow duration-200 cursor-pointer p-4 rounded-lg hover:bg-white">
                  <div className="flex items-center justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{item.category}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{item.count} are actively hiring</p>
                    </div>
                    <ChevronRight size={20} className="text-gray-400 flex-shrink-0" />
                  </div>

                  {/* Overlapping logos */}
                  <div className="flex items-center gap-0 relative">
                    {item.logos.map((logo, idx) => (
                      <img
                        key={idx}
                        src={logo || "/placeholder.svg"}
                        alt={`Company ${idx + 1}`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white relative"
                        style={{
                          marginLeft: idx > 0 ? "-12px" : "0",
                          zIndex: item.logos.length - idx,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
