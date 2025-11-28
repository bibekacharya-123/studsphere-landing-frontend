"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SavedJobsSection() {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Saved Jobs</h1>
          <p className="text-lg text-gray-600">Save jobs to review and apply to them later</p>
        </div>

        {/* Empty State Container */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 md:p-16 flex flex-col items-center justify-center min-h-96">
          {/* Illustration */}
          <div className="mb-8 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Person holding bookmark */}
              <circle cx="100" cy="60" r="15" fill="#10b981" />
              <rect x="90" y="80" width="20" height="30" fill="#10b981" />
              <rect x="80" y="80" width="10" height="40" fill="#3b82f6" />
              <rect x="100" y="80" width="10" height="40" fill="#3b82f6" />
              <rect x="85" y="120" width="8" height="35" fill="#1e40af" />
              <rect x="102" y="120" width="8" height="35" fill="#1e40af" />

              {/* Bookmark/Document */}
              <rect x="140" y="60" width="50" height="80" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <path d="M 190 60 L 190 100 L 165 85 L 140 100 L 140 60" fill="#f59e0b" />

              {/* Heart icon on document */}
              <path d="M 165 75 Q 165 70 170 70 Q 175 70 175 75 Q 175 80 170 85 Q 165 80 165 75" fill="#ef4444" />

              {/* Decorative elements */}
              <circle cx="200" cy="150" r="8" fill="#3b82f6" />
              <circle cx="220" cy="160" r="6" fill="#10b981" />
              <circle cx="240" cy="140" r="7" fill="#f59e0b" />
              <circle cx="180" cy="200" r="5" fill="#8b5cf6" />
            </svg>
          </div>

          {/* Empty State Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Saved Jobs Yet!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Start exploring job opportunities and save your favorite jobs to review later
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/jobs/search">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-lg font-semibold">
                Search Jobs
              </Button>
            </Link>

            <div className="text-gray-600">or</div>

            <Link
              href="/jobs/recommended"
              className="text-blue-600 hover:text-blue-700 font-semibold underline text-lg"
            >
              Check recommended jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
