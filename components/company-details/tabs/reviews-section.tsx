import type { Company } from "@/lib/companies-data"
import { Star } from "lucide-react"

interface ReviewsSectionProps {
  company: Company
}

export default function ReviewsSection({ company }: ReviewsSectionProps) {
  return (
    <div className="space-y-12">
      {/* Reviews Header */}
      <div>
        <h3 className="text-2xl font-bold mb-8">Reviews</h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-200">
          {/* Overall Rating */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 text-center">
              <h4 className="text-5xl font-bold text-gray-900 mb-2">{company.overallRating}</h4>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{company.reviewDetails?.length || 0} Students</p>
              <p className="text-xs text-gray-600">Ratings</p>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {company.ratingBreakdown?.map((breakdown) => (
                <div key={breakdown.stars} className="flex items-center gap-3">
                  <span className="text-sm font-semibold w-8 text-gray-700">{breakdown.stars}</span>
                  <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 rounded-full"
                      style={{ width: `${Math.min((breakdown.count / 12) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-6 text-right">{breakdown.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Filters */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
                  All ({company.reviewDetails?.length || 0})
                </button>
                <button className="px-3 py-1 bg-green-50 border border-green-300 text-green-700 rounded-full text-xs sm:text-sm font-medium hover:bg-green-100 transition-colors">
                  Positive ({company.reviewDetails?.length || 0})
                </button>
                <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors">
                  Constructive ({company.reviewDetails?.length || 0})
                </button>
              </div>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors">
                Share Your Experience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {company.reviewDetails?.map((review) => (
          <div
            key={review.id}
            className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
          >
            {/* Review Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {review.author?.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900">{review.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {review.author} • {review.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4 pl-4 border-l-4 border-blue-200">
              {review.content}
            </p>

            {/* Pros and Cons */}
            {(review.pros || review.cons) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {review.pros && review.pros.length > 0 && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-sm text-green-900 mb-3">Pros</h5>
                    <ul className="space-y-2">
                      {review.pros.map((pro, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-700">
                          <input type="checkbox" className="w-4 h-4 flex-shrink-0 text-green-600" readOnly checked />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {review.cons && review.cons.length > 0 && (
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-semibold text-sm text-red-900 mb-3">Cons</h5>
                    <ul className="space-y-2">
                      {review.cons.map((con, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-700">
                          <input type="checkbox" className="w-4 h-4 flex-shrink-0 text-red-600" readOnly checked />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
