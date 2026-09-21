import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';

const sitemapData = [
  {
    category: 'Main Pages',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'All Services', path: '/services' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    category: 'Software Development',
    links: [
      { label: 'Custom Software Development', path: '/services/custom-software-development' },
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
      { label: 'SaaS Development', path: '/services/saas-application-development' },
      { label: 'Business Automation', path: '/services/business-automation-services' },
      { label: 'AI & Automation Solutions', path: '/services/ai-automation-solutions' },
    ],
  },
  {
    category: 'Web & E-Commerce',
    links: [
      { label: 'Web Development', path: '/services/web-development-company' },
      { label: 'E-Commerce Development', path: '/services/ecommerce-website-development' },
      { label: 'WordPress Development', path: '/services/wordpress-development-services' },
      { label: 'Shopify Development', path: '/services/shopify-store-development' },
      { label: 'UI/UX Design', path: '/services/ui-ux-design-services' },
    ],
  },
  {
    category: 'Digital Marketing',
    links: [
      { label: 'Social Media Marketing', path: '/services/social-media-marketing-services' },
      { label: 'Search Engine Optimization (SEO)', path: '/services/seo-services-company' },
      { label: 'Digital Marketing & Growth', path: '/services/digital-marketing-services' },
      { label: 'PPC Advertising Management', path: '/services/ppc-advertising-management' },
      { label: 'Content Marketing Services', path: '/services/content-marketing-services' },
    ],
  },
  {
    category: 'Creative & Branding',
    links: [
      { label: 'Branding & Creative Agency', path: '/services/branding-and-creative-agency' },
      { label: 'Professional Logo Design', path: '/services/professional-logo-design' },
      { label: 'Professional Video Editing', path: '/services/professional-video-editing' },
      { label: 'Creative Design Services', path: '/services/creative-design-services' },
    ],
  },
  {
    category: 'Technology & Infrastructure',
    links: [
      { label: 'Cloud & DevOps', path: '/services/cloud-devops-services' },
      { label: 'Cyber Security', path: '/services/cyber-security-services' },
      { label: 'API & System Integration', path: '/services/api-integration-services' },
      { label: 'Database Development', path: '/services/database-development-services' },
      { label: 'Software Testing & QA', path: '/services/software-qa-testing' },
      { label: 'Maintenance & Support', path: '/services/website-maintenance-support' },
    ],
  },
  {
    category: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'Sitemap', path: '/sitemap' },
    ],
  },
];

const SitemapPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-20">
      <SEOHead
        title="HTML Website Sitemap"
        description="Explore all services, solutions, and pages on the official Hussain X Solution website sitemap."
        canonicalPath="/sitemap"
      />
      <section className="relative overflow-hidden py-16 border-b border-[#E5DED9] text-center bg-[#FFFFFF]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF6A00]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5DED9] bg-[#FAF8F6] mb-6">
              <span className="text-xs font-semibold text-[#FF6A00] tracking-wide uppercase">Navigation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Website <GradientText>Sitemap</GradientText>
            </h1>
            <p className="text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              A complete overview of all pages on the <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> website. Find exactly what you're looking for quickly and easily.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.map((group, i) => (
              <AnimatedSection key={i} delay={0.08 * i}>
                <div className="bg-[#FAF8F6] border border-[#E5DED9] rounded-2xl p-6 h-full shadow-sm hover:border-[#FF6A00]/40 transition-colors">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DED9] mb-5 shadow-xs">
                    <span className="text-xs font-bold text-[#FF6A00] uppercase tracking-wide">{group.category}</span>
                  </div>
                  <ul className="space-y-3">
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          to={link.path}
                          className="flex items-center gap-2 text-[#5C504A] hover:text-[#FF6A00] transition-colors text-sm group"
                        >
                          <ChevronRight size={14} className="text-[#E5DED9] group-hover:text-[#FF6A00] transition-colors shrink-0" />
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
