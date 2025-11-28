"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/dashboard/sidebar';
import {
    Search,
    Bell,
    Star,
    Download,
    Eye,
    Filter,
    ChevronDown,
    MoreVertical
} from 'lucide-react';

const CoursesPage = () => {
    const [activeTab, setActiveTab] = useState('courses');

    // Mock data
    const user = {
        name: "Jagdish Dhami",
        email: "jagdish@studsphere.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        credits: 50
    };

    const courses = [
        {
            id: 1,
            title: "Engineering Mathematics",
            instructor: "Professor Sharma",
            rating: 4.8,
            students: 1234,
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop"
        },
        {
            id: 2,
            title: "Engineering Mathematics",
            instructor: "Professor Kumar",
            rating: 4.6,
            students: 987,
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            title: "Engineering Mathematics",
            instructor: "Professor Singh",
            rating: 4.9,
            students: 1567,
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop"
        }
    ];

    const documents = [
        {
            id: 1,
            title: "Engineering Mathematics",
            subtitle: "Bachelor in Information Technology | Purbanchal University",
            rating: 4.0,
            downloads: 200,
            views: 1200,
            type: "NEW"
        },
        {
            id: 2,
            title: "Engineering Mathematics",
            subtitle: "Bachelor in Information Technology | Purbanchal University",
            rating: 4.0,
            downloads: 250,
            views: 980,
            type: "NEW"
        },
        {
            id: 3,
            title: "Engineering Mathematics",
            subtitle: "Bachelor in Information Technology | Purbanchal University",
            rating: 4.0,
            downloads: 300,
            views: 1500,
            type: "NEW"
        },
        {
            id: 4,
            title: "Engineering Mathematics",
            subtitle: "Bachelor in Information Technology | Purbanchal University",
            rating: 4.0,
            downloads: 180,
            views: 850,
            type: "NEW"
        },
        {
            id: 5,
            title: "Engineering Mathematics",
            subtitle: "Bachelor in Information Technology | Purbanchal University",
            rating: 4.0,
            downloads: 320,
            views: 1800,
            type: "NEW"
        }
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
                                    placeholder="Search Documents,Courses & Flash Cards"
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
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Courses Filter</label>
                                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                                    <option>Choose Your Courses</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Study Material Type</label>
                                <select className="w-full p-2 border border-gray-300 rounded text-sm">
                                    <option>Choose Material Type</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Academics Year</label>
                                <div className="flex space-x-1">
                                    <input type="date" className="flex-1 p-2 border border-gray-300 rounded text-sm" />
                                    <input type="date" className="flex-1 p-2 border border-gray-300 rounded text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Courses Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center">
                                 Courses
                            </h2>
                            <button className="text-blue-600 text-sm font-medium hover:underline">See More ▼</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {courses.map((course) => (
                                <Link
                                    key={course.id}
                                    href={`/colleges/resources/courses/${course.id}`}
                                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                >
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 mb-1">{course.title}</h3>
                                        <p className="text-sm text-gray-600 mb-2">{course.instructor}</p>
                                        <div className="flex items-center justify-between text-sm">
                                            <div className="flex items-center space-x-1">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                <span>{course.rating}</span>
                                            </div>
                                            <span className="text-gray-500">{course.students.toLocaleString()} Students</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Documents & Flashcards Section */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-bold text-gray-900">📄 Documents & Flashcards</h2>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">16 Results</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Rating</span>
                                    <ChevronDown className="w-4 h-4 text-gray-600" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {documents.map((doc) => (
                                <div key={doc.id} className="bg-white rounded-lg p-4 border hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <h3 className="font-medium text-gray-900">{doc.title}</h3>
                                                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                                    {doc.type}
                                                </span>
                                            </div>
                                            <p className="text-sm text-blue-600 mb-2">{doc.subtitle}</p>
                                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span>{doc.rating}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Download className="w-4 h-4" />
                                                    <span>{doc.downloads}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4" />
                                                    <span>{doc.views}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="p-2 hover:bg-gray-100 rounded">
                                            <MoreVertical className="w-4 h-4 text-gray-400" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-6">
                            <button className="text-blue-600 font-medium hover:underline">See More ↓</button>
                        </div>
                    </div>

                    {/* Save To Study List Modal Trigger (for demonstration) */}
                    <div className="fixed bottom-6 right-6">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
                            📝 Create New List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;