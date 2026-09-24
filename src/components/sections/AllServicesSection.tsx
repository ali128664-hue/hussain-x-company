import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services } from '@/data/servicesData';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

const AllServicesSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading 
            label="Our Expertise" 
            title="All Services" 
            align="center"
          />
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id} 
              delay={index * 0.05} 
              className="h-full"
            >
              <div onClick={() => navigate(`/services/${service.id}`)} className="cursor-pointer h-full block">
                <ServiceCard number={service.number} 
                  title={service.title}
                  description={service.description}
                  icon={<ServiceIcon name={service.icon} size={32} className="text-[#FF6A00]" />}
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

