import React from 'react';
import { Code2, Globe, Palette, TrendingUp, Server, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const categories = [
  {
    title: 'SOFTWARE DEVELOPMENT',
    icon: Code2,
    gradient: 'from-orange-500 to-amber-500',
    description: 'Scalable, secure, and tailor-made software engineered to solve your unique business challenges.',
    services: ['Custom Business Software', 'Web Application Development', 'Mobile Apps (iOS & Android)', 'SaaS Platforms', 'ERP & CRM Systems', 'POS & Inventory Systems'],
    spotlight: 'rgba(249, 115, 22, 0.15)',
  },
  {
    title: 'WEB & E-COMMERCE',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'High-performance, conversion-optimized websites and online stores that generate real revenue.',
    services: ['Corporate & Landing Pages', 'Shopify & WooCommerce', 'WordPress Development', 'Custom E-Commerce Platforms', 'Multi-Vendor Marketplaces', 'Website Redesign & Optimization'],
    spotlight: 'rgba(59, 130, 246, 0.15)',
  },
  {
    title: 'DESIGN & CREATIVE',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500',
    description: 'Visually stunning designs and compelling brand identities that leave a lasting impression.',
    services: ['UI/UX Design & Prototyping', 'Brand Identity & Logo Design', 'Video Production & Editing', 'Marketing Collateral Design', 'Packaging Design', 'Social Media Creatives'],
    spotlight: 'rgba(168, 85, 247, 0.15)',
  },
  {
    title: 'DIGITAL MARKETING',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
    description: 'Data-driven marketing strategies that grow your audience, generate qualified leads, and maximize ROI.',
    services: ['Search Engine Optimization (SEO)', 'Pay-Per-Click Advertising (PPC)', 'Social Media Marketing & Management', 'Content Marketing & Blogging', 'Email Marketing & Automation', 'Local SEO & Google My Business'],
    spotlight: 'rgba(34, 197, 94, 0.15)',
  },
  {
    title: 'TECHNOLOGY & SUPPORT',
    icon: Server,
    gradient: 'from-indigo-500 to-violet-500',
    description: 'Robust technology infrastructure, AI integration, and 24/7 support to keep your business running flawlessly.',
    services: ['Cloud & DevOps (AWS, Azure)', 'API Development & Integration', 'AI & Automation Solutions', 'Cyber Security & Compliance', 'Software Testing & QA', '24/7 Maintenance & Support'],
    spotlight: 'rgba(99, 102, 241, 0.15)',
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="What We Offer"
            title="Your Complete Digital Solutions Ecosystem"
            align="center"
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isWide = i < 2;
            return (
              <AnimatedSection
                key={i}
                delay={0.1 * i}
                className={isWide ? 'lg:col-span-1' : 'col-span-1'}
              >
                <SpotlightCard
                  spotlightColor={cat.spotlight}
                  className="h-full p-8 flex flex-col group cursor-pointer"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${cat.gradient}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-sm text-slate-400 mb-6">{cat.description}</p>
                  
                  <ul className="space-y-2 mb-8 flex-1">
                    {cat.services.map((service, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-[#ED7A21] transition-colors" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#ED7A21] font-medium text-sm mt-auto group-hover:text-white transition-colors">
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
