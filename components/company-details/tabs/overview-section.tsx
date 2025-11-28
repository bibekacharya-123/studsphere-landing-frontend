import Image from "next/image"
import { Company } from "@/lib/companies-data"
import { Star } from 'lucide-react'

interface OverviewSectionProps {
  company: Company
}

export default function OverviewSection({ company }: OverviewSectionProps) {
  return (
    <div className="space-y-12">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <div className="relative h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/images/rectangle-204892.png"
              alt="About company"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mb-6">
            {company.about}
          </p>
          <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Read more <span>›</span>
          </button>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.highlights?.map((highlight, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-semibold flex-shrink-0">
                {highlight.icon}
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">{highlight.label}</p>
                <p className="font-semibold text-gray-900">{highlight.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments Hiring */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Departments hiring at {company.name}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {company.departments.map((dept, idx) => (
            <div key={idx} className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer hover:bg-blue-100">
              <h4 className="text-lg font-semibold mb-2">{dept.name}</h4>
              <p className="text-blue-600 font-semibold text-sm hover:underline">
                {dept.companies.toLocaleString()}+ companies ›
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
