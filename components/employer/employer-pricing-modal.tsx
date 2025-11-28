"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function EmployerPricingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  if (!isOpen) return null

  const pricingPlans = [
    {
      name: "Basic Plan",
      price: "NPR 6000",
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
      price: "NPR 6000",
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
      price: "NPR 6000",
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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <div className="sticky top-0 flex justify-end p-4 bg-white border-b">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close pricing modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 px-6 sm:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">Hire Smarter, Not Harder</h1>
              <p className="text-blue-100 text-base sm:text-lg">
                with quick and easy plans on India's leading job site
              </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-10 sm:mb-14">
              <div className="inline-flex bg-white rounded-full p-1 gap-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 sm:px-8 py-2 rounded-full font-semibold transition-all ${
                    billingCycle === "monthly"
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-transparent text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 sm:px-8 py-2 rounded-full font-semibold transition-all ${
                    billingCycle === "yearly"
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-transparent text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* Plan Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-2">
                    <p className="text-3xl font-bold text-gray-900">{plan.price}</p>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dotted border-gray-300 my-4"></div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full border-2 border-blue-500 text-blue-500 font-semibold py-3 rounded-full hover:bg-blue-50 transition-colors">
                    Get started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
