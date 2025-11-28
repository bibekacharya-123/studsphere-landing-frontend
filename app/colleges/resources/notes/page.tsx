"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import {
    Search,
    Bell,
    Star,
    Download,
    Eye,
    Filter,
    MoreVertical} from 'lucide-react';

const NotesPage = () => {
    const [activeTab, setActiveTab] = useState('notes');

    // Mock data
    const user = {
        name: "Jagdish Dhami",
        email: "jagdish@studsphere.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        credits: 50
    };

    const notes = [
        {
            id: 1,
            title: "Engineering Mathematics - Integration Rules",
            subject: "Engineering Mathematics",
            university: "Purbanchal University",
            course: "Bachelor in Information Technology",
            rating: 4.2,
            downloads: 245,
            views: 1280,
            type: "PDF",
            pages: 24,
            uploadDate: "2 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 2,
            title: "Data Structures and Algorithms - Sorting Techniques",
            subject: "Computer Science",
            university: "Tribhuvan University",
            course: "Bachelor in Computer Science",
            rating: 4.5,
            downloads: 312,
            views: 1567,
            type: "PDF",
            pages: 18,
            uploadDate: "3 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 3,
            title: "Physics - Quantum Mechanics Fundamentals",
            subject: "Physics",
            university: "Kathmandu University",
            course: "Bachelor in Physics",
            rating: 4.8,
            downloads: 189,
            views: 945,
            type: "PDF",
            pages: 32,
            uploadDate: "1 week ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 4,
            title: "Chemistry - Organic Chemistry Reactions",
            subject: "Chemistry",
            university: "Purbanchal University",
            course: "Bachelor in Chemistry",
            rating: 4.3,
            downloads: 278,
            views: 1123,
            type: "PDF",
            pages: 28,
            uploadDate: "4 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 5,
            title: "Business Studies - Marketing Principles",
            subject: "Business Studies",
            university: "Tribhuvan University",
            course: "Bachelor in Business Studies",
            rating: 4.1,
            downloads: 198,
            views: 876,
            type: "PDF",
            pages: 22,
            uploadDate: "5 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 6,
            title: "Mathematics - Calculus and Derivatives",
            subject: "Mathematics",
            university: "Kathmandu University",
            course: "Bachelor in Mathematics",
            rating: 4.6,
            downloads: 334,
            views: 1455,
            type: "PDF",
            pages: 26,
            uploadDate: "1 week ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        }
    ];

    const categories = [
        { name: "Engineering", count: 45, color: "bg-blue-100 text-blue-700" },
        { name: "Science", count: 32, color: "bg-green-100 text-green-700" },
        { name: "Mathematics", count: 28, color: "bg-purple-100 text-purple-700" },
        { name: "Business", count: 21, color: "bg-orange-100 text-orange-700" },
        { name: "Arts", count: 15, color: "bg-pink-100 text-pink-700" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content */}
            <div className="flex-1">
                {/* Top Header */}
                <header className="bg-white border-b px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search Notes, Documents & Study Materials"
                                    className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-medium hover:bg-yellow-200 transition-colors">
                                Go Premium
                            </button>
                            <button className="relative p-2 text-gray-600 hover:text-gray-900">
                                <Bell className="w-6 h-6" />
                            </button>
                            <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
                                <span className="text-yellow-600 font-bold">{user.credits}</span>
                            </div>
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <div className="p-6">
                    {/* Page Title */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">📚 School and College Notes</h1>
                        <p className="text-gray-600">Access comprehensive study materials and notes from various subjects and universities</p>
                    </div>

                    {/* Filter Section */}
                    <div className="bg-white rounded-lg p-4 mb-6 border">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Filter className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-blue-600">Filter:</span>
                                <span className="text-sm text-gray-600">CLEAR APPLIED FILTER/OPTION</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Education Type</label>
                                <div className="space-y-1">
                                    <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm">University</button>
                                    <button className="text-gray-600 px-3 py-1 rounded text-sm hover:bg-gray-100">High School</button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">University Filter</label>
                                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                                    <option>Choose Your University</option>
                                    <option>Tribhuvan University</option>
                                    <option>Purbanchal University</option>
                                    <option>Kathmandu University</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject Filter</label>
                                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                                    <option>Choose Your Subject</option>
                                    <option>Engineering Mathematics</option>
                                    <option>Computer Science</option>
                                    <option>Physics</option>
                                    <option>Chemistry</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                                    <option>Choose Document Type</option>
                                    <option>Lecture Notes</option>
                                    <option>Study Guide</option>
                                    <option>Assignment</option>
                                    <option>Past Papers</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Date</label>
                                <div className="flex space-x-1">
                                    <input type="date" className="flex-1 p-2 border border-gray-300 rounded text-sm" />
                                    <input type="date" className="flex-1 p-2 border border-gray-300 rounded text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`${category.color} px-4 py-2 rounded-lg font-medium hover:opacity-80 transition-opacity`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Notes Grid */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">Latest Notes & Documents</h2>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">{notes.length} Results</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Sort by:</span>
                                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                                        <option>Latest</option>
                                        <option>Most Downloaded</option>
                                        <option>Highest Rated</option>
                                        <option>Most Viewed</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {notes.map((note) => (
                                <div key={note.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                                    <div className="relative">
                                        <img
                                            src={note.thumbnail}
                                            alt={note.title}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                                            {note.type}
                                        </div>
                                        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                                            {note.pages} pages
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{note.title}</h3>
                                        <p className="text-sm text-blue-600 mb-1">{note.subject}</p>
                                        <p className="text-xs text-gray-500 mb-3">{note.course} | {note.university}</p>

                                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span>{note.rating}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Download className="w-4 h-4" />
                                                    <span>{note.downloads}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4" />
                                                    <span>{note.views}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500">Uploaded {note.uploadDate}</span>
                                            <button className="text-blue-600 hover:bg-blue-50 p-1 rounded">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Load More Notes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotesPage;