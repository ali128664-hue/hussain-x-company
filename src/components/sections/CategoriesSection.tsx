import React from 'react';
import { Code2, Globe, Palette, TrendingUp, Server, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const categories = [
  {
    title: 'SOFTWARE DEVELOPMENT',
    icon: Code2,
    description: 'Scalable, secure, and tailor-made software engineered to solve your unique business challenges.',
    services: ['Custom Business Software', 'Web Application Development', 'Mobile Apps (iOS & Android)', 'SaaS Platforms', 'ERP & CRM Systems', 'POS & Inventory Systems'],
  },
  {
    title: 'WEB & E-COMMERCE',
    icon: Globe,
    description: 'High-performance, conversion-optimized websites and online stores that generate real revenue.',
    services: ['Corporate & Landing Pages', 'Shopify & WooCommerce', 'WordPress Development', 'Custom E-Commerce Platforms', 'Multi-Vendor Marketplaces', 'Website Redesign & Optimization'],
  },
  {
    title: 'DESIGN & CREATIVE',
    icon: Palette,
    description: 'Visually stunning designs and compelling brand identities that leave a lasting impression.',
    services: ['UI/UX Design & Prototyping', 'Brand Identity & Logo Design', 'Video Production & Editing', 'Marketing Collateral Design', 'Packaging Design', 'Social Media Creatives'],
  },
  {
    title: 'DIGITAL MARKETING',
    icon: TrendingUp,
    description: 'Data-driven marketing strategies that grow your audience, generate qualified leads, and maximize ROI.',
    services: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Advertising (PPC)', 'Social Media Marketing & Management', 'Content Marketing & Blogging', 'Email Marketing & Automation', 'Local SEO & Google My Business'],
  },
  {
    title: 'TECHNOLOGY & SUPPORT',
    icon: Server,
    description: 'Robust technology infrastructure, AI integration, and 24/7 support to keep your business running flawlessly.',
    services: ['Cloud & DevOps (AWS, Azure)', 'API Development & Integration', 'AI & Automation Solutions', 'Cyber Security & Compliance', 'Software Testing & QA', '24/7 Maintenance & Support'],
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 bg-[#FFFFFF] relative z-10 border-t border-[#E5DED9]/60">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="What We Offer"
            title="Your Complete Digital Solutions Ecosystem"
            description="Explore our specialized services designed to transform, modernize, and scale your digital operations."
            align="center"
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <AnimatedSection
                key={i}
                delay={0.1 * i}
                className="col-span-1"
              >
                <SpotlightCard
                  spotlightColor="rgba(255, 106, 0, 0.08)"
                  className="h-full p-8 flex flex-col group cursor-pointer bg-[#FAF8F6] border border-[#E5DED9] hover:border-[#FF6A00]/50 transition-all duration-300"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#E5DED9] text-[#FF6A00] group-hover:border-[#FF6A00]/40 transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-[#FF6A00] transition-colors">{cat.title}</h3>
                  <p className="text-sm text-[#5C504A] mb-6 leading-relaxed">{cat.description}</p>
                  
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {cat.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-[#5C504A] flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E5DED9] group-hover:bg-[#FF6A00] transition-colors" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#FF6A00] font-semibold text-sm mt-auto group-hover:text-[#E85D00] transition-colors">
                    Explore Services <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
