'use client';

import { useState } from 'react';
import { ChevronDown, MapPin, University, Phone, Eye, CheckCircle } from 'lucide-react';

interface CollegeData {
  id: string;
  name: string;
  location: string;
  university: string;
  type: 'private' | 'government';
  rating: number;
  level: string;
  logoColor: string;
  programs: string[];
  imageUrl: string;
}

export default function CollegeListingSection() {
  const [selectedLevel, setSelectedLevel] = useState('bachelor');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Science');

  const colleges: CollegeData[] = [
    {
      id: '1',
      name: 'Goldengate International',
      location: 'Kathmandu',
      university: 'TU',
      type: 'private',
      rating: 4.7,
      level: 'bachelor',
      logoColor: 'bg-indigo-500',
      programs: ['BSC PCM', 'BSC Microbiology', 'BSC PCM', 'BSC PCM', '4+ More'],
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=340&h=110'
    },
    {
      id: '2',
      name: 'Goldengate International',
      location: 'Kathmandu',
      university: 'TU',
      type: 'private',
      rating: 4.7,
      level: 'bachelor',
      logoColor: 'bg-indigo-500',
      programs: ['BSC PCM', 'BSC Microbiology', 'BSC PCM', 'BSC PCM', '4+ More'],
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=340&h=110'
    },
    {
      id: '3',
      name: 'Goldengate International',
      location: 'Kathmandu',
      university: 'TU',
      type: 'private',
      rating: 4.7,
      level: 'bachelor',
      logoColor: 'bg-indigo-500',
      programs: ['BSC PCM', 'BSC Microbiology', 'BSC PCM', 'BSC PCM', '4+ More'],
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=340&h=110'
    },
    {
      id: '4',
      name: 'Goldengate International',
      location: 'Kathmandu',
      university: 'TU',
      type: 'private',
      rating: 4.7,
      level: 'bachelor',
      logoColor: 'bg-indigo-500',
      programs: ['BSC PCM', 'BSC Microbiology', 'BSC PCM', 'BSC PCM', '4+ More'],
      imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=340&h=110'
    },
    {
      id: '5',
      name: 'Higher Secondary School A',
      location: 'Bhaktapur',
      university: 'NEB',
      type: 'government',
      rating: 4.6,
      level: 'plus2',
      logoColor: 'bg-red-500',
      programs: ['+2 Science', '+2 Management', '+2 Humanities'],
      imageUrl: 'https://images.unsplash.com/photo-1627556942636-234b6e5e8e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=340&h=110'
    },
    {
      id: '6',
      name: "Master's University",
      location: 'Kathmandu',
      university: 'TU',
      type: 'private',
      rating: 4.9,
      level: 'master',
      logoColor: 'bg-emerald-600',
      programs: ['MBA', 'M.Sc. Data Science', 'MA English'],
      imageUrl: 'https://images.unsplash.com/photo-1577563908411-ce170d47228b?ixlib=rb-4.0.3&auto=format&fit=crop&w=340&h=110'
    }
  ];

  const levels = [
    { value: 'bachelor', label: 'Bachelor' },
    { value: 'plus2', label: '+2' },
    { value: 'master', label: 'Master' }
  ];

  const categories = ['Science', 'Management', 'Humanities', 'Education', 'Law'];

  const filteredColleges = colleges.filter(college => college.level === selectedLevel);

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setIsDropdownOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    alert(`Filtering by category: ${category}. This is a placeholder action.`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <span className="inline-block bg-green-100 text-green-700 font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
          Featured Colleges
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Explore Top Colleges & Universities</h2>
        <p className="text-gray-600 text-lg">Your guide to the best academic opportunities in Nepal and beyond.</p>
      </div>

      {/* Navigation/Filter Section */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* Level Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

      {/* College Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college.id}
            className="college-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200"
          >
            {/* College Header */}
            <div className="relative h-32">
              <img
                src={college.imageUrl}
                alt={`${college.name} Campus`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute -bottom-6 left-4 w-12 h-12 ${college.logoColor} rounded-full border-3 border-white shadow-md flex items-center justify-center`}>
                <span className="text-white font-bold text-sm">
                  {college.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </span>
              </div>
              <span className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold text-white flex items-center ${college.rating >= 4.7 ? 'bg-blue-600' : 'bg-yellow-500'
                }`}>
                <span className="mr-1">★</span> {college.rating}
              </span>
            </div>

            {/* College Content */}
            <div className="p-4 pt-8">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-bold text-gray-900 flex-grow pr-2">
                  {college.name}
                </h3>
                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
              </div>

              <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                <MapPin className="w-3 h-3" />
                <span>{college.location}</span>
                <span className="text-gray-400 mx-1">|</span>
                <University className="w-3 h-3" />
                <span>{college.university}</span>
                <span className="text-gray-400 mx-1">|</span>
                <span className={`px-2 py-0.5 rounded text-xs font-semibold ${college.type === 'private'
                  ? 'bg-pink-100 text-pink-700'
                  : 'bg-green-100 text-green-700'
                  }`}>
                  {college.type.charAt(0).toUpperCase() + college.type.slice(1)}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4 min-h-[60px]">
                {college.programs.map((program, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {program}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center px-2 py-2 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors min-w-0">
                  <Eye className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="truncate">View Details</span>
                </button>
                <button className="flex-1 flex items-center justify-center px-2 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg text-xs font-medium hover:bg-blue-50 transition-colors min-w-0">
                  <span className="truncate">Enquiry</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}