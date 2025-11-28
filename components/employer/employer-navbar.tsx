"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { EmployerProductDropdown } from "./employer-product-dropdown"
import { EmployerPricingModal } from "./employer-pricing-modal"

export function EmployerNavbar() {
  const [isProductOpen, setIsProductOpen] = useState(false)
  const [isPricingOpen, setIsPricingOpen] = useState(false)

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/design-mode/education%201.png"
                alt="Studsphere Education"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* Nav Buttons */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Product Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProductOpen(!isProductOpen)}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
                >
                  Product
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isProductOpen && (
                  <div className="absolute top-full left-0 mt-2">
                    <EmployerProductDropdown onClose={() => setIsProductOpen(false)} />
                  </div>
                )}
              </div>

              <Link href="/jobs/employer/pricing">
                <button className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
                  Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <EmployerPricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </>
  )
}
