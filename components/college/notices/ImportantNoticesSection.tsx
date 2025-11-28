'use client';

import { useState } from 'react';
import {
    AlertTriangle,
    Calendar,
    Clock,
    ExternalLink,
    Download,
    Bell,
    Star
} from 'lucide-react';

interface ImportantNotice {
    id: string;
    title: string;
    description: string;
    college: string;
    deadline: string;
    type: 'urgent' | 'important' | 'announcement';
    category: string;
    isNew: boolean;
    downloadUrl?: string;
    externalUrl?: string;
}

export default function ImportantNoticesSection() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const importantNotices: ImportantNotice[] = [
        {
            id: '1',
            title: 'JEE Main 2025 Registration Extended',
            description: 'Last date for JEE Main 2025 registration has been extended till 15th March 2025. Don\'t miss this opportunity.',
            college: 'NTA (National Testing Agency)',
            deadline: '2025-03-15',
            type: 'urgent',
            category: 'Exam',
            isNew: true,
            downloadUrl: '#',
            externalUrl: 'https://jeemain.nta.nic.in'
        },
        {
            id: '2',
            title: 'IIT Delhi Admission 2025 Open',
            description: 'Indian Institute of Technology Delhi announces admission for various undergraduate and postgraduate programs.',
            college: 'IIT Delhi',
            deadline: '2025-04-01',
            type: 'important',
            category: 'Admission',
            isNew: true,
            downloadUrl: '#'
        },
        {
            id: '3',
            title: 'NEET 2025 Exam Date Announced',
            description: 'National Eligibility cum Entrance Test (NEET) 2025 will be conducted on 4th May 2025.',
            college: 'NTA (National Testing Agency)',
            deadline: '2025-05-04',
            type: 'announcement',
            category: 'Exam',
            isNew: false,
            externalUrl: 'https://neet.nta.nic.in'
        },
        {
            id: '4',
            title: 'Scholarship Applications Open',
            description: 'Various merit and need-based scholarships available for deserving students. Apply before the deadline.',
            college: 'Ministry of Education',
            deadline: '2025-03-30',
            type: 'important',
            category: 'Scholarship',
            isNew: true,
            downloadUrl: '#'
        }
    ];

    const categories = ['All', 'Exam', 'Admission', 'Scholarship', 'Results', 'Events'];

    const filteredNotices = selectedCategory === 'All'
        ? importantNotices
        : importantNotices.filter(notice => notice.category === selectedCategory);

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'urgent':
                return <AlertTriangle className="w-5 h-5 text-red-500" />;
            case 'important':
                return <Star className="w-5 h-5 text-yellow-500" />;
            default:
                return <Bell className="w-5 h-5 text-blue-500" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'urgent':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'important':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default:
                return 'bg-blue-100 text-blue-800 border-blue-200';
        }
    };

    const getDaysLeft = (deadline: string) => {
        const deadlineDate = new Date(deadline);
        const today = new Date();
        const diffTime = deadlineDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-red-100 text-red-700 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wide mb-4">
                        IMPORTANT NOTICES
                    </span>
                    <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
                        Don't <span className="text-red-600">Miss Out</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with the most important notices and announcements that require immediate attention.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-red-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Important Notices Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredNotices.map((notice) => (
                        <div
                            key={notice.id}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        {getTypeIcon(notice.type)}
                                        <span className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(notice.type)}`}>
                                            {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                                        </span>
                                        {notice.isNew && (
                                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-semibold animate-pulse">
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                        {notice.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
                                <p className="text-gray-600 mb-4">{notice.description}</p>

                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                    <span className="font-medium">{notice.college}</span>
                                </div>

                                {/* Deadline Info */}
                                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center">
                                        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                                        <div>
                                            <span className="text-sm text-gray-500">Deadline</span>
                                            <p className="font-semibold text-gray-900">
                                                {new Date(notice.deadline).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 text-orange-500 mr-2" />
                                        <div className="text-right">
                                            <span className="text-sm text-gray-500">Days Left</span>
                                            <p className={`font-bold ${getDaysLeft(notice.deadline) <= 7 ? 'text-red-600' : 'text-green-600'}`}>
                                                {getDaysLeft(notice.deadline)} days
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="p-6">
                                <div className="flex gap-3">
                                    {notice.downloadUrl && (
                                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download
                                        </button>
                                    )}
                                    {notice.externalUrl && (
                                        <button className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            View Details
                                        </button>
                                    )}
                                    {!notice.downloadUrl && !notice.externalUrl && (
                                        <button className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                                            <Bell className="w-4 h-4 mr-2" />
                                            Read More
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        View All Important Notices
                    </button>
                </div>
            </div>
        </div>
    );
}
