import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const techData: Record<string, { items: string[]; emoji: string }> = {
  Frontend: {
    emoji: '🎨',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Angular'],
  },
  Backend: {
    emoji: '⚙️',
    items: ['Node.js', 'Python', 'Django', 'Laravel', 'PHP', 'Go', 'Java / Spring Boot'],
  },
  Mobile: {
    emoji: '📱',
    items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Ionic'],
  },
  Database: {
    emoji: '🗄️',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
  },
  'E-Commerce': {
    emoji: '🛍️',
    items: ['Shopify', 'WooCommerce', 'Magento', 'Strapi', 'Sanity CMS'],
  },
  Cloud: {
    emoji: '☁️',
    items: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Vercel'],
  },
  Marketing: {
    emoji: '📊',
    items: ['Google Analytics 4', 'Google Ads', 'Meta Ads', 'SEMrush', 'Ahrefs', 'HubSpot'],
  },
};

type Category = keyof typeof techData;

export const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState<Category>('Frontend');
  const categories = Object.keys(techData) as Category[];

  return (
    <section className="py-28 bg-[#0A0A0A] border-y border-[#1C1C1C] relative overflow-hidden">
      {/* Subtle noise-like dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-[#FF6A00]/6 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Tech Stack"
            title="Built With World-Class Tools"
            accentWord="World-Class Tools"
            description="We pick the right tool for every job — modern, battle-tested, and built to scale."
            align="center"
            dark={true}
            className="mb-12"
          />
        </AnimatedSection>

        {/* Tab bar */}
        <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 border',
                activeTab === cat
                  ? 'bg-[#FF6A00] border-[#FF6A00] text-white shadow-lg shadow-[#FF6A00]/20'
                  : 'bg-[#111111] border-[#222222] text-[#888888] hover:border-[#FF6A00]/40 hover:text-white'
              )}
            >
              <span>{techData[cat].emoji}</span>
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Tech pills */}
        <div className="min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {techData[activeTab].items.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,106,0,0.6)' }}
                  className="px-5 py-2.5 rounded-xl bg-[#111111] border border-[#222222] text-[#CCCCCC] hover:text-white text-sm font-medium cursor-default shadow-md transition-colors duration-200"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom note */}
        <AnimatedSection delay={0.3} className="text-center mt-10">
          <p className="text-[#444444] text-xs font-mono">
            + many more tools tailored to your project requirements
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TechStackSection;
