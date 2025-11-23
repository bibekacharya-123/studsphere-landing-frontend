import { FeatureCard } from './feature-card';

const features = [
    {
        title: 'For University & Schools',
        subtitle: 'Connecting Students, Colleges',
        description: '& Opportunities.',
        imageSrc: '/uni-card.png',
        imageAlt: 'University & Schools',
        buttons: ['College Finder', 'College Finder', 'College Finder', 'College Finder', 'College Finder'],
        gradient: 'bg-linear-to-br from-emerald-400 to-emerald-500',
    },
    {
        title: 'For Jobs & Internships',
        subtitle: 'Find Your Dream Job',
        description: '& Internship.',
        imageSrc: '/jobs-card.png',
        imageAlt: 'Jobs & Internships',
        buttons: ['Job Finder', 'Internships', 'Career Guide', 'Resume Builder', 'Interview Prep'],
        gradient: 'bg-linear-to-br from-orange-400 to-orange-500',
    },
    {
        title: 'For Events & Activities',
        subtitle: 'Discover Campus Events',
        description: '& Activities.',
        imageSrc: '/events-card.png',
        imageAlt: 'Events & Activities',
        buttons: ['Campus Events', 'Workshops', 'Webinars', 'Competitions', 'Networking'],
        gradient: 'bg-linear-to-br from-blue-400 to-blue-500',
    },
];

export function FeaturesSection() {
    return (
        <section className="px-4 py-12 md:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
