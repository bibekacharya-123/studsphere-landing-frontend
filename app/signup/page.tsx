"use client"

import Link from "next/link"
import Image from "next/image"
import SignupForm from "@/components/auth/signup-form"


export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Form */}
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-2">Create your account</h1>
            <p className="text-sm text-gray-500 mb-8">Join Studsphere to discover colleges, jobs, events and more.</p>

            <SignupForm />

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account? <Link href="/login" className="text-blue-600 underline">Login</Link>
            </p>
          </div>

          {/* Right: Illustration Card */}
          <div className="mx-auto w-full max-w-lg">
            <div className="bg-blue-50 rounded-xl p-10 h-full flex flex-col items-center justify-center">
              <div className="relative w-64 h-48">
                <Image src="/studentcap.png" alt="Student cap" fill className="object-contain" priority />
              </div>

              <h2 className="text-2xl font-semibold mt-6">Welcome to Studsphere</h2>
              <p className="text-center text-sm text-gray-600 mt-3">Get started with your journey: learn, connect, and grow with us.</p>
              <div className="flex items-center gap-2 mt-6">
                <span className="h-2 w-2 bg-gray-300 rounded-full" />
                <span className="h-2 w-2 bg-gray-300 rounded-full" />
                <span className="h-2 w-2 bg-blue-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
