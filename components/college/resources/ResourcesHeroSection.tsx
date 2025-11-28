'use client';

import { useState } from 'react';
import { Search, Settings } from 'lucide-react';

export default function ResourcesHeroSection() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        if (searchTerm.trim()) {
            alert(`Searching for resources: "${searchTerm}". Results would be displayed here.`);
        } else {
            alert("Please enter keywords to search for resources.");
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-white">
            {/* Subtle grid background */}
            <div className="absolute inset-0 z-0 pointer-events-none"
                 style={{
                     backgroundImage: 'linear-gradient(to right, #f6f6f6 1px, transparent 1px), linear-gradient(to bottom, #f6f6f6 1px, transparent 1px)',
                     backgroundSize: '120px 120px'
                 }}
            />

            {/* Badge */}
            <div className="relative z-10 mb-10 flex justify-center">
                <span className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#2a4a8a] text-white font-medium text-lg shadow-md">
                    <Settings className="w-5 h-5" />
                    Trusted by 10,000+ Students Worldwide
                </span>
            </div>

            {/* Heading */}
            <h1 className="relative z-10 text-center font-extrabold text-black text-6xl md:text-5xl sm:text-4xl leading-tight mb-8">
                Your Destination for Free Study<br />Materials & Notes
            </h1>

            {/* Search Bar */}
            <div className="relative z-10 max-w-3xl w-full mx-auto mt-8 flex items-center bg-white rounded-2xl shadow-lg px-8 py-6">
                <span className="text-lg text-black mr-2">Search for any</span>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Lectures"
                    className="flex-1 text-lg bg-transparent outline-none border-none text-blue-600 font-medium"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button
                    onClick={handleSearch}
                    className="ml-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200"
                >
                    Search
                </button>
            </div>
        </div>
    );
}
