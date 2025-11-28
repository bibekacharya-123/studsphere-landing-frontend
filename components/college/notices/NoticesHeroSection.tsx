'use client';

import { useState, useEffect } from 'react';
import { Search, Bell, Filter } from 'lucide-react';

export default function NoticesHeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const images = [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleSearch = () => {
        if (searchTerm.trim()) {
            alert(`Searching for notices: "${searchTerm}". Results would be displayed here.`);
        } else {
            alert("Please enter keywords to search for notices.");
        }
    };

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
            {/* Background Image Slider */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Notice Board ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ filter: 'brightness(0.4)' }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-800/50 to-purple-900/70 z-10" />

            {/* Main Content */}
            <div className="relative z-20 text-center max-w-6xl mx-auto p-8">
                <div className="mb-8">
                    <div className="flex items-center justify-center mb-6">
                        <Bell className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
                        <span className="inline-block bg-yellow-500/20 text-yellow-300 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wide border border-yellow-400/30">
                            Latest Notices & Updates
                        </span>
                    </div>
                    <h1 className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl leading-tight font-extrabold mb-6 text-white">
                        Stay <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Informed</span> & Updated
                    </h1>

                    <p className="text-xl md:text-lg text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Get the latest notices, announcements, and important updates from colleges and universities. Never miss an important deadline or opportunity.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-3xl mx-auto mb-12">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search notices by college, exam, or keyword..."
                        className="w-full py-6 pl-16 pr-36 rounded-full border border-white/20 text-lg bg-white/95 backdrop-blur-sm shadow-2xl transition-all duration-400 focus:outline-none focus:border-yellow-400 focus:shadow-yellow-500/25 text-gray-800"
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                        onClick={handleSearch}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 px-8 rounded-full font-semibold transition-all duration-400 hover:from-yellow-600 hover:to-orange-700 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <Filter className="w-5 h-5" />
                    </button>
                </div>

                {/* Quick Filter Tags */}
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {['Admission Notice', 'Exam Schedule', 'Results', 'Scholarships', 'Fee Updates', 'Events'].map((tag, index) => (
                        <button
                            key={index}
                            className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-25">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 rounded-full border border-white/40 transition-all duration-400 ${index === currentImageIndex
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
