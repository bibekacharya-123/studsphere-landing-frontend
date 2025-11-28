"use client";

import { useState, useEffect } from "react";

export default function AdmissionsHeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [program, setProgram] = useState("");
    const [location, setLocation] = useState("");
    const [minFee, setMinFee] = useState("");
    const [maxFee, setMaxFee] = useState("");

    const images = [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=1200",
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleDotClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        // You can connect this to parent or context as needed
        // For now, just alert
        alert(`Searching for: Program=${program}, Location=${location}, MinFee=${minFee}, MaxFee=${maxFee}`);
    }

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center">
            {/* Background Image Slider */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Admission Campus ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        style={{ filter: 'brightness(0.4)' }}
                    />
                ))}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10" />
                <div className="relative z-20 max-w-3xl w-full mx-auto p-8 flex flex-col items-center">
<h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-900 text-center">
                    Start Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Academic Journey</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 text-center">
                    Explore admission opportunities across top colleges and universities. Find programs, check eligibility, and apply for your dream course.
                </p>
                </div>

            {/* Unified Main Box */}
            <div className="relative z-20 max-w-3xl w-full mx-auto p-8 bg-white/90 rounded-2xl shadow-2xl flex flex-col items-center">
                
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full mb-2">
                    <input
                        type="text"
                        placeholder="Program (e.g. Engineering)"
                        value={program}
                        onChange={e => setProgram(e.target.value)}
                        className="w-full sm:w-56 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                        type="text"
                        placeholder="Location (e.g. Kathmandu)"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                        type="number"
                        placeholder="Min Fee"
                        value={minFee}
                        onChange={e => setMinFee(e.target.value)}
                        className="w-full sm:w-28 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                        type="number"
                        placeholder="Max Fee"
                        value={maxFee}
                        onChange={e => setMaxFee(e.target.value)}
                        className="w-full sm:w-28 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Search
                    </button>
                </form>
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
