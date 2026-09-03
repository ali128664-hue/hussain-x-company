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

const servicesMenu = [
  {
    title: "SOFTWARE DEVELOPMENT",
    icon: <Code size={14} />,
    items: [
      { label: "Custom Software", icon: <Code size={16} /> },
      { label: "Web Applications", icon: <Monitor size={16} /> },
      { label: "Mobile Apps", icon: <Smartphone size={16} /> },
      { label: "SaaS Development", icon: <Cloud size={16} /> },
      { label: "API Integration", icon: <Settings size={16} /> }
    ]
  },
  {
    title: "DESIGN & DEVELOPMENT",
    icon: <Layout size={14} />,
    items: [
      { label: "UI/UX Design", icon: <PenTool size={16} /> },
      { label: "Web Development", icon: <Globe size={16} /> },
      { label: "E-commerce", icon: <Layout size={16} /> },
      { label: "WordPress", icon: <Layout size={16} /> },
      { label: "Shopify", icon: <Layout size={16} /> }
    ]
  },
  {
    title: "TECHNOLOGY",
    icon: <Server size={14} />,
    items: [
      { label: "Cloud & DevOps", icon: <Cloud size={16} /> },
      { label: "Database Solutions", icon: <Database size={16} /> },
      { label: "AI & Automation", icon: <Bot size={16} /> },
      { label: "Cyber Security", icon: <Shield size={16} /> },
      { label: "QA & Testing", icon: <Shield size={16} /> }
    ]
  },
  {
    title: "DIGITAL GROWTH",
    icon: <TrendingUp size={14} />,
    items: [
      { label: "SEO", icon: <Search size={16} /> },
      { label: "Digital Marketing", icon: <Share2 size={16} /> },
      { label: "Social Media", icon: <Share2 size={16} /> },
      { label: "PPC", icon: <BarChart size={16} /> },
      { label: "Content Marketing", icon: <PenTool size={16} /> }
    ]
  },
  {
    title: "CREATIVE",
    icon: <Lightbulb size={14} />,
    items: [
      { label: "Branding", icon: <Lightbulb size={16} /> },
      { label: "Logo Design", icon: <PenTool size={16} /> },
      { label: "Video Editing", icon: <Video size={16} /> },
      { label: "Creative Design", icon: <Layout size={16} /> },
      { label: "Business Automation", icon: <Settings size={16} /> }
    ]
  }
];

export function Navbar() {
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
      <div className="hidden md:flex justify-between items-center px-6 py-2 bg-[#111] text-xs text-slate-300 w-full border-b border-[#222]">
        <div className="flex items-center gap-6">
          <a href="tel:+923480766608" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={12} /> 0348-0766608
          </a>
          <a href="mailto:info@hussainxcompany.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={12} /> info@hussainxcompany.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={cn(
        "w-full px-6 transition-all duration-300",
        isScrolled ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#222] py-4" : "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222] py-5"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 shrink-0">
            <span className="font-bold text-xl md:text-2xl text-white tracking-tight">HUSSAIN</span>
            <span className="font-bold text-xl md:text-2xl text-primary">X</span>
            <span className="font-bold text-sm md:text-lg text-white ml-1 tracking-widest">COMPANY</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-200 hover:text-primary transition-colors">Home</Link>
            
            <div 
              className="relative py-2"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-primary transition-colors">
                Services <ChevronDown size={14} className={cn("transition-transform", megaMenuOpen && "rotate-180")} />
              </button>
            </div>
            
            <Link to="/about" className="text-sm font-medium text-slate-200 hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium text-slate-200 hover:text-primary transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <ShinyButton>Get Free Consultation</ShinyButton>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
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
            className="hidden lg:block absolute top-[100%] left-0 w-full bg-[#111] border-b border-[#222] shadow-2xl"
            onMouseEnter={() => setMegaMenuOpen(true)}
            onMouseLeave={() => setMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid grid-cols-5 gap-8">
                {servicesMenu.map((col, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <h3 className="text-primary font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                      {col.icon} {col.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {col.items.map((item, j) => (
                        <li key={j}>
                          <a href="#" className="group flex items-center gap-3 text-sm text-slate-400 hover:text-primary transition-colors">
                            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                              {item.icon}
                            </span>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-[#222] text-center">
                <a href="/services" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors">
                  View All Services <ChevronRight size={16} />
                </a>
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
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-[#222]">
              <Link to="/" className="flex items-center gap-1 shrink-0">
                <span className="font-bold text-xl text-white tracking-tight">HUSSAIN</span>
                <span className="font-bold text-xl text-primary">X</span>
                <span className="font-bold text-sm text-white ml-1 tracking-widest">COMPANY</span>
              </Link>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-6">
              <Link to="/" className="text-2xl font-bold text-white">Home</Link>
              
              <div className="flex flex-col gap-4">
                <button 
                  className="flex justify-between items-center text-2xl font-bold text-white w-full text-left"
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
                      className="overflow-hidden flex flex-col gap-6 pl-4 border-l-2 border-[#222] my-2"
                    >
                      {servicesMenu.map((col, i) => (
                        <div key={i} className="flex flex-col gap-3">
                          <h4 className="text-primary font-mono text-xs uppercase">{col.title}</h4>
                          <ul className="flex flex-col gap-3">
                            {col.items.map((item, j) => (
                              <li key={j}>
                                <a href="#" className="flex items-center gap-3 text-sm text-slate-300">
                                  {item.icon} {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className="text-2xl font-bold text-white">About</Link>
              <Link to="/contact" className="text-2xl font-bold text-white">Contact</Link>
              
              <div className="mt-auto pt-8 flex flex-col gap-6">
                <ShinyButton>Get Free Consultation</ShinyButton>
                <div className="flex items-center gap-6 justify-center text-slate-400">
                  <a href="#"><Facebook size={20} /></a>
                  <a href="#"><Instagram size={20} /></a>
                  <a href="#"><Linkedin size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
