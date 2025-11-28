"use client"

import { useState } from "react"
import { Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Service {
  id: string
  type: string
  title: string
  description?: string
  duration: number
  price: string
  discount?: string
  isBestSeller?: boolean
  isFavorite?: boolean
}

interface MentorProfileServicesProps {
  mentor: {
    name: string
    engagement?: number
    attendance?: number
    sessions?: number
  }
  services: Service[]
}

export function MentorProfileServices({ mentor, services }: MentorProfileServicesProps) {
  const [activeTab, setActiveTab] = useState("All")
  const [favoriteServices, setFavoriteServices] = useState<string[]>([])

  const filteredServices = activeTab === "All" ? services : services.filter((s) => s.type === activeTab)

  const toggleFavorite = (serviceId: string) => {
    setFavoriteServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  return (
    <div className="lg:col-span-2">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <p className="text-xs text-gray-600">Top Mentor</p>
            <p className="text-lg font-bold text-gray-900">Award</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl">📅</span>
          </div>
          <div>
            <p className="text-xs text-gray-600">Mentee Engagements</p>
            <p className="text-lg font-bold text-gray-900">{mentor.engagement || 267}</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-2xl">✓</span>
          </div>
          <div>
            <p className="text-xs text-gray-600">Average Attendance</p>
            <p className="text-lg font-bold text-gray-900">{mentor.attendance || 99}%</p>
          </div>
        </div>
      </div>

      {/* Available Services Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Services</h2>
        <p className="text-gray-600 mb-6">Discover our mentorship offerings designed for your success</p>

        {/* Service Tabs */}
        <div className="flex gap-3 mb-8 border-b border-gray-200 overflow-x-auto pb-4">
          {["All", "1:1 Call", "Query", "Group Session"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 border border-purple-200 rounded-xl p-6 mb-8 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              15% OFF <span className="text-sm font-normal">on all mentor sessions with</span>
            </p>
            <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold mt-2">
              pro
            </span>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">Explore Pro →</Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Header with Type and Favorite */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    👤 {service.type}
                  </span>
                  {service.isBestSeller && (
                    <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      ❤️ Best Seller
                    </span>
                  )}
                </div>
                <button
                  onClick={() => toggleFavorite(service.id)}
                  className={`transition-colors ${
                    favoriteServices.includes(service.id) ? "text-red-600" : "text-gray-400 hover:text-red-600"
                  }`}
                >
                  <Heart className="w-5 h-5" fill={favoriteServices.includes(service.id) ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>

              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{service.duration} Min</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                {service.discount && <span className="text-sm text-gray-500 line-through">{service.discount}</span>}
              </div>

              {/* Book Now Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
