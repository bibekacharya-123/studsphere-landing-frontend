"use client"

const MENTOR_CATEGORIES = [
  "All",
  "Career Guidance",
  "Leadership",
  "Technical Skills",
  "Entrepreneurship",
  "Interview Prep",
  "Personal Development",
]

interface MentorCategoriesProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function MentorCategories({ selectedCategory, onCategoryChange }: MentorCategoriesProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {MENTOR_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 sm:px-5 py-2 rounded-full font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}
