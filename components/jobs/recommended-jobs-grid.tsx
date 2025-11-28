"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { JobListing } from "@/lib/jobs-data"
import { MapPin, Clock, Briefcase, Heart, ChevronDown } from 'lucide-react'

interface RecommendedJobsGridProps {
  jobs: JobListing[]
}

export default function RecommendedJobsGrid({ jobs }: RecommendedJobsGridProps) {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [salaryRange, setSalaryRange] = useState([0, 100])
  const [experienceLevel, setExperienceLevel] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState<string[]>([])
  const [workingDays, setWorkingDays] = useState<string[]>([])
  const [datePosted, setDatePosted] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevant")
  const [showLocationDropdown, setShowLocationDropdown] = useState(false)

  const locations = useMemo(() => {
    const unique = new Set(jobs.map(job => job.location))
    return Array.from(unique)
  }, [jobs])

  const jobTypes = useMemo(() => {
    const unique = new Set<string>()
    jobs.forEach(job => {
      job.jobType.forEach(type => unique.add(type))
    })
    return Array.from(unique)
  }, [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // Status filter (if implemented)
      // Location filter
      if (selectedLocations.length > 0 && !selectedLocations.includes(job.location)) {
        return false
      }

      // Experience level filter
      if (experienceLevel.length > 0 && !experienceLevel.includes(job.experienceLevel)) {
        return false
      }

      // Job type filter
      if (selectedType.length > 0 && !selectedType.some(type => job.jobType.includes(type))) {
        return false
      }

      return true
    })
  }, [jobs, selectedLocations, experienceLevel, selectedType])

  const sortedJobs = useMemo(() => {
    const sorted = [...filteredJobs]
    
    if (sortBy === "newest") {
      sorted.sort((a, b) => {
        const aDays = parseInt(a.jobExpire.split(" ")[0]) || 0
        const bDays = parseInt(b.jobExpire.split(" ")[0]) || 0
        return bDays - aDays
      })
    }
    // Default is "relevant" - keep original order

    return sorted
  }, [filteredJobs, sortBy])

  const toggleFilter = (item: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item))
    } else {
      setter([...list, item])
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Filters */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-4 sm:p-6 space-y-6">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Filter</h2>
              <button 
                onClick={() => {
                  setSelectedStatus([])
                  setSelectedLocations([])
                  setSelectedCategory("")
                  setSelectedIndustry("")
                  setSalaryRange([0, 100])
                  setExperienceLevel([])
                  setSelectedTime([])
                  setSelectedType([])
                  setWorkingDays([])
                  setDatePosted([])
                }}
                className="text-orange-600 text-sm font-medium hover:text-orange-700"
              >
                Clear
              </button>
            </div>

            {/* Location Filter */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
              <div className="relative">
                <button 
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                  className="w-full flex items-center justify-between p-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  <span>Select Location</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showLocationDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {locations.map((location) => (
                      <label key={location} className="flex items-center gap-2 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0">
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(location)}
                          onChange={() => toggleFilter(location, selectedLocations, setSelectedLocations)}
                          className="rounded"
                        />
                        <span className="text-sm text-gray-700">{location}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Experience Level Filter */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Experience Level</h3>
              <div className="space-y-2">
                {["Entry Level", "Intermediate", "Expert"].map((level) => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="experience"
                      value={level}
                      checked={experienceLevel.includes(level)}
                      onChange={() => setExperienceLevel([level])}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type Filter */}
            <div className="border-b pb-4">
              <h3 className="font-semibold text-gray-900 mb-3">Type</h3>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedType.includes(type)}
                      onChange={() => toggleFilter(type, selectedType, setSelectedType)}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
              <div className="space-y-2">
                {[
                  { value: "relevant", label: "Relevant" },
                  { value: "newest", label: "Newest First" }
                ].map((option) => (
                  <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Job Listings */}
        <div className="lg:col-span-3">
          {/* Results Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Showing <span className="font-bold">{sortedJobs.length}</span> results for jobs
            </h2>
            <button className="flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
              <span>Quick Apply</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V17a2 2 0 01-2 2h-1C9.716 19 3 12.284 3 4V3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {sortedJobs.length > 0 ? (
              sortedJobs.map((job) => (
                <Link key={job.id} href={`/jobs/${job.id}`}>
                  <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <Image
                          src={job.companyLogo || "/placeholder.svg"}
                          alt={job.companyName}
                          width={60}
                          height={60}
                          className="rounded-lg"
                        />
                      </div>

                      {/* Job Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                          <Heart className="w-5 h-5 text-gray-400 hover:text-red-600 transition-colors flex-shrink-0" />
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-900">{job.companyName}</span>
                          <span className="flex items-center gap-1 text-sm text-gray-600">
                            <span className="text-yellow-400">★</span>
                            {job.companyRating}
                            <span className="text-xs text-gray-500">({job.companyReviews} reviews)</span>
                          </span>
                        </div>

                        {/* Job Meta Info */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{job.experienceLevel}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.experienceLevel}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                        </div>

                        {/* Job Type Tags */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.jobType.map((type, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {type}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{job.jobHighlights[0] || job.description}</p>

                        {/* Job Expiry */}
                        <p className="text-xs text-gray-500">Job Expire: {job.jobExpire}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-gray-600 text-lg">No jobs found matching your criteria</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {sortedJobs.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">←</button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    page === 1
                      ? 'bg-blue-600 text-white'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">→</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
