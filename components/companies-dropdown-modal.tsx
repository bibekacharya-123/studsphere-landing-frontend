"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function CompaniesDropdownModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 150)
    setHoverTimeout(timeout)
  }

  // Allow toggle on click so dropdown is reachable on touch devices / mobile
  const handleToggle = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setIsOpen((s) => !s)
  }

  const categories = [
    { name: "NGOs & INGOs", slug: "ngos-ingos" },
    { name: "startup", slug: "startup" },
    { name: "Product Based", slug: "product-based" },
    { name: "MNC", slug: "mnc" },
    { name: "Internet", slug: "internet" },
  ]

  const collections = [
    { name: "Top Companies", slug: "top-companies" },
    { name: "IT Companies", slug: "it-companies" },
    { name: "Featured Companies", slug: "featured-companies" },
    { name: "Sponsored Companies", slug: "sponsored-companies" },
    { name: "Fintech Companies", slug: "fintech-companies" },
  ]

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Companies
        <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Explore Categories */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Explore Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/jobs/companies?category=${category.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Explore Collection */}
            <div className="border-l border-gray-200 pl-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Explore Collection</h3>
              <div className="space-y-3">
                {collections.map((collection) => (
                  <Link
                    key={collection.slug}
                    href={`/jobs/companies?collection=${collection.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-blue-600 text-sm font-medium transition-colors"
                  >
                    {collection.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
