"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JobAlertsSection() {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Job Alerts</h1>
          <p className="text-lg text-gray-600">Get notified about new jobs that match your preferences</p>
        </div>

        {/* Empty State Container */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 md:p-16 flex flex-col items-center justify-center min-h-96">
          {/* Illustration */}
          <div className="mb-8 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Bell notification */}
              <path
                d="M 150 60 Q 160 60 160 75 L 160 100 Q 160 120 175 125 L 175 135 Q 175 140 170 140 L 130 140 Q 125 140 125 135 L 125 125 Q 140 120 140 100 L 140 75 Q 140 60 150 60"
                fill="#ef4444"
                stroke="#dc2626"
                strokeWidth="2"
              />
              {/* Bell clapper */}
              <circle cx="150" cy="155" r="8" fill="#dc2626" />

              {/* Notification badge */}
              <circle cx="170" cy="70" r="18" fill="#10b981" />
              <text x="170" y="80" textAnchor="middle" fontSize="24" fill="white" fontWeight="bold">
                1
              </text>

              {/* Checkmark elements */}
              <path
                d="M 100 180 L 110 190 L 130 170"
                stroke="#3b82f6"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 180 180 L 190 190 L 210 170"
                stroke="#10b981"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Decorative dots */}
              <circle cx="80" cy="220" r="6" fill="#f59e0b" />
              <circle cx="150" cy="240" r="5" fill="#8b5cf6" />
              <circle cx="220" cy="225" r="6" fill="#3b82f6" />
            </svg>
          </div>

          {/* Empty State Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Job Alerts Set Up!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Create job alerts to receive notifications about new opportunities that match your profile and preferences
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-lg font-semibold">
              Create Job Alert
            </Button>

            <div className="text-gray-600">or</div>

            <Link href="/jobs/search" className="text-blue-600 hover:text-blue-700 font-semibold underline text-lg">
              Search jobs manually
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
