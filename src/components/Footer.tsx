import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { services } from '@/data/servicesData';

// Show 7 most popular services in footer
const footerServices = services.slice(0, 7);

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
    <footer className="bg-[#080808] border-t border-[#1C1C1C]">
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
            <p className="text-[#555555] text-sm leading-relaxed">
              Pakistan's most ambitious software house and digital growth agency. We build products that work and run campaigns that convert — for clients in Lahore, Karachi, Islamabad, and across the globe.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/hussainxsolution"
                target="_blank" rel="noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1C1C1C] flex items-center justify-center text-[#555555] hover:text-[#F5620F] hover:border-[#F5620F]/40 transition-all duration-200"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://www.instagram.com/hussainxsolution/"
                target="_blank" rel="noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1C1C1C] flex items-center justify-center text-[#555555] hover:text-[#F5620F] hover:border-[#F5620F]/40 transition-all duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/hussain-x-solution"
                target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-[#111111] border border-[#1C1C1C] flex items-center justify-center text-[#555555] hover:text-[#F5620F] hover:border-[#F5620F]/40 transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.id}`}
                    className="text-sm text-[#777777] hover:text-white transition-colors"
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-sm text-[#F5620F] hover:text-[#FF8A50] font-semibold transition-colors inline-flex items-center gap-1"
                >
                  View All 12 Services <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerCompany.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-[#777777] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#F5620F] shrink-0 mt-0.5" />
                <span className="text-[#777777] text-sm leading-relaxed">
                  Model Town Q Block,<br />Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#F5620F] shrink-0" />
                <a href="tel:+923480766608" className="text-[#BBBBBB] hover:text-[#F5620F] transition-colors text-sm">
                  +92 348 0766608
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#F5620F] shrink-0" />
                <a href="mailto:info@hussainxsolution.com" className="text-[#BBBBBB] hover:text-[#F5620F] transition-colors text-sm">
                  info@hussainxsolution.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={15} className="text-[#F5620F] shrink-0" />
                <a
                  href="https://wa.me/923480766608"
                  target="_blank" rel="noreferrer"
                  className="text-[#BBBBBB] hover:text-[#F5620F] transition-colors text-sm"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-[#F5620F] shrink-0 mt-0.5" />
                <span className="text-[#777777] text-sm">
                  Mon – Sat &nbsp;·&nbsp; 9AM – 6PM PKT
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1C1C1C]" />
      </div>

      {/* Bottom bar */}
      <div className="bg-[#050505] py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[#444444] text-xs text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-[#666666] font-semibold">HUSSAIN X SOLUTION</span>. All rights reserved. Built in Lahore, Pakistan.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <Link to="/privacy-policy" className="text-[#555555] hover:text-white transition-colors">Privacy</Link>
            <span className="text-[#333333]">·</span>
            <Link to="/terms-of-service" className="text-[#555555] hover:text-white transition-colors">Terms</Link>
            <span className="text-[#333333]">·</span>
            <Link to="/sitemap" className="text-[#555555] hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
