import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, Facebook, Instagram, Linkedin, 
  Menu, X, ChevronDown, ChevronRight, 
  Code, Layout, Server, TrendingUp, Lightbulb,
  Smartphone, Monitor, Globe, Cloud, Database,
  Shield, Bot, Search, Share2, BarChart, Video,
  PenTool, Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
// If useLenisScroll is not exported this way, compilation might fail, but following instructions:
import { ShinyButton } from '@/components/ui/ShinyButton';
import { useConsultationModal } from '@/context/ConsultationModalContext';

const servicesMenu = [
  {
    title: "SOFTWARE DEVELOPMENT",
    icon: <Code size={14} />,
    items: [
      { label: "Custom Software", icon: <Code size={16} />, path: "/services/custom-software-development" },
      { label: "Web Applications", icon: <Monitor size={16} />, path: "/services/web-development-company" },
      { label: "Mobile Apps", icon: <Smartphone size={16} />, path: "/services/mobile-app-development" },
      { label: "SaaS Development", icon: <Cloud size={16} />, path: "/services/saas-application-development" },
      { label: "API Integration", icon: <Settings size={16} />, path: "/services/api-integration-services" }
    ]
  },
  {
    title: "DESIGN & DEVELOPMENT",
    icon: <Layout size={14} />,
    items: [
      { label: "UI/UX Design", icon: <PenTool size={16} />, path: "/services/ui-ux-design-services" },
      { label: "Web Development", icon: <Globe size={16} />, path: "/services/web-development-company" },
      { label: "E-commerce", icon: <Layout size={16} />, path: "/services/ecommerce-website-development" },
      { label: "WordPress", icon: <Layout size={16} />, path: "/services/wordpress-development-services" },
      { label: "Shopify", icon: <Layout size={16} />, path: "/services/shopify-store-development" }
    ]
  },
  {
    title: "TECHNOLOGY",
    icon: <Server size={14} />,
    items: [
      { label: "Cloud & DevOps", icon: <Cloud size={16} />, path: "/services/cloud-devops-services" },
      { label: "Database Solutions", icon: <Database size={16} />, path: "/services/database-development-services" },
      { label: "AI & Automation", icon: <Bot size={16} />, path: "/services/ai-automation-solutions" },
      { label: "Cyber Security", icon: <Shield size={16} />, path: "/services/cyber-security-services" },
      { label: "QA & Testing", icon: <Shield size={16} />, path: "/services/software-qa-testing" }
    ]
  },
  {
    title: "DIGITAL GROWTH",
    icon: <TrendingUp size={14} />,
    items: [
      { label: "SEO", icon: <Search size={16} />, path: "/services/seo-services-company" },
      { label: "Digital Marketing", icon: <Share2 size={16} />, path: "/services/digital-marketing-services" },
      { label: "Social Media", icon: <Share2 size={16} />, path: "/services/social-media-marketing-services" },
      { label: "PPC", icon: <BarChart size={16} />, path: "/services/ppc-advertising-management" },
      { label: "Content Marketing", icon: <PenTool size={16} />, path: "/services/content-marketing-services" }
    ]
  },
  {
    title: "CREATIVE",
    icon: <Lightbulb size={14} />,
    items: [
      { label: "Branding", icon: <Lightbulb size={16} />, path: "/services/branding-and-creative-agency" },
      { label: "Logo Design", icon: <PenTool size={16} />, path: "/services/professional-logo-design" },
      { label: "Video Editing", icon: <Video size={16} />, path: "/services/professional-video-editing" },
      { label: "Creative Design", icon: <Layout size={16} />, path: "/services/creative-design-services" },
      { label: "Business Automation", icon: <Settings size={16} />, path: "/services/business-automation-services" }
    ]
  }
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
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#FAF8F6] text-xs text-[#5C504A] w-full border-b border-[#E5DED9]">
        <div className="flex items-center gap-6">
          <a href="tel:+923480766608" className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors text-[#0A0A0A] font-medium">
            <Phone size={12} className="text-[#FF6A00]" /> 0348-0766608
          </a>
          <a href="mailto:info@hussainxsolution.com" className="flex items-center gap-2 hover:text-[#FF6A00] transition-colors text-[#0A0A0A] font-medium">
            <Mail size={12} className="text-[#FF6A00]" /> info@hussainxsolution.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/hussainxsolution" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#FF6A00] transition-colors text-[#5C504A]"><Facebook size={14} /></a>
          <a href="https://www.instagram.com/hussainxsolution/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#FF6A00] transition-colors text-[#5C504A]"><Instagram size={14} /></a>
          <a href="https://www.linkedin.com/company/hussain-x-solution" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#FF6A00] transition-colors text-[#5C504A]"><Linkedin size={14} /></a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "w-full px-6 transition-all duration-300",
        isScrolled 
          ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#E5DED9] py-3.5" 
          : "bg-[#FFFFFF] border-b border-[#E5DED9]/70 py-4"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img 
              src="/logo.png" 
              alt="HUSSAIN X SOLUTION" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">Home</Link>
            
            <div 
              className="relative py-2"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">
                Services <ChevronDown size={14} className={cn("transition-transform", megaMenuOpen && "rotate-180")} />
              </button>
            </div>
            
            <Link to="/about" className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <ShinyButton onClick={() => openModal()}>Get Free Consultation</ShinyButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-[#0A0A0A] p-2 hover:text-[#FF6A00] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute top-[100%] left-0 w-full bg-[#FFFFFF] border-b border-[#E5DED9] shadow-2xl"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid grid-cols-5 gap-8">
                {servicesMenu.map((col, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h3 className="text-[#FF6A00] font-mono text-xs uppercase tracking-wider flex items-center gap-2 font-semibold">
                      {col.icon} {col.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {col.items.map((item, j) => (
                        <li key={j}>
                          <Link
                            to={item.path}
                            onClick={() => setMegaMenuOpen(false)}
                            className="group flex items-center gap-3 text-sm text-[#5C504A] hover:text-[#FF6A00] transition-colors py-1 px-1.5 rounded hover:bg-[#FAF8F6]"
                          >
                            <span className="opacity-70 group-hover:opacity-100 text-[#FF6A00] transition-opacity">
                              {item.icon}
                            </span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-[#E5DED9] text-center">
                <Link
                  to="/services"
                  onClick={() => setMegaMenuOpen(false)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF6A00] hover:text-[#E85D00] transition-colors"
                >
                  View All 25 Services <ChevronRight size={16} />
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
            <div className="flex justify-between items-center p-6 border-b border-[#E5DED9]">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center shrink-0">
                <img 
                  src="/logo.png" 
                  alt="HUSSAIN X SOLUTION" 
                  className="h-8 md:h-9 w-auto object-contain" 
                />
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#0A0A0A] hover:text-[#FF6A00] p-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">Home</Link>
              
              <div className="flex flex-col gap-4">
                <button 
                  className="flex justify-between items-center text-2xl font-bold text-[#0A0A0A] hover:text-[#FF6A00] transition-colors w-full text-left"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown size={20} className={cn("transition-transform", mobileServicesOpen && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-6 pl-4 border-l-2 border-[#E5DED9] my-2"
                    >
                      {servicesMenu.map((col, i) => (
                        <div key={i} className="flex flex-col gap-3">
                          <h4 className="text-[#FF6A00] font-mono text-xs uppercase font-semibold">{col.title}</h4>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item, j) => (
                              <li key={j}>
                                <Link
                                  to={item.path}
                                  onClick={() => { setMobileMenuOpen(false); setMobileServicesOpen(false); }}
                                  className="flex items-center gap-3 text-sm text-[#5C504A] hover:text-[#FF6A00] transition-colors"
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

              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">About</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-[#0A0A0A] hover:text-[#FF6A00] transition-colors">Contact</Link>
              
              <div className="mt-auto pt-8 flex flex-col gap-6">
                <ShinyButton onClick={() => { setMobileMenuOpen(false); openModal(); }}>Get Free Consultation</ShinyButton>
                <div className="flex items-center gap-6 justify-center text-[#5C504A]">
                  <a href="https://www.facebook.com/hussainxsolution" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#FF6A00] transition-colors"><Facebook size={20} /></a>
                  <a href="https://www.instagram.com/hussainxsolution/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#FF6A00] transition-colors"><Instagram size={20} /></a>
                  <a href="https://www.linkedin.com/company/hussain-x-solution" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#FF6A00] transition-colors"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
