import HeroSection from '@/components/sections/HeroSection';
import CategoriesSection from '@/components/sections/CategoriesSection';
import JourneySection from '@/components/sections/JourneySection';
import TechStackSection from '@/components/sections/TechStackSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import AllServicesSection from '@/components/sections/AllServicesSection';
import CTASection from '@/components/sections/CTASection';
import { SEOHead } from '@/components/SEOHead';

export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'HUSSAIN X SOLUTION',
    'url': 'https://hussainxsolution.com',
    'logo': 'https://hussainxsolution.com/logo-dark.png',
    'description': 'HUSSAIN X SOLUTION is a premier software house and digital growth agency based in Lahore, Pakistan. We deliver custom software, web & mobile apps, AI automation, SEO, and full-suite digital marketing.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Model Town Q Block',
      'addressLocality': 'Lahore',
      'addressRegion': 'Punjab',
      'addressCountry': 'Pakistan'
    },
    'telephone': '+923480766608',
    'priceRange': '$$',
    'openingHours': 'Mo-Sa 09:00-18:00',
    'areaServed': [
      { '@type': 'Country', 'name': 'Pakistan' },
      { '@type': 'City', 'name': 'Lahore' },
      { '@type': 'City', 'name': 'Karachi' },
      { '@type': 'City', 'name': 'Islamabad' },
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'United Arab Emirates' }
    ],
    'knowsAbout': [
      'Custom Software Development',
      'Artificial Intelligence & Automation',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing & Management',
      'Web Application Development',
      'Mobile App Development',
      'UI/UX Design & Prototyping',
      'Cloud DevOps & Cybersecurity'
    ],
    'sameAs': [
      'https://www.facebook.com/hussainxsolution',
      'https://www.instagram.com/hussainxsolution/',
      'https://www.linkedin.com/company/hussain-x-solution'
    ]
  };

  return (
    <main>
      <SEOHead
        title="HUSSAIN X SOLUTION | Software & Digital Growth Agency"
        description="HUSSAIN X SOLUTION is a premier software development and digital marketing agency in Lahore, Pakistan. We engineer bespoke apps, web solutions & SEO growth."
        canonicalPath="/"
        schema={homeSchema}
      />

      {/* 1. Hero — First impression, above the fold */}
      <HeroSection />

      {/* 2. Services Overview — What we offer, grouped by category */}
      <CategoriesSection />

      {/* 3. Process — How we work (builds trust) */}
      <JourneySection />

      {/* 4. Tech Stack — Credibility through technology */}
      <TechStackSection />

      {/* 5. Industries — Who we serve */}
      <IndustriesSection />

      {/* 6. All Services — Full list for SEO & exploration */}
      <AllServicesSection />

      {/* 7. CTA — Final conversion push */}
      <CTASection />
    </main>
  );
}
