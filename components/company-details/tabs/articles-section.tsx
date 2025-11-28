import Image from "next/image"
import { Company } from "@/lib/companies-data"
import { Calendar } from 'lucide-react'

interface ArticlesSectionProps {
  company: Company
}

export default function ArticlesSection({ company }: ArticlesSectionProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">Read articles of students and corporates</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {company.articles?.map((article) => (
          <div key={article.id} className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
            {/* Image */}
            <div className="relative h-40 sm:h-48 bg-gray-200 overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg?height=200&width=400"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Content */}
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <Calendar className="w-3 h-3" />
                {article.date}
              </div>
              <h4 className="font-semibold text-sm leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
                {article.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
