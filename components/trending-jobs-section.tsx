"use client"

import Image from "next/image"
import Link from "next/link"
import { FileText, Star, ChevronRight } from "lucide-react"
import { getTrendingJobRoles } from "@/lib/jobs-data"
import { companiesData } from "@/lib/companies-data"

const sponsoredCompanies = [
  companiesData[1],
  companiesData[2],
  companiesData[3],
  companiesData[1],
  companiesData[2],
  companiesData[3],
  companiesData[1],
  companiesData[2],
]

export function TrendingJobsSection() {
  const jobRoles = getTrendingJobRoles()

  return (
    <>
      {/* Trending Job Roles Section */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 text-balance">
              Trending Job Roles On Studsphere
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
              Master the skills that matter with mentor-led courses designed to help you
            </p>
          </div>

          {/* Job Roles Grid - 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {jobRoles.map((role) => (
              <Link href={`/jobs/${role.id}`} key={role.id}>
                <div className="flex items-center justify-between gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md hover:bg-white transition-all duration-200 cursor-pointer">
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 shrink-0" />
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm truncate">{role.name}</h3>
                      <p className="text-gray-600 text-xs">{role.jobs}k+ Jobs</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsored Companies Section */}
      <section className="w-full bg-gray-50 px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 text-balance">
              Sponsored Companies
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm lg:text-base">
              Master the skills that matter with mentor-led courses designed to help you
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {sponsoredCompanies.map((company, idx) => (
              <Link href={`/jobs/companies/${company.id}`} key={`sponsored-company-${idx}`}>
                <div className="flex flex-col items-center text-center p-5 sm:p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                  {/* Company Logo */}
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 sm:w-24 sm:h-24 mb-3 rounded-full object-cover"
                  />

                  {/* Company Name */}
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2">{company.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
                      <span className="font-semibold text-gray-900 text-xs">{company.rating}</span>
                    </div>
                    <span className="text-gray-600 text-xs">{company.reviews} reviews</span>
                  </div>

                  {/* Categories */}
                  <div className="w-full space-y-1">
                    {company.tags.map((tag, idx) => (
                      <p key={idx} className="text-gray-600 text-xs">
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
