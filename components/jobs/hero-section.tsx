"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin, Briefcase } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const router = useRouter()
  const [keywords, setKeywords] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")

  const handleFindJob = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()
    if (keywords) params.append("keywords", keywords)
    if (location) params.append("location", location)
    if (jobType) params.append("jobType", jobType)

    router.push(`/jobs/search?${params.toString()}`)
  }

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content - Form */}
          <div className="flex flex-col order-2 lg:order-1">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-5 w-full max-w-sm mx-auto lg:mx-0">
              {/* Header */}
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-balance">
                Find Your Expected Job
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-4">
                Find Jobs, Employment & Career Opportunities. Some of the companies we&apos;ve helped recruit excellent
                applicants over the years.
              </p>

              {/* Form */}
              <form onSubmit={handleFindJob} className="space-y-3">
                {/* Keywords Search */}
                <div>
                  <label className="text-gray-900 font-medium text-xs mb-1 block">Search:</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search your Keywords"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 placeholder-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-gray-900 font-medium text-xs mb-1 block">Location:</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select Location</option>
                      <option value="new-york">New York</option>
                      <option value="los-angeles">Los Angeles</option>
                      <option value="chicago">Chicago</option>
                      <option value="houston">Houston</option>
                      <option value="phoenix">Phoenix</option>
                    </select>
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <label className="text-gray-900 font-medium text-xs mb-1 block">Job Type:</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 w-4 h-4" />
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer"
                    >
                      <option value="">Select Job Type</option>
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Contract">Contract</option>
                      <option value="Freelance">Freelance</option>
                    </select>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors duration-200 text-xs"
                  >
                    Find Job
                  </button>
                  <button
                    type="button"
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 rounded-md transition-colors duration-200 text-xs"
                  >
                    + Post job
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center items-center order-1 lg:order-2 w-full">
            <div className="relative w-full max-w-md sm:max-w-2xl aspect-square">
              <Image
                src="/images/design-mode/Frame.png"
                alt="Job recruitment illustration showing people working with CV and hiring process"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
