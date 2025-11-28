"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function JobCallInvitesSection() {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">JobCall: Your Invitation To Apply</h1>
          <p className="text-lg text-gray-600">
            Recruiters have chosen you from a large pool of candidates to apply to these jobs
          </p>
        </div>

        {/* Empty State Container */}
        <div className="bg-white rounded-2xl border border-gray-200 p-12 md:p-16 flex flex-col items-center justify-center min-h-96">
          {/* Illustration */}
          <div className="mb-8 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Person sitting */}
              <circle cx="80" cy="60" r="15" fill="#10b981" />
              <rect x="70" y="80" width="20" height="30" fill="#10b981" />
              <rect x="60" y="80" width="10" height="40" fill="#3b82f6" />
              <rect x="80" y="80" width="10" height="40" fill="#3b82f6" />
              <rect x="65" y="120" width="8" height="35" fill="#1e40af" />
              <rect x="82" y="120" width="8" height="35" fill="#1e40af" />

              {/* Desk/Laptop */}
              <rect x="100" y="100" width="80" height="50" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
              <rect x="105" y="95" width="70" height="8" fill="#374151" />

              {/* Chat bubbles */}
              <circle cx="200" cy="50" r="25" fill="#fbbf24" />
              <text x="200" y="55" textAnchor="middle" fontSize="20" fill="#000">
                😊
              </text>

              <g>
                <rect x="160" y="85" width="35" height="25" rx="8" fill="#e0e7ff" stroke="#818cf8" strokeWidth="1" />
                <text x="177" y="102" textAnchor="middle" fontSize="12" fill="#4f46e5" fontWeight="bold">
                  Msg
                </text>
              </g>

              {/* Phone icon circle */}
              <circle cx="220" cy="110" r="20" fill="#3b82f6" />
              <path d="M 220 100 Q 225 105 220 120" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="220" cy="110" r="3" fill="white" />

              {/* Plant */}
              <rect x="250" y="140" width="8" height="25" fill="#059669" />
              <ellipse cx="254" cy="130" rx="12" ry="15" fill="#10b981" />
              <ellipse cx="248" cy="135" rx="8" ry="12" fill="#10b981" />
              <ellipse cx="260" cy="135" rx="8" ry="12" fill="#10b981" />
            </svg>
          </div>

          {/* Empty State Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You Have No Jobcall Yet!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Update your profile to help recruiters discover you from a large pool of candidates
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-full text-lg font-semibold"
              onClick={() => console.log("Update Profile clicked")}
            >
              Update Profile
            </Button>

            <div className="text-gray-600">or</div>

            <Link href="/jobs/search" className="text-blue-600 hover:text-blue-700 font-semibold underline text-lg">
              Search and apply job
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
