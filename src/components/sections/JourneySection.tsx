import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Lightbulb, Target, PenTool, Code, CheckSquare, Rocket, TrendingUp, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, title: 'Discover', desc: 'Understanding your goals.', icon: Lightbulb },
  { id: 2, title: 'Strategy', desc: 'Planning the roadmap.', icon: Target },
  { id: 3, title: 'Design', desc: 'Crafting UI/UX.', icon: PenTool },
  { id: 4, title: 'Develop', desc: 'Building the solution.', icon: Code },
  { id: 5, title: 'Test', desc: 'Ensuring quality.', icon: CheckSquare },
  { id: 6, title: 'Launch', desc: 'Going live.', icon: Rocket },
  { id: 7, title: 'Market', desc: 'Attracting users.', icon: TrendingUp },
  { id: 8, title: 'Grow', desc: 'Scaling operations.', icon: BarChart },
];

export const JourneySection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#0d0d0d]">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="Our Process"
            title="From Idea to Growth"
            align="center"
            className="mb-20"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-6 md:top-8 md:left-0 w-0.5 h-full md:w-full md:h-0.5 bg-[#222] -z-10" />

          <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;
              
              return (
                <AnimatedSection
                  key={step.id}
                  delay={i * 0.1}
                  className="flex flex-row md:flex-col items-start md:items-center gap-6 md:gap-4 flex-1"
                >
                  <div
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={cn(
                      "relative w-16 h-16 rounded-full border-2 bg-[#161616] flex items-center justify-center transition-all duration-300 shrink-0",
                      isHovered ? "border-[#ED7A21] shadow-[0_0_20px_rgba(237,122,33,0.4)] scale-110" : "border-[#333] text-slate-400"
                    )}
                  >
                    <Icon className={cn("w-6 h-6", isHovered ? "text-[#ED7A21]" : "text-slate-500")} />
                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#ED7A21] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="md:text-center mt-2 md:mt-0">
                    <h4 className={cn("font-bold mb-1 transition-colors", isHovered ? "text-[#ED7A21]" : "text-white")}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-400 max-w-[120px]">{step.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
