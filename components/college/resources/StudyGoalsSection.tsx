import React from 'react';

const StudyGoalsSection = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* First row - Two cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Study List Card 1 - Green */}
                    <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-12 text-white text-center min-h-[400px] flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Study List
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Turn study goals into success: Organize your way to A+ grades!
                        </h3>
                    </div>

                    {/* Study List Card 2 - Pink/Red */}
                    <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl p-12 text-white text-center min-h-[400px] flex flex-col justify-center border-4 border-blue-300">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Study List
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Turn study goals into success: Organize your way to A+ grades!
                        </h3>
                    </div>
                </div>

                {/* Second row - One card */}
                <div className="flex justify-center ">
                    {/* Shared Documents Card - Purple */}
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-12 text-white text-center min-h-[400px] flex flex-col justify-center w-full max-w-6xl">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Shared Documents
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Prep like a pro with +1M study resources. Real student notes, past exams & more!
                        </h3>
                    </div>
                </div>

                {/* Third section - Community and AI Chat */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {/* Community Card 1 - Olive/Brown */}
                    <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-12 text-white text-center min-h-[400px] flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Community
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Ask, answer, and succeed: The ultimate study community
                        </h3>
                    </div>

                    {/* AI Chat Card - Blue */}
                    <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-12 text-white text-center min-h-[400px] flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                AI Chat
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Your questions, our answers - powered by real student documents
                        </h3>
                    </div>

                    {/* Community Card 2 - Purple */}
                    <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-12 text-white text-center min-h-[400px] flex flex-col justify-center">
                        <div className="mb-6">
                            <span className="text-lg font-medium bg-white/20 px-4 py-2 rounded-full">
                                Community
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                            Ask, answer, and succeed: The ultimate study community
                        </h3>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default StudyGoalsSection;