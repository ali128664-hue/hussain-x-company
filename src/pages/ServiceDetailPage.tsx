import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { ServiceIcon } from '@/components/ServiceIcon';
import { services } from '@/data/servicesData';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import ShinyButton from '@/components/ui/ShinyButton';
import { useConsultationModal } from '@/context/ConsultationModalContext';
import { SEOHead } from '@/components/SEOHead';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const slugRedirects: Record<string, string> = {
  // Short alias redirects to full canonical SEO slugs
  'custom-software': 'custom-software-development',
  'saas': 'saas-application-development',
  'mobile-apps': 'mobile-app-development',
  'api-integration': 'api-integration-services',
  'business-automation': 'business-automation-services',
  'web-development': 'web-development-company',
  'ecommerce': 'ecommerce-website-development',
  'wordpress': 'wordpress-development-services',
  'shopify': 'shopify-store-development',
  'maintenance': 'website-maintenance-support',
  'ui-ux-design': 'ui-ux-design-services',
  'branding': 'branding-and-creative-agency',
  'logo-design': 'professional-logo-design',
  'video-editing': 'professional-video-editing',
  'creative-design': 'creative-design-services',
  'seo-services': 'seo-services-company',
  'social-media-marketing': 'social-media-marketing-services',
  'ppc': 'ppc-advertising-management',
  'digital-marketing': 'digital-marketing-services',
  'content-marketing': 'content-marketing-services',
  'ai-automation': 'ai-automation-solutions',
  'cloud-devops': 'cloud-devops-services',
  'cyber-security': 'cyber-security-services',
  'qa-testing': 'software-qa-testing',
  'database': 'database-development-services',
  // Backward compatibility from temporary 12-slug experiment
  'software-development': 'custom-software-development',
  'ecommerce-solutions': 'ecommerce-website-development',
  'branding-creative': 'branding-and-creative-agency',
  'website-support': 'website-maintenance-support',
};

