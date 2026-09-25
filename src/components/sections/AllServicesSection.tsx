import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services } from '@/data/servicesData';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const categoryTabs = [
  { id: 'all', label: 'All Services (25)' },
  { id: 'software', label: 'Software & SaaS (5)' },
  { id: 'web', label: 'Web & E-Commerce (5)' },
  { id: 'design', label: 'Design & Creative (5)' },
  { id: 'marketing', label: 'Marketing & SEO (5)' },
  { id: 'technology', label: 'Cloud & AI (5)' },
];

const AllServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(s => s.category === activeTab);

  return (
    <section className="py-24 bg-[#F9F8F6] border-t border-[#E8E4E0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              label="Service Catalog"
              title="25 Specialized Services. One Engineering Studio."
              accentWord="One Engineering Studio."
              description="Explore our complete catalog of specialized software engineering, creative design, and growth marketing services."
            />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5620F] hover:text-[#D9540A] transition-colors whitespace-nowrap shrink-0 pb-1"
            >
              Request Custom Proposal <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        {/* Interactive Category Filter Bar */}
        <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap items-center gap-2 pb-2">
            {categoryTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-[#F5620F] border-[#F5620F] text-white shadow-md shadow-[#F5620F]/20'
                    : 'bg-white border-[#E8E4E0] text-[#6B6560] hover:border-[#F5620F]/40 hover:text-[#111111]'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Services Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredServices.map(service => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <div
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="cursor-pointer h-full block"
                >
                  <ServiceCard
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    icon={<ServiceIcon name={service.icon} size={26} className="text-[#F5620F]" />}
                    gradient={service.gradient}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default AllServicesSection;
