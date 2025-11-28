"use client"

import { useState } from "react"
import Link from "next/link"

export function JobsDropdownModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsOpen(false)
    }, 150)
    setHoverTimeout(timeout)
  }

  // Allow toggle on click so dropdown is reachable on touch devices / mobile
  const handleToggle = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout)
    setIsOpen((s) => !s)
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="text-gray-700 hover:text-gray-900 font-medium text-sm"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Jobs
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 space-y-4">
          {/* Quick link to the main jobs page */}
          <Link href="/jobs" className="block text-gray-900 hover:text-gray-700 font-semibold text-sm" onClick={() => setIsOpen(false)}>
            Explore Jobs
          </Link>

          {/* Recommended Jobs */}

          <Link href="/jobs/recommended" className="block text-blue-600 hover:text-blue-700 font-medium text-sm" onClick={() => setIsOpen(false)}>
            Recommended Jobs
          </Link>

          {/* Navigation Links */}
          <Link href="/jobs/sphere-invites" className="block text-gray-700 hover:text-gray-900 font-medium text-sm" onClick={() => setIsOpen(false)}>
            Sphere Invites
          </Link>

          <Link href="/jobs/application-tracker" className="block text-blue-600 hover:text-blue-700 font-medium text-sm" onClick={() => setIsOpen(false)}>
            Application Tracker
          </Link>

          <Link href="/jobs/saved" className="block text-gray-700 hover:text-gray-900 font-medium text-sm" onClick={() => setIsOpen(false)}>
            Saved Jobs
          </Link>

          <Link href="/jobs/alerts" className="block text-gray-700 hover:text-gray-900 font-medium text-sm" onClick={() => setIsOpen(false)}>
            Job Alerts
          </Link>
        </div>
      )}
    </div>
  )
}
