import { Button } from '@/components/ui/button';

export function NewsletterSection() {
    return (
        <section className="px-4 py-12 md:py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get the latest news from studsphere in your inbox
                </h2>
                <p className="text-muted-foreground mb-8">
                    sign up to receive top stories from the week - from product announcements, to everyday tips and tricks
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Subscribe
                </Button>
            </div>
        </section>
    );
}
