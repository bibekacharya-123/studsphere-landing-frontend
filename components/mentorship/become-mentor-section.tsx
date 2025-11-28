"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MentorModal } from "./mentor-modal"
import { MentorApplicationForm } from "./mentor-application-form"

interface BecomeMentorSectionProps {
  mentorModalOpen: boolean
  setMentorModalOpen: (open: boolean) => void
}

export function BecomeMentorSection({ mentorModalOpen, setMentorModalOpen }: BecomeMentorSectionProps) {
  const [showForm, setShowForm] = useState(false)

  const handleBackToModal = () => {
    setShowForm(false)
    setMentorModalOpen(true)
  }

  if (showForm) {
    return <MentorApplicationForm onBack={handleBackToModal} />
  }

  return (
    <>
      <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-blue-600">Become A Mentor</span>
                <br />
                <span className="text-black">& Guide Unstoppable Talent!</span>
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
                Join the community of 2000+ mentors & empower future leaders.
              </p>

              {/* CTA Button */}
              <div className="flex items-start">
                <Button
                  onClick={() => setMentorModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-base font-semibold"
                >
                  Be a Mentor
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                  src="/images/design-mode/77708%201.png"
                  alt="Professional woman mentor holding tablet"
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <MentorModal
        isOpen={mentorModalOpen}
        onClose={() => setMentorModalOpen(false)}
        onContinue={() => {
          setMentorModalOpen(false)
          setShowForm(true)
        }}
      />
    </>
  )
}
