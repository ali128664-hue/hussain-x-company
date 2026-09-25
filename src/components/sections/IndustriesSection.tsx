import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  ShoppingBag, Stethoscope, GraduationCap, Building, Plane,
  Landmark, Store, Factory, Briefcase, Rocket, Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'E-commerce', desc: 'Scalable online stores & retail solutions.', icon: ShoppingBag },
  { name: 'Healthcare', desc: 'HIPAA-compliant platforms & telehealth.', icon: Stethoscope },
  { name: 'Education', desc: 'LMS & e-learning portals.', icon: GraduationCap },
  { name: 'Real Estate', desc: 'Property management & listings.', icon: Building },
  { name: 'Travel & Tourism', desc: 'Booking systems & travel guides.', icon: Plane },
  { name: 'Finance', desc: 'Fintech apps & secure portals.', icon: Landmark },
  { name: 'Retail', desc: 'Inventory & POS integrations.', icon: Store },
  { name: 'Manufacturing', desc: 'ERP & automation systems.', icon: Factory },
  { name: 'Professional Services', desc: 'Client portals & CRM solutions.', icon: Briefcase },
  { name: 'Startups', desc: 'MVPs & rapid scaling tech.', icon: Rocket },
  { name: 'SMEs', desc: 'Full digital transformation.', icon: Users },
];

export const IndustriesSection = () => {
  return (
    <section className="py-28 bg-[#0A0A0A] border-t border-[#1C1C1C] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6A00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Industries"
            title="Industries We Serve"
            description="Proven domain expertise across diverse sectors — delivering tailored digital solutions that drive real business results."
            align="center"
            dark={true}
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <AnimatedSection key={ind.name} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -3, borderColor: 'rgba(255,106,0,0.5)' }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col gap-3 p-5 rounded-xl bg-[#111111] border border-[#222222] cursor-default transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,106,0,0.1)]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:bg-[#FF6A00]/15 group-hover:border-[#FF6A00]/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#FF6A00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-[#FF6A00] transition-colors duration-200">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-[#666666] leading-relaxed group-hover:text-[#888888] transition-colors duration-200">
                      {ind.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
