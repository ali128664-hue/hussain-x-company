import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const techData = {
  Frontend: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  Backend: ['Node.js', 'Python', 'Django', 'PHP', 'Laravel', 'Go', 'Java', 'Spring Boot'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  'CMS/E-Commerce': ['WordPress', 'Shopify', 'Magento', 'Strapi', 'Sanity'],
  Cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Vercel'],
  Marketing: ['Google Analytics', 'HubSpot', 'Mailchimp', 'Semrush', 'Ahrefs'],
};

type Category = keyof typeof techData;

export const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState<Category>('Frontend');
  const categories = Object.keys(techData) as Category[];

  return (
    <section className="py-24 bg-[#2B1A12] border-y border-[#3A2920]">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="Our Stack"
            title="Technologies We Work With"
            description="Modern, enterprise-tested frameworks and toolchains powering our high-performance solutions."
            align="center"
            dark={true}
            className="mb-12"
          />
        </AnimatedSection>

        <div className="flex flex-col items-center">
          <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                  activeTab === cat
                    ? "bg-[#FF6A00] border-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/25"
                    : "bg-[#15100D] border-[#3A2920] text-[#D8D2CE] hover:border-[#FF6A00]/50 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          <div className="min-h-[200px] w-full max-w-4xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {techData[activeTab].map((tech) => (
                  <div
                    key={tech}
                    className="px-6 py-3 rounded-xl bg-[#15100D] border border-[#3A2920] text-slate-200 hover:border-[#FF6A00] hover:text-white transition-all cursor-default shadow-lg shadow-black/40"
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
