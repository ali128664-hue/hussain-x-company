import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#3A2920] pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 - Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center shrink-0 group">
              <img 
                src="/logo-dark.png" 
                alt="HUSSAIN X SOLUTION" 
                className="h-11 md:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200" 
              />
            </Link>
            <p className="text-[#B8B0AB] text-sm leading-relaxed">
              Your trusted digital technology &amp; growth partner based in Lahore, Pakistan. We deliver innovative software, stunning designs, and result-driven marketing strategies to help modern businesses scale.
            </p>
            <div className="flex items-center gap-4 text-[#B8B0AB]">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6A00] transition-colors"><Facebook size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6A00] transition-colors"><Instagram size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6A00] transition-colors"><Linkedin size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#FF6A00] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#FFFFFF] font-semibold text-lg">Our Services</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services/custom-software" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Custom Software Development</Link></li>
              <li><Link to="/services/web-development" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Web Design &amp; Development</Link></li>
              <li><Link to="/services/mobile-apps" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Mobile App Development</Link></li>
              <li><Link to="/services/ecommerce" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">E-Commerce Development</Link></li>
              <li><Link to="/services/social-media-marketing" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Social Media Marketing</Link></li>
              <li><Link to="/services/seo-services" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Search Engine Optimization</Link></li>
              <li><Link to="/services/branding" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Branding &amp; Creative Design</Link></li>
              <li><Link to="/services" className="text-[#FF6A00] hover:text-[#E85D00] transition-colors text-sm font-semibold">View All 25 Services →</Link></li>
            </ul>
          </div>

          {/* Col 3 - Company */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#FFFFFF] font-semibold text-lg">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/about" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Our Process</Link></li>
              <li><Link to="/about" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Technologies We Use</Link></li>
              <li><Link to="/contact" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#FFFFFF] font-semibold text-lg">Get In Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-[#B8B0AB] text-sm">Model Town Q Block,<br />Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#FF6A00] shrink-0" />
                <a href="tel:+923480766608" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">+92 348 0766608</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#FF6A00] shrink-0" />
                <a href="mailto:info@hussainxsolution.com" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">info@hussainxsolution.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={18} className="text-[#FF6A00] shrink-0" />
                <a href="https://wa.me/923480766608" target="_blank" rel="noreferrer" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors text-sm">WhatsApp Chat</a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock size={18} className="text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-[#B8B0AB] text-sm">Working Hours:<br />Mon–Sat, 9AM – 6PM PKT</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Secondary Area (#2B1A12 Dark Brown) */}
      <div className="bg-[#2B1A12] border-t border-[#3A2920] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#B8B0AB] text-sm text-center md:text-left">
            © {new Date().getFullYear()} HUSSAIN X SOLUTION. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy-policy" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors">Privacy Policy</Link>
            <span className="text-[#8F8580]">·</span>
            <Link to="/terms-of-service" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors">Terms of Service</Link>
            <span className="text-[#8F8580]">·</span>
            <Link to="/sitemap" className="text-[#FFFFFF] hover:text-[#FF6A00] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