const ServiceDetailPage: React.FC = () => {
  const { openModal } = useConsultationModal();
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  // Redirect legacy short slugs to canonical SEO slugs
  if (serviceId && slugRedirects[serviceId]) {
    return <Navigate to={`/services/${slugRedirects[serviceId]}`} replace />;
  }

  const service = services.find(s => s.id === serviceId);

  // Scroll to top on mount or when serviceId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F9F8F6] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
        <h1 className="text-3xl font-extrabold text-[#111111] mb-4">Service Not Found</h1>
        <p className="text-[#6B6560] mb-8 max-w-md">The service page you are looking for has moved or does not exist.</p>
        <Link to="/services">
          <ShinyButton>Explore All 25 Services</ShinyButton>
        </Link>
      </div>
    );
  }

  // Find related services in the same category
  const relatedServices = services
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  // Fill up if we don't have 3 in the same category
  if (relatedServices.length < 3) {
    const additional = services
      .filter(s => s.id !== service.id && !relatedServices.find(rs => rs.id === s.id))
      .slice(0, 3 - relatedServices.length);
    relatedServices.push(...additional);
  }

  const processSteps = [
    { title: 'Discovery & Scope', description: 'Deep technical analysis of requirements, workflows, and success metrics.' },
    { title: 'UX Architecture', description: 'Interactive Figma wireframes, data schemas, and technical blueprint approval.' },
    { title: 'Sprint Development', description: 'Agile engineering with bi-weekly demos, clean code, and test passes.' },
    { title: 'Deployment & Scaling', description: 'Automated CI/CD launch, monitoring setup, and post-launch support.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.description,
    'provider': {
      '@type': 'Organization',
      'name': 'HUSSAIN X SOLUTION',
      'url': 'https://hussainxsolution.com',
      'logo': 'https://hussainxsolution.com/logo-dark.png',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Lahore',
        'addressRegion': 'Punjab',
        'addressCountry': 'Pakistan',
      },
    },
    'serviceType': service.category,
    'areaServed': 'Pakistan, Global',
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-0">
      <SEOHead
        title={`${service.title} | HUSSAIN X SOLUTION`}
        description={service.description}
        canonicalPath={`/services/${service.id}`}
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-[#F9F8F6] border-b border-[#E8E4E0]">
        <div className="absolute inset-0 bg-[#F5620F]/5 pointer-events-none" />
        <div className="absolute top-10 right-10 p-12 overflow-hidden pointer-events-none opacity-[0.05] select-none flex items-center justify-center">
          <span className="text-9xl font-black text-[#F5620F]">{service.number}</span>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <AnimatedSection>
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#6B6560] mb-8">
              <Link to="/" className="hover:text-[#F5620F] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-[#F5620F] transition-colors">Services</Link>
              <span>/</span>
              <span className="text-[#111111] font-bold">{service.title}</span>
            </div>

            <div className="max-w-3xl">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#E8E4E0] shadow-sm flex items-center justify-center mb-8 text-[#F5620F]">
                <ServiceIcon name={service.icon} size={32} />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#111111] mb-5 tracking-tight leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-[#F5620F] font-bold mb-6">
                {service.tagline}
              </p>
              <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <ShinyButton onClick={() => openModal(service.title)}>
                  Book Free Consultation
                </ShinyButton>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#F5620F] transition-colors"
                >
                  Contact Our Engineers <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E8E4E0]">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Deliverables"
              title="What Is Included in This Service"
              accentWord="What Is Included"
              description="Every engagement is structured around concrete deliverables, technical excellence, and transparent communication."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {service.subServices.map((sub, index) => (
              <AnimatedSection key={index} delay={index * 0.04} className="h-full">
                <div className="bg-[#F9F8F6] border border-[#E8E4E0] p-7 rounded-2xl h-full flex flex-col relative overflow-hidden group hover:border-[#F5620F]/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={16} className="text-[#F5620F] shrink-0" />
                    <h3 className="font-bold text-[#111111] text-base group-hover:text-[#F5620F] transition-colors">
                      {sub.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B6560] leading-relaxed flex-grow">
                    {sub.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      {service.technologies && service.technologies.length > 0 && (
        <section className="py-20 bg-[#F9F8F6] border-b border-[#E8E4E0]">
          <div className="container mx-auto px-6 max-w-6xl">
            <AnimatedSection>
              <SectionHeading
                label="Tools & Tech"
                title="Technologies We Master"
                accentWord="Technologies"
                description="We use proven, enterprise-grade frameworks and development tools."
              />
              <div className="flex flex-wrap gap-3 mt-10">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-5 py-2.5 bg-white border border-[#E8E4E0] rounded-full text-xs font-bold text-[#111111] shadow-xs"
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
      <section className="py-24 bg-[#FFFFFF] border-b border-[#E8E4E0]">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <SectionHeading
              label="Workflow"
              title="Our Engineering Process"
              accentWord="Engineering Process"
              description="A battle-tested 4-step framework from inception to production deployment."
            />
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="flex flex-col items-start p-6 rounded-2xl bg-[#F9F8F6] border border-[#E8E4E0] h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#F5620F] text-white flex items-center justify-center font-black text-sm mb-5 shadow-sm">
                    0{index + 1}
                  </div>
                  <h3 className="text-[#111111] font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-[#6B6560] text-xs leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-[#F9F8F6]">
        <div className="container mx-auto px-6 max-w-6xl">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-12">
              <SectionHeading
                label="Explore More"
                title="Related Capabilities"
                accentWord="Related Capabilities"
              />
              <Link
                to="/services"
                className="text-xs font-bold uppercase tracking-wider text-[#F5620F] hover:text-[#D9540A] transition-colors"
              >
                All 25 Services →
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relatedService, index) => (
              <AnimatedSection key={relatedService.id} delay={index * 0.08} className="h-full">
                <div
                  onClick={() => navigate(`/services/${relatedService.id}`)}
                  className="cursor-pointer h-full block"
                >
                  <ServiceCard
                    number={relatedService.number}
                    title={relatedService.title}
                    description={relatedService.description}
                    icon={<ServiceIcon name={relatedService.icon} size={28} className="text-[#F5620F]" />}
                    gradient={relatedService.gradient}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
