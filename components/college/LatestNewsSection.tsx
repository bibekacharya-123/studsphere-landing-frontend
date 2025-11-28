'use client';

import Link from 'next/link';
import {
    Clock,
    ExternalLink,
    Download,
    Bell,
    Calendar,
    TrendingUp,
    ChevronRight
} from 'lucide-react';

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    category: 'admission' | 'exam' | 'scholarship' | 'result' | 'event';
    date: string;
    source: string;
    isImportant: boolean;
    link?: string;
    downloadUrl?: string;
}

export default function LatestNewsSection() {

    const newsItems: NewsItem[] = [
        {
            id: '1',
            title: 'JEE Main 2025: Registration Process Extended',
            summary: 'NTA extends JEE Main 2025 registration deadline due to high volume of applications.',
            category: 'exam',
            date: '2025-08-26',
            source: 'National Testing Agency',
            isImportant: true,
            link: '#'
        },
        {
            id: '2',
            title: 'IIT Admission Guidelines Updated',
            summary: 'New admission criteria and reservation policies announced for IIT campuses.',
            category: 'admission',
            date: '2025-08-25',
            source: 'IIT Council',
            isImportant: false,
            link: '#'
        },
        {
            id: '3',
            title: 'NEET Results 2025 Declared',
            summary: 'Medical entrance exam results published on official website with state-wise merit lists.',
            category: 'result',
            date: '2025-08-24',
            source: 'NTA',
            isImportant: true,
            link: '#'
        },
        {
            id: '4',
            title: 'New Scholarship Scheme Launched',
            summary: 'Government announces new merit-based scholarship for engineering students.',
            category: 'scholarship',
            date: '2025-08-23',
            source: 'Ministry of Education',
            isImportant: false,
            link: '#',
            downloadUrl: '#'
        }
    ];



    const getCategoryColor = (category: string) => {
        const colors = {
            admission: 'bg-blue-100 text-blue-700',
            exam: 'bg-orange-100 text-orange-700',
            scholarship: 'bg-green-100 text-green-700',
            result: 'bg-purple-100 text-purple-700',
            event: 'bg-pink-100 text-pink-700'
        };
        return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getTimeSince = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

        if (diffInHours < 24) {
            return `${diffInHours}h ago`;
        } else {
            const diffInDays = Math.floor(diffInHours / 24);
            return `${diffInDays}d ago`;
        }
    };

    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#F63B3B] text-white font-semibold py-2 px-5 rounded-full text-sm uppercase tracking-wide mb-4">
                        Latest Updates
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Stay Informed with Updates</h2>
                    <p className="text-gray-600 text-lg">Get all the latest news and important notices from your institution.</p>
                </div>

                {/* Combined News and Notices Section */}
                <div className="mb-8">


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newsItems.slice(0, 6).map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                    </span>
                                    {item.isImportant && (
                                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-semibold flex items-center">
                                            <TrendingUp className="w-3 h-3 mr-1" />
                                            Important
                                        </span>
                                    )}
                                </div>

                                {item.link ? (
                                    <Link href={item.link}>
                                        <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300 cursor-pointer line-clamp-2">
                                            {item.title}
                                        </h4>
                                    </Link>
                                ) : (
                                    <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                                        {item.title}
                                    </h4>
                                )}

                                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                    {item.summary}
                                </p>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center text-xs text-gray-500">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span>{formatDate(item.date)}</span>
                                    </div>
                                    <div className="flex items-center text-xs text-gray-400">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {getTimeSince(item.date)}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">{item.source}</span>
                                    <div className="flex items-center gap-2">
                                        {item.downloadUrl && (
                                            <Link href={item.downloadUrl} className="text-blue-600 hover:text-blue-700 p-1 rounded">
                                                <Download className="w-4 h-4" />
                                            </Link>
                                        )}
                                        {item.link && (
                                            <Link href={item.link} className="text-blue-600 hover:text-blue-700 p-1 rounded">
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
