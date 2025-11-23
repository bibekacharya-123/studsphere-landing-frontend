'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function PartnersSection() {
    // Sample partner logos - replace with actual logos
    const partners = Array(10).fill('/logo.svg');

    return (
        <section className="px-4 py-12 md:py-16 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Partner Logos */}
                    <div className="space-y-6">
                        <div className="relative overflow-hidden">
                            {/* Scrolling logos animation */}
                            <div className="flex animate-scroll">
                                <div className="flex gap-4 min-w-full">
                                    {partners.slice(0, 4).map((logo, index) => (
                                        <div
                                            key={`row1-${index}`}
                                            className="shrink-0 w-32 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                        >
                                            <Image
                                                src={logo}
                                                alt="Partner logo"
                                                width={80}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4 min-w-full">
                                    {partners.slice(0, 4).map((logo, index) => (
                                        <div
                                            key={`row1-duplicate-${index}`}
                                            className="shrink-0 w-32 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                        >
                                            <Image
                                                src={logo}
                                                alt="Partner logo"
                                                width={80}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll-reverse">
                                <div className="flex gap-4 min-w-full">
                                    {partners.slice(0, 3).map((logo, index) => (
                                        <div
                                            key={`row2-${index}`}
                                            className="shrink-0 w-40 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                        >
                                            <Image
                                                src={logo}
                                                alt="Partner logo"
                                                width={80}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4 min-w-full">
                                    {partners.slice(0, 3).map((logo, index) => (
                                        <div
                                            key={`row2-duplicate-${index}`}
                                            className="shrink-0 w-40 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                        >
                                            <Image
                                                src={logo}
                                                alt="Partner logo"
                                                width={80}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="flex animate-scroll">
                                <div className="flex gap-4 min-w-full">
                                    {partners.slice(0, 4).map((logo, index) => (
                                        <div
                                            key={`row3-${index}`}
                                            className="shrink-0 w-32 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                        >
                                            <Image
                                                src={logo}
                                                alt="Partner logo"
                                                width={80}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4 min-w-full">
                                    {partners.slice(0, 4).map((logo, index) => (
                                        <div
                                            key={`row3-duplicate-${index}`}
                                            className="shrink-0 w-32 h-20 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                                        >
                                            <Image
                                                src={logo}
                                                alt="Partner logo"
                                                width={80}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Our Valuable Partners
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            AI and learning: A new chapter for the students and educators
                        </p>
                        <div className="flex gap-4">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                Get started
                            </Button>
                            <Button variant="outline">
                                View all Partners
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Institution & Employer Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    {/* For Institutions Card */}
                    <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-blue-100 to-blue-200 p-8">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Showcase Your Institution. Connect
                                <br />
                                with Thousands of Students.
                            </h3>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                For Institutions
                            </Button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64">
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600 rounded-full" />
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                                alt="Institution Building"
                                width={250}
                                height={250}
                                className="absolute bottom-0 right-0 object-cover rounded-tl-3xl"
                            />
                        </div>
                    </div>

                    {/* For Employer Card */}
                    <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-blue-100 to-blue-200 p-8">
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Find the Right Talent.
                                <br />
                                Hire Smarter with StudSphere.
                            </h3>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                For Employer
                            </Button>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64">
                            <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600 rounded-full" />
                            <Image
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
                                alt="Modern Building"
                                width={250}
                                height={250}
                                className="absolute bottom-0 right-0 object-cover rounded-tl-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
