import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';

const footerServices = [
  { label: 'Custom Software Development', path: '/services/custom-software-development' },
  { label: 'Web Design & Development', path: '/services/web-development-company' },
  { label: 'Mobile App Development', path: '/services/mobile-app-development' },
  { label: 'E-Commerce Development', path: '/services/ecommerce-website-development' },
  { label: 'SEO Services', path: '/services/seo-services-company' },
  { label: 'Social Media Marketing', path: '/services/social-media-marketing-services' },
  { label: 'AI & Automation', path: '/services/ai-automation-solutions' },
  { label: 'View All 25 Services →', path: '/services', highlight: true },
];

const footerCompany = [
  { label: 'About Us', path: '/about' },
  { label: 'All Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Terms of Service', path: '/terms-of-service' },
  { label: 'Sitemap', path: '/sitemap' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src="/logo-dark.png"
                alt="HUSSAIN X SOLUTION"
                width={180}
                height={44}
                loading="lazy"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </Link>
            <p className="text-[#666666] text-sm leading-relaxed">
              Pakistan's trusted software house & digital growth agency. We engineer custom software, high-converting websites, and ROI-driven marketing campaigns — from Lahore to the world.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/hussainxsolution"
                target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-[#666666] hover:text-[#FF6A00] hover:border-[#FF6A00]/40 transition-all duration-200"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/hussainxsolution/"
                target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-[#666666] hover:text-[#FF6A00] hover:border-[#FF6A00]/40 transition-all duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/hussain-x-solution"
                target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-[#666666] hover:text-[#FF6A00] hover:border-[#FF6A00]/40 transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className={`text-sm transition-colors flex items-center gap-1 ${
                      item.highlight
                        ? 'text-[#FF6A00] hover:text-[#FF9A40] font-semibold'
                        : 'text-[#888888] hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.highlight && <ArrowUpRight size={12} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerCompany.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#888888] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-base">Get In Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-[#888888] text-sm leading-relaxed">
                  Model Town Q Block,<br />Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#FF6A00] shrink-0" />
                <a href="tel:+923480766608" className="text-[#CCCCCC] hover:text-[#FF6A00] transition-colors text-sm">
                  +92 348 0766608
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#FF6A00] shrink-0" />
                <a href="mailto:info@hussainxsolution.com" className="text-[#CCCCCC] hover:text-[#FF6A00] transition-colors text-sm">
                  info@hussainxsolution.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={16} className="text-[#FF6A00] shrink-0" />
                <a
                  href="https://wa.me/923480766608"
                  target="_blank" rel="noreferrer"
                  className="text-[#CCCCCC] hover:text-[#FF6A00] transition-colors text-sm"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-[#888888] text-sm leading-relaxed">
                  Mon – Sat &nbsp;|&nbsp; 9:00 AM – 6:00 PM (PKT)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1C1C1C]" />
      </div>

      {/* Bottom bar */}
      <div className="bg-[#050505] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#555555] text-xs text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-[#888888] font-semibold">HUSSAIN X SOLUTION</span>. All rights reserved. Engineered in Lahore, Pakistan.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link to="/privacy-policy" className="text-[#666666] hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-[#333333]">·</span>
            <Link to="/terms-of-service" className="text-[#666666] hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-[#333333]">·</span>
            <Link to="/sitemap" className="text-[#666666] hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
