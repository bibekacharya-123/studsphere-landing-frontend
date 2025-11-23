import { Button } from '@/components/ui/button';
import { Newspaper, ArrowRight } from 'lucide-react';

export function NewsSection() {
    const newsItems = [
        {
            date: '2025-11-06',
            title: 'AI and learning: A new chapter for the students and educators',
        },
        {
            date: '2025-11-06',
            title: 'AI and learning: A new chapter for the students and educators',
        },
    ];

    return (
        <section className="px-4 py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What&apos;s Happening At Studsphere For
                        <br />
                        Education, Jobs And Events
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Master the skills that matter with mentor-led courses designed to help you
                    </p>
                </div>

                {/* News Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
                        >
                            {/* Date Badge */}
                            <div className="flex items-center gap-2 text-blue-600 mb-6">
                                <Newspaper className="h-5 w-5" />
                                <span className="text-sm font-medium">
                                    NEWS - {new Date(item.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                    })}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                {item.title}
                            </h3>

                            {/* Read Story Link */}
                            <button className="flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all group">
                                Read story
                                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white group-hover:bg-blue-700 transition-colors">
                                    <ArrowRight className="h-3 w-3 -rotate-45" />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Explore More Button */}
                <div className="text-center">
                    <Button variant="outline" className="text-blue-600 text-base font-medium rounded-full border-blue-600 hover:bg-blue-50">
                        Explore More
                    </Button>
                </div>
            </div>
        </section>
    );
}
