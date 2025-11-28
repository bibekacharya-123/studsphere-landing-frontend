"use client"

import { useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // placeholder: replace with real auth
    const name = email.split("@")[0]
      .replace(/[^a-zA-Z]/g, ' ')
      .split(' ')
      .map(p => p ? p[0].toUpperCase() + p.slice(1) : '')
      .join(' ')

    login({ name, email })
    console.log("login", { email, password })
    // navigate to home after login
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="sr-only">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
          className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="sr-only">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
            className="w-full border rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="w-4 h-4" />
          Keep me signed in
        </label>
        <a href="#" className="text-sm text-gray-600">Forget Password?</a>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">Login</button>

      <div className="flex items-center gap-3 mt-4">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="text-sm text-gray-500">or continue with</div>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="flex items-center gap-4 justify-center mt-4">
        <button className="h-10 w-10 rounded-full bg-blue-600 text-white">G</button>
        <button className="h-10 w-10 rounded-full bg-blue-600 text-white"></button>
        <button className="h-10 w-10 rounded-full bg-blue-600 text-white">f</button>
      </div>
    </form>
  )
}
