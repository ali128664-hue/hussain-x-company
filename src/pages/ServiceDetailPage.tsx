import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { services } from '@/data/servicesData';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import ShinyButton from '@/components/ui/ShinyButton';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);

  // Scroll to top on mount or when serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center pt-32 pb-20">
        <h1 className="text-4xl font-bold text-white mb-4">Service not found</h1>
        <p className="text-slate-400 mb-8">The service you are looking for does not exist.</p>
        <Link to="/services">
          <ShinyButton>Back to All Services</ShinyButton>
        </Link>
      </div>
    );
  }

  const IconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[service.icon] || LucideIcons.MonitorSmartphone;

  // Find related services
  const relatedServices = services
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);
  
  // Fill up if we don't have 3
  if (relatedServices.length < 3) {
    const additional = services
      .filter(s => s.id !== service.id && !relatedServices.find(rs => rs.id === s.id))
      .slice(0, 3 - relatedServices.length);
    relatedServices.push(...additional);
  }

  const processSteps = [
    { title: 'Requirement Analysis', description: 'We begin by thoroughly understanding your business goals and technical needs.' },
    { title: 'Design & Architecture', description: 'Creating blueprints, wireframes, and establishing the technical foundation.' },
    { title: 'Development & Testing', description: 'Iterative building followed by rigorous quality assurance.' },
    { title: 'Deployment & Support', description: 'Smooth launch followed by ongoing maintenance and optimization.' }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-background border-b border-card-border/30">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="absolute top-10 right-10 p-12 overflow-hidden pointer-events-none opacity-[0.03] select-none flex items-center justify-center">
          <span className="text-9xl font-bold text-primary">{service.number}</span>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </div>
            
            <div className="max-w-4xl">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8`}>
                <IconComponent size={40} className="text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {service.tagline}
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-20 bg-background border-b border-card-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading label="Detailed Offerings" title="What's Included" />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {service.subServices.map((sub, index) => (
              <AnimatedSection key={index} delay={index * 0.05} className="h-full">
                <div className="bg-card border border-card-border p-6 rounded-xl h-full flex flex-col relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="h-0.5 w-12 bg-primary mb-5"></div>
                  <h3 className="font-semibold text-white text-lg mb-3">{sub.name}</h3>
                  <p className="text-sm text-slate-400 flex-grow">{sub.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 bg-background border-b border-card-border/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeading label="Tech Stack" title="Technologies & Tools" />
              <div className="flex flex-wrap gap-3 mt-10">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-medium text-slate-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-background border-b border-card-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading label="Methodology" title="Our Development Process" />
          </AnimatedSection>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-card-border z-0"></div>
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
                  <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-primary font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-white font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card border-b border-card-border/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your {service.title} needs and see how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <ShinyButton>Book Free Consultation</ShinyButton>
              </Link>
              <Link to="/services" className="text-primary hover:text-primary/80 transition-colors font-medium">
                ← Back to All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading label="More Expertise" title="Related Services" />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {relatedServices.map((relatedService, index) => {
              const RelatedIconComponent = (LucideIcons as unknown as Record<string, React.ElementType>)[relatedService.icon] || LucideIcons.MonitorSmartphone;
              return (
                <AnimatedSection key={relatedService.id} delay={index * 0.1} className="h-full">
                  <div onClick={() => navigate(`/services/${relatedService.id}`)} className="cursor-pointer h-full block">
                    <ServiceCard number={relatedService.number}
                      title={relatedService.title}
                      description={relatedService.description}
                      icon={<RelatedIconComponent size={32} className="text-white" />}
                      gradient={relatedService.gradient}
                    />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;


