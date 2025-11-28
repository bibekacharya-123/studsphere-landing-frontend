"use client"

import { Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MentorshipJourneySection() {
  const features = {
    free: [
      "Access to volunteer mentors across industries",
      "30-45 minute sessions",
      "Perfect for career guidance and networking",
      "No subscription fees",
    ],
    premium: [
      "Vetted industry leaders and executives",
      "60-90 minute deep-dive sessions",
      "Personalized action plans and follow-ups",
      "Pay per session (typically $50-200)",
    ],
  }

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Choose Your Mentorship Journey</h2>
          <p className="text-lg text-gray-600 text-balance max-w-2xl mx-auto">
            Whether you're just starting out or ready to invest in premium guidance, we have the perfect mentorship
            option for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Free Card */}
          <div className="border border-gray-200 rounded-lg p-8 md:p-10 bg-gray-50 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold">FREE</h3>
            </div>

            <h4 className="text-2xl font-bold mb-3">Community Mentorship</h4>
            <p className="text-gray-600 mb-8">
              Connect with experienced professionals who volunteer their time to help others grow.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.free.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-full text-lg font-semibold">
              Find Free Mentors
            </Button>
          </div>

          {/* Premium Card */}
          <div className="border border-gray-200 rounded-lg p-8 md:p-10 bg-yellow-50 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-100 p-4 rounded-lg">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold">PREMIUM</h3>
            </div>

            <h4 className="text-2xl font-bold mb-3">Professional Mentorship</h4>
            <p className="text-gray-600 mb-8">
              Work with top-tier experts who offer dedicated, personalized coaching sessions.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {features.premium.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-6 rounded-full text-lg font-semibold">
              Find premium Mentors
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
