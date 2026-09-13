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
    <section className="py-24 bg-[#FFFFFF] border-t border-[#E5DED9]/60">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="Industries"
            title="Industries We Serve"
            description="Proven domain expertise across diverse sectors empowering business growth through tailored digital solutions."
            align="center"
            className="mb-16"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <AnimatedSection key={ind.name} delay={i * 0.05}>
                <div className="group flex items-start gap-4 p-6 rounded-2xl bg-[#FAF8F6] border border-[#E5DED9] hover:border-[#FF6A00]/50 transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] flex items-center justify-center shrink-0 group-hover:border-[#FF6A00]/40 transition-colors shadow-sm">
                    <Icon className="w-6 h-6 text-[#FF6A00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A0A0A] mb-1 group-hover:text-[#FF6A00] transition-colors">{ind.name}</h3>
                    <p className="text-sm text-[#5C504A] leading-relaxed">{ind.desc}</p>
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
