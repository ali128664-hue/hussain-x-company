import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from '@/components/ServiceIcon';
import { industries } from '@/data/servicesData';
import { motion } from 'framer-motion';

export const IndustriesSection = () => {
  return (
    <section className="py-28 bg-[#080808] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#F5620F]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Industries"
            title="Built for Your Industry"
            accentWord="Your Industry"
            description="We've shipped products across 11+ sectors — so we understand your domain, your users, and the constraints unique to your space."
            align="center"
            dark={true}
            className="mb-14"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3, borderColor: 'rgba(245,98,15,0.5)' }}
                transition={{ duration: 0.2 }}
                className="group flex flex-col gap-3 p-5 rounded-xl bg-[#0F0F0F] border border-[#1C1C1C] cursor-default transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,98,15,0.1)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#252525] flex items-center justify-center group-hover:bg-[#F5620F]/15 group-hover:border-[#F5620F]/30 transition-all duration-300">
                  <ServiceIcon name={ind.icon} size={18} className="text-[#F5620F]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-[#F5620F] transition-colors duration-200 leading-tight">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed group-hover:text-[#888888] transition-colors duration-200">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
