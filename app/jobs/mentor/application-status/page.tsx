"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Mail } from "lucide-react"
import Link from "next/link"

export default function ApplicationStatusPage() {
  const [applicationData, setApplicationData] = useState<any>(null)

  useEffect(() => {
    // Retrieve application data from localStorage
    const data = localStorage.getItem("mentorApplication")
    if (data) {
      setApplicationData(JSON.parse(data))
    }
  }, [])

  return (
    <main className="w-full">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Status Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12 text-center">
            {/* Pending Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse"></div>
                <Clock className="text-blue-600 relative z-10" size={80} />
              </div>
            </div>

            {/* Status Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Application Pending Review</h1>

            {/* Status Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thank you for submitting your mentor application! Your profile is now under review by our team.
            </p>

            {/* Timeline */}
            <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">What Happens Next?</h2>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Profile Verification (24-48 hours)</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Our team will verify your credentials and professional background.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Initial Review (48-72 hours)</h3>
                    <p className="text-gray-600 text-sm mt-1">We'll assess your expertise and mentoring approach.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Approval & Onboarding</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Once approved, you'll receive onboarding instructions and can start mentoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Details */}
            {applicationData && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">Your Application Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-semibold text-gray-900">{applicationData.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">{applicationData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Company</p>
                    <p className="font-semibold text-gray-900">{applicationData.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Designation</p>
                    <p className="font-semibold text-gray-900">{applicationData.designation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Notification Info */}
            <div className="flex items-start gap-4 bg-green-50 p-4 rounded-lg border border-green-200 mb-8">
              <Mail className="text-green-600 flex-shrink-0 mt-1" size={24} />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">Check Your Email</h4>
                <p className="text-gray-700 text-sm">
                  We'll send you an email update as soon as your application is reviewed. Make sure to check your inbox
                  and spam folder.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/mentorship" className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Mentorship
                </Button>
              </Link>
              <Link href="/" className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Go to Home</Button>
              </Link>
            </div>

            {/* Support Message */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                Have questions? Contact our support team at{" "}
                <a href="mailto:support@studsphere.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                  support@studsphere.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
