import React, { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import AllServicesSection from '@/components/sections/AllServicesSection';

const ServicesPage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">
      {/* Services Hero */}
      <section className="relative overflow-hidden py-24 bg-background border-b border-card-border/30 text-center">
        <div className="absolute inset-0 bg-[#ED7A21]/5 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#ED7A21]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
             <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
                Our <GradientText>Expertise</GradientText>
             </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
               We deliver end-to-end digital solutions tailored to your business. 
               Explore our comprehensive range of services designed to accelerate your growth.
             </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services Grid */}
      <div className="py-12">
        <AllServicesSection />
      </div>
    </div>
  );
};

export default ServicesPage;
