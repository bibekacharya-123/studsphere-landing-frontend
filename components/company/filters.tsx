"use client"

import { X, ChevronDown } from 'lucide-react'
import { useState } from "react"

interface FiltersProps {
  filters: any
  setFilters: (filters: any) => void
}

export default function CompanyFilters({ filters, setFilters }: FiltersProps) {
  const [searchValue, setSearchValue] = useState("")

  const handleClearFilters = () => {
    setFilters({
      search: "",
      location: "",
      category: "",
      jobTypes: [],
      salary: [0, 100],
      industry: "",
      careerLevel: "",
      experience: "",
      postedDate: "last-hour",
    })
  }

  return (
    <div className="space-y-6">
      {/* Filter header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filter</h3>
        <button
          onClick={handleClearFilters}
          className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1"
        >
          <X size={16} />
        </button>
      </div>

      {/* Search Company */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Search Company</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Skill industry"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Location</label>
        <input
          type="text"
          placeholder="Enter your location"
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Category</label>
        <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select a category</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
        </select>
      </div>

      {/* Job types */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Job types</label>
        <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select job types</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
      </div>

      {/* Salary Range */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Filter by salary</label>
        <input
          type="range"
          min="0"
          max="100"
          className="w-full"
        />
        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span>$ 0</span>
          <span>$ 0</span>
        </div>
      </div>

      {/* Industry */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Industry</label>
        <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select industry</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
        </select>
      </div>

      {/* Career Level */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Career Level</label>
        <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Select career level</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior</option>
        </select>
      </div>

      {/* Experience level */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Experience level</label>
        <div className="space-y-2">
          {[
            { id: "entry", label: "Entry Level" },
            { id: "intermediate", label: "Intermediate" },
            { id: "expert", label: "Expert" },
          ].map((exp) => (
            <label key={exp.id} className="flex items-center cursor-pointer">
              <input type="radio" name="experience" className="mr-2" />
              <span className="text-sm text-gray-700">{exp.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Posted Date */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Posted Date</label>
        <div className="space-y-2">
          {[
            { id: "hour", label: "Last Hour" },
            { id: "day", label: "Last 24 hour" },
            { id: "week", label: "Last Week" },
            { id: "month", label: "Last 30 Days" },
          ].map((date) => (
            <label key={date.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="posted-date"
                defaultChecked={date.id === "hour"}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">{date.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Find Employers Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
        Find Employers
      </button>

      {/* Job Alert Section */}
      <div className="pt-4 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Job Alert</h4>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">Title</label>
          <input
            type="text"
            placeholder="Title alert"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">Email frequency</label>
          <select className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select frequency</option>
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">
          Save candidate alert
        </button>
      </div>
    </div>
  )
}
