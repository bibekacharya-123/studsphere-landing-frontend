import React from 'react';
import Link from 'next/link';

const PremiumSection = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Unlock Studsphere full potential with Premium
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Large Card - Enhance with AI */}
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white row-span-2 min-h-[500px] flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Enhance with AI
                            </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                            Your study sidekick: AI-generated flashcards and document summaries for easy learning
                        </h3>
                    </div>

                    {/* Right Column - Two stacked cards */}
                    <div className="flex flex-col gap-6">
                        {/* No ads Card */}
                        <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-8 text-white min-h-[240px] flex flex-col justify-center">
                            <div className="mb-4">
                                <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                    No ads
                                </span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                                Study distraction-free: Enjoy a no-ads experience!
                            </h3>
                        </div>

                        {/* Download Documents Card */}
                        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-8 text-white min-h-[240px] flex flex-col justify-center">
                            <div className="mb-4">
                                <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                    Download Documents
                                </span>
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                                No Wi-Fi? No problem! Download study materials to learn offline.💯
                            </h3>
                        </div>
                    </div>

                    {/* Bottom Card - Post anonymously */}
                    <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-2xl p-8 text-white min-h-[240px] flex flex-col justify-center md:col-span-2">
                        <div className="mb-4">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Post anonymously
                            </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                            Share notes, not names. Anonymous uploads & posting
                        </h3>
                    </div>
                </div>

                {/* Start Learning Today Button */}
                <div className="text-center">
                    <Link href="/colleges/resources/login">
                        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xl font-bold py-4 px-12 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Start Learning Today
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PremiumSection;