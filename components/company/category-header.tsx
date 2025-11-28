"use client"

import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useState, useRef } from "react"

const categories = [
  { id: 1, name: "Internet", count: "2.2k" },
  { id: 2, name: "Finance", count: "1.8k" },
  { id: 3, name: "Technology", count: "3.1k" },
  { id: 4, name: "Healthcare", count: "950" },
  { id: 5, name: "Retail", count: "1.2k" },
  { id: 6, name: "E-commerce", count: "1.5k" },
]

export default function CompanyCategoryHeader() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    null
  )
}
