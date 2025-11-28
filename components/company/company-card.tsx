import Link from "next/link"
import { Star, ChevronRight } from "lucide-react"

interface CompanyCardProps {
  company: {
    id: number
    name: string
    rating: number
    reviews: number
    logo: string
    tags: string[]
  }
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link href={`/jobs/companies/${company.id}`}>
      <div className="p-4 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-200 group cursor-pointer">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-4 flex-1 min-w-0">
            <img
              src={company.logo || "/placeholder.svg"}
              alt={company.name}
              className="w-14 h-14 rounded-lg object-cover flex-shrink-0 shadow-sm"
            />

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 mb-2 truncate">{company.name}</h3>

              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-900">{company.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{company.reviews} reviews</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {company.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ChevronRight
            size={18}
            className="text-gray-300 group-hover:text-blue-500 flex-shrink-0 mt-0.5 transition-colors"
          />
        </div>
      </div>
    </Link>
  )
}
