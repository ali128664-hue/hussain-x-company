import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GradientText } from '@/components/ui/GradientText';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ChevronRight } from 'lucide-react';

const sitemapData = [
  {
    category: 'Main Pages',
    color: 'from-orange-500 to-amber-500',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'All Services', path: '/services' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
  {
    category: 'Software Development',
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-green-500 to-emerald-500',
    links: [
      { label: 'Web Development', path: '/services/web-development' },
      { label: 'E-Commerce Development', path: '/services/ecommerce' },
      { label: 'UI/UX Design', path: '/services/ui-ux-design' },
    ],
  },
  {
    category: 'Digital Marketing',
    color: 'from-purple-500 to-pink-500',
    links: [
      { label: 'Social Media Marketing', path: '/services/social-media-marketing' },
      { label: 'Search Engine Optimization (SEO)', path: '/services/seo-services' },
      { label: 'Digital Marketing & Growth', path: '/services/digital-marketing' },
    ],
  },
  {
    category: 'Creative & Branding',
    color: 'from-pink-500 to-rose-500',
    links: [
      { label: 'Branding & Creative Design', path: '/services/branding' },
    ],
  },
  {
    category: 'Technology & Infrastructure',
    color: 'from-indigo-500 to-violet-500',
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
    color: 'from-slate-500 to-gray-600',
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
    <div className="min-h-screen bg-background pt-24 pb-20">
      <section className="relative overflow-hidden py-16 border-b border-white/5 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ED7A21]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ED7A21]/30 bg-[#ED7A21]/5 mb-6">
              <span className="text-sm font-medium text-[#ED7A21] tracking-wide uppercase">Navigation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Website <GradientText>Sitemap</GradientText>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              A complete overview of all pages on the Hussain X Solutions website. Find exactly what you're looking for quickly and easily.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sitemapData.map((group, i) => (
              <AnimatedSection key={i} delay={0.08 * i}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 h-full">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${group.color} mb-5`}>
                    <span className="text-xs font-bold text-white uppercase tracking-wide">{group.category}</span>
                  </div>
                  <ul className="space-y-3">
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <Link
                          to={link.path}
                          className="flex items-center gap-2 text-slate-400 hover:text-[#ED7A21] transition-colors text-sm group"
                        >
                          <ChevronRight size={14} className="text-slate-600 group-hover:text-[#ED7A21] transition-colors shrink-0" />
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
