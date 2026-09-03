import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111] border-t border-[#222] pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <a href="/" className="flex items-center gap-1 shrink-0">
              <span className="font-bold text-2xl text-white tracking-tight">HUSSAIN</span>
              <span className="font-bold text-2xl text-primary">X</span>
              <span className="font-bold text-lg text-white ml-1 tracking-widest">COMPANY</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complete digital technology & growth partner. We build innovative software solutions and drive digital growth for forward-thinking businesses.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Custom Software</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Mobile Apps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">E-commerce</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Digital Marketing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Branding</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Company</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Our Process</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Technologies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Industries</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+923000000000" className="text-slate-400 hover:text-primary transition-colors text-sm">+92 XXX XXXXXXX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@hussainxcompany.com" className="text-slate-400 hover:text-primary transition-colors text-sm">info@hussainxcompany.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={18} className="text-primary shrink-0" />
                <a href="#" className="text-slate-400 hover:text-primary transition-colors text-sm">WhatsApp Chat</a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Working Hours:<br/>Mon-Sat, 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#222] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} HUSSAIN X COMPANY. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-slate-700">·</span>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
