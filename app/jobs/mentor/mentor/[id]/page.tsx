"use client"

import { MentorProfileSidebar } from "@/components/mentorship/mentor-profile-sidebar"
import { MentorProfileServices } from "@/components/mentorship/mentor-profile-services"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"

// Mock mentor data - in production this would come from an API or database
const MENTORS_DATA = {
  "1": {
    id: "1",
    name: "Eden Saha",
    image: "/professional-mentor-male.jpg",
    title: "Program Manager at Unstop",
    company: "Unstop",
    rating: 4.8,
    reviews: 72,
    experience: 3,
    sessions: 267,
    attendance: 99,
    bio: "Experienced program manager with a passion for helping professionals grow and navigate career transitions.",
    about:
      "I am a Program Manager at Unstop with extensive experience in corporate relations and placement. I've worked with various organizations to bridge the gap between students and industry professionals. My expertise lies in career guidance, interview preparation, and professional development.",
    topics: ["Career Guidance", "Interview Prep", "Leadership", "Professional Development"],
    skills: ["Communication", "Problem Solving", "Leadership", "Strategic Planning", "Mentoring", "Project Management"],
    languages: ["English", "Hindi"],
    education: ["MBA - IIM Ranchi", "B.Tech - Delhi Technological University"],
    workExperience: [
      "Program Manager at Unstop (2022-Present)",
      "Senior Manager at FSM (2020-2022)",
      "Consultant at KPMG (2018-2020)",
    ],
    services: [
      {
        id: "s1",
        type: "1:1 Call",
        title: "Discuss what went wrong in the interview/gd",
        duration: 15,
        price: "Free",
      },
      {
        id: "s2",
        type: "1:1 Call",
        title: "Tackling Gap-years",
        duration: 15,
        price: "Free",
      },
      {
        id: "s3",
        type: "1:1 Call",
        title: "Crack Case Study and Innovation Challenges",
        duration: 15,
        price: "Free",
        isBestSeller: true,
      },
      {
        id: "s4",
        type: "1:1 Call",
        title: "Mock Interview",
        duration: 15,
        price: "Free",
        discount: "₹499",
      },
    ],
  },
  "2": {
    id: "2",
    name: "Jithin R",
    image: "/professional-mentor-glasses.jpg",
    title: "Consultant @ KPMG",
    company: "KPMG",
    rating: 4.8,
    reviews: 17,
    experience: 3,
    sessions: 64,
    attendance: 96,
    about: "Experienced consultant specializing in case competitions and MBA exam preparation.",
    topics: ["Case Competition", "MBA Prep", "Consulting", "Problem Solving"],
    skills: ["Case Analysis", "Strategic Thinking", "Quantitative Analysis", "Communication"],
    languages: ["English", "Hindi", "Malayalam"],
    education: ["MBA - XLRI Jamshedpur", "B.Tech - NIT Calicut"],
    workExperience: ["Consultant at KPMG (2020-Present)", "Senior Associate at Deloitte (2018-2020)"],
    services: [
      {
        id: "s1",
        type: "1:1 Call",
        title: "Case Competition Coaching",
        duration: 60,
        price: "₹1000",
        discount: "₹50",
      },
      {
        id: "s2",
        type: "1:1 Call",
        title: "CAT/MBA Exam Preparation",
        duration: 60,
        price: "₹1000",
        discount: "₹50",
      },
      {
        id: "s3",
        type: "Query",
        title: "Quick Consulting Query",
        duration: 15,
        price: "Free",
      },
    ],
  },
  "3": {
    id: "3",
    name: "Sarah Williams",
    image: "/professional-mentor-female.jpg",
    title: "Senior Product Manager at Google",
    company: "Google",
    rating: 4.9,
    reviews: 145,
    experience: 8,
    sessions: 450,
    attendance: 98,
    about: "Senior PM at Google focused on product strategy and interview preparation.",
    topics: ["Product Strategy", "Interview Prep", "Technical Leadership", "Career Growth"],
    skills: ["Product Management", "Strategic Planning", "Data Analysis", "Leadership"],
    languages: ["English", "Spanish"],
    education: ["MBA - Stanford", "B.S. Computer Science - MIT"],
    workExperience: ["Senior Product Manager at Google (2020-Present)", "Product Manager at Airbnb (2017-2020)"],
    services: [
      {
        id: "s1",
        type: "1:1 Call",
        title: "Product Strategy",
        duration: 60,
        price: "₹2000",
      },
      {
        id: "s2",
        type: "1:1 Call",
        title: "Interview Preparation",
        duration: 60,
        price: "Free",
      },
      {
        id: "s3",
        type: "Query",
        title: "Product Management Query",
        duration: 30,
        price: "₹500",
      },
    ],
  },
}

export default function MentorProfilePage() {
  const params = useParams()
  const router = useRouter()
  const mentorId = params.id as string

  // Get mentor data
  const mentor = MENTORS_DATA[mentorId as keyof typeof MENTORS_DATA]

  if (!mentor) {
    return (
      <main className="w-full bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Mentor not found</h1>
            <Link href="/mentorship/find-mentor" className="text-blue-600 hover:text-blue-700 font-medium">
              Back to Find Mentors
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="w-full bg-gray-50 min-h-screen">

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <MentorProfileSidebar mentor={mentor} />
          <MentorProfileServices mentor={mentor} services={mentor.services} />
        </div>
      </div>
    </main>
  )
}
