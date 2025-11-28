'use client';

import { useState, useRef } from 'react';
import { HardHat, TrendingUp, ShoppingCart, Palette, FlaskRound as Flask, Gavel, Stethoscope, Compass, ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryData {
  id: string;
  title: string;
  colleges: string;
  subCategories: string[];
  icon: React.ReactNode;
  colorClass: string;
}

export default function StudyGoalSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories: CategoryData[] = [
    {
      id: 'engineering',
      title: 'Engineering',
      colleges: '6337 Colleges',
      subCategories: ['BE/B.Tech', 'Diploma in Engineering', 'ME/M.Tech'],
      icon: <HardHat className="w-10 h-10" />,
      colorClass: 'bg-yellow-200 text-gray-900' // lighter yellow
    },
    {
      id: 'management',
      title: 'Management',
      colleges: '7916 Colleges',
      subCategories: ['MBA/PGDM', 'BBA/BMS', 'Executive MBA'],
      icon: <TrendingUp className="w-10 h-10" />,
      colorClass: 'bg-amber-200 text-gray-900' // lighter amber
    },
    {
      id: 'commerce',
      title: 'Commerce',
      colleges: '5049 Colleges',
      subCategories: ['B.Com', 'M.Com'],
      icon: <ShoppingCart className="w-10 h-10" />,
      colorClass: 'bg-sky-200 text-gray-900' // lighter sky
    },
    {
      id: 'arts',
      title: 'Arts',
      colleges: '5697 Colleges',
      subCategories: ['BA', 'MA', 'BFA', 'BSW'],
      icon: <Palette className="w-10 h-10" />,
      colorClass: 'bg-purple-200 text-gray-900' // lighter purple
    },
    {
      id: 'science',
      title: 'Science',
      colleges: '4500 Colleges',
      subCategories: ['B.Sc', 'M.Sc', 'Ph.D. in Science'],
      icon: <Flask className="w-10 h-10" />,
      colorClass: 'bg-green-200 text-gray-900' // lighter green
    },
    {
      id: 'law',
      title: 'Law',
      colleges: '1200 Colleges',
      subCategories: ['LLB', 'LLM', 'BA LLB'],
      icon: <Gavel className="w-10 h-10" />,
      colorClass: 'bg-red-200 text-gray-900' // lighter red
    },
    {
      id: 'medical',
      title: 'Medical',
      colleges: '2800 Colleges',
      subCategories: ['MBBS', 'BDS', 'Nursing'],
      icon: <Stethoscope className="w-10 h-10" />,
      colorClass: 'bg-blue-200 text-gray-900' // lighter blue
    },
    {
      id: 'design',
      title: 'Design',
      colleges: '1800 Colleges',
      subCategories: ['B.Des', 'M.Des', 'Fashion Design'],
      icon: <Compass className="w-10 h-10" />,
      colorClass: 'bg-orange-200 text-gray-900' // lighter orange
    }
  ];

  const handleCategoryClick = (category: CategoryData) => {
    alert(`You selected: "${category.title}". This would display colleges in this category.`);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // 80 * 4 (w-80 = 320px)
      const newPosition = Math.max(0, scrollPosition - cardWidth);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320; // 80 * 4 (w-80 = 320px)
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + cardWidth);
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <div className="section-container study-goal-section relative bg-white rounded-3xl p-20  overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0  from-blue-500/10 via-transparent to-green-500/5 pointer-events-none z-0" />

      <div className="relative z-10  flex-col text-center">
        <span className="inline-block bg-cyan-100 text-teal-700 font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
          YOUR PATH
        </span>
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Select Your Study Goal
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Choose from our wide range of academic programs to find the perfect fit for your career aspirations.
        </p>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-200 border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-200 border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Fade effects
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" /> */}

          {/* Scrolling container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`flex-shrink-0 w-80 p-7 rounded-2xl cursor-pointer shadow-lg border border-white/30 relative overflow-hidden ${category.colorClass}`}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full border border-white/40 bg-white/30 mr-5">
                      {category.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                      <span className="text-sm font-medium opacity-90">{category.colleges}</span>
                    </div>
                  </div>

                  <ul className="space-y-0">
                    {category.subCategories.map((subCategory, index) => (
                      <li
                        key={index}
                        className="py-3 text-lg border-t border-white/30 first:border-t-0"
                      >
                        {subCategory}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}