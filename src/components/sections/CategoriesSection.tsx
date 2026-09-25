import React from 'react';
import { Code2, Globe, Palette, TrendingUp, Server, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Software Development',
    icon: Code2,
    description: 'We engineer robust, scalable software that solves real business problems — from MVPs to enterprise-grade platforms.',
    services: [
      'Custom Business Software',
      'Web Application Development',
      'Mobile Apps (iOS & Android)',
      'SaaS & Cloud Platforms',
      'ERP, CRM & POS Systems',
      'API Development & Integration',
    ],
    link: '/services/custom-software-development',
  },
  {
    title: 'Web & E-Commerce',
    icon: Globe,
    description: 'High-converting websites and online stores built for speed, SEO, and seamless user experience.',
    services: [
      'Corporate & Landing Pages',
      'Shopify & WooCommerce Stores',
      'WordPress Development',
      'Custom E-Commerce Platforms',
      'Multi-Vendor Marketplaces',
      'Website Redesign & Optimization',
    ],
    link: '/services/web-development-company',
  },
  {
    title: 'Design & Creative',
    icon: Palette,
    description: 'Brand identities and UI/UX designs that don\'t just look great — they convert visitors into loyal customers.',
    services: [
      'UI/UX Design & Prototyping',
      'Brand Identity & Logo Design',
      'Video Production & Editing',
      'Marketing Collateral Design',
      'Packaging & Print Design',
      'Social Media Creatives',
    ],
    link: '/services/ui-ux-design-services',
  },
  {
    title: 'Digital Marketing',
    icon: TrendingUp,
    description: 'Data-driven campaigns that grow organic traffic, generate qualified leads, and maximize your marketing ROI.',
    services: [
      'Search Engine Optimization (SEO)',
      'Google & Meta PPC Advertising',
      'Social Media Management',
      'Content Marketing & Blogging',
      'Email Marketing & Automation',
      'Local SEO & Google Business',
    ],
    link: '/services/digital-marketing-services',
  },
  {
    title: 'AI & Technology',
    icon: Server,
    description: 'Future-proof your business with AI automation, secure cloud infrastructure, and 24/7 technical support.',
    services: [
      'AI & Automation Solutions',
      'Cloud & DevOps (AWS, Azure)',
      'Cybersecurity & Compliance',
      'Software Testing & QA',
      'Database Architecture',
      '24/7 Maintenance & Support',
    ],
    link: '/services/ai-automation-solutions',
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-28 bg-[#FAFAF9] relative border-t border-[#E5DED9]/60">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="What We Offer"
            title="One Agency. Every Digital Need."
            accentWord="Every Digital Need."
            description="From building your product to marketing it to the world — we're the only digital partner you'll ever need."
            align="center"
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection key={i} delay={0.08 * i} className="col-span-1">
                <Link to={cat.link} className="block h-full">
                  <SpotlightCard
                    spotlightColor="rgba(255, 106, 0, 0.07)"
                    className="h-full p-7 flex flex-col group bg-white border border-[#E5DED9] hover:border-[#FF6A00]/50 hover:shadow-[0_8px_30px_-8px_rgba(255,106,0,0.15)] transition-all duration-300 rounded-2xl"
                  >
                    {/* Icon */}
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6A00]/8 border border-[#FF6A00]/20 text-[#FF6A00] group-hover:bg-[#FF6A00] group-hover:text-white group-hover:border-[#FF6A00] transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 group-hover:text-[#FF6A00] transition-colors duration-200">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#5C504A] mb-5 leading-relaxed">{cat.description}</p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {cat.services.map((service, idx) => (
                        <li key={idx} className="text-sm text-[#5C504A] flex items-center gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-[#FF6A00] inline-block shrink-0" />
                          {service}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[#FF6A00] font-semibold text-sm mt-auto group-hover:gap-3 transition-all duration-200">
                      Explore Services <ArrowRight className="w-4 h-4" />
                    </div>
                  </SpotlightCard>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
