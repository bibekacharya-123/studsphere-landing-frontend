"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingCards() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Basic Plan",
      price: 6000,
      description:
        "We handle everything— from planning and branding to sourcing, so you can focus on hiring the best talent",
      features: [
        "1 Standard Job Post",
        "Unlimited Applications",
        "AI Job Description Generator",
        "Access to 20 Candidate Profiles / Day",
        "Company Profile + Logo on Job Post",
      ],
    },
    {
      name: "Basic Plan",
      price: 6000,
      description:
        "We handle everything— from planning and branding to sourcing, so you can focus on hiring the best talent",
      features: [
        "1 Standard Job Post",
        "Unlimited Applications",
        "AI Job Description Generator",
        "Access to 20 Candidate Profiles / Day",
        "Company Profile + Logo on Job Post",
      ],
    },
    {
      name: "Basic Plan",
      price: 6000,
      description:
        "We handle everything— from planning and branding to sourcing, so you can focus on hiring the best talent",
      features: [
        "1 Standard Job Post",
        "Unlimited Applications",
        "AI Job Description Generator",
        "Access to 20 Candidate Profiles / Day",
        "Company Profile + Logo on Job Post",
      ],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white border-2 border-blue-500 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 sm:px-8 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "monthly" ? "bg-blue-600 text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 sm:px-8 py-2 rounded-full font-medium transition-all ${
                billingPeriod === "yearly" ? "bg-blue-600 text-white" : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold text-gray-900">NPR {plan.price.toLocaleString()}</div>
              </div>

              <div className="border-t border-gray-300 my-4"></div>

              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50">
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
