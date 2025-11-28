"use client"

import { useState } from "react"
import { Company } from "@/lib/companies-data"
import OverviewSection from "./tabs/overview-section"
import CultureValuesSection from "./tabs/culture-values-section"
import JobsSection from "./tabs/jobs-section"
import ArticlesSection from "./tabs/articles-section"
import GallerySection from "./tabs/gallery-section"
import ReviewsSection from "./tabs/reviews-section"

interface CompanyDetailTabsProps {
  company: Company
}

export default function CompanyDetailTabs({ company }: CompanyDetailTabsProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "culture-values", label: "Culture & Value" },
    { id: "jobs", label: "Jobs" },
    { id: "articles", label: "Articles" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection company={company} />
      case "culture-values":
        return <CultureValuesSection company={company} />
      case "jobs":
        return <JobsSection company={company} />
      case "articles":
        return <ArticlesSection company={company} />
      case "gallery":
        return <GallerySection company={company} />
      case "reviews":
        return <ReviewsSection company={company} />
      default:
        return <OverviewSection company={company} />
    }
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-6 sm:gap-8 overflow-x-auto pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap pb-4 px-1 text-sm sm:text-base font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  )
}
