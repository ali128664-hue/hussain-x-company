import React, { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import AllServicesSection from '@/components/sections/AllServicesSection';
import { SEOHead } from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield } from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-24 pb-0">
      <SEOHead
        title="All Services | Software, Web, Mobile, SEO & Digital Marketing"
        description="Explore 12 core digital services by HUSSAIN X SOLUTION — Custom Software, Web & Mobile Apps, UI/UX, SEO, Digital Marketing, Cloud, AI Automation, and Creative Design."
        canonicalPath="/services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 bg-[#F9F8F6] border-b border-[#E8E4E0]">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#F5620F]/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F5620F]/25 bg-[#F5620F]/8 text-[#F5620F] text-xs font-mono font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5620F] inline-block" />
                12 Core Services
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] mb-5 leading-[1.1]">
                Every Tool Your Business<br />Needs to{' '}
                <GradientText>Win Online</GradientText>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-lg text-[#5C504A] leading-relaxed mb-8 max-w-xl">
                12 specialized services. One expert engineering team. Zero hand-offs. From idea to launch and scaling, we have you covered.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Star, text: '150+ Projects Delivered' },
                  { icon: Zap, text: 'On-Time, Every Time' },
                  { icon: Shield, text: '30-Day Post-Launch Support' },
                ].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E8E4E0] text-sm font-medium text-[#0A0A0A] shadow-sm">
                      <Icon size={13} className="text-[#F5620F]" />
                      {b.text}
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <AllServicesSection />
    </div>
  );
};

export default ServicesPage;
