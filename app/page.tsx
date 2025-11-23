import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { GatewaySection } from '@/components/gateway-section';
import { PartnersSection } from '@/components/partners-section';
import { NewsSection } from '@/components/news-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { NewsletterSection } from '@/components/newsletter-section';
import { FAQSection } from '@/components/faq-section';

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <GatewaySection />
      <PartnersSection />
      <NewsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
    </div>
  );
};

export default page;