"use client"

import { Star, MapPin, Share2, Download, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MentorProfileSidebarProps {
  mentor: {
    id: string
    name: string
    image: string
    title: string
    company: string
    rating: number
    reviews: number
    experience: number
    sessions: number
    attendance: number
    bio: string
    linkedin?: string
    facebook?: string
    instagram?: string
    about?: string
    topics?: string[]
    skills?: string[]
    languages?: string[]
    education?: string[]
    workExperience?: string[]
  }
}

export function MentorProfileSidebar({ mentor }: MentorProfileSidebarProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>("about")

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          {/* Profile Image */}
          <div className="relative mb-6">
            <img
              src={mentor.image || "/placeholder.svg"}
              alt={mentor.name}
              className="w-full h-64 rounded-xl object-cover"
            />
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-semibold">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              Available
            </div>
          </div>

          {/* Name and Rating */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{mentor.name}</h1>
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-sm text-gray-600 font-medium">{mentor.rating}</p>
          </div>

          {/* Professional Title */}
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            {mentor.title} at {mentor.company} | IIM A, B, C, L and FSM, Delhi Competition Winner | Former Member,
            Corporate Relations & Placement Division at FSM, New Delhi | Scholarship
          </p>

          {/* Experience */}
          <div className="flex items-center gap-2 text-gray-700 font-medium mb-6 pb-6 border-b border-gray-200">
            <MapPin className="w-4 h-4" />
            {mentor.experience} years of Experience
          </div>

          {/* Social Links */}
          <div className="flex gap-3 mb-6">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button variant="outline" className="flex-1 rounded-lg border-gray-300 bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Book Now</Button>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {/* About Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setExpandedSection(expandedSection === "about" ? null : "about")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">About</h3>
              <span className={`transform transition-transform ${expandedSection === "about" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expandedSection === "about" && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-700">
                {mentor.about ||
                  "Experienced mentor with a passion for helping professionals grow. Specialized in career development, interview preparation, and technical mentoring."}
              </div>
            )}
          </div>

          {/* Topics Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setExpandedSection(expandedSection === "topics" ? null : "topics")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Topics</h3>
              <span className={`transform transition-transform ${expandedSection === "topics" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expandedSection === "topics" && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {(mentor.topics || ["Career Guidance", "Interview Prep", "Leadership"]).map((topic) => (
                    <span key={topic} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Skills Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setExpandedSection(expandedSection === "skills" ? null : "skills")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Skills</h3>
              <span className={`transform transition-transform ${expandedSection === "skills" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expandedSection === "skills" && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {(mentor.skills || ["Communication", "Problem Solving", "Leadership", "Strategic Planning"]).map(
                    (skill) => (
                      <span
                        key={skill}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Languages Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setExpandedSection(expandedSection === "languages" ? null : "languages")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Fluent in</h3>
              <span className={`transform transition-transform ${expandedSection === "languages" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expandedSection === "languages" && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="space-y-2">
                  {(mentor.languages || ["English", "Hindi", "Spanish"]).map((lang) => (
                    <p key={lang} className="text-sm text-gray-700">
                      {lang}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Education Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setExpandedSection(expandedSection === "education" ? null : "education")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Education</h3>
              <span className={`transform transition-transform ${expandedSection === "education" ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            {expandedSection === "education" && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-3">
                {(
                  mentor.education || [
                    "MBA - IIM Ranchi",
                    "B.Tech - Delhi Technological University",
                    "Diploma in Advanced Leadership",
                  ]
                ).map((edu, idx) => (
                  <p key={idx} className="text-sm text-gray-700">
                    {edu}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Work Experience Section */}
          <div>
            <button
              onClick={() => setExpandedSection(expandedSection === "experience" ? null : "experience")}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900">Work Experience</h3>
              <span
                className={`transform transition-transform ${expandedSection === "experience" ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {expandedSection === "experience" && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 space-y-4">
                {(
                  mentor.workExperience || [
                    "Program Manager at Unstop (2022-Present)",
                    "Senior Manager at FSM (2020-2022)",
                    "Consultant at KPMG (2018-2020)",
                  ]
                ).map((exp, idx) => (
                  <p key={idx} className="text-sm text-gray-700">
                    {exp}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

import React from "react"
