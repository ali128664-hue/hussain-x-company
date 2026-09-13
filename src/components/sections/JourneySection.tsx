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
    <section className="py-24 relative overflow-hidden bg-[#FFFFFF] border-t border-[#E5DED9]/60">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <SectionHeading
            label="Our Process"
            title="From Idea to Scalable Growth"
            description="A proven, transparent step-by-step engineering roadmap executed for every client project."
            align="center"
            className="mb-20"
          />
        </AnimatedSection>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-8 left-6 md:top-8 md:left-0 w-0.5 h-full md:w-full md:h-0.5 bg-[#E5DED9] -z-10" />

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
                      "relative w-16 h-16 rounded-full border-2 bg-[#FAF8F6] flex items-center justify-center transition-all duration-300 shrink-0",
                      isHovered ? "border-[#FF6A00] shadow-[0_4px_20px_rgba(255,106,0,0.25)] scale-110" : "border-[#E5DED9] text-[#5C504A]"
                    )}
                  >
                    <Icon className={cn("w-6 h-6", isHovered ? "text-[#FF6A00]" : "text-[#5C504A]")} />
                    <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#FF6A00] flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                      {step.id}
                    </div>
                  </div>
                  
                  <div className="md:text-center mt-2 md:mt-0">
                    <h4 className={cn("font-bold text-sm mb-1 transition-colors", isHovered ? "text-[#FF6A00]" : "text-[#0A0A0A]")}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#5C504A] max-w-[120px]">{step.desc}</p>
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
