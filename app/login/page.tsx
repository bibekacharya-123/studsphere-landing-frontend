"use client"

import Link from "next/link"
import Image from "next/image"
import LoginForm from "@/components/auth/login-form"


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Form */}
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-2">Welcome back!</h1>
            <p className="text-sm text-gray-500 mb-8">Your journey toward knowledge, personal growth, and career success continues here—explore, learn, and excel.</p>

            <LoginForm />

            <p className="text-center text-sm text-gray-600 mt-6">
              Don&apos;t have an account? <Link href="/signup" className="text-blue-600 underline">Register now</Link>
            </p>
          </div>

          {/* Right: Illustration Card */}
          <div className="mx-auto w-full max-w-lg">
            <div className="bg-blue-50 rounded-xl p-10 h-full flex flex-col items-center justify-center">
              <div className="relative w-64 h-48">
                <Image src="/studentcap.png" alt="Student cap" fill className="object-contain" priority />
              </div>

              <h2 className="text-2xl font-semibold mt-6">Your way to success</h2>
              <p className="text-center text-sm text-gray-600 mt-3">Your journey toward knowledge, personal growth, and career success continues here—explore, learn, and excel.</p>
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
