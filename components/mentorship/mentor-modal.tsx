"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MentorModalProps {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
}

export function MentorModal({ isOpen, onClose, onContinue }: MentorModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Become A Mentor</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition" aria-label="Close modal">
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Description Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">About Mentorship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Join our community of 2000+ experienced mentors and make a real impact on the next generation of
              professionals. Share your expertise, guide talented individuals through their career journey, and grow
              your own network.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a mentor, you'll help students and early-career professionals develop critical skills, navigate career
              transitions, and achieve their professional goals. Your guidance can transform lives and build lasting
              professional relationships.
            </p>
          </div>

          {/* Benefits Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">What You'll Get</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">Access to dedicated mentoring platform with scheduling tools</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">Build your professional brand and visibility</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">Connect with talented professionals in your industry</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span className="text-gray-700">Earn revenue from your mentoring sessions</span>
              </li>
            </ul>
          </div>

          {/* Pricing Section */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mentorship Charges</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Registration Fee (One-time)</span>
                <span className="font-semibold text-gray-900">₹299</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Platform Charge per Session (20%)</span>
                <span className="font-semibold text-gray-900">Variable</span>
              </div>
              <div className="border-t border-blue-200 pt-3 flex justify-between items-center">
                <span className="text-gray-900 font-semibold">You earn 80% per session</span>
                <span className="font-bold text-blue-600 text-lg">80%</span>
              </div>
            </div>
          </div>

          {/* Info Note */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              After submitting your application, our team will review your profile and verify your credentials. You'll
              be notified about your application status within 24-48 hours.
            </p>
          </div>
        </div>

        {/* Footer with Buttons */}
        <div className="flex gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Cancel
          </Button>
          <Button onClick={onContinue} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            Continue Your Mentorship Journey
          </Button>
        </div>
      </div>
    </div>
  )
}
