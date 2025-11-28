"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import {
    BookOpen,
    Bell,
    Search,
    Upload
} from 'lucide-react';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    // Mock data
    const user = {
        name: "Jagdish Dhami",
        email: "jagdish@studsphere.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        isPremium: true,
        credits: 50
    };

    const recommendedDocs = [
        {
            id: 1,
            title: "Integration Rules.Pdf",
            subject: "Basic Mathematics",
            type: "Lectures",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 2,
            title: "Integration Rules.Pdf",
            subject: "Basic Mathematics",
            type: "Lectures",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 3,
            title: "Integration Rules.Pdf",
            subject: "Basic Mathematics",
            type: "Lectures",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        },
        {
            id: 4,
            title: "Integration Rules.Pdf",
            subject: "Basic Mathematics",
            type: "Lectures",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=150&h=200&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
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
                                    placeholder="Search documents,courses & flashcards"
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

                {/* Main Dashboard Content */}
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">
                        Hey, {user.name.split(' ')[0]}
                    </h1>

                    {/* Ways to Earn Credits */}
                    <div className="bg-blue-500 rounded-2xl p-6 mb-8 text-white">
                        <h2 className="text-xl font-bold mb-6">WAYS TO EARN CREDITS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 text-gray-900">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold">Choose Your Courses</h3>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-yellow-500 font-bold">+50</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">Find Study Material For Your Courses</p>
                                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-8 h-8 text-orange-500" />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 text-gray-900">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-semibold">Upload First Document</h3>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-yellow-500 font-bold">+50</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">Share What Helps You Study</p>
                                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Upload className="w-8 h-8 text-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recommended Documents */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Recommended Documents</h2>
                            <div className="flex space-x-2">
                                <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200">
                                    ←
                                </button>
                                <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
                                    →
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {recommendedDocs.map((doc) => (
                                <div key={doc.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="relative">
                                        <img
                                            src={doc.thumbnail}
                                            alt={doc.title}
                                            className="w-full h-40 object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                            {doc.type}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-gray-900 text-sm mb-1">{doc.title}</h3>
                                        <p className="text-blue-500 text-xs">{doc.subject}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Flash Cards */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Top Flash Cards For You</h2>
                            <div className="flex space-x-2">
                                <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200">
                                    ←
                                </button>
                                <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
                                    →
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {recommendedDocs.map((doc) => (
                                <div key={`flash-${doc.id}`} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="relative">
                                        <img
                                            src={doc.thumbnail}
                                            alt={doc.title}
                                            className="w-full h-40 object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                            Lectures
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="font-medium text-gray-900 text-sm mb-1">{doc.title}</h3>
                                        <p className="text-blue-500 text-xs">{doc.subject}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;