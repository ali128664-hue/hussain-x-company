import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { BorderBeam } from '@/components/ui/BorderBeam';

export const CTASection = () => {
  return (
    <section className="py-24 relative mt-12 px-6">
      <AnimatedSection className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-b from-[#ED7A21]/10 to-transparent border border-[#ED7A21]/20 p-12 md:p-20 text-center overflow-hidden">
        <BorderBeam size={300} duration={12} delay={2} colorFrom="#ED7A21" colorTo="#FF6B00" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Let's discuss how HUSSAIN X COMPANY can transform your business with complete digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ShinyButton variant="primary">Get a Free Consultation</ShinyButton>
            <ShinyButton variant="outline">View Our Services</ShinyButton>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#ED7A21]/20 blur-[100px] -z-10 rounded-full pointer-events-none" />
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
