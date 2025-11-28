"use client"

import Image from "next/image"
import { Star } from 'lucide-react'
import { Company } from "@/lib/companies-data"

interface CompanyDetailHeaderProps {
  company: Company
}

export default function CompanyDetailHeader({ company }: CompanyDetailHeaderProps) {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <div className="relative w-full h-48 sm:h-64 lg:h-72 bg-gray-200">
        <Image
          src={company.bannerImage || "/placeholder.svg"}
          alt="Company banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Company Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">{company.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h1 className="text-2xl sm:text-3xl font-bold">{company.name}</h1>
                  <span className="text-blue-600 text-sm font-semibold">{company.followers} followers</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  + Follow
                </button>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {company.tags.map((tag, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                  ★ {tag}
                </span>
              ))}
            </div>

            {/* Rating and Website */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xl font-bold">{company.rating}</span>
              </div>
              <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                {company.website} ↗
              </a>
            </div>

            {/* About Us Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <Image
                  src={company.aboutImage || "/placeholder.svg"}
                  alt="About company"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.
                  </p>
                  <button className="text-blue-600 font-semibold text-sm hover:underline flex items-center gap-1">
                    Read more ›
                  </button>
                </div>
              </div>
            </div>

            {/* Culture and Values */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Culture and Values</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression.
              </p>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                <div className="flex gap-3">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span className="text-sm text-gray-700">One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently</span>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span className="text-sm text-gray-700">One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently</span>
                </div>
                <div className="flex gap-3">
                  <input type="checkbox" className="w-4 h-4" checked readOnly />
                  <span className="text-sm text-gray-700">One disadvantage of Lorem ipsum is that in Latin certain letters appear more frequently</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Key Highlights and Job Openings */}
          <div className="lg:col-span-1 space-y-6">
            {/* Key Highlights */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="text-blue-600 text-2xl">📊</div>
                  <div>
                    <p className="text-xs text-gray-600">Industry</p>
                    <p className="font-semibold text-sm">{company.industry}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 text-2xl">📅</div>
                  <div>
                    <p className="text-xs text-gray-600">Founded</p>
                    <p className="font-semibold text-sm">{company.founded}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="text-blue-600 text-2xl">📍</div>
                  <div>
                    <p className="text-xs text-gray-600">Location</p>
                    <p className="font-semibold text-sm">{company.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Openings Preview */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4">{company.jobOpenings} job openings</h3>
              <div className="space-y-3">
                {company.jobs.map((job) => (
                  <div key={job.id} className="bg-white p-3 rounded border border-gray-200">
                    <p className="font-semibold text-sm">{job.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{job.experience}</p>
                    <p className="text-xs text-gray-600">{job.location}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 border-2 border-blue-600 text-blue-600 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors">
                View all openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
