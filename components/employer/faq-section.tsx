"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Looking for the right college or course to join?",
    answer:
      "StudSphere provides comprehensive information about various colleges and courses to help you make informed decisions about your educational path.",
  },
  {
    id: 2,
    question: "How can I post job openings on StudSphere?",
    answer:
      "You can easily post job openings through our intuitive dashboard. Simply fill in the job details and it will be visible to thousands of qualified candidates.",
  },
  {
    id: 3,
    question: "What are the benefits of using StudSphere for recruitment?",
    answer:
      "StudSphere offers access to a vetted talent pool, advanced filtering options, video resume reviews, and AI-powered candidate recommendations to streamline your hiring process.",
  },
  {
    id: 4,
    question: "Can I track applications and manage my hiring pipeline?",
    answer:
      "Yes, our platform provides comprehensive tools to track applications, manage candidate pipelines, schedule interviews, and collaborate with your hiring team.",
  },
  {
    id: 5,
    question: "What support is available if I need help?",
    answer:
      "We provide 24/7 customer support through multiple channels including email, phone, and live chat. Our dedicated support team is ready to assist you.",
  },
]

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Have Questions? We've Got Answers
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
              >
                {/* Question Text */}
                <span className="text-lg md:text-xl font-medium text-gray-900 text-left group-hover:text-blue-600 transition-colors duration-200">
                  {item.question}
                </span>

                {/* Toggle Button */}
                <div className="flex-shrink-0 ml-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg">
                    {expandedId === item.id ? (
                      <Minus className="w-6 h-6 text-white" />
                    ) : (
                      <Plus className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Answer */}
              {expandedId === item.id && (
                <div className="pb-6 px-2">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
