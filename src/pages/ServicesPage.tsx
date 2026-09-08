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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ED7A21]/30 bg-[#ED7A21]/5 mb-8">
              <span className="text-sm font-medium text-[#ED7A21] tracking-wide uppercase">18 Specialized Services</span>
            </div>
             <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
                Our <GradientText>Expertise</GradientText> &amp; Services
             </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
             <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
               From custom software and mobile apps to digital marketing and creative branding — we are your all-in-one digital partner. Every service is delivered with precision, passion, and a commitment to real, measurable results.
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
