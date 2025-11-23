'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from '@/components/ui/carousel';

interface ImageSliderProps {
    images: string[];
    alt: string;
    isLarge?: boolean;
}

function ImageSlider({ images, alt, isLarge = false }: ImageSliderProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    // Auto-scroll effect
    useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                api.scrollTo(0);
            }
        }, 3000); // Auto-scroll every 3 seconds

        return () => clearInterval(intervalId);
    }, [api]);

    return (
        <div className="relative">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className={`relative w-full rounded-2xl overflow-hidden ${isLarge ? 'h-[300px] md:h-[400px]' : 'aspect-video'}`}>
                                <Image
                                    src={image}
                                    alt={`${alt} ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />

                                {/* Slider Indicators Inside Image */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => api?.scrollTo(idx)}
                                            className={`h-2 w-2 rounded-full transition-all ${idx === current
                                                ? 'bg-blue-600'
                                                : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export function GatewaySection() {
    const collegeImages = [
        'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
        'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
    ];

    const careerImages = [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80',
    ];

    const eventsImages = [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    ];

    return (
        <section className="px-4 py-12 md:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Your Gateway To Top Colleges, Career
                    <br />
                    Opportunities, And Student Events.
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Large Top Image - Colleges */}
                    <div className="md:col-span-2">
                        <ImageSlider images={collegeImages} alt="Top Colleges" isLarge />
                    </div>

                    {/* Bottom Left - Career Opportunities */}
                    <div>
                        <ImageSlider images={careerImages} alt="Career Opportunities" />
                    </div>

                    {/* Bottom Right - Student Events */}
                    <div>
                        <ImageSlider images={eventsImages} alt="Student Events" />
                    </div>
                </div>
            </div>
        </section>
    );
}
