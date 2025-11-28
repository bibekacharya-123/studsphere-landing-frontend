"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import {
    Search,
    Bell,
    BookOpen,
    Clock,
    Play,
    CheckCircle,
    MoreVertical,
    Plus,
    Filter,
    Calendar,
    BarChart3,
    Trash2
} from 'lucide-react';

interface EnrolledCourse {
    id: string;
    title: string;
    instructor: string;
    progress: number;
    enrolledDate: string;
    thumbnail: string;
    totalLessons?: number;
    completedLessons?: number;
    lastAccessed?: string;
    estimatedTime?: string;
}

const StudyListPage = () => {
    const [activeTab, setActiveTab] = useState('studylist');
    const [enrolledCourses, setEnrolledCourses] = useState<EnrolledCourse[]>([]);
    const [filter, setFilter] = useState('all');

    // Mock data
    const user = {
        name: "Jagdish Dhami",
        email: "jagdish@studsphere.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        credits: 50
    };

    // Load enrolled courses from localStorage
    useEffect(() => {
        const studyList = JSON.parse(localStorage.getItem('studyList') || '[]');
        // Add some mock data for demonstration
        const mockCourses: EnrolledCourse[] = [
            {
                id: '1',
                title: 'Engineering Mathematics',
                instructor: 'Dr. Rajesh Sharma',
                progress: 25,
                enrolledDate: '2024-01-15',
                thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
                totalLessons: 48,
                completedLessons: 12,
                lastAccessed: '2 hours ago',
                estimatedTime: '3 weeks left'
            },
            {
                id: '2',
                title: 'Data Structures and Algorithms',
                instructor: 'Prof. Anita Singh',
                progress: 60,
                enrolledDate: '2024-01-10',
                thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
                totalLessons: 36,
                completedLessons: 22,
                lastAccessed: '1 day ago',
                estimatedTime: '2 weeks left'
            },
            {
                id: '3',
                title: 'Physics - Quantum Mechanics',
                instructor: 'Dr. Kumar Patel',
                progress: 80,
                enrolledDate: '2023-12-20',
                thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
                totalLessons: 24,
                completedLessons: 19,
                lastAccessed: '3 days ago',
                estimatedTime: '1 week left'
            }
        ];

        setEnrolledCourses([...mockCourses, ...studyList]);
    }, []);

    const removeCourse = (courseId: string) => {
        const updatedCourses = enrolledCourses.filter(course => course.id !== courseId);
        setEnrolledCourses(updatedCourses);

        // Update localStorage
        const studyList = JSON.parse(localStorage.getItem('studyList') || '[]');
        const updatedStudyList = studyList.filter((course: EnrolledCourse) => course.id !== courseId);
        localStorage.setItem('studyList', JSON.stringify(updatedStudyList));
    };

    const getProgressColor = (progress: number) => {
        if (progress < 30) return 'bg-red-500';
        if (progress < 70) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    const getStatusLabel = (progress: number) => {
        if (progress === 0) return { label: 'Not Started', color: 'bg-gray-100 text-gray-700' };
        if (progress < 100) return { label: 'In Progress', color: 'bg-blue-100 text-blue-700' };
        return { label: 'Completed', color: 'bg-green-100 text-green-700' };
    };

    const filteredCourses = enrolledCourses.filter(course => {
        if (filter === 'all') return true;
        if (filter === 'in-progress') return course.progress > 0 && course.progress < 100;
        if (filter === 'completed') return course.progress === 100;
        if (filter === 'not-started') return course.progress === 0;
        return true;
    });

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
                                    placeholder="Search your enrolled courses"
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
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">📚 My Study List</h1>
                        <p className="text-gray-600">Track your enrolled courses and study progress</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Total Courses</p>
                                    <p className="text-2xl font-bold text-gray-900">{enrolledCourses.length}</p>
                                </div>
                                <BookOpen className="w-8 h-8 text-blue-500" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">In Progress</p>
                                    <p className="text-2xl font-bold text-yellow-600">
                                        {enrolledCourses.filter(c => c.progress > 0 && c.progress < 100).length}
                                    </p>
                                </div>
                                <Clock className="w-8 h-8 text-yellow-500" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Completed</p>
                                    <p className="text-2xl font-bold text-green-600">
                                        {enrolledCourses.filter(c => c.progress === 100).length}
                                    </p>
                                </div>
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg p-4 border">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Avg Progress</p>
                                    <p className="text-2xl font-bold text-blue-600">
                                        {enrolledCourses.length > 0
                                            ? Math.round(enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / enrolledCourses.length)
                                            : 0}%
                                    </p>
                                </div>
                                <BarChart3 className="w-8 h-8 text-blue-500" />
                            </div>
                        </div>
                    </div>

                    {/* Filter and Actions */}
                    <div className="bg-white rounded-lg p-4 mb-6 border">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <Filter className="w-5 h-5 text-gray-600" />
                                    <span className="font-medium text-gray-700">Filter:</span>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => setFilter('all')}
                                        className={`px-3 py-1 rounded text-sm font-medium ${filter === 'all' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={() => setFilter('in-progress')}
                                        className={`px-3 py-1 rounded text-sm font-medium ${filter === 'in-progress' ? 'bg-yellow-100 text-yellow-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        In Progress
                                    </button>
                                    <button
                                        onClick={() => setFilter('completed')}
                                        className={`px-3 py-1 rounded text-sm font-medium ${filter === 'completed' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Completed
                                    </button>
                                    <button
                                        onClick={() => setFilter('not-started')}
                                        className={`px-3 py-1 rounded text-sm font-medium ${filter === 'not-started' ? 'bg-gray-100 text-gray-700' : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        Not Started
                                    </button>
                                </div>
                            </div>

                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                                <Plus className="w-4 h-4" />
                                <span>Browse Courses</span>
                            </button>
                        </div>
                    </div>

                    {/* Courses List */}
                    <div className="space-y-4">
                        {filteredCourses.length === 0 ? (
                            <div className="bg-white rounded-lg p-8 border text-center">
                                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
                                <p className="text-gray-600 mb-4">
                                    {filter === 'all'
                                        ? "You haven't enrolled in any courses yet."
                                        : `No courses match the "${filter}" filter.`}
                                </p>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Browse Available Courses
                                </button>
                            </div>
                        ) : (
                            filteredCourses.map((course) => {
                                const status = getStatusLabel(course.progress);
                                return (
                                    <div key={course.id} className="bg-white rounded-lg p-6 border hover:shadow-md transition-shadow">
                                        <div className="flex items-start space-x-4">
                                            <img
                                                src={course.thumbnail}
                                                alt={course.title}
                                                className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                                            />

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                                                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                                                    </div>

                                                    <div className="flex items-center space-x-2">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${status.color}`}>
                                                            {status.label}
                                                        </span>
                                                        <button
                                                            onClick={() => removeCourse(course.id)}
                                                            className="p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-red-500"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mb-3">
                                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                                                        <span>Progress: {course.progress}%</span>
                                                        {course.totalLessons && (
                                                            <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                                                        )}
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className={`h-2 rounded-full ${getProgressColor(course.progress)}`}
                                                            style={{ width: `${course.progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                        {course.lastAccessed && (
                                                            <div className="flex items-center space-x-1">
                                                                <Clock className="w-4 h-4" />
                                                                <span>Last accessed {course.lastAccessed}</span>
                                                            </div>
                                                        )}
                                                        {course.estimatedTime && (
                                                            <div className="flex items-center space-x-1">
                                                                <Calendar className="w-4 h-4" />
                                                                <span>{course.estimatedTime}</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                                                        <Play className="w-4 h-4" />
                                                        <span>{course.progress === 0 ? 'Start' : 'Continue'}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyListPage;