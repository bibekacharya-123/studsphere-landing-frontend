"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronRight, FileText, CheckCircle2, BookOpen, BookMarked } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ResumeToolsDropdownModal() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const resumeTools = [
    {
      title: "AI Resume builder",
      description: "Create your best resume using AI",
      href: "/resume-tools/builder",
      icon: FileText,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "AI Resume Checker",
      description: "Get instant resume feedback",
      href: "/resume-tools/checker",
      icon: CheckCircle2,
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      title: "AI Cover letter generator",
      description: "Stand out and get hired faster",
      href: "/resume-tools/cover-letter",
      icon: BookOpen,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Blogs",
      description: "Guidance for securing your dream job",
      href: "/blogs",
      icon: BookMarked,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
    },
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1"
      >
        Resume Tools
        <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 md:left-auto md:right-0 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 w-full md:w-[950px] md:max-w-[950px] overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Section - Resume Tools */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900">Resume Tools</h2>
              </div>

              {resumeTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Link key={tool.title} href={tool.href} onClick={() => setIsOpen(false)} className="block group">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center group-hover:scale-105 transition-transform`}
                      >
                        <Icon className={`w-6 h-6 ${tool.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-sm md:text-base group-hover:text-gray-700 transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm">{tool.description}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200"></div>

            {/* Right Section - Video Guide */}
            <div className="p-6 md:p-8 flex flex-col justify-center md:items-start border-t md:border-t-0 md:border-l border-gray-200">
              <div className="w-full mb-6">
                <Image
                  src="/images/screenshot-202025-11-20-20at-2011.png"
                  alt="Career compass video guide"
                  width={400}
                  height={250}
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-900 text-base md:text-lg mb-4 text-left">
                Level up your resume: watch our career compass video
              </h4>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Watch Video
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
