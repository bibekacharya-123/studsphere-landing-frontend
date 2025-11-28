"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, BookOpen, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { courses } from '@/data/courses';


const levels = [
  { value: 'All', label: 'All Levels' },
  { value: '+2', label: '+2' },
  { value: 'Bachelors', label: 'Bachelor' },
  { value: 'Masters', label: 'Master' },
  { value: 'PhD', label: 'PhD' }
];

const categories = ['Science', 'Management', 'Humanities', 'Education', 'Law'];

const ExploreCourses = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Science');

  const filteredCourses = selectedLevel === 'All'
    ? courses
    : courses.filter(course => course.level === selectedLevel);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setIsDropdownOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    // Add filtering logic based on category if needed
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case '+2':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Bachelors':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Masters':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'PhD':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-green-100 text-green-700 font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
            Featured Programs
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Popular Courses for you</h2>
          <p className="text-gray-600 text-lg">Choose from top programs designed for a brighter future.</p>
        </div>

        {/* Navigation/Filter Section */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {/* Level Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {levels.find(l => l.value === selectedLevel)?.label}
              <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
            </button>

            {isDropdownOpen && (
              <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1">
                  {levels.map((level, index) => (
                    <div key={level.value}>
                      <button
                        onClick={() => handleLevelSelect(level.value)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                      >
                        {level.label}
                      </button>
                      {index < levels.length - 1 && (
                        <div className="h-px bg-gray-200 mx-4" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 py-2 rounded-full font-medium text-sm shadow-sm transition-colors ${activeCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <div className="relative overflow-hidden h-40">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {/* Rating Badge */}
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded flex items-center text-xs">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  <span>4.7</span>
                </div>
                {/* View Count Badge */}
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded flex items-center text-xs">
                  <Users className="w-3 h-3 mr-1" />
                  <span>250k+</span>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                    IT & Computer Science
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <CardTitle className="text-base font-bold text-gray-900 mb-2 leading-tight">
                  {course.title}
                </CardTitle>

                <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-blue-600" />
                    <span>55 Colleges</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 px-3 rounded">
                    View Details
                  </Button>
                  <Button variant="outline" className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-50 text-xs py-2 px-3 rounded">
                    Enquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/colleges/courses">
            <Button variant="outline" size="lg" className="px-8">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourses;