import type { Company } from "@/lib/companies-data"
import { MapPin, Briefcase, Clock } from "lucide-react"
import Link from "next/link"

interface JobsSectionProps {
  company: Company
}

export default function JobsSection({ company }: JobsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h3 className="text-2xl font-bold">{company.jobs?.length || 0} Open Positions</h3>
        <Link href={`/jobs/companies/${company.id}/jobs`}>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
            View All Jobs
          </button>
        </Link>
      </div>

      {/* Jobs List */}
      <div className="space-y-4">
        {company.jobs?.map((job, idx) => (
          <Link key={idx} href={`/jobs/${job.id}`}>
            <div className="border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-300">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {job.department && (
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                    )}
                    {job.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    )}
                    {job.experience && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Apply
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
