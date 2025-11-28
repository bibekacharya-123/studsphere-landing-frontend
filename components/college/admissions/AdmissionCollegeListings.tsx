"use client";

import { useState } from "react";
import { Filter, Star, University, MapPin } from "lucide-react";

// Dummy data for demonstration
const colleges = [
    {
        id: 1,
        name: "ABC College",
        imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        logoColor: "bg-blue-500",
        rating: 4.5,
        location: "Kathmandu",
        university: "TU",
        type: "Private",
        programs: ["Engineering", "Business"],
        fee: 200000,
        affiliation: "TU",
        deadline: "2025-10-01",
    },
    {
        id: 2,
        name: "XYZ Institute",
        imageUrl: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
        logoColor: "bg-green-500",
        rating: 4.2,
        location: "Lalitpur",
        university: "KU",
        type: "Public",
        programs: ["Science", "Arts"],
        fee: 150000,
        affiliation: "KU",
        deadline: "2025-09-20",
    },
    {
        id: 3,
        name: "Everest Engineering",
        imageUrl: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        logoColor: "bg-red-500",
        rating: 4.8,
        location: "Pokhara",
        university: "PU",
        type: "Private",
        programs: ["Engineering"],
        fee: 250000,
        affiliation: "PU",
        deadline: "2025-11-15",
    },
    {
        id: 4,
        name: "Himalaya Business School",
        imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        logoColor: "bg-yellow-500",
        rating: 3.9,
        location: "Biratnagar",
        university: "TU",
        type: "Public",
        programs: ["Business", "Arts"],
        fee: 120000,
        affiliation: "TU",
        deadline: "2025-09-30",
    },
    {
        id: 5,
        name: "Sagarmatha Science Campus",
        imageUrl: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80",
        logoColor: "bg-purple-500",
        rating: 4.0,
        location: "Dharan",
        university: "KU",
        type: "Private",
        programs: ["Science"],
        fee: 180000,
        affiliation: "KU",
        deadline: "2025-10-10",
    },
];

