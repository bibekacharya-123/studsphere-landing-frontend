'use client';

import { useState } from 'react';
import {
    Calendar,
    Clock,
    Download,
    ExternalLink,
    Search,
    Filter,
    ChevronDown,
    FileText,
    Building
} from 'lucide-react';

interface Notice {
    id: string;
    title: string;
    description: string;
    college: string;
    department?: string;
    publishDate: string;
    deadline?: string;
    category: string;
    type: 'notice' | 'circular' | 'announcement' | 'update';
    downloadUrl?: string;
    externalUrl?: string;
    tags: string[];
}

export default function NoticesListSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCollege, setSelectedCollege] = useState('All');
    const [showFilters, setShowFilters] = useState(false);

    const notices: Notice[] = [
        {
            id: '1',
            title: 'Semester End Examination Schedule 2025',
            description: 'Detailed schedule for semester end examinations for all undergraduate and postgraduate programs.',
            college: 'Delhi University',
            department: 'Examination Branch',
            publishDate: '2025-02-20',
            deadline: '2025-04-15',
            category: 'Exam',
            type: 'circular',
            downloadUrl: '#',
            tags: ['examination', 'schedule', 'semester']
        },
        {
            id: '2',
            title: 'Merit List for B.Tech Admissions 2025',
            description: 'First merit list for B.Tech admissions has been published. Check your admission status.',
            college: 'IIT Bombay',
            department: 'Admissions Office',
            publishDate: '2025-02-18',
            category: 'Admission',
            type: 'announcement',
            externalUrl: '#',
            tags: ['merit list', 'admissions', 'btech']
        },
        {
            id: '3',
            title: 'Fee Structure Update for Academic Year 2025-26',
            description: 'Updated fee structure for all courses has been announced. Please check the details.',
            college: 'Jawaharlal Nehru University',
            department: 'Finance Office',
            publishDate: '2025-02-15',
            category: 'Fee',
            type: 'notice',
            downloadUrl: '#',
            tags: ['fee', 'academic year', 'courses']
        },
        {
            id: '4',
            title: 'Research Symposium 2025',
            description: 'Annual research symposium will be held on 15th March 2025. Abstract submission deadline is 28th February.',
            college: 'AIIMS Delhi',
            department: 'Research Department',
            publishDate: '2025-02-10',
            deadline: '2025-02-28',
            category: 'Event',
            type: 'announcement',
            externalUrl: '#',
            tags: ['research', 'symposium', 'abstract']
        },
        {
            id: '5',
            title: 'Library Timings Extended',
            description: 'Library timings have been extended till 11 PM during examination period.',
            college: 'Jamia Millia Islamia',
            department: 'Library',
            publishDate: '2025-02-08',
            category: 'Facility',
            type: 'update',
            tags: ['library', 'timings', 'examination']
        },
        {
            id: '6',
            title: 'Scholarship Applications for SC/ST Students',
            description: 'Applications invited for post-matric scholarships for SC/ST students for the academic year 2025-26.',
            college: 'University of Mumbai',
            department: 'Student Welfare',
            publishDate: '2025-02-05',
            deadline: '2025-03-31',
            category: 'Scholarship',
            type: 'notice',
            downloadUrl: '#',
            tags: ['scholarship', 'sc/st', 'welfare']
        }
    ];

    const categories = ['All', 'Exam', 'Admission', 'Fee', 'Event', 'Facility', 'Scholarship'];
    const colleges = ['All', ...Array.from(new Set(notices.map(notice => notice.college)))];

    const filteredNotices = notices.filter(notice => {
        const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            notice.college.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
        const matchesCollege = selectedCollege === 'All' || notice.college === selectedCollege;

        return matchesSearch && matchesCategory && matchesCollege;
    });

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'circular':
                return <FileText className="w-5 h-5 text-blue-600" />;
            case 'announcement':
                return <Building className="w-5 h-5 text-green-600" />;
            case 'update':
                return <Clock className="w-5 h-5 text-orange-600" />;
            default:
                return <FileText className="w-5 h-5 text-gray-600" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'circular':
                return 'bg-blue-100 text-blue-800';
            case 'announcement':
                return 'bg-green-100 text-green-800';
            case 'update':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-blue-100 text-blue-700 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wide mb-4">
                        ALL NOTICES
                    </span>
                    <h2 className="text-5xl font-extrabold mb-6 text-gray-900">
                        Complete <span className="text-blue-600">Notice Board</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Browse through all notices, circulars, and announcements from various colleges and institutions.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8">
                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto mb-6">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search notices by title, college, or keywords..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-16 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        />
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Collapsible Filters */}
                    {showFilters && (
                        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Category Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {categories.map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* College Filter */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">College</label>
                                    <select
                                        value={selectedCollege}
                                        onChange={(e) => setSelectedCollege(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        {colleges.map(college => (
                                            <option key={college} value={college}>{college}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Notices List */}
                <div className="space-y-6">
                    {filteredNotices.map((notice) => (
                        <div
                            key={notice.id}
                            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                                {/* Left Content */}
                                <div className="flex-1 mb-4 lg:mb-0">
                                    <div className="flex items-start mb-3">
                                        <div className="p-2 bg-gray-50 rounded-lg mr-4">
                                            {getTypeIcon(notice.type)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center mb-2">
                                                <h3 className="text-xl font-bold text-gray-900 mr-3">{notice.title}</h3>
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(notice.type)}`}>
                                                    {notice.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 mb-3">{notice.description}</p>

                                            {/* College and Department */}
                                            <div className="flex items-center text-sm text-gray-500 mb-3">
                                                <Building className="w-4 h-4 mr-1" />
                                                <span className="font-medium">{notice.college}</span>
                                                {notice.department && (
                                                    <>
                                                        <span className="mx-2">•</span>
                                                        <span>{notice.department}</span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {notice.tags.map((tag, index) => (
                                                    <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="lg:ml-6 lg:text-right">
                                    {/* Dates */}
                                    <div className="mb-4">
                                        <div className="flex items-center lg:justify-end mb-2">
                                            <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                                            <span className="text-sm text-gray-500">Published: {new Date(notice.publishDate).toLocaleDateString()}</span>
                                        </div>
                                        {notice.deadline && (
                                            <div className="flex items-center lg:justify-end">
                                                <Clock className="w-4 h-4 text-orange-500 mr-1" />
                                                <span className="text-sm text-orange-600 font-medium">
                                                    Deadline: {new Date(notice.deadline).toLocaleDateString()}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        {notice.downloadUrl && (
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                                                <Download className="w-4 h-4 mr-1" />
                                                Download
                                            </button>
                                        )}
                                        {notice.externalUrl && (
                                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                                                <ExternalLink className="w-4 h-4 mr-1" />
                                                View
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto">
                        Load More Notices
                        <ChevronDown className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}
