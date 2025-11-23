"use client"

import Image from "next/image"
import { useState, useEffect } from "react";

export function HeroSection() {
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

    const heroImages = [
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="pt-8 pb-8">
            <div className="flex flex-col items-center">
                {/* Hero Image */}
                <div className="w-full flex justify-center">
                    <Image
                        src={heroImages[currentHeroSlide]}
                        alt="Conference Hero"
                        width={1400}
                        height={480}
                        className="rounded-2xl object-cover transition-all duration-500"
                        style={{ width: '95%', maxWidth: 1400, height: 480 }}
                    />
                </div>
                {/* Slider Dots */}
                <div className="flex items-center justify-center gap-2 mt-6 mb-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentHeroSlide(index)}
                            className={`w-3 h-1.5 rounded-full transition-colors ${index === currentHeroSlide ? 'bg-indigo-400' : 'bg-gray-200'
                                } block`}
                        />
                    ))}
                </div>
                {/* Heading */}
                <h1 className="text-center font-bold text-black text-5xl md:text-6xl mt-12 mb-0 leading-tight">
                    our all-in-one platform for education,<br />opportunities, and growth.
                </h1>
            </div>
        </section>
    );
}
