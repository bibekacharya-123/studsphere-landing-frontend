"use client"
import { ChevronRight } from "lucide-react"
import { EmployerAuthModal } from "./employer-auth-modal"

export function EmployerHeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-600 to-blue-800 py-16 md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="text-sm font-medium">Hire the best talent</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Grow Your Team, Build Your Brand, and Hire Top Talent Effortlessly with StudSphere.
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              Connect with thousands of pre-vetted candidates and find the perfect fit for your team.
            </p>

            <button className="inline-flex items-center gap-2 bg-white bg-opacity-20 border border-white border-opacity-40 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Explore our Products
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Modal */}
          <div className="flex-1 w-full lg:w-auto">
            <EmployerAuthModal />
          </div>
        </div>
      </div>
    </section>
  )
}
