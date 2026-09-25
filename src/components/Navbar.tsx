import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Mail, Facebook, Instagram, Linkedin,
  Menu, X, ChevronDown, ChevronRight,
  Code2, Layers, Smartphone, Cable, Cpu,
  Globe, ShoppingCart, LayoutTemplate, ShoppingBag, Wrench,
  Palette, Brush, PenTool, Video, Sparkles,
  Search, Share2, MousePointerClick, TrendingUp, FileText,
  Bot, Cloud, ShieldCheck, CheckCircle2, Database
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { useConsultationModal } from '@/context/ConsultationModalContext';

const servicesMenu = [
  {
    title: 'SOFTWARE & SAAS',
    icon: <Code2 size={14} />,
    items: [
      { label: 'Custom Software', icon: <Code2 size={14} />, path: '/services/custom-software-development' },
      { label: 'SaaS Platforms', icon: <Layers size={14} />, path: '/services/saas-application-development' },
      { label: 'Mobile Apps (iOS & Android)', icon: <Smartphone size={14} />, path: '/services/mobile-app-development' },
      { label: 'API & Integrations', icon: <Cable size={14} />, path: '/services/api-integration-services' },
      { label: 'Process Automation', icon: <Cpu size={14} />, path: '/services/business-automation-services' },
    ],
  },
  {
    title: 'WEB & COMMERCE',
    icon: <Globe size={14} />,
    items: [
      { label: 'Web Design & Dev', icon: <Globe size={14} />, path: '/services/web-development-company' },
      { label: 'E-Commerce Stores', icon: <ShoppingCart size={14} />, path: '/services/ecommerce-website-development' },
      { label: 'WordPress & WooCommerce', icon: <LayoutTemplate size={14} />, path: '/services/wordpress-development-services' },
      { label: 'Shopify Development', icon: <ShoppingBag size={14} />, path: '/services/shopify-store-development' },
      { label: 'Website Care & Support', icon: <Wrench size={14} />, path: '/services/website-maintenance-support' },
    ],
  },
  {
    title: 'DESIGN & CREATIVE',
    icon: <Palette size={14} />,
    items: [
      { label: 'UI/UX & Product Design', icon: <Palette size={14} />, path: '/services/ui-ux-design-services' },
      { label: 'Brand Identity', icon: <Brush size={14} />, path: '/services/branding-and-creative-agency' },
      { label: 'Logo Design', icon: <PenTool size={14} />, path: '/services/professional-logo-design' },
      { label: 'Video Production', icon: <Video size={14} />, path: '/services/professional-video-editing' },
      { label: 'Creative Design', icon: <Sparkles size={14} />, path: '/services/creative-design-services' },
    ],
  },
  {
    title: 'MARKETING & SEO',
    icon: <TrendingUp size={14} />,
    items: [
      { label: 'SEO Services', icon: <Search size={14} />, path: '/services/seo-services-company' },
      { label: 'Social Media Marketing', icon: <Share2 size={14} />, path: '/services/social-media-marketing-services' },
      { label: 'PPC Advertising (Ads)', icon: <MousePointerClick size={14} />, path: '/services/ppc-advertising-management' },
      { label: 'Full Digital Marketing', icon: <TrendingUp size={14} />, path: '/services/digital-marketing-services' },
      { label: 'Content & Copywriting', icon: <FileText size={14} />, path: '/services/content-marketing-services' },
    ],
  },
  {
    title: 'CLOUD & AI TECH',
    icon: <Cloud size={14} />,
    items: [
      { label: 'AI Solutions & Bots', icon: <Bot size={14} />, path: '/services/ai-automation-solutions' },
      { label: 'Cloud & DevOps', icon: <Cloud size={14} />, path: '/services/cloud-devops-services' },
      { label: 'Cyber Security', icon: <ShieldCheck size={14} />, path: '/services/cyber-security-services' },
      { label: 'QA & Software Testing', icon: <CheckCircle2 size={14} />, path: '/services/software-qa-testing' },
      { label: 'Database Architecture', icon: <Database size={14} />, path: '/services/database-development-services' },
    ],
  },
];

