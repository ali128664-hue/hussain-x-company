import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ChevronRight } from 'lucide-react';

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
      { label: 'Custom Software Development', path: '/services/custom-software' },
      { label: 'Mobile App Development', path: '/services/mobile-apps' },
      { label: 'SaaS Development', path: '/services/saas' },
      { label: 'Business Automation', path: '/services/business-automation' },
      { label: 'AI & Automation Solutions', path: '/services/ai-automation' },
    ],
  },
  {
    category: 'Web & E-Commerce',
    links: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'E-Commerce Development', path: '/services/ecommerce' },
      { label: 'UI/UX Design', path: '/services/ui-ux-design' },
    ],
  },
  {
    category: 'Digital Marketing',
    links: [
      { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
      { label: 'Search Engine Optimization (SEO)', path: '/services/seo-services' },
      { label: 'Digital Marketing & Growth', path: '/services/digital-marketing' },
    ],
  },
  {
    category: 'Creative & Branding',
    links: [
      { label: 'Branding & Creative Design', path: '/services/branding' },
    ],
  },
  {
    category: 'Technology & Infrastructure',
    links: [
      { label: 'Cloud & DevOps', path: '/services/cloud-devops' },
      { label: 'Cyber Security', path: '/services/cyber-security' },
      { label: 'API & System Integration', path: '/services/api-integration' },
      { label: 'Database Development', path: '/services/database' },
      { label: 'Software Testing & QA', path: '/services/qa-testing' },
      { label: 'Maintenance & Support', path: '/services/maintenance' },
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
