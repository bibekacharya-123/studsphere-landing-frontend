"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Feature {
  id: number
  title: string
  description: string
  icon: string
  buttonText: string
  buttonVariant?: "default" | "outline"
}

const features: Feature[] = [
  {
    id: 1,
    title: "Job Posting",
    description: "Receive applications and quickly connect with high-quality, relevant candidates",
    icon: "/images/invoice-20spreadsheet-201-20streamline-20ux-20colors.png",
    buttonText: "View Plans",
  },
  {
    id: 2,
    title: "Comprehensive Plan",
    description: "Get access to job posting, candidate database and outreach as complete package.",
    icon: "/images/plan-20connection-20streamline-20ux-20duotone.png",
    buttonText: "View Plans",
  },
  {
    id: 3,
    title: "Hiring Automation",
    description: "Get access to job posting, candidate database and outreach as complete package.",
    icon: "/images/coworkers-201-20streamline-20ux-20duotone.png",
    buttonText: "Request a Demo",
  },
  {
    id: 4,
    title: "Campus Recruitment",
    description: "Get access to job posting, candidate database and outreach as complete package.",
    icon: "/images/student-202-201-20streamline-20ux-20duotone.png",
    buttonText: "Request a Demo",
  },
  {
    id: 5,
    title: "Talent Database Access",
    description: "Get access to job posting, candidate database and outreach as complete package.",
    icon: "/images/document-20box-204-20streamline-20ux-20duotone.png",
    buttonText: "View Plans",
  },
  {
    id: 6,
    title: "Need Help?",
    description: "Lets us help you find the right solution.",
    icon: "/images/accountant-20sit-201-204-20streamline-20ux-20line.png",
    buttonText: "Connect with our Expert",
  },
]

export function JobOffersSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What studsphere job offers</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We handle everything—from planning and branding to sourcing, so you can focus on hiring the best talent
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Image
                  src={feature.icon || "/placeholder.svg"}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 flex-grow">{feature.description}</p>

              {/* Button */}
              <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2">
                {feature.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
