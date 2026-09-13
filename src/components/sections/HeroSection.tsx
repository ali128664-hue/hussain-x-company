import React, { useRef } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { TextReveal } from '@/components/ui/TextReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yDashboard = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityDashboard = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-36 md:pt-44 lg:pt-48 pb-16 lg:pb-24 bg-[#FFFFFF] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#FF6A00]/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left space-y-8">
          <AnimatedSection delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5DED9] bg-[#FAF8F6]">
              <span className="text-xl">🚀</span>
              <span className="text-sm font-semibold text-[#FF6A00] tracking-wide uppercase">Complete Digital Growth Partner</span>
            </div>
          </AnimatedSection>
          
          <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A0A0A] leading-[1.1]">
            <TextReveal text="WE BUILD" delay={0.15} />
            <div className="flex gap-4 flex-wrap">
              <GradientText><TextReveal text="DIGITAL" delay={0.2} /></GradientText>
            </div>
            <TextReveal text="SOLUTIONS THAT POWER" delay={0.25} />
            <div className="flex gap-4 flex-wrap">
              <GradientText><TextReveal text="MODERN" delay={0.3} /></GradientText>
              <TextReveal text="BUSINESSES." delay={0.35} />
            </div>
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-lg sm:text-xl text-[#5C504A] max-w-xl leading-relaxed">
              From custom software and scalable web platforms to <span className="text-[#FF6A00] font-semibold">data-driven Digital Marketing</span> — <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> engineers end-to-end technology solutions to accelerate your brand's growth.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact">
              <ShinyButton variant="primary">Discuss Your Project →</ShinyButton>
            </Link>
            <Link to="/services">
              <ShinyButton variant="outline">View Our Services</ShinyButton>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="w-full pt-8 border-t border-[#E5DED9] flex flex-wrap gap-8 justify-between lg:justify-start lg:gap-16">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#0A0A0A]">150+</span>
              <span className="text-sm text-[#5C504A]">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#0A0A0A]">99.8%</span>
              <span className="text-sm text-[#5C504A]">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-[#0A0A0A]">24/7</span>
              <span className="text-sm text-[#5C504A]">Support Available</span>
            </div>
          </AnimatedSection>
        </div>

        <motion.div style={{ y: yDashboard, opacity: opacityDashboard }} className="relative hidden lg:block">
          <AnimatedSection delay={0.3} direction="left">
            <div className="relative w-full aspect-square rounded-2xl bg-[#FAF8F6] border border-[#E5DED9] p-6 shadow-xl overflow-hidden flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#E5DED9]" />
                <div className="w-3 h-3 rounded-full bg-[#E5DED9]" />
                <div className="w-3 h-3 rounded-full bg-[#FF6A00]" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl border border-[#E5DED9] shadow-sm">
                  <p className="text-xs text-[#5C504A] mb-1 font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold text-[#0A0A0A]">$124,500</p>
                  <p className="text-xs text-[#FF6A00] font-semibold mt-2">+14.5% this month</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-[#E5DED9] shadow-sm">
                  <p className="text-xs text-[#5C504A] mb-1 font-medium">Active Users</p>
                  <p className="text-2xl font-bold text-[#0A0A0A]">84.2K</p>
                  <p className="text-xs text-[#FF6A00] font-semibold mt-2">+2.4K today</p>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-xl border border-[#E5DED9] p-4 flex items-end gap-2 relative shadow-inner">
                {[40, 70, 45, 90, 65, 100, 80, 120].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${(h / 120) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-[#FF6A00] to-[#FF6A00]/30 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#FF6A00]/5 blur-2xl -z-10 rounded-[100px]" />
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
