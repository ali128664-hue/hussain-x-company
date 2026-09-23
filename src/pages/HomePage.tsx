import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import AllServicesSection from '@/components/sections/AllServicesSection';
import JourneySection from '@/components/sections/JourneySection';
import TechStackSection from '@/components/sections/TechStackSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import CTASection from '@/components/sections/CTASection';
import { SEOHead } from '@/components/SEOHead';

export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'HUSSAIN X SOLUTION',
    'url': 'https://hussainxsolution.com',
    'logo': 'https://hussainxsolution.com/logo-dark.png',
    'description': 'Premier Software House & Digital Growth Agency based in Lahore, Pakistan. Offering custom software, web & mobile app development, UI/UX, SEO, and full-suite digital marketing.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Model Town Q Block',
      'addressLocality': 'Lahore',
      'addressRegion': 'Punjab',
      'addressCountry': 'Pakistan'
    },
    'telephone': '+923067800030',
    'priceRange': '$$',
    'openingHours': 'Mo-Sa 09:00-18:00',
    'sameAs': [
      'https://facebook.com',
      'https://instagram.com',
      'https://linkedin.com'
    ]
  };

  return (
    <main>
      <SEOHead
        title="HUSSAIN X SOLUTION | Premium Digital Technology & Growth Partner"
        description="Transform your business with HUSSAIN X SOLUTION — Lahore's leading software development and digital marketing agency. Bespoke web apps, mobile solutions, SEO & growth strategies."
        canonicalPath="/"
        schema={homeSchema}
      />
      <HeroSection />
      <CategoriesSection />
      <AllServicesSection />
      <JourneySection />
      <TechStackSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
