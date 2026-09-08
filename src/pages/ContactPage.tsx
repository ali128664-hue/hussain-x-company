import React, { useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-24 pb-0">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ED7A21]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
               Get in <GradientText>Touch</GradientText>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Reach out to us and let's build something extraordinary together.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection delay={0.1} direction="left">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#ED7A21]/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-[#ED7A21]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Our Office</h4>
                    <p className="text-slate-400">Model Town Q Block,<br />Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#ED7A21]/10 flex items-center justify-center shrink-0">
                    <Phone className="text-[#ED7A21]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone Number</h4>
                    <a href="tel:+923480766608" className="text-slate-400 hover:text-[#ED7A21] transition-colors">0348-0766608</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ED7A21]/10 flex items-center justify-center shrink-0">
                    <Mail className="text-[#ED7A21]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email Address</h4>
                    <a href="mailto:info@hussainxsolutions.com" className="text-slate-400 hover:text-[#ED7A21] transition-colors">info@hussainxsolutions.com</a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} direction="right">
              <form className="bg-[#161616] border border-white/5 p-8 rounded-2xl space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Name</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ED7A21] transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                    <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ED7A21] transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Service Required</label>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ED7A21] transition-colors appearance-none">
                    <option>Custom Software Development</option>
                    <option>Social Media Marketing</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Message</label>
                  <textarea rows={4} className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ED7A21] transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <ShinyButton className="w-full" variant="primary">Send Message</ShinyButton>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
