import Image from "next/image"
import { Company } from "@/lib/companies-data"

interface CultureValuesSectionProps {
  company: Company
}

export default function CultureValuesSection({ company }: CultureValuesSectionProps) {
  return (
    <div className="space-y-12">
      {/* Culture Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/images/rectangle-204892.png"
            alt="Company culture"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Culture and Values</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            {company.cultureDescription}
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold text-lg">Mission:</h4>
            {company.missions?.map((mission, idx) => (
              <div key={idx} className="flex gap-3">
                <input type="checkbox" className="w-5 h-5 flex-shrink-0 text-blue-600 rounded cursor-pointer" readOnly checked />
                <span className="text-gray-700">{mission}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {company.coreValues?.map((value, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">{idx + 1}</span>
              </div>
              <p className="font-semibold text-gray-900 mb-2">{value.title}</p>
              <p className="text-sm text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
