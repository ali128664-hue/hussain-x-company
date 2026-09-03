import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ShoppingBag, Stethoscope, GraduationCap, Building, Plane, Landmark, Store, Factory, Briefcase, Rocket, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const industries = [
  { name: 'E-commerce', desc: 'Scalable online stores & retail solutions.', icon: ShoppingBag },
  { name: 'Healthcare', desc: 'HIPAA-compliant platforms & telehealth.', icon: Stethoscope },
  { name: 'Education', desc: 'LMS & e-learning portals.', icon: GraduationCap },
  { name: 'Real Estate', desc: 'Property management & listings.', icon: Building },
  { name: 'Travel & Tourism', desc: 'Booking systems & travel guides.', icon: Plane },
  { name: 'Finance', desc: 'Fintech apps & secure portals.', icon: Landmark },
  { name: 'Retail', desc: 'Inventory & POS integrations.', icon: Store },
  { name: 'Manufacturing', desc: 'ERP & automation systems.', icon: Factory },
  { name: 'Professional Services', desc: 'Client portals & CRM.', icon: Briefcase },
  { name: 'Startups', desc: 'MVPs & rapid scaling tech.', icon: Rocket },
  { name: 'SMEs', desc: 'Digital transformation solutions.', icon: Users },
];

export const IndustriesSection = () => {
  return (
    <section className="py-24 bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="Industries"
            title="Industries We Serve"
            align="center"
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <AnimatedSection key={ind.name} delay={i * 0.05}>
                <div className="group flex items-start gap-4 p-6 rounded-2xl bg-[#161616] border border-[#222] hover:border-[#ED7A21]/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#ED7A21]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ED7A21]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#ED7A21]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{ind.name}</h3>
                    <p className="text-sm text-slate-400">{ind.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
