"use client"

import Image from "next/image"
import { Briefcase, Zap, GraduationCap, Database, MessageCircle } from "lucide-react"

interface EmployerProductDropdownProps {
  onClose: () => void
}

const features = [
  {
    icon: Briefcase,
    color: "bg-blue-500",
    title: "Job Posting",
    description: "Hire smarter with AI-powered matching",
  },
  {
    icon: Zap,
    color: "bg-orange-500",
    title: "Hiring Automation",
    description: "Automate your entire hiring workflow",
  },
  {
    icon: GraduationCap,
    color: "bg-purple-500",
    title: "Campus Recruitment",
    description: "Connect with top students across Nepal",
  },
  {
    icon: Database,
    color: "bg-amber-600",
    title: "Talent Database Access",
    description: "Access thousands of verified candidates",
  },
  {
    icon: MessageCircle,
    color: "bg-green-500",
    title: "WhatsApp Fast Recruit",
    description: "Send bulk whatsapp messages efficiently",
  },
]

export function EmployerProductDropdown({ onClose }: EmployerProductDropdownProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-2xl w-screen md:w-[900px] p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Features List */}
        <div className="space-y-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className={`${feature.color} rounded-full p-4 flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Video Section */}
        <div className="flex flex-col justify-between">
          <div className="rounded-2xl overflow-hidden h-48 md:h-64 bg-gray-100 mb-4">
            <Image
              src="/images/screenshot-202025-11-21-20at-2012.png"
              alt="Career compass video guide"
              width={500}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-gray-800 font-semibold text-lg">
              Level up your resume: watch our career compass video guide
            </h3>
            <button
              onClick={onClose}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm mt-3 flex items-center gap-2"
            >
              Watch Video
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
