import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services } from '@/data/servicesData';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Show only the top 6 most important services in the overview
const overviewServices = services.slice(0, 6);

export const CategoriesSection = () => {
  return (
    <section className="py-28 bg-[#F9F8F6] border-t border-[#E8E4E0]">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <SectionHeading
              label="What We Do"
              title="Software. Design. Growth."
              accentWord="Growth."
              description="Six core disciplines. One team. Everything your business needs to build, launch, and scale."
            />
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5620F] hover:text-[#D9540A] transition-colors whitespace-nowrap shrink-0 pb-1"
            >
              See all 12 services <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {overviewServices.map((svc, i) => (
            <AnimatedSection key={svc.id} delay={0.07 * i}>
              <Link to={`/services/${svc.id}`} className="block h-full">
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <SpotlightCard
                    spotlightColor="rgba(245, 98, 15, 0.07)"
                    className="h-full p-7 flex flex-col bg-white border border-[#E8E4E0] hover:border-[#F5620F]/50 hover:shadow-[0_8px_30px_-8px_rgba(245,98,15,0.18)] transition-all duration-300 rounded-2xl group"
                  >
                    {/* Icon */}
                    <div className="mb-5 w-12 h-12 rounded-xl bg-[#F5620F]/8 border border-[#F5620F]/20 flex items-center justify-center group-hover:bg-[#F5620F] group-hover:border-[#F5620F] transition-all duration-300">
                      <ServiceIcon
                        name={svc.icon}
                        size={20}
                        className="text-[#F5620F] group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    <h3 className="text-base font-bold text-[#111111] mb-2 group-hover:text-[#F5620F] transition-colors duration-200 leading-tight">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#6B6560] mb-5 leading-relaxed line-clamp-3 flex-1">
                      {svc.tagline}
                    </p>

                    <div className="flex items-center gap-2 text-[#F5620F] font-semibold text-xs mt-auto group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight size={12} />
                    </div>
                  </SpotlightCard>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
