"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import {
    Search,
    Bell,
    BookOpen,
    Clock,
    Download,
    Eye,
    Star,
    Filter,
    Play,
    FileText,
    Users,
    Target,
    TrendingUp,
    Brain,
    Timer,
    BarChart3
} from 'lucide-react';

const TestPrepPage = () => {
    const [activeTab, setActiveTab] = useState('testprep');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedExam, setSelectedExam] = useState('all');

    // Mock data
    const user = {
        name: "Jagdish Dhami",
        email: "jagdish@studsphere.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        credits: 50
    };

    const examCategories = [
        { id: 'engineering', name: 'Engineering', count: 24, color: 'bg-blue-100 text-blue-700' },
        { id: 'medical', name: 'Medical', count: 18, color: 'bg-green-100 text-green-700' },
        { id: 'management', name: 'Management', count: 15, color: 'bg-purple-100 text-purple-700' },
        { id: 'banking', name: 'Banking & Finance', count: 12, color: 'bg-orange-100 text-orange-700' },
        { id: 'government', name: 'Government Jobs', count: 20, color: 'bg-red-100 text-red-700' },
        { id: 'competitive', name: 'Competitive Exams', count: 16, color: 'bg-indigo-100 text-indigo-700' }
    ];

    const popularExams = [
        { id: 'jee', name: 'JEE Main/Advanced', category: 'engineering', difficulty: 'Hard' },
        { id: 'neet', name: 'NEET', category: 'medical', difficulty: 'Hard' },
        { id: 'cat', name: 'CAT', category: 'management', difficulty: 'Hard' },
        { id: 'gate', name: 'GATE', category: 'engineering', difficulty: 'Medium' },
        { id: 'ssc', name: 'SSC CGL', category: 'government', difficulty: 'Medium' },
        { id: 'ibps', name: 'IBPS PO', category: 'banking', difficulty: 'Medium' }
    ];

    const testPrepMaterials = [
        {
            id: 1,
            title: "JEE Main Mathematics - Complete Question Bank",
            examType: "JEE Main",
            category: "engineering",
            subject: "Mathematics",
            type: "Question Bank",
            questions: 1500,
            difficulty: "Hard",
            rating: 4.8,
            downloads: 3245,
            views: 8765,
            uploadDate: "2 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
            topics: ["Calculus", "Algebra", "Coordinate Geometry", "Trigonometry"]
        },
        {
            id: 2,
            title: "NEET Biology - Previous Year Papers (2019-2024)",
            examType: "NEET",
            category: "medical",
            subject: "Biology",
            type: "Previous Papers",
            questions: 800,
            difficulty: "Hard",
            rating: 4.9,
            downloads: 2876,
            views: 7234,
            uploadDate: "1 week ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
            topics: ["Botany", "Zoology", "Human Physiology", "Genetics"]
        },
        {
            id: 3,
            title: "CAT Quantitative Aptitude - Mock Tests",
            examType: "CAT",
            category: "management",
            subject: "Quantitative Aptitude",
            type: "Mock Test",
            questions: 600,
            difficulty: "Hard",
            rating: 4.7,
            downloads: 1987,
            views: 5432,
            uploadDate: "3 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
            topics: ["Arithmetic", "Algebra", "Geometry", "Number System"]
        },
        {
            id: 4,
            title: "GATE Computer Science - Topic-wise Notes",
            examType: "GATE",
            category: "engineering",
            subject: "Computer Science",
            type: "Study Notes",
            questions: 0,
            difficulty: "Medium",
            rating: 4.6,
            downloads: 4321,
            views: 9876,
            uploadDate: "5 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
            topics: ["Data Structures", "Algorithms", "Operating Systems", "DBMS"]
        },
        {
            id: 5,
            title: "SSC CGL General Knowledge - Current Affairs",
            examType: "SSC CGL",
            category: "government",
            subject: "General Knowledge",
            type: "Current Affairs",
            questions: 2000,
            difficulty: "Medium",
            rating: 4.5,
            downloads: 2654,
            views: 6789,
            uploadDate: "1 day ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
            topics: ["Politics", "Economics", "History", "Geography"]
        },
        {
            id: 6,
            title: "IBPS PO English Language - Practice Sets",
            examType: "IBPS PO",
            category: "banking",
            subject: "English Language",
            type: "Practice Sets",
            questions: 1200,
            difficulty: "Medium",
            rating: 4.4,
            downloads: 1876,
            views: 4321,
            uploadDate: "4 days ago",
            thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop",
            topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Writing Skills"]
        }
    ];

    const mockTests = [
        {
            id: 1,
            title: "JEE Main Full Length Test - 2024 Pattern",
            examType: "JEE Main",
            duration: "3 hours",
            questions: 90,
            attempts: 12453,
            avgScore: "65%",
            difficulty: "Hard"
        },
        {
            id: 2,
            title: "NEET Mock Test - Latest Syllabus",
            examType: "NEET",
            duration: "3 hours",
            questions: 180,
            attempts: 8976,
            avgScore: "58%",
            difficulty: "Hard"
        },
        {
            id: 3,
            title: "CAT Sectional Test - Verbal Ability",
            examType: "CAT",
            duration: "1 hour",
            questions: 34,
            attempts: 5432,
            avgScore: "72%",
            difficulty: "Medium"
        }
    ];

    const filteredMaterials = testPrepMaterials.filter(material => {
        if (selectedCategory !== 'all' && material.category !== selectedCategory) return false;
        if (selectedExam !== 'all' && material.examType !== selectedExam) return false;
        return true;
    });

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'easy': return 'bg-green-100 text-green-700';
            case 'medium': return 'bg-yellow-100 text-yellow-700';
            case 'hard': return 'bg-red-100 text-red-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type.toLowerCase()) {
            case 'question bank': return <Target className="w-4 h-4" />;
            case 'previous papers': return <FileText className="w-4 h-4" />;
            case 'mock test': return <Timer className="w-4 h-4" />;
            case 'study notes': return <BookOpen className="w-4 h-4" />;
            case 'current affairs': return <TrendingUp className="w-4 h-4" />;
            case 'practice sets': return <Brain className="w-4 h-4" />;
            default: return <FileText className="w-4 h-4" />;
        }
    };

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
                                    placeholder="Search test prep materials, mock tests & notes"
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
                    {/* Page Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">🎯 Test Preparation</h1>
                        <p className="text-gray-600">Comprehensive study materials, mock tests, and practice questions for competitive exams</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Total Materials</p>
                                    <p className="text-2xl font-bold text-blue-600">{testPrepMaterials.length}</p>
                                </div>
                                <BookOpen className="w-8 h-8 text-blue-500" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Mock Tests</p>
                                    <p className="text-2xl font-bold text-green-600">{mockTests.length}</p>
                                </div>
                                <Timer className="w-8 h-8 text-green-500" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Question Banks</p>
                                    <p className="text-2xl font-bold text-purple-600">
                                        {testPrepMaterials.filter(m => m.type === 'Question Bank').length}
                                    </p>
                                </div>
                                <Target className="w-8 h-8 text-purple-500" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Study Notes</p>
                                    <p className="text-2xl font-bold text-orange-600">
                                        {testPrepMaterials.filter(m => m.type === 'Study Notes').length}
                                    </p>
                                </div>
                                <FileText className="w-8 h-8 text-orange-500" />
                            </div>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={() => setSelectedCategory('all')}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === 'all'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                All Categories
                            </button>
                            {examCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category.id
                                            ? 'bg-blue-600 text-white'
                                            : `${category.color} hover:opacity-80`
                                        }`}
                                >
                                    {category.name} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Popular Mock Tests Section */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">🚀 Popular Mock Tests</h2>
                            <button className="text-blue-600 font-medium hover:underline">View All</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {mockTests.map((test) => (
                                <div key={test.id} className="bg-white rounded-lg p-4 border hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-medium text-gray-900 text-sm">{test.title}</h3>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(test.difficulty)}`}>
                                            {test.difficulty}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{test.duration}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Target className="w-4 h-4" />
                                                <span>{test.questions} questions</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <Users className="w-4 h-4" />
                                                <span>{test.attempts.toLocaleString()} attempts</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <BarChart3 className="w-4 h-4" />
                                                <span>Avg: {test.avgScore}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                                        <Play className="w-4 h-4" />
                                        <span>Start Test</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="bg-white rounded-lg p-4 mb-6 border">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Filter className="w-5 h-5 text-blue-600" />
                                <span className="font-medium text-blue-600">Filter:</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Exam Type</label>
                                    <select
                                        value={selectedExam}
                                        onChange={(e) => setSelectedExam(e.target.value)}
                                        className="p-2 border border-gray-300 rounded text-sm"
                                    >
                                        <option value="all">All Exams</option>
                                        {popularExams.map((exam) => (
                                            <option key={exam.id} value={exam.name}>{exam.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Material Type</label>
                                    <select className="p-2 border border-gray-300 rounded text-sm">
                                        <option>All Types</option>
                                        <option>Question Bank</option>
                                        <option>Previous Papers</option>
                                        <option>Mock Test</option>
                                        <option>Study Notes</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                                    <select className="p-2 border border-gray-300 rounded text-sm">
                                        <option>All Levels</option>
                                        <option>Easy</option>
                                        <option>Medium</option>
                                        <option>Hard</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Test Prep Materials */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-900">📚 Study Materials & Question Banks</h2>
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-600">{filteredMaterials.length} Results</span>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">Sort by:</span>
                                    <select className="text-sm border border-gray-300 rounded px-2 py-1">
                                        <option>Most Downloaded</option>
                                        <option>Highest Rated</option>
                                        <option>Latest</option>
                                        <option>Most Viewed</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredMaterials.map((material) => (
                                <div key={material.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                                    <div className="relative">
                                        <img
                                            src={material.thumbnail}
                                            alt={material.title}
                                            className="w-full h-40 object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                                            {getTypeIcon(material.type)}
                                            <span>{material.type}</span>
                                        </div>
                                        <div className="absolute top-3 right-3">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(material.difficulty)}`}>
                                                {material.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                                {material.examType}
                                            </span>
                                            <span className="text-xs text-gray-500">{material.uploadDate}</span>
                                        </div>

                                        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">{material.title}</h3>
                                        <p className="text-sm text-blue-600 mb-1">{material.subject}</p>
                                        {material.questions > 0 && (
                                            <p className="text-xs text-gray-500 mb-3">{material.questions} Questions</p>
                                        )}

                                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span>{material.rating}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Download className="w-4 h-4" />
                                                    <span>{material.downloads}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <Eye className="w-4 h-4" />
                                                    <span>{material.views}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <p className="text-xs text-gray-600 mb-2">Topics covered:</p>
                                            <div className="flex flex-wrap gap-1">
                                                {material.topics.slice(0, 3).map((topic, index) => (
                                                    <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                                                        {topic}
                                                    </span>
                                                ))}
                                                {material.topics.length > 3 && (
                                                    <span className="text-xs text-gray-500">+{material.topics.length - 3} more</span>
                                                )}
                                            </div>
                                        </div>

                                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                            Download Notes
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Load More Materials
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPrepPage;