import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from '@/components/ServiceIcon';
import { servicePillars, services } from '@/data/servicesData';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const CategoriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-[#E8E4E0]">
      <div className="container mx-auto px-6 max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <SectionHeading
              label="Core Capabilities"
              title="Five Pillars. Complete Digital Mastery."
              accentWord="Complete Digital Mastery."
              description="From enterprise software architecture to full-funnel customer acquisition, our multidisciplinary team covers every stage of your digital evolution."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5620F] hover:text-[#D9540A] transition-colors whitespace-nowrap shrink-0 pb-1"
            >
              Explore all 25 services <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicePillars.map((pillar, i) => {
            // Find the 5 services belonging to this pillar
            const pillarServices = services.filter(s => pillar.serviceIds.includes(s.id));

            return (
              <AnimatedSection key={pillar.id} delay={0.08 * i}>
                <SpotlightCard
                  spotlightColor="rgba(245, 98, 15, 0.08)"
                  className="h-full p-8 flex flex-col bg-[#F9F8F6] border border-[#E8E4E0] hover:border-[#F5620F]/50 hover:shadow-[0_12px_36px_-10px_rgba(245,98,15,0.18)] transition-all duration-300 rounded-3xl group"
                >
                  {/* Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E4E0] flex items-center justify-center text-[#F5620F] group-hover:bg-[#F5620F] group-hover:text-white group-hover:border-[#F5620F] transition-all duration-300 shadow-sm">
                      <ServiceIcon name={pillar.icon} size={26} />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5620F] bg-[#F5620F]/10 px-3 py-1 rounded-full border border-[#F5620F]/20">
                      Pillar 0{i + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-[#111111] mb-1 group-hover:text-[#F5620F] transition-colors duration-200">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F5620F] mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-[#6B6560] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Included Services List */}
                  <div className="mt-auto pt-4 border-t border-[#E8E4E0]/80">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111111] mb-3">
                      Included Capabilities:
                    </p>
                    <div className="flex flex-col gap-2 mb-6">
                      {pillarServices.map(svc => (
                        <Link
                          key={svc.id}
                          to={`/services/${svc.id}`}
                          className="flex items-center gap-2 text-xs font-medium text-[#6B6560] hover:text-[#F5620F] transition-colors group/link"
                        >
                          <CheckCircle2 size={13} className="text-[#F5620F] shrink-0" />
                          <span className="group-hover/link:underline">{svc.title}</span>
                        </Link>
                      ))}
                    </div>

                    <Link
                      to={`/services/${pillarServices[0]?.id || ''}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F5620F] group-hover:gap-3 transition-all duration-200"
                    >
                      View Pillar Solutions <ArrowRight size={13} />
                    </Link>
                  </div>
                </SpotlightCard>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
