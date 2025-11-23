"use client"

import Image from "next/image"
import { useState, useEffect } from "react";

export function TestimonialSlider() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Bhagrathi Dhami",
            text: "StudSphere completely transformed my college search experience. The platform made it so easy to compare colleges and find the right courses. It's truly a one-stop solution for every student's needs and has helped me throughout my academic journey."
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Rajesh Kumar",
            text: "The job portal on StudSphere helped me land my first internship! The courses section also provided exactly what I needed to upskill. The platform understands what students need and provides comprehensive resources for career growth."
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/3772622/pexels-photo-3772622.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Priya Sharma",
            text: "StudSphere's events section connected me with amazing networking opportunities and workshops. The student mart feature also saved me money on textbooks. It's like having everything a student needs in one convenient platform."
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: "Arjun Thapa",
            text: "The scholarship information and career guidance on StudSphere opened doors I didn't even know existed. This platform changed my life trajectory and helped me discover opportunities that shaped my future."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const currentData = testimonials[currentTestimonial];

    return (
        <div className="max-w-6xl mx-auto relative">
            {/* Testimonial Card */}
            <div className="bg-linear-to-r from-purple-100 to-blue-100 rounded-3xl p-12 shadow-lg transition-all duration-500">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Side - Person Image */}
                    <div className="shrink-0">
                        <Image
                            src={currentData.image}
                            alt={currentData.name}
                            width={400}
                            height={280}
                            className="w-[400px] h-[280px] object-cover rounded-2xl shadow-lg transition-all duration-500"
                        />
                    </div>

                    {/* Right Side - Testimonial Content */}
                    <div className="flex-1 max-w-2xl">
                        {/* Blue Quote Icon */}
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-gray-800 text-lg leading-relaxed mb-8 font-medium">
                            {currentData.text}
                        </blockquote>

                        {/* Person Name */}
                        <h4 className="text-2xl font-bold text-blue-600 mb-2">{currentData.name}</h4>
                    </div>
                </div>
            </div>

            {/* Pagination Dashes */}
            <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-8 h-1 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