export default function AdmissionCollegeListings() {
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    const [sortBy, setSortBy] = useState("default");
    const [viewMode, setViewMode] = useState("grid");

    // Filter states (dummy for now)
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedProgram, setSelectedProgram] = useState("");
    const [selectedCourses, setSelectedCourses] = useState("");
    const [feeRange, setFeeRange] = useState({ min: "", max: "" });
    const [selectedAffiliation, setSelectedAffiliation] = useState("");
    const [selectedRating, setSelectedRating] = useState("");
    const [deadlineRange, setDeadlineRange] = useState({ from: "", to: "" });

    // Filter logic
    const sortedColleges = colleges.filter((college) => {
        if (selectedLevel && !college.programs.some(p => p.toLowerCase() === selectedLevel)) return false;
        if (selectedType && college.type !== selectedType) return false;
        if (selectedCity && college.location !== selectedCity) return false;
        if (selectedProgram && !college.programs.includes(selectedProgram)) return false;
        if (selectedCourses && college.university !== selectedCourses) return false;
        if (feeRange.min && college.fee < Number(feeRange.min)) return false;
        if (feeRange.max && college.fee > Number(feeRange.max)) return false;
        if (selectedAffiliation && college.affiliation !== selectedAffiliation) return false;
        if (selectedRating && Math.floor(college.rating) < Number(selectedRating)) return false;
        if (deadlineRange.from && college.deadline < deadlineRange.from) return false;
        if (deadlineRange.to && college.deadline > deadlineRange.to) return false;
        return true;
    });

    function clearFilters() {
        setSelectedLevel("");
        setSelectedType("");
        setSelectedCity("");
        setSelectedProgram("");
        setSelectedCourses("");
        setFeeRange({ min: "", max: "" });
        setSelectedAffiliation("");
        setSelectedRating("");
        setDeadlineRange({ from: "", to: "" });
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-6">
                {/* Mobile filter button */}
                <div className="sm:hidden flex justify-end mb-4">
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm"
                        onClick={() => setShowMobileFilter(true)}
                    >
                        <Filter className="w-5 h-5" /> Filters
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Filter Sidebar (desktop) */}
                    <div className="hidden sm:block w-80 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-6 max-h-[calc(100vh-48px)] overflow-y-auto custom-scrollbar">
                        <div className="space-y-6">
                            {/* Level */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                                <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="business">Business</option>
                                    <option value="science">Science</option>
                                    <option value="arts">Arts</option>
                                </select>
                            </div>
                            {/* Type */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                                <select value={selectedType} onChange={e => setSelectedType(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="Private">Private</option>
                                    <option value="Public">Public</option>
                                </select>
                            </div>
                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="Kathmandu">Kathmandu</option>
                                    <option value="Lalitpur">Lalitpur</option>
                                    <option value="Pokhara">Pokhara</option>
                                    <option value="Biratnagar">Biratnagar</option>
                                    <option value="Dharan">Dharan</option>
                                </select>
                            </div>
                            {/* Program */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Program</label>
                                <select value={selectedProgram} onChange={e => setSelectedProgram(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Business">Business</option>
                                    <option value="Science">Science</option>
                                    <option value="Arts">Arts</option>
                                </select>
                            </div>
                            {/* University/Courses */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                                <select value={selectedCourses} onChange={e => setSelectedCourses(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="TU">Tribhuvan University</option>
                                    <option value="KU">Kathmandu University</option>
                                    <option value="PU">Pokhara University</option>
                                </select>
                            </div>
                            {/* Fee Range */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Fee Range</label>
                                <div className="flex gap-2">
                                    <input type="number" placeholder="Min" value={feeRange.min} onChange={e => setFeeRange(prev => ({ ...prev, min: e.target.value }))} className="flex-1 w-14 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                    <span className="text-gray-500 self-center">to</span>
                                    <input type="number" placeholder="Max" value={feeRange.max} onChange={e => setFeeRange(prev => ({ ...prev, max: e.target.value }))} className="flex-1 px-3 py-2 w-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                </div>
                            </div>
                            {/* Affiliation */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Affiliation</label>
                                <select value={selectedAffiliation} onChange={e => setSelectedAffiliation(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="TU">TU</option>
                                    <option value="KU">KU</option>
                                    <option value="PU">PU</option>
                                </select>
                            </div>
                            {/* Rating */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                                <select value={selectedRating} onChange={e => setSelectedRating(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                    <option value="">All</option>
                                    <option value="4">4 & above</option>
                                    <option value="3">3 & above</option>
                                    <option value="2">2 & above</option>
                                </select>
                            </div>
                            {/* Deadline */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                                <div className="flex gap-2">
                                    <input type="date" value={deadlineRange.from} onChange={e => setDeadlineRange(prev => ({ ...prev, from: e.target.value }))} className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                    <span className="text-gray-500 self-center text-sm">to</span>
                                    <input type="date" value={deadlineRange.to} onChange={e => setDeadlineRange(prev => ({ ...prev, to: e.target.value }))} className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                </div>
                            </div>
                            {/* Reset Button */}
                            <div className="flex gap-2 pt-4">
                                <button onClick={clearFilters} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">Reset</button>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Filter Drawer */}
                    {showMobileFilter && (
                        <div className="fixed inset-0 z-40 flex">
                            <div className="fixed inset-0 bg-black bg-opacity-30" onClick={() => setShowMobileFilter(false)}></div>
                            <div className="relative bg-white w-11/12 max-w-xs h-full shadow-xl p-6 overflow-y-auto custom-scrollbar">
                                {/* Example filter field */}
                                <div className="space-y-6">
                                    {/* Level */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                                        <select value={selectedLevel} onChange={e => setSelectedLevel(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="engineering">Engineering</option>
                                            <option value="business">Business</option>
                                            <option value="science">Science</option>
                                            <option value="arts">Arts</option>
                                        </select>
                                    </div>
                                    {/* Type */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                                        <select value={selectedType} onChange={e => setSelectedType(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="Private">Private</option>
                                            <option value="Public">Public</option>
                                        </select>
                                    </div>
                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                        <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="Kathmandu">Kathmandu</option>
                                            <option value="Lalitpur">Lalitpur</option>
                                            <option value="Pokhara">Pokhara</option>
                                            <option value="Biratnagar">Biratnagar</option>
                                            <option value="Dharan">Dharan</option>
                                        </select>
                                    </div>
                                    {/* Program */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Program</label>
                                        <select value={selectedProgram} onChange={e => setSelectedProgram(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Business">Business</option>
                                            <option value="Science">Science</option>
                                            <option value="Arts">Arts</option>
                                        </select>
                                    </div>
                                    {/* University/Courses */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                                        <select value={selectedCourses} onChange={e => setSelectedCourses(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="TU">Tribhuvan University</option>
                                            <option value="KU">Kathmandu University</option>
                                            <option value="PU">Pokhara University</option>
                                        </select>
                                    </div>
                                    {/* Fee Range */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Fee Range</label>
                                        <div className="flex gap-2">
                                            <input type="number" placeholder="Min" value={feeRange.min} onChange={e => setFeeRange(prev => ({ ...prev, min: e.target.value }))} className="flex-1 w-14 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                            <span className="text-gray-500 self-center">to</span>
                                            <input type="number" placeholder="Max" value={feeRange.max} onChange={e => setFeeRange(prev => ({ ...prev, max: e.target.value }))} className="flex-1 px-3 py-2 w-16 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </div>
                                    </div>
                                    {/* Affiliation */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Affiliation</label>
                                        <select value={selectedAffiliation} onChange={e => setSelectedAffiliation(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="TU">TU</option>
                                            <option value="KU">KU</option>
                                            <option value="PU">PU</option>
                                        </select>
                                    </div>
                                    {/* Rating */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                                        <select value={selectedRating} onChange={e => setSelectedRating(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                                            <option value="">All</option>
                                            <option value="4">4 & above</option>
                                            <option value="3">3 & above</option>
                                            <option value="2">2 & above</option>
                                        </select>
                                    </div>
                                    {/* Deadline */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Deadline</label>
                                        <div className="flex gap-2">
                                            <input type="date" value={deadlineRange.from} onChange={e => setDeadlineRange(prev => ({ ...prev, from: e.target.value }))} className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                            <span className="text-gray-500 self-center text-sm">to</span>
                                            <input type="date" value={deadlineRange.to} onChange={e => setDeadlineRange(prev => ({ ...prev, to: e.target.value }))} className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                                        </div>
                                    </div>
                                    {/* Reset/Apply Buttons */}
                                    <div className="flex gap-2 pt-4">
                                        <button onClick={() => { clearFilters(); setShowMobileFilter(false); }} className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm">Reset</button>
                                        <button onClick={() => setShowMobileFilter(false)} className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Results Counter */}
                        <div className="mb-4">
                            <p className="text-gray-600 text-sm">
                                Showing <span className="font-semibold">{sortedColleges.length}</span> colleges with open admissions
                            </p>
                        </div>
                        {/* Header with Sort */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <span className="text-sm text-gray-600">Sort by</span>
                                <select
                                    value={sortBy}
                                    onChange={e => setSortBy(e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                >
                                    <option value="default">Default</option>
                                    <option value="name">Name</option>
                                    <option value="rating">Rating</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
                                >
                                    <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                        <div className="bg-current rounded-sm"></div>
                                        <div className="bg-current rounded-sm"></div>
                                        <div className="bg-current rounded-sm"></div>
                                        <div className="bg-current rounded-sm"></div>
                                    </div>
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "text-gray-400"}`}
                                >
                                    <div className="w-4 h-4 space-y-1">
                                        <div className="h-0.5 bg-current rounded"></div>
                                        <div className="h-0.5 bg-current rounded"></div>
                                        <div className="h-0.5 bg-current rounded"></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        {/* College Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                            {sortedColleges.map((college) => (
                                <div
                                    key={college.id}
                                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                                >
                                    {/* College Image */}
                                    <div className="relative">
                                        <img
                                            src={college.imageUrl}
                                            alt={college.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                                            <Star className="w-3 h-3 fill-current" />
                                            {college.rating}
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <div className={`w-12 h-12 ${college.logoColor} rounded-full flex items-center justify-center`}>
                                                <University className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* College Info */}
                                    <div className="p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-gray-900 text-lg">{college.name}</h3>
                                            <span className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-full font-medium">✓</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-600 mb-3">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{college.location}</span>
                                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded ml-2">{college.university}</span>
                                            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">{college.type}</span>
                                        </div>
                                        {/* Programs */}
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-1">
                                                {college.programs.map((program, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-2 py-1 text-xs rounded-full ${index === 0 ? "bg-green-100 text-green-700" : index === 1 ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}
                                                    >
                                                        {program}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Action Buttons */}
                                        <div className="flex gap-2">
                                            <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">Apply Now</button>
                                            <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50 transition-colors">Get Counseling</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Banner Image */}
                        <div className="mt-8 sm:mt-12">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=300"
                                alt="Education Banner"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
