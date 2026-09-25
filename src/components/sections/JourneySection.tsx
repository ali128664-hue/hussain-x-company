import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Lightbulb, Target, PenTool, Code, CheckSquare, Rocket, TrendingUp, BarChart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Discover', desc: 'Deep-dive into your goals, users, and market landscape.', icon: Lightbulb, color: '#FF6A00' },
  { id: 2, title: 'Strategy', desc: 'Define a clear roadmap with milestones and KPIs.', icon: Target, color: '#FF6A00' },
  { id: 3, title: 'Design', desc: 'Craft pixel-perfect UI/UX wireframes and prototypes.', icon: PenTool, color: '#FF6A00' },
  { id: 4, title: 'Develop', desc: 'Build scalable, tested, production-ready code.', icon: Code, color: '#FF6A00' },
  { id: 5, title: 'Test', desc: 'Rigorous QA across devices, browsers, and edge cases.', icon: CheckSquare, color: '#FF6A00' },
  { id: 6, title: 'Launch', desc: 'Deploy securely with zero downtime.', icon: Rocket, color: '#FF6A00' },
  { id: 7, title: 'Market', desc: 'SEO, ads, and campaigns to attract qualified users.', icon: TrendingUp, color: '#FF6A00' },
  { id: 8, title: 'Grow', desc: 'Analytics, iterations, and scaling for long-term success.', icon: BarChart, color: '#FF6A00' },
];

export const JourneySection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden bg-[#FAFAF9] border-t border-[#E5DED9]/60">
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Our Process"
            title="From Idea to Scalable Growth"
            accentWord="Scalable Growth"
            description="A proven, transparent step-by-step engineering roadmap executed for every client project."
            align="center"
            className="mb-20"
          />
        </AnimatedSection>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Progress bar */}
          <div className="absolute top-8 left-0 right-0 h-px bg-[#E5DED9] z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-[#FF6A00] to-[#FF6A00]/20 z-0 origin-left"
          />

          <div className="flex justify-between gap-2 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;
              return (
                <AnimatedSection key={step.id} delay={i * 0.08} className="flex flex-col items-center text-center flex-1">
                  <div
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={cn(
                      'relative w-16 h-16 rounded-2xl border-2 bg-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm mb-5',
                      isHovered
                        ? 'border-[#FF6A00] shadow-[0_0_24px_rgba(255,106,0,0.25)] -translate-y-2 bg-[#FF6A00]'
                        : 'border-[#E5DED9]'
                    )}
                  >
                    <Icon
                      className={cn('w-6 h-6 transition-colors duration-200', isHovered ? 'text-white' : 'text-[#5C504A]')}
                    />
                    {/* Step number badge */}
                    <div className="absolute -top-2.5 -right-2.5 w-5 h-5 rounded-full bg-[#FF6A00] flex items-center justify-center text-[9px] font-black text-white shadow">
                      {step.id}
                    </div>
                  </div>

                  <h4 className={cn('font-bold text-sm mb-1 transition-colors duration-200', isHovered ? 'text-[#FF6A00]' : 'text-[#0A0A0A]')}>
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-[#5C504A] max-w-[100px] leading-relaxed">{step.desc}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-5 relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-[#E5DED9]" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <AnimatedSection key={step.id} delay={i * 0.07} className="flex items-start gap-5">
                <div className="relative w-14 h-14 rounded-xl bg-white border-2 border-[#E5DED9] flex items-center justify-center shrink-0 shadow-sm z-10">
                  <Icon className="w-5 h-5 text-[#FF6A00]" />
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#FF6A00] flex items-center justify-center text-[9px] font-black text-white">
                    {step.id}
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="font-bold text-[#0A0A0A] mb-1">{step.title}</h4>
                  <p className="text-sm text-[#5C504A] leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
