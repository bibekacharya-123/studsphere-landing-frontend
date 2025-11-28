"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function HiringPlansSection() {
  const plans = [
    {
      title: "Large companies & enterprise",
      description: "Fill any role, from bulk hiring to leadership positions",
      benefits: [
        "Fill any role, from bulk hiring to leadership positions",
        "Fill any role, from bulk hiring to leadership positions",
      ],
    },
    {
      title: "small & Medium Business",
      description: "Fill any role, from bulk hiring to leadership positions",
      benefits: [
        "Fill any role, from bulk hiring to leadership positions",
        "Fill any role, from bulk hiring to leadership positions",
      ],
    },
    {
      title: "consultants & Agencies",
      description: "Fill any role, from bulk hiring to leadership positions",
      benefits: [
        "Fill any role, from bulk hiring to leadership positions",
        "Fill any role, from bulk hiring to leadership positions",
      ],
    },
  ]

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hiring made simple for every business
          </h2>
          <p className="text-lg text-gray-600">Big or small, we've got you covered every step of the way</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 md:h-52 bg-gray-300 overflow-hidden">
                <Image src="/images/rectangle-205177.png" alt={plan.title} fill className="object-cover" />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4">{plan.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Benefits */}
                <div className="space-y-4 flex-1">
                  {plan.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5">
                    View Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
