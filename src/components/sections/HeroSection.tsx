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
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#ED7A21]/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left space-y-8">
          <AnimatedSection delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ED7A21]/30 bg-[#ED7A21]/5">
              <span className="text-xl">🚀</span>
              <span className="text-sm font-medium text-[#ED7A21] tracking-wide uppercase">Complete Digital Solutions Partner</span>
            </div>
          </AnimatedSection>
          
          <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
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
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl leading-relaxed">
              From custom software and robust mobile applications to <span className="text-[#ED7A21] font-semibold">data-driven Social Media Marketing</span> — we provide a complete digital ecosystem under one roof to accelerate your brand's growth.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.5} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <ShinyButton variant="primary">Discuss Your Project →</ShinyButton>
            <Link to="/services">
              <ShinyButton variant="outline">View Our Services</ShinyButton>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.6} className="w-full pt-8 border-t border-white/10 flex flex-wrap gap-8 justify-between lg:justify-start lg:gap-16">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">150+</span>
              <span className="text-sm text-slate-400">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">99.8%</span>
              <span className="text-sm text-slate-400">Client Satisfaction</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">24/7</span>
              <span className="text-sm text-slate-400">Support Available</span>
            </div>
          </AnimatedSection>
        </div>

        <motion.div style={{ y: yDashboard, opacity: opacityDashboard }} className="relative hidden lg:block">
          <AnimatedSection delay={0.3} direction="left">
            <div className="relative w-full aspect-square rounded-2xl bg-[#161616] border border-[#222222] p-6 shadow-2xl overflow-hidden flex flex-col">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-slate-500 mb-1">Total Revenue</p>
                  <p className="text-2xl font-bold text-white">$124,500</p>
                  <p className="text-xs text-emerald-400 mt-2">+14.5% this month</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/5">
                  <p className="text-xs text-slate-500 mb-1">Active Users</p>
                  <p className="text-2xl font-bold text-white">84.2K</p>
                  <p className="text-xs text-[#ED7A21] mt-2">+2.4K today</p>
                </div>
              </div>

              <div className="flex-1 bg-[#1a1a1a] rounded-xl border border-white/5 p-4 flex items-end gap-2 relative">
                {[40, 70, 45, 90, 65, 100, 80, 120].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${(h / 120) * 100}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-gradient-to-t from-[#ED7A21]/80 to-[#ED7A21]/20 rounded-t-sm"
                  />
                ))}
              </div>
            </div>
            <div className="absolute -inset-4 bg-[#ED7A21]/10 blur-3xl -z-10 rounded-[100px]" />
          </AnimatedSection>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
