import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const sitemapData = [
  {
    category: 'Core Pages',
    links: [
      { label: 'Home Page', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'All Services Catalog', path: '/services' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    category: 'Software & SaaS Engineering',
    links: [
      { label: 'Custom Software Development', path: '/services/custom-software-development' },
      { label: 'SaaS Platform Development', path: '/services/saas-application-development' },
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
      { label: 'API & System Integration', path: '/services/api-integration-services' },
      { label: 'Business Process Automation', path: '/services/business-automation-services' },
    ],
  },
  {
    category: 'Web & Digital Commerce',
    links: [
      { label: 'Web Design & Development', path: '/services/web-development-company' },
      { label: 'E-Commerce Store Development', path: '/services/ecommerce-website-development' },
      { label: 'WordPress & WooCommerce', path: '/services/wordpress-development-services' },
      { label: 'Shopify Store Development', path: '/services/shopify-store-development' },
      { label: 'Website Maintenance & Support', path: '/services/website-maintenance-support' },
    ],
  },
  {
    category: 'Design & Creative Studio',
    links: [
      { label: 'UI/UX & Product Design', path: '/services/ui-ux-design-services' },
      { label: 'Brand Identity & Strategy', path: '/services/branding-and-creative-agency' },
      { label: 'Professional Logo Design', path: '/services/professional-logo-design' },
      { label: 'Video Editing & Production', path: '/services/professional-video-editing' },
      { label: 'Creative Marketing Design', path: '/services/creative-design-services' },
    ],
  },
  {
    category: 'Growth & Performance Marketing',
    links: [
      { label: 'Search Engine Optimization (SEO)', path: '/services/seo-services-company' },
      { label: 'Social Media Marketing', path: '/services/social-media-marketing-services' },
      { label: 'Pay-Per-Click Advertising (PPC)', path: '/services/ppc-advertising-management' },
      { label: 'Full-Funnel Digital Marketing', path: '/services/digital-marketing-services' },
      { label: 'Content Marketing & Copywriting', path: '/services/content-marketing-services' },
    ],
  },
  {
    category: 'Cloud, AI & Reliability',
    links: [
      { label: 'AI & Machine Learning Solutions', path: '/services/ai-automation-solutions' },
      { label: 'Cloud Infrastructure & DevOps', path: '/services/cloud-devops-services' },
      { label: 'Cyber Security & Auditing', path: '/services/cyber-security-services' },
      { label: 'Software QA & Testing', path: '/services/software-qa-testing' },
      { label: 'Database Architecture & Tuning', path: '/services/database-development-services' },
    ],
  },
  {
    category: 'Legal & Company Policies',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'HTML Website Sitemap', path: '/sitemap' },
    ],
  },
];

const SitemapPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-24 pb-20">
      <SEOHead
        title="HTML Website Sitemap | HUSSAIN X SOLUTION"
        description="Explore all 25 specialized services, solutions, and pages on the official Hussain X Solution website directory."
        canonicalPath="/sitemap"
      />
      <section className="relative overflow-hidden py-16 border-b border-[#E8E4E0] text-center bg-[#F9F8F6]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5620F]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E4E0] bg-white mb-6 shadow-xs">
              <span className="text-xs font-semibold text-[#F5620F] tracking-wide uppercase">Website Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Website <GradientText>Sitemap</GradientText>
            </h1>
            <p className="text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              A complete, accessible directory of all 25 specialized services and core company pages on the <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> platform.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-[#F9F8F6]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.map((group, i) => (
              <AnimatedSection key={i} delay={0.05 * i}>
                <div className="bg-white border border-[#E8E4E0] rounded-2xl p-7 h-full shadow-sm hover:border-[#F5620F]/40 transition-colors">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9F8F6] border border-[#E8E4E0] mb-5 shadow-xs">
                    <span className="text-xs font-bold text-[#F5620F] uppercase tracking-wide">{group.category}</span>
                  </div>
                  <ul className="space-y-3">
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          to={link.path}
                          className="flex items-center gap-2 text-[#5C504A] hover:text-[#F5620F] transition-colors text-sm group"
                        >
                          <ChevronRight size={14} className="text-[#E8E4E0] group-hover:text-[#F5620F] transition-colors shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
