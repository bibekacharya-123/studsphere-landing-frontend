import { JobListing } from "@/lib/jobs-data"
import { MapPin, Clock, Briefcase, Heart, Share2, CheckCircle } from 'lucide-react'
import Image from "next/image"

interface JobDetailHeaderProps {
  job: JobListing
}

export default function JobDetailHeader({ job }: JobDetailHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">{job.title}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={job.companyLogo || "/placeholder.svg"}
                alt={job.companyName}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold text-gray-900">{job.companyName}</div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-yellow-400">★</span>
                  <span>{job.companyRating}</span>
                  <span>{job.companyReviews} reviews</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{job.experienceLevel}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Briefcase className="w-4 h-4" />
                <span>{job.experienceLevel}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.jobType.map((type, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-600 line-clamp-2">{job.salary}</p>
          </div>

          {/* Right Section - Sticky on desktop */}
          <div className="lg:w-80">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-4 sticky top-20">
              {/* User Info */}
              <div className="text-center pb-4 border-b">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fnz-group-company-logo.jpg"
                  alt="User"
                  width={60}
                  height={60}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-semibold">Jagdish Dhami</p>
                <p className="text-xs text-gray-600">jagdishdhami2009@gmail.com</p>
              </div>

              {/* Eligibility Badge */}
              <div className="flex items-center gap-2 p-3 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-700">Eligibile</span>
              </div>

              {/* Action Buttons */}
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Quick Apply
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2">
                  <p className="text-lg font-bold">{job.openings}</p>
                  <p className="text-xs text-gray-600">Openings</p>
                </div>
                <div className="p-2">
                  <p className="text-lg font-bold">{job.applicantCount}+</p>
                  <p className="text-xs text-gray-600">Applicants</p>
                </div>
                <div className="p-2">
                  <p className="text-lg font-bold">{job.impressions}</p>
                  <p className="text-xs text-gray-600">Impression</p>
                </div>
              </div>

              {/* Interaction Buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
