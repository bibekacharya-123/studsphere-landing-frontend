"use client"

import { useState } from "react";

export function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const faqs = [
        {
            id: 1,
            question: "How Do I Access Notes And Study Materials?",
            answer: "You can access notes and study materials through our comprehensive resource library. Simply navigate to the education section, select your course or subject, and browse through verified study materials uploaded by students and educators. All materials are organized by topics and difficulty levels for easy access."
        },
        {
            id: 2,
            question: "How Can I Find Job Opportunities On StudSphere?",
            answer: "Our job portal features a smart matching system. Create your profile with skills and preferences, and our algorithm will automatically suggest relevant opportunities. You can also browse jobs by category, location, and company. Apply with one click using your StudSphere profile."
        },
        {
            id: 3,
            question: "What Events And Workshops Are Available?",
            answer: "StudSphere hosts various events including career workshops, networking sessions, skill development seminars, and industry talks. Check our events section regularly for updates. You can filter events by date, category, and location to find the most relevant ones for your interests."
        },
        {
            id: 4,
            question: "How Does The Student Mart Work?",
            answer: "Student Mart is our marketplace for educational resources. You can buy and sell textbooks, stationery, gadgets, and other study materials at discounted prices. All items are verified, and we ensure secure transactions with buyer protection policies."
        },
        {
            id: 5,
            question: "Is StudSphere Free To Use?",
            answer: "Yes, StudSphere offers many free features including access to basic study materials, job browsing, and event listings. We also offer premium memberships with additional benefits like priority job applications, advanced study resources, and exclusive events."
        }
    ];

    const toggleFAQ = (id: number): void => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg border border-gray-200 shadow-sm">
                    <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-lg font-medium text-black">{faq.question}</span>
                        <div className={`w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center transition-transform ${openFAQ === faq.id ? 'rotate-45' : ''
                            }`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                    </button>
                    {openFAQ === faq.id && (
                        <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
