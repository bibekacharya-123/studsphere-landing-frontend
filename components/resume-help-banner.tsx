"use client"

import Image from "next/image"

export function ResumeHelpBanner() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-r from-[#0D99FF] to-[#0D99FF] rounded-lg sm:rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-5 sm:p-6 md:p-8 relative">
          <div className="flex-1 z-10 w-full">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 text-balance">
              Need Help With Your Resume?
            </h2>
            <p className="text-white text-xs sm:text-sm mb-4 sm:mb-5 opacity-95">
              Get Experts To Build Your Resume From Scratch
            </p>
            <button className="bg-white text-[#0D99FF] font-semibold px-5 sm:px-6 py-2 rounded-full hover:shadow-lg transition-shadow text-xs sm:text-sm">
              View Details
            </button>
          </div>

          <div className="flex-1 relative h-32 sm:h-40 md:h-48 w-full md:w-auto mt-4 md:mt-0">
            <Image
              src="/resume-help-frame.png"
              alt="Resume help illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
