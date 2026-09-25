import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services } from '@/data/servicesData';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AllServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#FAFAF9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <SectionHeading
              label="All Services"
              title="25 Services. One Team."
              accentWord="One Team."
              description="Click any service to see full details, deliverables, and pricing."
            />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A00] hover:text-[#E85D00] transition-colors whitespace-nowrap shrink-0"
            >
              Get a Custom Quote <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.id}
              delay={index * 0.04}
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
                  icon={<ServiceIcon name={service.icon} size={28} className="text-[#FF6A00]" />}
                  gradient={service.gradient}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesSection;
