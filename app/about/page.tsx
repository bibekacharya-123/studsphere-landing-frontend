"use client"

import Image from "next/image"
import { NewsletterSection } from "@/components/newsletter-section"
import { HeroSection } from "@/components/about/hero-section"
import { TestimonialSlider } from "@/components/about/testimonial-slider"
import { FAQSection } from "@/components/about/faq-section"
import { TabsSection } from "@/components/about/tabs-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Studsphere Features Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2 text-black">
                Studsphere For <span className="text-blue-600">Education</span>
              </h2>
              <Image
                src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Education"
                width={320}
                height={220}
                className="rounded-xl object-cover mb-2"
              />
            </div>
            {/* Jobs & Courses */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2 text-black">
                Studsphere For <span className="text-orange-600">Jobs & Courses</span>
              </h2>
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jobs and Courses"
                width={320}
                height={220}
                className="rounded-xl object-cover mb-2"
              />
            </div>
            {/* Mart */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-2 text-black">
                Studsphere For <span className="text-green-600">Events</span>
              </h2>
              <Image
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Events"
                width={320}
                height={220}
                className="rounded-xl object-cover mb-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story, Mission & Vision Section with Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-black font-bold text-6xl mb-4">Our Story,Mission & Vision</h2>
          <p className="text-center text-gray-500 text-lg mb-16">Empowering Learners With Knowledge, Opportunities, And Growth</p>
          <TabsSection />
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-black font-bold text-5xl mb-4">Core Features</h2>
          <p className="text-center text-gray-500 text-lg mb-16">Learn, Work, Connect, And Thrive — All In One Place.</p>

          <div className="flex flex-col md:flex-row justify-center gap-10 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="flex flex-col gap-10">
              {/* Education Card - Pink */}
              <div className="relative bg-pink-200 rounded-3xl p-12 w-[450px] h-[450px] flex flex-col justify-between">
                <div>
                  <p className="text-black text-xl font-medium leading-relaxed">
                    find the best colleges and courses using different tools like college predictors, college comparison, college finder, and scholarship chances.
                  </p>
                </div>
                <div className="flex justify-end mt-auto">
                  <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-light">+</span>
                  </div>
                </div>
              </div>

              {/* Events Card - Green */}
              <div className="relative bg-green-200 rounded-3xl p-12 w-[450px] h-[450px] flex flex-col justify-between">
                <div>
                  <p className="text-black text-xl font-medium leading-relaxed">
                    participate in workshops, seminars, competitions, and volunteer programs to gain skills, experience, and connect with others.
                  </p>
                </div>
                <div className="flex justify-end mt-auto">
                  <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-light">+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Offset down */}
            <div className="flex flex-col gap-10 md:mt-12">
              {/* Jobs Card - Yellow */}
              <div className="relative bg-yellow-200 rounded-3xl p-12 w-[450px] h-[450px] flex flex-col justify-between">
                <div>
                  <p className="text-black text-xl font-medium leading-relaxed">
                    find the best jobs automatically by filling a simple form and get hired in one click. discover courses that suit you for greater growth.
                  </p>
                </div>
                <div className="flex justify-end mt-auto">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-light">+</span>
                  </div>
                </div>
              </div>

              {/* Events Card - Blue */}
              <div className="relative bg-blue-200 rounded-3xl p-12 w-[450px] h-[450px] flex flex-col justify-between">
                <div>
                  <p className="text-black text-xl font-medium leading-relaxed">
                    discover events happening around you — workshops, seminars, competitions, networking sessions, and volunteer opportunities to connect and grow.
                  </p>
                </div>
                <div className="flex justify-end mt-auto">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-3xl font-light">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact And Reach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Our Impact And Reach</h2>
            <p className="text-gray-500 text-lg">Growing Together, Reaching Further</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Students Reached */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-black mb-2">100k +</h3>
              <p className="text-gray-700 font-medium">Number Of Students</p>
              <p className="text-gray-700 font-medium">Reached</p>
            </div>

            {/* Geographical Reach */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-black mb-2">100k +</h3>
              <p className="text-gray-700 font-medium">Geographical Reach</p>
            </div>

            {/* Quantifiable Achievements */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-black mb-2">100k +</h3>
              <p className="text-gray-700 font-medium">Quantifiable</p>
              <p className="text-gray-700 font-medium">Achievements</p>
            </div>

            {/* Community Growth */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-black mb-2">100k +</h3>
              <p className="text-gray-700 font-medium">Community Growth</p>
            </div>

            {/* Partnerships & Collaborations */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-black mb-2">100k +</h3>
              <p className="text-gray-700 font-medium">Partnerships &</p>
              <p className="text-gray-700 font-medium">Collaborations</p>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-black mb-2">100k +</h3>
              <p className="text-gray-700 font-medium">Awards & Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder & Co-Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Meet Our Founder & Co-Founder</h2>
            <p className="text-gray-500 text-lg">The Visionaries Behind StudSphere</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Jagdish Dhami - Founder */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Jagdish Dhami - Founder"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Jagdish Dhami</h3>
                  <p className="text-white/90 text-lg">Founder</p>
                </div>
              </div>
            </div>

            {/* Santosh Bohara - Co-Founder */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Santosh Bohara - Co-Founder"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Santosh Bohara</h3>
                  <p className="text-white/90 text-lg">Co-Founder</p>
                </div>
              </div>
            </div>

            {/* Badal Gupta - Co-Founder */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Badal Gupta - Co-Founder"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-2xl font-bold mb-1">Badal Gupta</h3>
                  <p className="text-white/90 text-lg">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Message */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              &ldquo;Our vision was simple: create a platform where every student can find what they need to succeed.
              From education resources to career opportunities, StudSphere represents our commitment to empowering
              the next generation of learners and innovators.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <p className="text-gray-600 font-medium">The StudSphere Team</p>
              <div className="w-12 h-0.5 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Thousands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Trusted By Thousands Of Students</h2>
            <p className="text-gray-500 text-lg">Why Learners Choose StudSphere For Education, Growth, And Success.</p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">Have Question? We Have Got Answer</h2>
          </div>

          <FAQSection />
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}
