"use client"

import Image from "next/image"

export function CareerPlatformBanner() {
  return (
    <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-r from-[#0D99FF] to-[#C8E8FF] rounded-lg sm:rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-10 relative">
          {/* Content */}
          <div className="flex-1 z-10 w-full md:w-auto">
            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 text-balance">
              Introducing A Career Platform For College Students & Fresh Grads
            </h2>
            <p className="text-white text-xs sm:text-xs opacity-95 mb-4 sm:mb-5">
              Explore Contests, Webinars, Take Aptitude Test, Prepare For Your Dream Career & Find Jobs & Internships
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button className="bg-white text-blue-600 font-semibold px-5 sm:px-6 py-2 rounded-full hover:shadow-lg transition-shadow text-xs sm:text-sm">
                Pathfinder
              </button>
              <button className="bg-white text-blue-600 font-semibold px-5 sm:px-6 py-2 rounded-full hover:shadow-lg transition-shadow text-xs sm:text-sm">
                Job & Internship
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1 relative h-32 sm:h-40 md:h-48 w-full md:w-auto mt-4 md:mt-0 md:ml-6">
            <Image src="/career-frame.png" alt="Career platform illustration" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
