'use client';

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';

interface CollegeLinkData {
  text: string;
  url: string;
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showPredictorWidget, setShowPredictorWidget] = useState(true);

  const images = [
    "https://media.edusanjal.com/uploads/NEC-pic.jpg",
    "https://wms.edigitalnepal.com/wms/files/ws-post-images/1721376755536_a3e7eaa1-89bd-4e71-a2aa-d6d170b26387.jpg",
    "https://wms.edigitalnepal.com/wms/files/ws-post-images/1746680157939_e86a10b4-e740-496b-bb7c-21ddbd5fd681.jpg",
    "https://media.collegeinfonepal.com/information_category/Top-BCA-College-in-Nepal.jpg",
    "https://apexcollege.edu.np/images/homepage/university/uni-photo-new-new.png"
  ];

  const collegeLinksData: CollegeLinkData[] = [
    { text: "collegeinfo.org", url: "https://www.collegeboard.org/" },
    { text: "techuniversity.edu", url: "https://web.mit.edu/" },
    { text: "businessschool.com", url: "https://www.wharton.upenn.edu/" },
    { text: "medicalacademy.org", url: "https://www.hopkinsmedicine.org/" },
    { text: "artscollege.edu", url: "https://www.risd.edu/" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Auto-hide widget after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPredictorWidget(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`You searched for: "${searchTerm}". In a full application, results would be displayed here.`);
    } else {
      alert("Please enter a college name, location, or program to search.");
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentCollegeLink = collegeLinksData[currentImageIndex];
  const displayText = currentCollegeLink?.text.startsWith('www.')
    ? currentCollegeLink.text.substring(4)
    : currentCollegeLink?.text;

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up-delay-2 {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up-delay-2 1s ease-out 0.6s both;
        }
      `}</style>
      <div className="relative w-full p-4">
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center rounded-3xl overflow-hidden">
          {/* Background Image Slider */}
          <div className="absolute inset-0 z-0">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`College Campus ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{ filter: 'brightness(0.7)' }}
              />
            ))}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 text-center max-w-4xl mx-auto p-8 animate-fade-in-up">
            <h1 className="text-6xl lg:text-4xl md:text-3xl sm:text-2xl leading-tight font-extrabold mb-6 text-white text-shadow-strong letter-spacing-tight">
              Find Your Perfect <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">College</span>
            </h1>

            <p className="text-xl md:text-lg text-white/95 mb-10 max-w-2xl mx-auto text-shadow-medium font-normal leading-relaxed">
              Discover and compare colleges with our free search tool. Get insights on admissions, programs, and student reviews to build your ideal college list.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto animate-fade-in-up-delay mb-8">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by college name, location, or program..."
                className="w-full py-5 pl-14 pr-32 rounded-full border border-white/40 text-lg bg-white/98 shadow-xl transition-all duration-400 focus:outline-none focus:border-blue-500 focus:shadow-2xl focus:bg-white text-gray-800"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white py-3 px-6 rounded-full font-semibold transition-all duration-400 hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Search
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="text-white/80 text-sm">Your recent visit:</span>
              <Link href="/colleges" className="text-white hover:text-blue-300 text-sm underline">BIT Colleges</Link>
              <Link href="/colleges/predictor" className="text-white hover:text-blue-300 text-sm underline">college Predictor</Link>
              <Link href="/colleges/scholarships" className="text-white hover:text-blue-300 text-sm underline">Scholarship</Link>
            </div>
          </div>

          {/* College Predictor Widget - Positioned on the right */}
          {showPredictorWidget && (
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-25 animate-fade-in-up-delay-2 hidden lg:block">
              <div className="bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-white/40 w-48 transform hover:scale-105 transition-all duration-300 relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowPredictorWidget(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
                >
                  ×
                </button>
                <div className="text-center">
                  <div className="w-full h-20 mb-3 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 mb-1">
                    Predict Your College
                  </h3>
                  <p className="text-xs text-gray-800 font-medium mb-1">
                    with Ease
                  </p>
                  <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                    Get personalized recommendations
                  </p>
                  <Link
                    href="/colleges/predictor"
                    className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white py-1.5 px-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform text-xs"
                  >
                    Start →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-25 animate-fade-in">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full border border-white/40 transition-all duration-400 ${index === currentImageIndex
                  ? 'bg-white scale-130 shadow-white'
                  : 'bg-white/70 hover:bg-white/90'
                  }`}
              />
            ))}
          </div>

          {/* College Link Container */}
          {currentCollegeLink && (
            <div className="absolute bottom-8 right-8 z-25 bg-white py-3 px-6 rounded-full shadow-lg transition-all duration-400 hover:transform hover:-translate-y-2 hover:shadow-xl border border-white/40 backdrop-blur-sm animate-fade-in">
              <a
                href={currentCollegeLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-all duration-200"
              >
                {displayText}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}