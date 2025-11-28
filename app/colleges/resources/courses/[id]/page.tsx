"use client";

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from '@/components/dashboard/sidebar';
import {
    Search,
    Bell,
    Star,
    Clock,
    Users,
    BookOpen,
    Play,
    Share2,
    Heart,
    CheckCircle,
    ArrowLeft
} from 'lucide-react';

const CourseDetailPage = () => {
    const [activeTab, setActiveTab] = useState('courses');
    const [isEnrolled, setIsEnrolled] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const courseId = searchParams.get('id') || '1';

    // Mock data
    const user = {
        name: "Jagdish Dhami",
        email: "jagdish@studsphere.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
        credits: 50
    };

    const course = {
        id: courseId,
        title: "Engineering Mathematics",
        subtitle: "Complete Course on Mathematical Foundations for Engineers",
        instructor: "Dr. Rajesh Sharma",
        instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        instructorBio: "Professor of Mathematics with 15+ years of experience in engineering education",
        rating: 4.8,
        students: 1234,
        duration: "12 weeks",
        lessons: 48,
        level: "Intermediate",
        language: "English",
        lastUpdated: "November 2024",
        price: "Free",
        thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
        description: "Master the fundamental mathematical concepts essential for engineering disciplines. This comprehensive course covers calculus, differential equations, linear algebra, and their practical applications in engineering problems.",
        whatYouWillLearn: [
            "Advanced Calculus and its applications",
            "Differential Equations solving techniques",
            "Linear Algebra for engineering problems",
            "Mathematical modeling of real-world systems",
            "Statistical analysis and probability",
            "Numerical methods and computational tools"
        ],
        requirements: [
            "Basic knowledge of algebra and trigonometry",
            "High school level mathematics",
            "Access to calculator or computer",
            "Willingness to practice problem-solving"
        ],
        syllabus: [
            {
                week: 1,
                title: "Introduction to Calculus",
                lessons: ["Limits and Continuity", "Derivatives", "Applications of Derivatives", "Integration Basics"],
                duration: "4 hours"
            },
            {
                week: 2,
                title: "Advanced Integration",
                lessons: ["Integration Techniques", "Multiple Integrals", "Line Integrals", "Surface Integrals"],
                duration: "4 hours"
            },
            {
                week: 3,
                title: "Differential Equations",
                lessons: ["First Order ODEs", "Second Order ODEs", "Systems of ODEs", "Laplace Transforms"],
                duration: "5 hours"
            },
            {
                week: 4,
                title: "Linear Algebra",
                lessons: ["Matrices and Determinants", "Eigenvalues and Eigenvectors", "Vector Spaces", "Linear Transformations"],
                duration: "4 hours"
            }
        ]
    };

    const handleEnroll = () => {
        setIsEnrolled(true);
        // Add to study list logic here
        const enrolledCourse = {
            id: course.id,
            title: course.title,
            instructor: course.instructor,
            progress: 0,
            enrolledDate: new Date().toISOString(),
            thumbnail: course.thumbnail
        };

        // Store in localStorage for now (in real app, this would be an API call)
        const existingStudyList = JSON.parse(localStorage.getItem('studyList') || '[]');
        const updatedStudyList = [...existingStudyList, enrolledCourse];
        localStorage.setItem('studyList', JSON.stringify(updatedStudyList));

        // Show success message
        alert('Successfully enrolled! Course added to your study list.');
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
                            <button
                                onClick={() => router.back()}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                            >
                                <ArrowLeft className="w-5 h-5 text-gray-600" />
                            </button>
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

                {/* Course Detail Content */}
                <div className="p-6">
                    {/* Course Header */}
                    <div className="bg-white rounded-lg p-6 mb-6 border">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Course Info */}
                            <div className="lg:col-span-2">
                                <div className="mb-4">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.title}</h1>
                                    <p className="text-lg text-gray-600 mb-4">{course.subtitle}</p>

                                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="font-medium">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Users className="w-4 h-4" />
                                            <span>{course.students.toLocaleString()} students</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{course.lessons} lessons</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 mb-4">
                                        <img src={course.instructorAvatar} alt={course.instructor} className="w-12 h-12 rounded-full" />
                                        <div>
                                            <p className="font-medium text-gray-900">{course.instructor}</p>
                                            <p className="text-sm text-gray-600">{course.instructorBio}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {course.level}
                                        </span>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                                            {course.language}
                                        </span>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                                            {course.price}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Course Image and Actions */}
                            <div className="lg:col-span-1">
                                <img
                                    src={course.thumbnail}
                                    alt={course.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />

                                <div className="space-y-3">
                                    {!isEnrolled ? (
                                        <button
                                            onClick={handleEnroll}
                                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                                        >
                                            <BookOpen className="w-5 h-5" />
                                            <span>Enroll Now</span>
                                        </button>
                                    ) : (
                                        <div className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
                                            <CheckCircle className="w-5 h-5" />
                                            <span>Enrolled</span>
                                        </div>
                                    )}

                                    <div className="flex space-x-2">
                                        <button className="flex-1 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2">
                                            <Heart className="w-4 h-4" />
                                            <span>Wishlist</span>
                                        </button>
                                        <button className="flex-1 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50 flex items-center justify-center space-x-2">
                                            <Share2 className="w-4 h-4" />
                                            <span>Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Content Tabs */}
                    <div className="bg-white rounded-lg border">
                        <div className="border-b border-gray-200">
                            <nav className="flex space-x-8 px-6">
                                <button className="py-4 px-1 border-b-2 border-blue-500 font-medium text-blue-600">
                                    About
                                </button>
                                <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                                    Syllabus
                                </button>
                                <button className="py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">
                                    Reviews
                                </button>
                            </nav>
                        </div>

                        <div className="p-6">
                            {/* About Section */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">About this course</h3>
                                    <p className="text-gray-700 leading-relaxed">{course.description}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What you'll learn</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {course.whatYouWillLearn.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h3>
                                    <ul className="space-y-2">
                                        {course.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Course Syllabus Preview */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Course Content</h3>
                                    <div className="space-y-3">
                                        {course.syllabus.slice(0, 2).map((week, index) => (
                                            <div key={index} className="border border-gray-200 rounded-lg p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h4 className="font-medium text-gray-900">Week {week.week}: {week.title}</h4>
                                                    <span className="text-sm text-gray-500">{week.duration}</span>
                                                </div>
                                                <div className="space-y-1">
                                                    {week.lessons.map((lesson, lessonIndex) => (
                                                        <div key={lessonIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                                            <Play className="w-4 h-4" />
                                                            <span>{lesson}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <button className="text-blue-600 font-medium hover:underline">
                                            View complete syllabus
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;