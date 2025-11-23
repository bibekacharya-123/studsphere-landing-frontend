import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
    const faqs = [
        {
            question: 'Looking for the right college or course to join?',
            answer: 'Our platform helps you discover the perfect college or course based on your interests, career goals, and academic background. Browse through thousands of verified institutions and programs.',
        },
        {
            question: 'Looking for the right college or course to join?',
            answer: 'Our platform helps you discover the perfect college or course based on your interests, career goals, and academic background. Browse through thousands of verified institutions and programs.',
        },
        {
            question: 'Looking for the right college or course to join?',
            answer: 'Our platform helps you discover the perfect college or course based on your interests, career goals, and academic background. Browse through thousands of verified institutions and programs.',
        },
        {
            question: 'Looking for the right college or course to join?',
            answer: 'Our platform helps you discover the perfect college or course based on your interests, career goals, and academic background. Browse through thousands of verified institutions and programs.',
        },
        {
            question: 'Looking for the right college or course to join?',
            answer: 'Our platform helps you discover the perfect college or course based on your interests, career goals, and academic background. Browse through thousands of verified institutions and programs.',
        },
    ];

    return (
        <section className="px-4 py-12 md:py-16 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Have Questions? We&apos;ve Got Answers
                </h2>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-gray-200 rounded-lg px-6 bg-white"
                        >
                            <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