export function Navbar() {
  const { openModal } = useConsultationModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top utility bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#F9F8F6] text-xs text-[#5C504A] w-full border-b border-[#E8E4E0]">
        <div className="flex items-center gap-6">
          <a href="tel:+923480766608" className="flex items-center gap-2 hover:text-[#F5620F] transition-colors text-[#0A0A0A] font-medium">
            <Phone size={12} className="text-[#F5620F]" /> 0348-0766608
          </a>
          <a href="mailto:info@hussainxsolution.com" className="flex items-center gap-2 hover:text-[#F5620F] transition-colors text-[#0A0A0A] font-medium">
            <Mail size={12} className="text-[#F5620F]" /> info@hussainxsolution.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/hussainxsolution" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#F5620F] transition-colors text-[#5C504A]"><Facebook size={14} /></a>
          <a href="https://www.instagram.com/hussainxsolution/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#F5620F] transition-colors text-[#5C504A]"><Instagram size={14} /></a>
          <a href="https://www.linkedin.com/company/hussain-x-solution" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#F5620F] transition-colors text-[#5C504A]"><Linkedin size={14} /></a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "w-full px-6 transition-all duration-300",
        isScrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#E8E4E0] py-3.5"
          : "bg-[#FFFFFF] border-b border-[#E8E4E0]/80 py-4"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src="/logo.png"
              alt="HUSSAIN X SOLUTION"
              width={180}
              height={44}
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-[#0A0A0A] hover:text-[#F5620F] transition-colors">Home</Link>

            <div
              className="relative py-2"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-[#0A0A0A] hover:text-[#F5620F] transition-colors cursor-pointer">
                Services <ChevronDown size={14} className={cn("transition-transform", megaMenuOpen && "rotate-180 text-[#F5620F]")} />
              </button>
            </div>

            <Link to="/about" className="text-sm font-semibold text-[#0A0A0A] hover:text-[#F5620F] transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm font-semibold text-[#0A0A0A] hover:text-[#F5620F] transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <ShinyButton onClick={() => openModal()}>Book Free Consultation</ShinyButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-[#0A0A0A] p-2 hover:text-[#F5620F] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu (5 Columns) */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="hidden lg:block absolute top-[100%] left-0 w-full bg-[#FFFFFF] border-b border-[#E8E4E0] shadow-2xl"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid grid-cols-5 gap-6">
                {servicesMenu.map((col, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h3 className="text-[#F5620F] font-mono text-xs uppercase tracking-wider flex items-center gap-2 font-bold pb-2 border-b border-[#E8E4E0]">
                      {col.icon} {col.title}
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {col.items.map((item, j) => (
                        <li key={j}>
                          <Link
                            to={item.path}
                            onClick={() => setMegaMenuOpen(false)}
                            className="group flex items-center gap-2.5 text-xs font-medium text-[#5C504A] hover:text-[#F5620F] transition-colors py-1.5 px-2 rounded-lg hover:bg-[#F9F8F6]"
                          >
                            <span className="text-[#F5620F]/70 group-hover:text-[#F5620F] transition-colors">
                              {item.icon}
                            </span>
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E4E0] flex items-center justify-between">
                <p className="text-xs text-[#6B6560]">
                  Looking for custom engineering? We build bespoke software for startups and enterprises.
                </p>
                <Link
                  to="/services"
                  onClick={() => setMegaMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#F5620F] hover:text-[#D9540A] uppercase tracking-wider transition-colors"
                >
                  View All 25 Services <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#FFFFFF] flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-[#E8E4E0]">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center shrink-0">
                <img
                  src="/logo.png"
                  alt="HUSSAIN X SOLUTION"
                  width={150}
                  height={36}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0A0A0A] hover:text-[#F5620F] p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#0A0A0A] hover:text-[#F5620F] transition-colors">Home</Link>

              <div className="flex flex-col gap-4">
                <button
                  className="flex justify-between items-center text-2xl font-bold text-[#0A0A0A] hover:text-[#F5620F] transition-colors w-full text-left"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown size={20} className={cn("transition-transform", mobileServicesOpen && "rotate-180 text-[#F5620F]")} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-6 pl-4 border-l-2 border-[#E8E4E0] my-2"
                    >
                      {servicesMenu.map((col, i) => (
                        <div key={i} className="flex flex-col gap-2.5">
                          <h4 className="text-[#F5620F] font-mono text-xs uppercase font-bold">{col.title}</h4>
                          <ul className="flex flex-col gap-2">
                            {col.items.map((item, j) => (
                              <li key={j}>
                                <Link
                                  to={item.path}
                                  onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                                  className="flex items-center gap-2.5 text-xs text-[#5C504A] hover:text-[#F5620F] transition-colors py-1"
                                >
                                  {item.icon} {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#0A0A0A] hover:text-[#F5620F] transition-colors">About Us</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#0A0A0A] hover:text-[#F5620F] transition-colors">Contact</Link>

              <div className="mt-auto pt-8 flex flex-col gap-6">
                <ShinyButton onClick={() => { setMobileMenuOpen(false); openModal(); }}>Book Free Consultation</ShinyButton>
                <div className="flex items-center gap-6 justify-center text-[#5C504A]">
                  <a href="https://www.facebook.com/hussainxsolution" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#F5620F] transition-colors"><Facebook size={20} /></a>
                  <a href="https://www.instagram.com/hussainxsolution/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#F5620F] transition-colors"><Instagram size={20} /></a>
                  <a href="https://www.linkedin.com/company/hussain-x-solution" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#F5620F] transition-colors"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
