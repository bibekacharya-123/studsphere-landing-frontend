"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Briefcase, Star } from "lucide-react"
import { getAllJobs } from "@/lib/jobs-data"

export function JobsInterestedSection() {
  const jobs = getAllJobs().slice(0, 4)

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 text-balance">
            Jobs You May Be Interested In
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {jobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`}>
              <div className="border border-gray-200 rounded-lg p-4 sm:p-5 hover:shadow-md transition-shadow bg-white cursor-pointer h-full">
                <div className="flex justify-between items-start mb-4">
                  <Image
                    src={job.companyLogo || "/placeholder.svg"}
                    alt={job.companyName}
                    width={48}
                    height={48}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    unoptimized
                  />
                  <span className="text-xs text-gray-400">{job.jobExpire}</span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-600 text-xs sm:text-sm">{job.companyName}</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                    <span className="text-xs sm:text-sm text-gray-700 font-semibold">{job.companyRating}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400 shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-gray-400 shrink-0" />
                    <span>{job.experienceLevel}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
