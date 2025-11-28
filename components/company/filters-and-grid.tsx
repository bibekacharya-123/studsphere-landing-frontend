"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from 'lucide-react'
import CompanyCard from "./company-card"
import CompanyFilters from "./filters"
import CategoryNavigation from "./category-navigation"

export default function CompanyFiltersAndGrid() {
  const [selectedCategory, setSelectedCategory] = useState("internet")
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    category: "",
    jobTypes: [],
    salary: [0, 100],
    industry: "",
    careerLevel: "",
    experience: "",
    postedDate: "last-hour",
  })

  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const companies = Array(24).fill(null).map((_, i) => ({
    id: i + 1,
    name: "FNZ Group",
    rating: 4.5,
    reviews: 209,
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fnz-group-company-logo.jpg",
    tags: ["Foreign MNC", "FinTech/Payments"],
    category: selectedCategory,
  }))

  return (
    <>
      <CategoryNavigation selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8">
            {/* Desktop Filters Sidebar */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <CompanyFilters filters={filters} setFilters={setFilters} />
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {/* Mobile filter toggle */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <p className="text-sm text-gray-600 font-medium">Showing 8833 companies</p>
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {showMobileFilters ? (
                    <>
                      <X size={18} />
                      <span className="text-sm font-medium">Close</span>
                    </>
                  ) : (
                    <>
                      <Menu size={18} />
                      <span className="text-sm font-medium">Filters</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mobile filters drawer */}
              {showMobileFilters && (
                <div className="lg:hidden mb-6 bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <CompanyFilters filters={filters} setFilters={setFilters} />
                </div>
              )}

              {/* Desktop results count */}
              <div className="hidden lg:flex items-center justify-between mb-6">
                <p className="text-sm text-gray-600 font-medium">Showing 8833 companies</p>
              </div>

              {/* Companies grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {companies.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-10">
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-colors">
                  &lt;
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">1</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-colors">2</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-colors">3</button>
                <button className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium transition-colors">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
