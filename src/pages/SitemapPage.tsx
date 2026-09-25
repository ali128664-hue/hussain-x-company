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
      { label: 'All Services (Overview)', path: '/services' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    category: 'Engineering & Build',
    links: [
      { label: 'Custom Software Development', path: '/services/software-development' },
      { label: 'Web Design & Development', path: '/services/web-development' },
      { label: 'Mobile App Development', path: '/services/mobile-app-development' },
      { label: 'E-Commerce Solutions', path: '/services/ecommerce-solutions' },
    ],
  },
  {
    category: 'Design & Creative',
    links: [
      { label: 'UI/UX & Product Design', path: '/services/ui-ux-design' },
      { label: 'Brand Identity & Creative', path: '/services/branding-creative' },
    ],
  },
  {
    category: 'Growth & Marketing',
    links: [
      { label: 'SEO & Organic Growth', path: '/services/seo-services' },
      { label: 'Digital Marketing & Paid Ads', path: '/services/digital-marketing' },
    ],
  },
  {
    category: 'Technology & Reliability',
    links: [
      { label: 'AI & Business Automation', path: '/services/ai-automation' },
      { label: 'Cloud, DevOps & Security', path: '/services/cloud-devops' },
      { label: 'QA Testing & Reliability', path: '/services/qa-testing' },
      { label: 'Website Care & Support', path: '/services/website-support' },
    ],
  },
  {
    category: 'Legal & Compliance',
    links: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms of Service', path: '/terms-of-service' },
      { label: 'HTML Sitemap', path: '/sitemap' },
    ],
  },
];

const SitemapPage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F6] pt-24 pb-20">
      <SEOHead
        title="HTML Website Sitemap"
        description="Explore all services, solutions, and pages on the official Hussain X Solution website sitemap."
        canonicalPath="/sitemap"
      />
      <section className="relative overflow-hidden py-16 border-b border-[#E8E4E0] text-center bg-[#F9F8F6]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5620F]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E4E0] bg-white mb-6 shadow-xs">
              <span className="text-xs font-semibold text-[#F5620F] tracking-wide uppercase">Navigation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] mb-4">
              Website <GradientText>Sitemap</GradientText>
            </h1>
            <p className="text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              A complete directory of all pages and core services on the <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> website.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-[#F9F8F6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.map((group, i) => (
              <AnimatedSection key={i} delay={0.08 * i}>
                <div className="bg-white border border-[#E8E4E0] rounded-2xl p-6 h-full shadow-sm hover:border-[#F5620F]/40 transition-colors">
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
