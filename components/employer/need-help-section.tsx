"use client"

import { Button } from "@/components/ui/button"

export function NeedHelpSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: Character Illustration */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <svg viewBox="0 0 300 300" className="w-full h-full">
                {/* Simplified character illustration */}
                <circle cx="150" cy="80" r="35" fill="#FFD700" />
                <circle cx="130" cy="70" r="8" fill="#000" />
                <circle cx="170" cy="70" r="8" fill="#000" />
                <circle cx="150" cy="85" r="4" fill="#000" />
                <path d="M 140 90 Q 150 95 160 90" stroke="#000" strokeWidth="2" fill="none" />

                <rect x="120" y="120" width="60" height="70" rx="8" fill="#FF6B6B" />
                <rect x="90" y="160" width="30" height="80" fill="#FFD700" />
                <rect x="180" y="160" width="30" height="80" fill="#FFD700" />
                <rect x="100" y="240" width="20" height="40" fill="#333" />
                <rect x="180" y="240" width="20" height="40" fill="#333" />

                <rect x="75" y="140" width="50" height="60" rx="4" fill="#4A4A4A" />
                <rect x="80" y="145" width="40" height="30" rx="2" fill="#E0E0E0" />
                <circle cx="105" cy="160" r="3" fill="#000" />
              </svg>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Need help choosing the right plan?</h2>
            <p className="text-gray-600 text-lg mb-8">Leave your contact details and we'll get back to you shortly.</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">Contact Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
