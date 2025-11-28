"use client"

import { useEffect } from "react"
import { useAuth } from "@/components/auth/auth-provider"

export default function ProfileSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { user, logout } = useAuth()

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, onClose])

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg transform transition-transform z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      aria-hidden={!isOpen}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Profile</h3>
          <button onClick={onClose} className="text-sm text-gray-600">Close</button>
        </div>

        <div className="mt-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
            {user?.name ? user.name.split(" ").map(n => n[0]).join("") : (user?.email ? user.email[0].toUpperCase() : "U")}
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600">Name</p>
            <p className="font-medium">{user?.name ?? "—"}</p>

            <p className="text-sm text-gray-600 mt-4">Email</p>
            <p className="font-medium">{user?.email ?? "—"}</p>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => {
              logout()
              onClose()
            }}
            className="w-full bg-red-600 text-white py-2 rounded-md"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}
