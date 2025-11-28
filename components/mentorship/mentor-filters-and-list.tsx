"use client"

import { useState, useMemo } from "react"
import { Star, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Mentor {
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
  category: string
  services: Array<{
    type: string
    title: string
    price: string
  }>
  badges?: string[]
}

const MENTORS_DATA: Mentor[] = [
  {
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
    category: "Career Guidance",
    badges: ["Top Mentor"],
    services: [
      { type: "1:1 Call", title: "Tackling Gap-years", price: "Free" },
      { type: "1:1 Call", title: "Discuss what went wrong in th...", price: "Free" },
    ],
  },
  {
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
    category: "Leadership",
    services: [
      { type: "1:1 Call", title: "Case Competition Coaching", price: "₹1000 → ₹50" },
      { type: "1:1 Call", title: "CAT/MBA Exam Preparation", price: "₹1000 → ₹50" },
    ],
  },
  {
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
    category: "Technical Skills",
    badges: ["Top Mentor"],
    services: [
      { type: "1:1 Call", title: "Product Strategy", price: "₹2000" },
      { type: "1:1 Call", title: "Interview Preparation", price: "Free" },
    ],
  },
  {
    id: "4",
    name: "Amit Kumar",
    image: "/professional-mentor-formal.jpg",
    title: "Founder & CEO at TechStartup",
    company: "TechStartup",
    rating: 4.7,
    reviews: 89,
    experience: 12,
    sessions: 320,
    attendance: 97,
    category: "Entrepreneurship",
    services: [
      { type: "1:1 Call", title: "Startup Mentoring", price: "₹1500" },
      { type: "1:1 Call", title: "Business Strategy", price: "₹1500" },
    ],
  },
  {
    id: "5",
    name: "Priya Singh",
    image: "/professional-mentor-woman.jpg",
    title: "Head of HR at Microsoft",
    company: "Microsoft",
    rating: 4.8,
    reviews: 120,
    experience: 15,
    sessions: 500,
    attendance: 99,
    category: "Interview Prep",
    badges: ["Top Mentor"],
    services: [
      { type: "1:1 Call", title: "HR Interview Coaching", price: "Free" },
      { type: "1:1 Call", title: "Career Development", price: "₹800" },
    ],
  },
  {
    id: "6",
    name: "Rohan Patel",
    image: "/professional-mentor-asian.jpg",
    title: "Director of Engineering at Amazon",
    company: "Amazon",
    rating: 4.9,
    reviews: 156,
    experience: 10,
    sessions: 420,
    attendance: 100,
    category: "Technical Skills",
    services: [
      { type: "1:1 Call", title: "System Design", price: "₹2500" },
      { type: "1:1 Call", title: "Technical Interviews", price: "₹2000" },
    ],
  },
]

interface MentorFiltersAndListProps {
  selectedCategory: string
}

export function MentorFiltersAndList({ selectedCategory }: MentorFiltersAndListProps) {
  const [sortBy, setSortBy] = useState("rating")
  const [filterType, setFilterType] = useState("all")

  const filteredMentors = useMemo(() => {
    let mentors = MENTORS_DATA

    // Filter by category
    if (selectedCategory !== "All") {
      mentors = mentors.filter((m) => m.category === selectedCategory)
    }

    // Filter by type
    if (filterType === "free") {
      mentors = mentors.filter((m) => m.services.some((s) => s.price === "Free"))
    } else if (filterType === "premium") {
      mentors = mentors.filter((m) => m.services.some((s) => s.price !== "Free"))
    }

    // Sort
    if (sortBy === "rating") {
      mentors = [...mentors].sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "experience") {
      mentors = [...mentors].sort((a, b) => b.experience - a.experience)
    } else if (sortBy === "reviews") {
      mentors = [...mentors].sort((a, b) => b.reviews - a.reviews)
    }

    return mentors
  }, [selectedCategory, sortBy, filterType])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
      {/* Sidebar Filters */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg p-6 sticky top-24 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">All Filters</h3>

          {/* Quick Filters */}
          <div className="space-y-2 mb-6">
            <button className="w-full px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-all">
              Free Service
            </button>
            <button className="w-full px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-all">
              Top Mentor
            </button>
            <button className="w-full px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-medium bg-blue-50">
              Mentor Match
            </button>
          </div>

          {/* Filter Sections */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="rating">Rating</option>
                <option value="experience">Experience</option>
                <option value="reviews">Reviews</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block">Service Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="all">All</option>
                <option value="free">Free Only</option>
                <option value="premium">Premium Only</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Mentors List */}
      <div className="lg:col-span-3">
        {filteredMentors.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No mentors found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Mentor Image */}
                  <div className="sm:w-32 sm:h-32 flex-shrink-0">
                    <img
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      className="w-full h-40 sm:h-32 rounded-lg object-cover"
                    />
                  </div>

                  {/* Mentor Info */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{mentor.name}</h3>
                          {mentor.badges?.includes("Top Mentor") && <span className="text-lg">⭐</span>}
                        </div>
                        <p className="text-sm text-gray-600">
                          {mentor.title} at {mentor.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full w-fit">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-900">
                          {mentor.rating} ({mentor.reviews} Reviews)
                        </span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{mentor.experience} Years</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{mentor.sessions} Sessions</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{mentor.attendance}% Avg. Attendance</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {mentor.services.map((service, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg p-3">
                          <p className="text-xs text-gray-500 mb-1">📞 {service.type}</p>
                          <p className="text-sm font-semibold text-gray-900">{service.title}</p>
                          <p
                            className={`text-sm font-semibold mt-1 ${service.price === "Free" ? "text-green-600" : "text-gray-900"}`}
                          >
                            {service.price}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* View All Button */}
                    <Link href={`/jobs/mentor/mentor/${mentor.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-semibold w-full">
                        View All Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
