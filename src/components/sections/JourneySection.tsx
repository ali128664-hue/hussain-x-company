import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from '@/components/ServiceIcon';
import { processSteps } from '@/data/servicesData';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const JourneySection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-28 relative overflow-hidden bg-[#F9F8F6] border-t border-[#E8E4E0]">
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #111111 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="How We Work"
            title="Five Steps. Zero Surprises."
            accentWord="Zero Surprises."
            description="A transparent, proven process that takes your idea from a concept to a live, growing product — with you in the loop at every step."
            align="center"
            className="mb-20"
          />
        </AnimatedSection>

        {/* Desktop: 5-step horizontal flow */}
        <div className="hidden md:block relative">
          {/* Animated progress line */}
          <div className="absolute top-10 left-[10%] right-[10%] h-px bg-[#E8E4E0] z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            className="absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-[#F5620F] to-[#F5620F]/20 z-0 origin-left"
          />

          <div className="flex justify-between gap-4 relative z-10">
            {processSteps.map((step, i) => {
              const isHovered = hoveredStep === i;
              return (
                <AnimatedSection key={step.number} delay={i * 0.1} className="flex flex-col items-center text-center flex-1">
                  <div
                    onMouseEnter={() => setHoveredStep(i)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={cn(
                      'relative w-20 h-20 rounded-2xl border-2 bg-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm mb-6',
                      isHovered
                        ? 'border-[#F5620F] shadow-[0_0_28px_rgba(245,98,15,0.22)] -translate-y-3 bg-[#F5620F]'
                        : 'border-[#E8E4E0]'
                    )}
                  >
                    <ServiceIcon
                      name={step.icon}
                      size={24}
                      className={cn('transition-colors duration-200', isHovered ? 'text-white' : 'text-[#6B6560]')}
                    />
                    {/* Step badge */}
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#F5620F] flex items-center justify-center text-[10px] font-black text-white shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <h4 className={cn(
                    'font-bold text-sm mb-2 transition-colors duration-200',
                    isHovered ? 'text-[#F5620F]' : 'text-[#111111]'
                  )}>
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#6B6560] max-w-[130px] leading-relaxed">{step.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-6 relative">
          <div className="absolute left-9 top-0 bottom-0 w-px bg-[#E8E4E0]" />
          {processSteps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.08} className="flex items-start gap-5">
              <div className="relative w-18 h-18 flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white border-2 border-[#E8E4E0] flex items-center justify-center shadow-sm z-10 relative">
                  <ServiceIcon name={step.icon} size={20} className="text-[#F5620F]" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#F5620F] flex items-center justify-center text-[9px] font-black text-white">
                  {step.number}
                </div>
              </div>
              <div className="pt-2">
                <h4 className="font-bold text-[#111111] mb-1">{step.title}</h4>
                <p className="text-sm text-[#6B6560] leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
