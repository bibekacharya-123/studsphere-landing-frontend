'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface TeacherData {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  subjects: string[];
  experience: string;
  levels: string[];
  isAvailable: boolean;
  initials: string;
  bgColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function TeacherProfilesSection() {
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const teachers: TeacherData[] = [
    {
      id: '1',
      name: 'Anil Sharma',
      location: 'Kathmandu, Nepal',
      rating: 4.9,
      reviews: 128,
      subjects: ['Physics', 'Mathematics', 'Quantum Mechanics'],
      experience: '10+ years',
      levels: ['Bachelor', 'Master'],
      isAvailable: true,
      initials: 'AS',
      bgColor: 'bg-indigo-500',
      gradientFrom: 'from-indigo-500',
      gradientTo: 'to-purple-600'
    },
    {
      id: '2',
      name: 'Sita Devi',
      location: 'Bhaktapur, Nepal',
      rating: 4.8,
      reviews: 96,
      subjects: ['Chemistry', 'Biology', 'Environmental Science'],
      experience: '8+ years',
      levels: ['+2', 'Bachelor'],
      isAvailable: true,
      initials: 'SD',
      bgColor: 'bg-teal-500',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-emerald-600'
    },
    {
      id: '3',
      name: 'Ramesh Karki',
      location: 'Lalitpur, Nepal',
      rating: 5.0,
      reviews: 210,
      subjects: ['Computer Science', 'Artificial Intelligence', 'Software Engineering'],
      experience: '12+ years',
      levels: ['Bachelor', 'Master'],
      isAvailable: true,
      initials: 'RK',
      bgColor: 'bg-rose-500',
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-pink-600'
    },
    {
      id: '4',
      name: 'Priya Gurung',
      location: 'Pokhara, Nepal',
      rating: 4.7,
      reviews: 85,
      subjects: ['Business Studies', 'Economics', 'Management'],
      experience: '7+ years',
      levels: ['Bachelor'],
      isAvailable: false,
      initials: 'PG',
      bgColor: 'bg-amber-500',
      gradientFrom: 'from-amber-500',
      gradientTo: 'to-orange-600'
    }
  ];

  const levels = ['All Levels', '+2', 'Bachelor', 'Master'];
  const filterOptions = ['Available Now', 'Science', 'Humanities', 'Professional'];

  const filteredTeachers = teachers.filter(teacher => {
    if (selectedLevel === 'All Levels') return true;
    return teacher.levels.includes(selectedLevel);
  });

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setIsDropdownOpen(false);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
    alert(`Filter applied: "${filter}". This is a placeholder action.`);
  };

  const handleDownloadResume = (teacher: TeacherData) => {
    alert(`Downloading resume for ${teacher.name}. This is a placeholder action.`);
  };

  const handleMessageTeacher = (teacher: TeacherData) => {
    if (!teacher.isAvailable) return;
    alert(`Opening chat with ${teacher.name}. This is a placeholder action.`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 mt-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <span className="inline-block bg-[#3B82F6] text-white font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
          Hire Teachers
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Connect with Expert Educators</h2>
        <p className="text-gray-600 text-lg">Build stronger learning outcomes for your institution's success.</p>
      </div>

      {/* Teacher Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
          >
            {/* Profile Header */}
            <div className="p-4">
              <div className="flex items-start gap-3 mb-3">
                {/* Profile Picture */}
                <div className={`w-12 h-12 ${teacher.bgColor} rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
                  {teacher.initials}
                </div>
                {/* Name and Location */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-gray-900 truncate">{teacher.name}</h3>
                    <span className="text-blue-500 text-xs">✓</span>
                  </div>
                  <p className="text-xs text-gray-500">{teacher.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                Experienced educator specializing in multiple subjects.
                Aliquam a ante a elit posuere iaculis quis id eros. Vestibulum
                fringilla libero sed dapibus lobortis.
              </p>

              {/* Specializes Section */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-blue-600 rounded-sm"></span>
                  <span className="text-xs font-semibold text-gray-900">Specializes In</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {teacher.subjects.slice(0, 2).map((subject, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                  {teacher.subjects.length > 2 && (
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      4+ More
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleMessageTeacher(teacher)}
                  disabled={!teacher.isAvailable}
                  className={`flex-1 py-2 px-3 rounded text-xs font-medium transition-colors ${teacher.isAvailable
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Hire Now
                </button>
                <button
                  onClick={() => handleDownloadResume(teacher)}
                  className="flex-1 py-2 px-3 bg-white text-blue-600 border border-blue-600 rounded text-xs font-medium hover:bg-blue-50 transition-colors"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => alert('Navigating to a page showing all available teachers. This is a placeholder action.')}
          className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg border border-indigo-100 hover:bg-indigo-50 transition-colors"
        >
          View All Teachers
        </button>
      </div>
    </div>
  );
}