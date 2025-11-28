"use client"

import { FindMentorHeader } from "@/components/mentorship/find-mentor-header"
import { MentorCategories } from "@/components/mentorship/mentor-categories"
import { MentorFiltersAndList } from "@/components/mentorship/mentor-filters-and-list"
import { useState } from "react"

export default function FindMentorPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <main className="w-full bg-gray-50 min-h-screen">
      <FindMentorHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MentorCategories selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <MentorFiltersAndList selectedCategory={selectedCategory} />
      </div>
    </main>
  )
}
