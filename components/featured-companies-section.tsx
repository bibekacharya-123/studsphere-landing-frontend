"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { companiesData } from "@/lib/companies-data"

export function FeaturedCompaniesSection() {
  const featuredCompanies = Object.values(companiesData).slice(0, 5)

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            Featured Companies Actively Hiring
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
            Master the skills that matter with mentor-led courses designed to help you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {featuredCompanies.map((company) => (
            <Link key={company.id} href={`/jobs/companies/${company.id}`} className="w-full block">
              <div className="w-full bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer h-full">
                {/* Company Info */}
                <div className="p-8 sm:p-10 text-center">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={100}
                    height={100}
                    className="w-24 sm:w-28 h-24 sm:h-28 mx-auto mb-6 rounded-full"
                  />
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">{company.name}</h3>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-blue-600 text-blue-600" />
                      <span className="font-semibold text-gray-900">{company.rating}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{company.reviews} reviews</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base mb-8">{company.about?.substring(0, 100)}...</p>

                  {/* View Jobs Button */}
                  <button className="w-full text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                    View Company
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
