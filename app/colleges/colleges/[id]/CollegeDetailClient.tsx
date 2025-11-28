'use client';

import { useState, useEffect } from 'react';
import { MapPin, Users, Star, Calendar, Award, Phone, Mail, Globe, ChevronDown, ChevronUp, GraduationCap, BookOpen, Building, Clock, CheckCircle, ExternalLink, ThumbsUp, MessageCircle, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface College {
  id: string;
  name: string;
  location: string;
  district: string;
  province: string;
  rating: number;
  students: number;
  level: string;
  type: string;
  courses: string[];
  fees: string;
  established: number;
  image: string;
  description: string;
  facilities: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  admissionProcess: string[];
  eligibility: { [key: string]: string };
  scholarships: string[];
  gallery: string[];
}

interface CollegeDetailClientProps {
  college: College;
}

export default function CollegeDetailClient({ college }: CollegeDetailClientProps) {
  const [activeSection, setActiveSection] = useState('courses-fees');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Sample events data
  const events: { [key: string]: string } = {
    '2024-6-15': 'Open House Day',
    '2024-6-22': 'Tech Symposium',
    '2024-6-30': 'Application Deadline'
  };



  const sampleReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      program: 'Computer Science, 2022',
      rating: 4.5,
      date: '3 weeks ago',
      avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
      comment: 'The Computer Science program is outstanding. The professors are industry experts who bring real-world experience into the classroom. The curriculum is well-structured with a perfect balance of theory and practical applications.',
      likes: 24
    },
    {
      id: 2,
      name: 'Michael Chen',
      program: 'MBA, 2021',
      rating: 4.0,
      date: '1 month ago',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      comment: 'The MBA program transformed my career. The case study approach and networking opportunities with industry leaders were invaluable. The career services team helped me secure an internship at a Fortune 500 company.',
      likes: 18
    },
    {
      id: 3,
      name: 'Priya Patel',
      program: 'Engineering, 2023',
      rating: 5.0,
      date: '2 months ago',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      comment: 'The engineering lab facilities are world-class. I got to work on cutting-edge projects with faculty who are pioneers in their fields. The industry partnerships provide amazing internship opportunities.',
      likes: 32
    }
  ];

  const renderCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    const today = new Date();
    
    const calendarDays = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      calendarDays.push(
        <div key={`prev-${day}`} className="calendar-day other-month text-gray-400 p-2 text-center">
          {day}
        </div>
      );
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
      const isToday = day === today.getDate() && 
                     currentMonth === today.getMonth() && 
                     currentYear === today.getFullYear();
      const hasEvent = events[dateKey];
      
      let classes = 'calendar-day current-month p-2 text-center cursor-pointer rounded-lg transition-all hover:bg-blue-100';
      if (isToday) classes += ' bg-blue-500 text-white font-bold';
      if (hasEvent) classes += ' bg-blue-100 text-blue-800';
      
      calendarDays.push(
        <div key={day} className={classes} title={hasEvent || ''}>
          {day}
          {hasEvent && <div className="w-1 h-1 bg-blue-500 rounded-full mx-auto mt-1"></div>}
        </div>
      );
    }
    
    return calendarDays;
  };

  const generateRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400/50 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['courses-fees', 'admission', 'reviews-comments', 'departments', 'gallery', 'scholarships', 'hostels', 'qna'];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section with Cover Photo */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src={college.image}
          alt={`${college.name} Campus`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full text-white pb-6 md:pb-8">
          <div className="p-6 md:p-8">
            <div className="flex items-center mb-2">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-md">{college.name}</h1>
              <span className="ml-4 bg-blue-600 text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full flex items-center shadow">
                <Star className="w-3 h-3 mr-1" /> {college.rating} Rated
              </span>
            </div>
            <p className="text-lg md:text-xl font-medium mb-1 flex items-center drop-shadow">
              <MapPin className="w-5 h-5 mr-2" />
              {college.contact.address}
            </p>
            <p className="text-md md:text-lg flex items-center drop-shadow">
              <Calendar className="w-5 h-5 mr-2" />
              Established: {college.established} | <GraduationCap className="w-5 h-5 ml-2 mr-2" /> {college.type === 'public' ? 'Public' : 'Private'} Institution
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b py-3 px-4 md:px-8 mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto space-x-4 no-scrollbar">
            {[
              { id: 'courses-fees', icon: GraduationCap, label: 'Courses & Fees' },
              { id: 'admission', icon: BookOpen, label: 'Admission' },
              { id: 'reviews-comments', icon: Star, label: 'Reviews' },
              { id: 'departments', icon: Building, label: 'Departments' },
              { id: 'gallery', icon: Search, label: 'Gallery' },
              { id: 'scholarships', icon: Award, label: 'Scholarships' },
              { id: 'hostels', icon: Building, label: 'Hostels' },
              { id: 'qna', icon: MessageCircle, label: 'Q&A' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link flex flex-col items-center px-4 py-3 rounded-lg transition-all whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-indigo-100 text-indigo-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-indigo-600'
                }`}
              >
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="container mx-auto p-4 md:p-8 flex flex-col lg:flex-row gap-8 mt-6">
        {/* Left Content Column */}
        <div className="flex-1 lg:w-2/3 space-y-8">
          {/* Courses & Fees Section */}
          <section id="courses-fees" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Courses & Fees</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Course</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Annual Fees</th>
                  </tr>
                </thead>
                <tbody>
                  {college.courses.map((course, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-3 font-medium">{course}</td>
                      <td className="border border-gray-200 px-4 py-3">4 Years</td>
                      <td className="border border-gray-200 px-4 py-3">{college.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
              Fees are subject to change. Please refer to the official college website for the latest updates.
            </p>
          </section>

          {/* Admission Process Section */}
          <section id="admission" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-indigo-100 text-indigo-600 mr-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Admission Process</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Admission Requirements</h3>
                </div>
                <div className="space-y-4">
                  {Object.entries(college.eligibility).map(([level, criteria]) => (
                    <div key={level} className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {level === '+2' ? '+2 Level' : 
                         level === 'bachelors' ? 'Bachelor\'s Degree' : 
                         'Master\'s Degree'}
                      </h4>
                      <p className="text-gray-600">{criteria}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Application Process</h3>
                </div>
                <div className="space-y-4">
                  {college.admissionProcess.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Online Application Portal</h3>
              </div>
              <p className="text-gray-700 mb-4">For detailed eligibility criteria and application forms, please visit our official admissions portal.</p>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-200 flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" /> Apply Now
              </Button>
            </div>
          </section>

          {/* Departments Section */}
          <section id="departments" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                <Building className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Departments & Programs</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {college.courses.slice(0, 4).map((course, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md mr-4 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{course}</h3>
                      <p className="text-sm text-gray-600 mt-1">Comprehensive program with modern curriculum and industry exposure</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Modern Curriculum</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Industry Exposure</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Practical Learning</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 flex items-center mx-auto">
              <ChevronDown className="w-4 h-4 mr-2" /> View All Departments
            </Button>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-red-100 text-red-600 mr-4">
                <Search className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Campus Gallery</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {college.gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                  <img
                    src={image}
                    alt={`${college.name} campus ${index + 1}`}
                    className="w-full h-40 md:h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-sm transition-colors duration-200 flex items-center mx-auto">
              <Search className="w-4 h-4 mr-2" /> View Full Gallery
            </Button>
          </section>

          {/* Reviews & Comments Section */}
          <section id="reviews-comments" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-yellow-100 text-yellow-600 mr-4">
                <Star className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Student Reviews</h2>
            </div>
            
            <div className="space-y-6">
              {sampleReviews.map((review) => (
                <div key={review.id} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="flex items-start mb-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{review.program}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        <div className="flex mr-2">
                          {generateRatingStars(review.rating)}
                        </div>
                        <span className="text-xs text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-3">
                    <button className="flex items-center mr-4 hover:text-blue-600">
                      <ThumbsUp className="w-4 h-4 mr-1" /> {review.likes}
                    </button>
                    <button className="flex items-center mr-4 hover:text-blue-600">
                      <MessageCircle className="w-4 h-4 mr-1" /> Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Write Your Review</h3>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Rating</label>
                  <div className="flex text-2xl">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-6 h-6 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Review</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4} placeholder="Share your experience..."></textarea>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200">
                  Submit Review
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="lg:w-1/3 space-y-8">
          {/* Quick Facts Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Quick Facts</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Users className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Total Students</h3>
                  <p className="text-lg font-bold text-gray-800">{college.students.toLocaleString()}+</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Calendar className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Established</h3>
                  <p className="text-lg font-bold text-gray-800">{college.established}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Award className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Type</h3>
                  <p className="text-lg font-bold text-gray-800">{college.type === 'public' ? 'Public' : 'Private'}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Star className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Rating</h3>
                  <p className="text-lg font-bold text-gray-800">{college.rating}/5.0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarships Section */}
          <section id="scholarships" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 text-green-600 mr-3">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Scholarships</h2>
            </div>
            
            <div className="space-y-4">
              {college.scholarships.map((scholarship, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-1">Merit Scholarship</h3>
                  <p className="text-sm text-gray-700 mb-2">{scholarship}</p>
                  <div className="flex items-center text-xs text-blue-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Apply by: December 31</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 mr-2" /> View All Scholarship Details
            </Button>
          </section>

          {/* Hostels Section */}
          <section id="hostels" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600 mr-3">
                <Building className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Hostels & Accommodation</h2>
            </div>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1580216643062-cf460548a66a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=200&q=80"
                  alt="Hostel"
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Student Hostel</h3>
                  <p className="text-sm text-gray-600 mb-2">Modern accommodation with all amenities</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{college.fees}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2">Facilities Include:</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {college.facilities.map((facility, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>{facility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Events Calendar Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-red-100 text-red-600 mr-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Upcoming Events</h2>
            </div>
            
            {/* Calendar Widget */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => {
                    if (currentMonth === 0) {
                      setCurrentMonth(11);
                      setCurrentYear(currentYear - 1);
                    } else {
                      setCurrentMonth(currentMonth - 1);
                    }
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronDown className="w-4 h-4 rotate-90" />
                </button>
                <h3 className="font-semibold">{months[currentMonth]} {currentYear}</h3>
                <button
                  onClick={() => {
                    if (currentMonth === 11) {
                      setCurrentMonth(0);
                      setCurrentYear(currentYear + 1);
                    } else {
                      setCurrentMonth(currentMonth + 1);
                    }
                  }}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-600 mb-2">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-sm">
                {renderCalendar()}
              </div>
            </div>
            
            {/* Event List */}
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <div className="font-semibold text-blue-800">Open House Day</div>
                <div className="text-sm text-gray-600 flex items-center mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>June 15, 2024 | 10:00 AM - 4:00 PM</span>
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Main Campus Auditorium</span>
                </div>
                <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Open Day</span>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <div className="font-semibold text-purple-800">Tech Symposium 2024</div>
                <div className="text-sm text-gray-600 flex items-center mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>June 22-24, 2024 | 9:00 AM - 5:00 PM</span>
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Engineering Block</span>
                </div>
                <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Conference</span>
              </div>
            </div>
            
            <Button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm transition-colors duration-200 flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-2" /> View All Events
            </Button>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-600 mr-3">
                <Phone className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Contact Information</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <MapPin className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Address</h3>
                  <p className="text-gray-800">{college.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Phone className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Phone</h3>
                  <p className="text-gray-800">{college.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Mail className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Email</h3>
                  <p className="text-gray-800">{college.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-2 rounded-full mr-3">
                  <Globe className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">Website</h3>
                  <a href={`https://${college.contact.website}`} className="text-blue-600 hover:underline">{college.contact.website}</a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Q&A Section (Full Width) */}
      <section id="qna" className="bg-white py-8 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What are the admission requirements?",
                answer: "Admission requirements vary by program. Generally, you need to meet the minimum academic criteria and pass the entrance examination."
              },
              {
                question: "Does the college provide placement assistance?",
                answer: "Yes, we have a dedicated placement cell that works with industry partners to provide job opportunities for our graduates."
              },
              {
                question: "Are there research opportunities for students?",
                answer: "Absolutely! We encourage student research through various programs and provide opportunities to work with faculty on research projects."
              },
              {
                question: "What is the student-faculty ratio?",
                answer: "We maintain a healthy student-faculty ratio to ensure personalized attention and quality education for all students."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-full mr-3 flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Question</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={3}></textarea>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200">
                Submit Question
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StudSphere</h3>
            <p className="text-gray-400 mb-4">Your trusted partner in finding the perfect educational path in Nepal.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/colleges" className="text-gray-400 hover:text-white transition-colors">Colleges</Link></li>
              <li><Link href="/exams" className="text-gray-400 hover:text-white transition-colors">Exams</Link></li>
              <li><Link href="/scholarships" className="text-gray-400 hover:text-white transition-colors">Scholarships</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Study Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Kathmandu, Nepal</p>
              <p className="mb-2">Phone: +977 9876543210</p>
              <p className="mb-2">Email: support@studsphere.com</p>
            </address>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 StudSphere. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}