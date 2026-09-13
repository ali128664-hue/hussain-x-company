import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { BorderBeam } from '@/components/ui/BorderBeam';

export const CTASection = () => {
  return (
    <section className="py-24 relative mt-12 px-6">
      <AnimatedSection className="max-w-5xl mx-auto relative rounded-3xl bg-gradient-to-b from-[#2B1A12] to-[#0A0A0A] border border-[#3A2920] p-12 md:p-20 text-center overflow-hidden shadow-2xl">
        <BorderBeam size={300} duration={12} delay={2} colorFrom="#FF6A00" colorTo="#E85D00" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Your Digital Solution?
          </h2>
          <p className="text-lg md:text-xl text-[#D8D2CE] max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's discuss how <span className="text-[#FF6A00] font-semibold">HUSSAIN X SOLUTION</span> can transform your business with cutting-edge software, creative design, and powerful digital growth strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact">
              <ShinyButton variant="primary">Get a Free Consultation</ShinyButton>
            </a>
            <a href="/services">
              <ShinyButton variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 hover:text-white hover:border-white">View All Services</ShinyButton>
            </a>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#FF6A00]/15 blur-[100px] -z-10 rounded-full pointer-events-none" />
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
