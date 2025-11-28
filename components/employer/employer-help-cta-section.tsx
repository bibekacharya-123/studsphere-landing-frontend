"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function EmployerHelpCtaSection() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-200 to-blue-100 rounded-2xl px-8 py-12 flex items-center justify-between gap-8">
          {/* Left Image */}
          <div className="flex-shrink-0 w-48 h-48 relative hidden md:block">
            <Image
              src="/images/young-girl-white-shirt-headphones-pointing-with-fingers-side-smiling-standing-pink-wall-201.png"
              alt="Support Representative"
              fill
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-balance">
              Not sure which offering is right for you?
            </h3>
            <p className="text-lg text-gray-700 mb-6">leave your contact details and we'll get back to shortly</p>
          </div>

          {/* Right Button */}
          <div className="flex-shrink-0">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-semibold whitespace-nowrap"
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
