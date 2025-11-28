"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, CheckCircle2, MapPin, Briefcase } from "lucide-react"

interface Application {
  id: string
  company: string
  position: string
  location: string
  appliedDate: string
  logo: string
  salary?: string
}

interface InterviewApplication extends Application {
  interviewDate: string
  interviewTime?: string
  interviewType?: string
}

const pendingApplications: Application[] = [
  {
    id: "1",
    company: "Tech Innovation Labs",
    position: "Senior React Developer",
    location: "San Francisco, CA",
    appliedDate: "2024-11-20",
    logo: "🚀",
    salary: "$120k - $160k",
  },
  {
    id: "2",
    company: "Digital Solutions Inc",
    position: "Full Stack Engineer",
    location: "Remote",
    appliedDate: "2024-11-18",
    logo: "💻",
    salary: "$100k - $140k",
  },
  {
    id: "3",
    company: "Cloud Systems Corp",
    position: "Backend Developer",
    location: "New York, NY",
    appliedDate: "2024-11-15",
    logo: "☁️",
    salary: "$110k - $150k",
  },
]

const selectedApplications: Application[] = [
  {
    id: "4",
    company: "StartUp Ventures",
    position: "Frontend Engineer",
    location: "Austin, TX",
    appliedDate: "2024-11-10",
    logo: "⭐",
    salary: "$90k - $130k",
  },
  {
    id: "5",
    company: "Enterprise Solutions",
    position: "DevOps Engineer",
    location: "Seattle, WA",
    appliedDate: "2024-11-08",
    logo: "🏢",
    salary: "$115k - $155k",
  },
]

const interviewApplications: InterviewApplication[] = [
  {
    id: "6",
    company: "NextGen Tech",
    position: "Senior Full Stack Developer",
    location: "Boston, MA",
    appliedDate: "2024-11-01",
    logo: "🎯",
    salary: "$130k - $170k",
    interviewDate: "2024-12-05",
    interviewTime: "2:00 PM",
    interviewType: "Video Interview",
  },
  {
    id: "7",
    company: "AI Systems Inc",
    position: "Machine Learning Engineer",
    location: "Remote",
    appliedDate: "2024-10-28",
    logo: "🤖",
    salary: "$140k - $180k",
    interviewDate: "2024-12-10",
    interviewTime: "10:30 AM",
    interviewType: "Technical Round",
  },
]

function ApplicationCard({
  app,
  status,
}: { app: Application | InterviewApplication; status: "pending" | "selected" | "interview" }) {
  const isInterview = status === "interview"
  const app_interview = app as InterviewApplication

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 bg-white">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-4 flex-1">
          <div className="text-4xl">{app.logo}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-900">{app.company}</h3>
            <p className="text-gray-600 text-sm mb-2">{app.position}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-1 text-gray-600 text-sm">
                <MapPin className="w-4 h-4" />
                {app.location}
              </div>
              {app.salary && (
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <Briefcase className="w-4 h-4" />
                  {app.salary}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {status === "pending" && (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              <Clock className="w-3 h-3 mr-1" />
              Pending
            </Badge>
          )}
          {status === "selected" && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Selected
            </Badge>
          )}
          {status === "interview" && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              <Calendar className="w-3 h-3 mr-1" />
              Interview
            </Badge>
          )}
        </div>
      </div>

      {isInterview && (
        <div className="mt-4 pt-4 border-t border-gray-200 bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-blue-900 text-sm">{app_interview.interviewDate}</span>
            <span className="text-blue-600 text-sm">{app_interview.interviewTime}</span>
          </div>
          <p className="text-blue-700 text-sm">{app_interview.interviewType}</p>
        </div>
      )}

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">Applied on {new Date(app.appliedDate).toLocaleDateString()}</span>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
          View Details
        </Button>
      </div>
    </Card>
  )
}

function PhaseSection({
  title,
  description,
  applications,
  status,
  icon: Icon,
}: {
  title: string
  description: string
  applications: (Application | InterviewApplication)[]
  status: "pending" | "selected" | "interview"
  icon: React.ReactNode
}) {
  const statusColors = {
    pending: "from-yellow-500 to-orange-500",
    selected: "from-green-500 to-emerald-500",
    interview: "from-blue-500 to-cyan-500",
  }

  return (
    <section className="mb-12">
      <div className="mb-6">
        <div
          className={`inline-flex items-center gap-3 mb-3 p-3 rounded-full bg-gradient-to-r ${statusColors[status]} text-white`}
        >
          <span className="text-xl">{Icon}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-lg">{description}</p>
        <div className="mt-2 text-sm font-semibold text-gray-700">
          {applications.length} {applications.length === 1 ? "application" : "applications"}
        </div>
      </div>

      {applications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {applications.map((app) => (
            <ApplicationCard key={app.id} app={app} status={status} />
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center border-dashed bg-gray-50">
          <div className="text-5xl mb-4">📭</div>
          <p className="text-gray-600 text-lg">No applications in this phase yet</p>
        </Card>
      )}
    </section>
  )
}

export function ApplicationTrackerSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">Application Tracker</h1>
        <p className="text-xl text-gray-600">Track your job applications through every stage</p>
        <div className="mt-6 flex gap-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-sm text-gray-700">{pendingApplications.length} Pending</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-700">{selectedApplications.length} Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-700">{interviewApplications.length} Interviews</span>
          </div>
        </div>
      </div>

      <PhaseSection
        title="Applications Pending"
        description="Waiting for recruiter feedback on your submitted applications"
        applications={pendingApplications}
        status="pending"
        icon="⏳"
      />

      <PhaseSection
        title="Selected For Next Round"
        description="Great! You've been selected to move forward in the hiring process"
        applications={selectedApplications}
        status="selected"
        icon="✨"
      />

      <PhaseSection
        title="Interview Scheduled"
        description="Your interview is coming up - prepare and perform your best!"
        applications={interviewApplications}
        status="interview"
        icon="🎤"
      />
    </div>
  )
}
