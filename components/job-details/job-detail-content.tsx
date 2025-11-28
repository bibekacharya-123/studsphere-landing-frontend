import { JobListing } from "@/lib/jobs-data"
import { CheckCircle, Star, MapPin, Clock } from 'lucide-react'
import Image from "next/image"

interface JobDetailContentProps {
  job: JobListing
}

export default function JobDetailContent({ job }: JobDetailContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Job Expires */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border border-yellow-200 bg-yellow-50">
            <p className="text-sm sm:text-base font-semibold text-yellow-900">
              <span className="font-bold">Job Expire:</span> {job.jobExpire}
            </p>
          </div>

          {/* Job Highlights */}
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Job Highlights</h3>
            <ul className="space-y-2">
              {job.jobHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Match Score */}
          <div className="bg-white rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Job Match Score</h3>
            <div className="flex flex-wrap gap-3">
              {job.matchScore.map((score, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    score.status === 'active'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${score.status === 'active' ? 'bg-blue-600' : 'bg-gray-400'}`} />
                  <span className="text-sm font-medium">{score.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white rounded-lg p-4 sm:p-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Job Description:</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</p>
          </div>

          {/* Responsibilities */}
          <div className="bg-white rounded-lg p-4 sm:p-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Responsibilities and Duties:</h3>
            <p className="text-gray-700 text-sm mb-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
            <ul className="space-y-2">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 mr-1">→</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-lg p-4 sm:p-6 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Required Experience, Skills and Qualifications:</h3>
            <p className="text-gray-700 text-sm mb-4">It sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
            <ul className="space-y-2">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-blue-600 mr-1">→</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Similar Jobs */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold">Similar Jobs</h3>
            {job.similarJobs.map((similarJob) => (
              <div key={similarJob.id} className="bg-white rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                  <Image
                    src={similarJob.companyLogo || "/placeholder.svg"}
                    alt={similarJob.company}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{similarJob.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{similarJob.company}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                      <span className="text-yellow-400">★</span>
                      <span>{similarJob.rating}</span>
                      <span>{similarJob.reviews} reviews</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{similarJob.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{similarJob.location}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">{similarJob.description}</p>
                    <p className="text-xs text-gray-500">Posted - {similarJob.postedDaysAgo} Days Ago</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap text-sm font-medium">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - Related Jobs */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-lg p-6 sticky top-20">
            <h3 className="text-lg font-bold mb-4">Jobs you might be interested in</h3>
            <div className="space-y-4">
              {job.similarJobs.slice(0, 3).map((similar) => (
                <div key={similar.id} className="pb-4 border-b last:border-b-0">
                  <div className="flex items-start gap-3">
                    <Image
                      src={similar.companyLogo || "/placeholder.svg"}
                      alt={similar.company}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm line-clamp-2">{similar.title}</h4>
                      <p className="text-xs text-gray-600">{similar.company}</p>
                      <div className="flex items-center gap-1 text-xs my-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{similar.rating}</span>
                      </div>
                      <div className="text-xs text-gray-500 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{similar.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{similar.location}</span>
                        </div>
                      </div>
                      <button className="mt-2 px-3 py-1 border border-gray-300 rounded text-xs font-medium hover:bg-gray-50 w-full">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
