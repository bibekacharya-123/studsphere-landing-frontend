import { Button } from '@/components/ui/button';
import { ArrowUpRight, Zap } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                        <Zap className="h-3 w-3 text-white fill-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Your way to success</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    Empowering Students to
                    <br />
                    Learn, Work & Grow Together
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                    From education to opportunities,{' '}
                    <span className="text-blue-600 font-semibold">StudSphere</span> helps every student
                    <br className="hidden sm:block" />
                    find their path, achieve goals, and grow with confidence.
                </p>

                {/* CTA Button */}
                <div className="pt-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 h-auto text-base font-medium rounded-full gap-2">
                        Get started
                        <ArrowUpRight className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
