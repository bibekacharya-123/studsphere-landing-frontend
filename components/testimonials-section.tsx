'use client';

import Image from 'next/image';
import { Quote, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
    const baseTestimonials = [
        {
            id: 1,
            text: "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
            author: "Jagdish Dhami",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        },
        {
            id: 2,
            text: "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
            author: "Jagdish Dhami",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        },
        {
            id: 3,
            text: "We used StudSphere Jobs to post openings at our company and were impressed by the quality of applications. The platform allowed us to view video resumes and even shortlist candidates quickly with AI recommendations. It saved us time and connected us to the right talent pool AI recommendations. It saved us time and connected us to the right talent pool",
            author: "Jagdish Dhami",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
        },
    ];

    // Double the testimonials for seamless infinite scroll
    const testimonials = [...baseTestimonials, ...baseTestimonials];

    return (
        <section className="px-4 py-12 md:py-16 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How Studsphere Helps Job Seekers
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Master the skills that matter with mentor-led courses designed to help you
                    </p>
                </div>

                {/* Scrolling Testimonials */}
                <div className="relative overflow-hidden">
                    <div className="flex gap-6 animate-testimonial-scroll hover:pause-animation">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                            >
                                {/* Quote Icon */}
                                <Quote className="h-8 w-8 text-blue-600 mb-4" />

                                {/* Testimonial Text */}
                                <p className="text-gray-700 text-sm mb-6 line-clamp-6">
                                    {testimonial.text}
                                </p>

                                {/* Read More Link */}
                                <button className="flex items-center gap-1 text-blue-600 font-medium text-sm mb-6 hover:gap-2 transition-all">
                                    Read More
                                    <ChevronRight className="h-4 w-4" />
                                </button>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                        {testimonial.author}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
