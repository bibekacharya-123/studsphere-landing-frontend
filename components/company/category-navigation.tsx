"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

interface Category {
  id: string
  name: string
  count: string
  title: string
}

const CATEGORIES: Category[] = [
  { id: "internet", name: "Internet", count: "2.2k companies", title: "Internet actively hiring" },
  { id: "finance", name: "Finance", count: "1.8k companies", title: "Finance actively hiring" },
  { id: "technology", name: "Technology", count: "3.1k companies", title: "Technology actively hiring" },
  { id: "healthcare", name: "Healthcare", count: "950 companies", title: "Healthcare actively hiring" },
  { id: "retail", name: "Retail", count: "1.2k companies", title: "Retail actively hiring" },
  { id: "ecommerce", name: "E-commerce", count: "1.5k companies", title: "E-commerce actively hiring" },
  { id: "education", name: "Education", count: "1.3k companies", title: "Education actively hiring" },
  { id: "aeronautical", name: "Aeronautical", count: "420 companies", title: "Aeronautical actively hiring" },
  { id: "manufacturing", name: "Manufacturing", count: "1.7k companies", title: "Manufacturing actively hiring" },
  { id: "automotive", name: "Automotive", count: "890 companies", title: "Automotive actively hiring" },
]

interface CategoryNavigationProps {
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export default function CategoryNavigation({ selectedCategory, onCategoryChange }: CategoryNavigationProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 300
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
      setTimeout(checkScroll, 300)
    }
  }

  const selectedCategoryData = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0]

  return (
    <div className="w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-balance">{selectedCategoryData.title}</h1>
      </div>

      <div className="w-full bg-blue-50 py-4 sm:py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-4">
          {/* Left Scroll Button - Hidden on small screens */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="hidden sm:flex flex-shrink-0 p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-400 sm:w-6 sm:h-6" />
          </button>

          {/* Categories Container - Improved responsive spacing */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex-1 overflow-x-auto scrollbar-hide flex gap-2 sm:gap-3 lg:gap-4"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`flex-shrink-0 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl border-2 font-medium text-sm sm:text-base transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-white text-gray-900 shadow-lg'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-semibold text-xs sm:text-sm">{category.name}</span>
                    {selectedCategory === category.id && (
                      <Check size={16} className="text-blue-500 flex-shrink-0 sm:w-5 sm:h-5" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-600 font-medium">{category.count}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Scroll Button - Hidden on small screens */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="hidden sm:flex flex-shrink-0 p-2 rounded-full hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={20} className="text-gray-400 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
