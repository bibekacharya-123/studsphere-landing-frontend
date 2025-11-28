'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Users, Star, GraduationCap, BookOpen, Award, ChevronDown, Grid, List, SlidersHorizontal, CheckCircle, Phone, Globe, Mail, Wifi, Car, Coffee, Dumbbell, Heart, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import CollegeNavbar from '@/components/college/college-navbar';
import HeroSection from '@/components/college/HeroSection';

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedUniversity, setSelectedUniversity] = useState('all');
  const [minRating, setMinRating] = useState(3.0);
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const collegesPerPage = 6;

  const nepaliColleges = [
    {
      id: 'golden-gate-international',
      name: 'Golden Gate International College',
      location: 'Purano-Baneshwor, Kathmandu',
      district: 'Kathmandu',
      province: 'Bagmati',
      rating: 4.7,
      students: 3500,
      level: 'bachelors',
      type: 'private',
      university: 'Tribhuvan University',
      courses: ['BSC PCM', 'BSC Microbiology', 'BCA', 'BA BSW', 'B Tech Food', 'MSc Physics', 'MBA'],
      fees: 'NPR 2,50,000 - 4,50,000/year',
      established: 1995,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://static.vecteezy.com/system/resources/previews/006/788/494/non_2x/university-college-logo-open-book-symbol-of-knowledge-and-education-university-library-and-school-logotype-template-illustration-vector.jpg',
      description: 'Premier international college offering diverse programs with modern facilities.',
      facilities: ['WiFi Campus', 'Library', 'Transport', 'Cafeteria', 'Sports'],
      isVerified: true,
      email: 'admissions@goldengate.edu.np',
      website: 'www.goldengate.edu.np',
      reviews: 250,
      ratingBreakdown: { 5: 70, 4: 20, 3: 7, 2: 2, 1: 1 }
    },
    {
      id: 'st-xaviers-college',
      name: 'St. Xavier\'s College',
      location: 'Maitighar, Kathmandu',
      district: 'Kathmandu',
      province: 'Bagmati',
      rating: 4.9,
      students: 3500,
      level: '+2',
      type: 'private',
      university: 'Tribhuvan University',
      courses: ['Science', 'Management', 'Humanities'],
      fees: 'NPR 1,20,000 - 1,50,000/year',
      established: 1988,
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/St._Xavier%27s_College%2C_Kathmandu.png/220px-St._Xavier%27s_College%2C_Kathmandu.png',
      description: 'Premier +2 college known for academic excellence and discipline.',
      facilities: ['WiFi Campus', 'Library', 'Labs', 'Sports Ground'],
      isVerified: true,
      email: 'info@sxc.edu.np',
      website: 'www.sxc.edu.np',
      reviews: 400,
      ratingBreakdown: { 5: 85, 4: 10, 3: 5, 2: 0, 1: 0 }
    },
    {
      id: 'kathmandu-university',
      name: 'Kathmandu University',
      location: 'Dhulikhel, Kavre',
      district: 'Kavre',
      province: 'Bagmati',
      rating: 4.8,
      students: 15000,
      level: 'university',
      type: 'public',
      university: 'Kathmandu University',
      courses: ['Engineering', 'Medicine', 'Management', 'Science', 'Arts', 'Pharmacy'],
      fees: 'NPR 1,50,000 - 15,00,000/year',
      established: 1991,
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Kathmandu_University_Logo.png/220px-Kathmandu_University_Logo.png',
      description: 'A modern university known for quality education and research excellence.',
      facilities: ['Modern Labs', 'Digital Library', 'Hostels', 'Teaching Hospital', 'Research Centers'],
      isVerified: true,
      email: 'admission@ku.edu.np',
      website: 'www.ku.edu.np',
      reviews: 600,
      ratingBreakdown: { 5: 80, 4: 15, 3: 5, 2: 0, 1: 0 }
    },
    {
      id: 'pulchowk-campus',
      name: 'Pulchowk Campus (IOE)',
      location: 'Pulchowk, Lalitpur',
      district: 'Lalitpur',
      province: 'Bagmati',
      rating: 4.8,
      students: 4500,
      level: 'bachelors',
      type: 'public',
      university: 'Tribhuvan University',
      courses: ['BE Civil', 'BE Electronics', 'BE Mechanical', 'BE Computer', 'B.Arch'],
      fees: 'NPR 1,20,000 - 2,00,000/year',
      established: 1972,
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Pulchowk_Campus_Logo.png/220px-Pulchowk_Campus_Logo.png',
      description: 'Premier engineering college of Nepal under Tribhuvan University.',
      facilities: ['Engineering Labs', 'Workshops', 'Library', 'Research Centers', 'Hostels'],
      isVerified: true,
      email: 'info@pcampus.edu.np',
      website: 'www.pcampus.edu.np',
      reviews: 550,
      ratingBreakdown: { 5: 80, 4: 15, 3: 4, 2: 1, 1: 0 }
    },
    {
      id: 'ace-institute',
      name: 'Ace Institute of Management',
      location: 'Baneshwor, Kathmandu',
      district: 'Kathmandu',
      province: 'Bagmati',
      rating: 4.7,
      students: 2000,
      level: 'bachelors',
      type: 'private',
      university: 'Kathmandu University',
      courses: ['MBA', 'EMBA', 'BBA', 'BBS'],
      fees: 'NPR 3,50,000 - 8,00,000/year',
      established: 1999,
      image: 'https://images.pexels.com/photos/1154189/pexels-photo-1154189.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://ace.edu.np/wp-content/uploads/2023/03/ace-logo.png',
      description: 'Leading management college with international affiliations.',
      facilities: ['WiFi Campus', 'Resource Center', 'Career Services'],
      isVerified: true,
      email: 'admission@ace.edu.np',
      website: 'www.ace.edu.np',
      reviews: 350,
      ratingBreakdown: { 5: 78, 4: 17, 3: 5, 2: 0, 1: 0 }
    },
    {
      id: 'trinity-international',
      name: 'Trinity International College',
      location: 'Dillibazar, Kathmandu',
      district: 'Kathmandu',
      province: 'Bagmati',
      rating: 4.6,
      students: 2800,
      level: '+2',
      type: 'private',
      university: 'Tribhuvan University',
      courses: ['A-Levels', 'BBS', 'BSc CSIT', 'BCA', 'BHM'],
      fees: 'NPR 1,80,000 - 3,50,000/year',
      established: 2003,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://trinitycollege.edu.np/wp-content/uploads/2023/07/Trinity-Logo-Web.png',
      description: 'International college offering diverse programs with modern facilities.',
      facilities: ['WiFi Campus', 'Library', 'Auditorium'],
      isVerified: true,
      email: 'info@trinitycollege.edu.np',
      website: 'www.trinitycollege.edu.np',
      reviews: 280,
      ratingBreakdown: { 5: 75, 4: 18, 3: 5, 2: 2, 1: 0 }
    },
    {
      id: 'tribhuvan-university',
      name: 'Tribhuvan University',
      location: 'Kirtipur, Kathmandu',
      district: 'Kathmandu',
      province: 'Bagmati',
      rating: 4.8,
      students: 450000,
      level: 'university',
      type: 'public',
      university: 'Tribhuvan University',
      courses: ['Engineering', 'Medicine', 'Management', 'Arts', 'Science', 'Law', 'Education'],
      fees: 'NPR 25,000 - 2,50,000/year',
      established: 1959,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://static.vecteezy.com/system/resources/previews/006/788/494/non_2x/university-college-logo-open-book-symbol-of-knowledge-and-education-university-library-and-school-logotype-template-illustration-vector.jpg',
      description: 'The oldest and largest university in Nepal, offering diverse programs across multiple faculties.',
      facilities: ['Central Library', 'Research Centers', 'Student Hostels', 'Sports Complex', 'Medical Center'],
      isVerified: true,
      email: 'info@tribhuvan-university.edu.np',
      website: 'www.tribhuvan-university.edu.np',
      reviews: 1200,
      ratingBreakdown: { 5: 75, 4: 18, 3: 5, 2: 1, 1: 1 }
    },
    {
      id: 'kcmit',
      name: 'KCMIT',
      location: 'Lalitpur',
      district: 'Lalitpur',
      province: 'Bagmati',
      rating: 4.5,
      students: 1200,
      level: 'bachelors',
      type: 'private',
      university: 'Kathmandu University',
      courses: ['Computer Engineering', 'Software Engineering', 'IT'],
      fees: 'NPR 4,50,000 - 6,00,000/year',
      established: 2000,
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://static.vecteezy.com/system/resources/previews/006/788/494/non_2x/university-college-logo-open-book-symbol-of-knowledge-and-education-university-library-and-school-logotype-template-illustration-vector.jpg',
      description: 'Leading IT college affiliated with Kathmandu University.',
      facilities: ['Computer Labs', 'Project Labs', 'Library', 'Cafeteria', 'Parking'],
      isVerified: true,
      email: 'info@kcmit.edu.np',
      website: 'www.kcmit.edu.np',
      reviews: 180,
      ratingBreakdown: { 5: 65, 4: 25, 3: 8, 2: 2, 1: 0 }
    }
  ];


  const locationOptions = [
    { value: 'all', label: 'All Locations' },
    { value: 'Kathmandu', label: 'Kathmandu' },
    { value: 'Lalitpur', label: 'Lalitpur' },
    { value: 'Kavre', label: 'Kavre' }
  ];

  const courseOptions = [
    { value: 'all', label: 'All Programs' },
    { value: 'BSC PCM', label: 'BSC PCM' },
    { value: 'BCA', label: 'BCA' },
    { value: 'MBA', label: 'MBA' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Science', label: 'Science' },
    { value: 'Management', label: 'Management' }
  ];

  const universityOptions = [
    { value: 'all', label: 'All Universities' },
    { value: 'Tribhuvan University', label: 'Tribhuvan University' },
    { value: 'Kathmandu University', label: 'Kathmandu University' }
  ];

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
    { value: 'rating-desc', label: 'Rating (High to Low)' },
    { value: 'established-asc', label: 'Established (Oldest First)' }
  ];

  const filteredColleges = nepaliColleges.filter(college => {
    const searchMatch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));

    const levelMatch = selectedLevel === 'all' || college.level === selectedLevel;
    const locationMatch = selectedLocation === 'all' || college.location.includes(selectedLocation);
    const courseMatch = selectedCourse === 'all' || college.courses.includes(selectedCourse);
    const typeMatch = selectedType === 'all' || college.type === selectedType;
    const universityMatch = selectedUniversity === 'all' || college.university === selectedUniversity;
    const ratingMatch = college.rating >= minRating;

    return searchMatch && levelMatch && locationMatch && courseMatch && typeMatch && universityMatch && ratingMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'rating-desc':
        return b.rating - a.rating;
      case 'established-asc':
        return a.established - b.established;
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const startIndex = (currentPage - 1) * collegesPerPage;
  const endIndex = startIndex + collegesPerPage;
  const currentColleges = filteredColleges.slice(startIndex, endIndex);

  const toggleCardDetails = (collegeId: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(collegeId)) {
      newExpanded.delete(collegeId);
    } else {
      newExpanded.add(collegeId);
    }
    setExpandedCards(newExpanded);
  };

  const generateRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-3 h-3 text-gray-300" />);
      }
    }
    return stars;
  };

  const generateAdSection = () => (
    <div className="col-span-full bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 my-8">
      <div className="flex-shrink-0 text-center md:text-left">
        <div className="w-24 h-24 bg-white rounded-lg p-2 shadow-md mx-auto md:mx-0 flex items-center justify-center">
          <Award className="w-12 h-12 text-red-500" />
        </div>
        <p className="text-sm font-semibold mt-2">Award Winning Agency</p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around flex-grow space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <Users className="w-10 h-10 mx-auto mb-2" />
          <p className="text-2xl font-bold">350+</p>
          <p className="text-sm">Happy Clients</p>
        </div>
        <div className="text-center">
          <Building className="w-10 h-10 mx-auto mb-2" />
          <p className="text-2xl font-bold">3.5 billion</p>
          <p className="text-sm">Total Impressions</p>
        </div>
        <div className="text-center">
          <Star className="w-10 h-10 mx-auto mb-2" />
          <p className="text-2xl font-bold">5* rated</p>
          <p className="text-sm">Across the board</p>
        </div>
      </div>
    </div>
  );

  const getFacilityIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'wifi campus':
      case 'high-speed internet':
        return <Wifi className="w-4 h-4" />;
      case 'library':
      case 'digital library':
      case 'central library':
        return <BookOpen className="w-4 h-4" />;
      case 'transport':
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'cafeteria':
        return <Coffee className="w-4 h-4" />;
      case 'sports':
      case 'sports ground':
      case 'sports complex':
        return <Dumbbell className="w-4 h-4" />;
      case 'teaching hospital':
      case 'medical center':
        return <Heart className="w-4 h-4" />;
      default:
        return <Building className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLevel, selectedLocation, selectedCourse, selectedType, selectedUniversity, minRating, sortBy]);

  return (
    <div className="min-h-screen" style={{
      background: 'white',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Navigation */}
      <CollegeNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Ad Banner Section
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full p-3 shadow-lg">
                  <Award className="w-10 h-10 text-orange-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">🎓 StudSphere Admission Partner</h3>
                <p className="text-lg opacity-90">Get Expert Guidance for College Admissions</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-6 text-center md:text-left">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Colleges</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Support</div>
                </div>
              </div>

              <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors">
                Get Free Counseling
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-4 md:p-8" style={{
        background: 'white'
      }}>
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="text-sm text-gray-600 mb-4">
            Home {'>'} All Colleges
          </nav>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 mt-8">
            <div className="flex items-center mb-4 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-800 mr-4">All Colleges</h1>
              <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                {filteredColleges.length} Colleges
              </span>
            </div>
            <p className="text-gray-600">Discover top-rated colleges for your future endeavors.</p>
          </div>

          {/* Main Content Layout */}
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Filter & Search</h3>
                  <Button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedLocation('all');
                      setSelectedCourse('all');
                      setSelectedUniversity('all');
                      setMinRating(3.0);
                      setSortBy('default');
                    }}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Clear All
                  </Button>
                </div>

                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Search Colleges</label>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Search by name, location, courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full h-11 px-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 bg-white"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* University */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">University</label>
                    <div className="space-y-2">
                      {universityOptions.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="university"
                            value={option.value}
                            checked={selectedUniversity === option.value}
                            onChange={(e) => setSelectedUniversity(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Location</label>
                    <div className="space-y-2">
                      {locationOptions.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="location"
                            value={option.value}
                            checked={selectedLocation === option.value}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Programs */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Programs</label>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {courseOptions.map(option => (
                        <label key={option.value} className="flex items-center">
                          <input
                            type="radio"
                            name="course"
                            value={option.value}
                            checked={selectedCourse === option.value}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* College Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">College Type</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="all"
                          checked={selectedType === 'all'}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">All Types</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="private"
                          checked={selectedType === 'private'}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Private</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="public"
                          checked={selectedType === 'public'}
                          onChange={(e) => setSelectedType(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Public</span>
                      </label>
                    </div>
                  </div>

                  {/* Education Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Education Level</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="level"
                          value="all"
                          checked={selectedLevel === 'all'}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">All Levels</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="level"
                          value="+2"
                          checked={selectedLevel === '+2'}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">+2 Level</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="level"
                          value="bachelors"
                          checked={selectedLevel === 'bachelors'}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Bachelor's</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="level"
                          value="masters"
                          checked={selectedLevel === 'masters'}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Master's</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="level"
                          value="university"
                          checked={selectedLevel === 'university'}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">University</span>
                      </label>
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Minimum Rating: {minRating.toFixed(1)} ⭐
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="0.1"
                      value={minRating}
                      onChange={(e) => setMinRating(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0.0</span>
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Fee Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Fee Range (Annual)</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="feeRange"
                          value="all"
                          defaultChecked
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">All Ranges</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="feeRange"
                          value="low"
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Under 1 Lakh</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="feeRange"
                          value="medium"
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">1-3 Lakhs</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="feeRange"
                          value="high"
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">3-5 Lakhs</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="feeRange"
                          value="premium"
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">5+ Lakhs</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - College Listings */}
            <div className="flex-1">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => setViewMode('grid')}
                    className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    Grid
                  </Button>
                  <Button
                    onClick={() => setViewMode('list')}
                    className={`flex items-center px-4 py-2 rounded-lg transition duration-200 ${viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                  >
                    <List className="w-4 h-4 mr-2" />
                    List
                  </Button>
                </div>
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredColleges.length)} of {filteredColleges.length} colleges
                </div>
              </div>

              {/* College Grid/List */}
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {currentColleges.map((college, index) => {
                  const isExpanded = expandedCards.has(college.id);
                  const totalRatingCount = Object.values(college.ratingBreakdown).reduce((sum, count) => sum + count, 0);

                  // Add ad section after every 6 colleges in grid view or every 2 in list view
                  const shouldShowAd = viewMode === 'grid' ? (index + 1) % 6 === 0 : (index + 1) % 2 === 0;

                  return (
                    <div key={college.id}>
                      <Card className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[430px] flex flex-col">
                        {/* Header Image */}
                        <div className="relative h-36 bg-gradient-to-r from-indigo-600 to-indigo-600 overflow-hidden">
                          <img
                            src={college.image}
                            alt={`${college.name} Campus`}
                            className="object-cover w-full h-full opacity-90"
                            onError={(e) => {
                              e.currentTarget.src = 'https://placehold.co/400x160/A4BEEF/ffffff?text=Campus+Image';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <span className="absolute top-3 right-3 bg-white/90 text-gray-800 px-2.5 py-1 text-xs font-bold rounded-full shadow-sm flex items-center">
                            <GraduationCap className="w-3 h-3 mr-1 text-indigo-600" />
                            {college.university}
                          </span>
                          <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/30 px-2 py-1 rounded">
                            Est. {college.established}
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-3 space-y-2 flex-1 flex flex-col">
                          {/* College Info */}
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              <img
                                src={college.logo}
                                alt={`${college.name} Logo`}
                                className="w-12 h-12 rounded-full border-2 border-white shadow-md object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = 'https://placehold.co/48x48/A4BEEF/ffffff?text=Logo';
                                }}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center">
                                <h2 className="text-base font-bold text-gray-800">{college.name}</h2>
                                {college.isVerified && (
                                  <CheckCircle className="w-4 h-4 ml-1.5 text-indigo-600" />
                                )}
                              </div>
                              <div className="flex items-center text-xs text-gray-500 mt-1">
                                <MapPin className="w-3 h-3 mr-1 text-indigo-600" />
                                <span>{college.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 justify-center">
                            {college.facilities.map((facility, idx) => (
                              <div
                                key={idx}
                                className="bg-indigo-50 p-2 rounded-full text-indigo-600 text-xs hover:bg-indigo-100 transition-colors cursor-pointer"
                                title={facility}
                              >
                                {getFacilityIcon(facility)}
                              </div>
                            ))}
                          </div>

                          {/* Courses */}
                          <div className="flex flex-wrap gap-1.5">
                            {college.courses.slice(0, 4).map((course, idx) => (
                              <Badge
                                key={idx}
                                className="px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                              >
                                {course}
                              </Badge>
                            ))}
                            {college.courses.length > 4 && (
                              <Badge className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                +{college.courses.length - 4} more
                              </Badge>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-2">
                            <Button className="py-2 text-xs bg-white border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition">
                              <Phone className="w-3 h-3 mr-1.5" /> Call
                            </Button>
                            <Button className="py-2 text-xs bg-white border border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-50 transition">
                              <MapPin className="w-3 h-3 mr-1.5" /> Visit
                            </Button>
                          </div>

                          {/* Main CTA */}
                          <div className="grid grid-cols-2 gap-2 mt-auto">
                            <Button
                              onClick={() => toggleCardDetails(college.id)}
                              className="py-2.5 text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-600 font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-700 transition"
                            >
                              {isExpanded ? (
                                <>
                                  <ChevronDown className="w-4 h-4 mr-1.5 rotate-180" /> Less
                                </>
                              ) : (
                                <>
                                  <BookOpen className="w-4 h-4 mr-1.5" /> Details
                                </>
                              )}
                            </Button>
                            <Link href={`/colleges/colleges/${college.id}`}>
                              <Button className="w-full py-2.5 text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-600 font-medium rounded-lg hover:from-indigo-700 hover:to-indigo-700 transition">
                                <GraduationCap className="w-4 h-4 mr-1.5" /> View College
                              </Button>
                            </Link>
                          </div>

                          {/* Expandable Details */}
                          {isExpanded && (
                            <div className="mt-2 text-xs text-gray-600 border-t border-gray-200 pt-3 space-y-3">
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-2 text-indigo-600" />
                                <span>{college.email}</span>
                              </div>
                              <div className="flex items-center">
                                <Globe className="w-4 h-4 mr-2 text-indigo-600" />
                                <span>{college.website}</span>
                              </div>

                              {/* Rating Section */}
                              <div className="pt-2">
                                <div className="flex items-center justify-between bg-amber-50 p-2 rounded-lg border border-amber-200">
                                  <div className="flex items-center">
                                    <span className="text-xs font-bold text-gray-700 mr-2">Rating: {college.rating.toFixed(1)}</span>
                                    <div className="flex space-x-0.5">
                                      {generateRatingStars(college.rating)}
                                    </div>
                                  </div>
                                  <span className="text-xs text-gray-500">({college.reviews} reviews)</span>
                                </div>

                                {/* Rating Breakdown */}
                                <div className="mt-2 space-y-1">
                                  {Object.keys(college.ratingBreakdown).sort((a, b) => parseInt(b) - parseInt(a)).map(star => {
                                    const percentage = totalRatingCount > 0 ? (college.ratingBreakdown[star as unknown as keyof typeof college.ratingBreakdown] / totalRatingCount) * 100 : 0;
                                    return (
                                      <div key={star} className="flex items-center text-xs">
                                        <span className="w-4">{star}★</span>
                                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 mx-2">
                                          <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                                        </div>
                                        <span>{Math.round(percentage)}%</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {shouldShowAd && index < currentColleges.length - 1 && generateAdSection()}
                    </div>
                  );
                })}
              </div>

              {/* No Results */}
              {filteredColleges.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">No colleges found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search criteria or filters to find more colleges.
                  </p>
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <Button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </Button>
                  <div className="flex space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      const pageNum = i + 1;
                      return (
                        <Button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-1 rounded-md text-sm ${pageNum === currentPage
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  <Button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #667eea;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #667eea;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
          border: none;
        }
      `}</style>
    </div>
  );
}