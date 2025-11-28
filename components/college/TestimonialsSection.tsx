'use client';

import { Quote, Star } from 'lucide-react';

interface TestimonialData {
  id: string;
  content: string;
  authorName: string;
  authorTitle: string;
  authorInitials: string;
  initialsColor: string;
}

export default function TestimonialsSection() {
  const testimonials: TestimonialData[] = [
    {
      id: '1',
      content: "As a fresher, navigating the job market was tough. Studsphere's curated job listings for freshers made it so much easier. Got multiple interview calls!",
      authorName: 'Michael Johnson',
      authorTitle: 'Data Scientist',
      authorInitials: 'MJ',
      initialsColor: 'bg-blue-500'
    },
    {
      id: '2',
      content: "The design resources and community feedback on Studsphere are invaluable. It's truly a platform that supports creative growth!",
      authorName: 'Sarah Kim',
      authorTitle: 'Graphic Designer',
      authorInitials: 'SK',
      initialsColor: 'bg-red-500'
    },
    {
      id: '3',
      content: "Studsphere helped me land my first full-stack developer job. The job listings were highly relevant, and the resume builder was a game-changer. Highly recommend!",
      authorName: 'John Doe',
      authorTitle: 'Web Developer',
      authorInitials: 'JD',
      initialsColor: 'bg-purple-500'
    },
    {
      id: '4',
      content: "The course recommendations on Studsphere are fantastic! I found amazing digital marketing courses that boosted my skills and career prospects.",
      authorName: 'Alice Smith',
      authorTitle: 'Marketing Specialist',
      authorInitials: 'AS',
      initialsColor: 'bg-blue-500'
    }
  ];

  // Duplicate testimonials for seamless scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = () => (
    <div className="flex text-yellow-400 text-sm mt-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );

  return (
    <div className="py-16 text-center overflow-hidden">
      <span className="inline-block bg-yellow-100 text-yellow-700 font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
        TESTIMONIALS
      </span>
      <h2 className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
        What Our Users Say
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Hear from students and job seekers who found success with Studsphere
      </p>
      
      <div className="relative">
        {/* Fade effects */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200" />
              
              <div className="relative z-10">
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonial.initialsColor} rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4 flex-shrink-0`}>
                    {testimonial.authorInitials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonial.authorName}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.authorTitle}
                    </div>
                    {renderStars()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}