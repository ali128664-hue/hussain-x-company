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
    <div className="min-h-screen bg-[#FFFFFF] pt-24 pb-0">
      <section className="py-20 relative overflow-hidden bg-[#FFFFFF]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A0A0A] mb-6">
               Get in <GradientText>Touch</GradientText>
            </h1>
            <p className="text-xl text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out to <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> and let's build something extraordinary together.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection delay={0.1} direction="left">
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-6">Contact Information</h3>
                
                <div className="flex items-start gap-4 mb-6 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="text-[#FF6A00]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">Our Office</h4>
                    <p className="text-[#5C504A] text-sm">Model Town Q Block,<br />Lahore, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="text-[#FF6A00]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">Phone Number</h4>
                    <a href="tel:+923480766608" className="text-[#5C504A] hover:text-[#FF6A00] transition-colors text-sm font-medium">0348-0766608</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="text-[#FF6A00]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">Email Address</h4>
                    <a href="mailto:info@hussainxsolution.com" className="text-[#5C504A] hover:text-[#FF6A00] transition-colors text-sm font-medium">info@hussainxsolution.com</a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} direction="right">
              <form className="bg-[#FAF8F6] border border-[#E5DED9] p-8 rounded-2xl space-y-6 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0A0A0A]">Your Name</label>
                    <input type="text" className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-3 text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0A0A0A]">Email Address</label>
                    <input type="email" className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-3 text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0A0A0A]">Service Required</label>
                  <select className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-3 text-[#0A0A0A] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm appearance-none">
                    <option>Custom Software Development</option>
                    <option>Social Media Marketing</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>E-Commerce Solutions</option>
                    <option>SEO Services</option>
                    <option>Branding &amp; Creative Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0A0A0A]">Your Message</label>
                  <textarea rows={4} className="w-full bg-white border border-[#E5DED9] rounded-lg px-4 py-3 text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors resize-none shadow-sm" placeholder="Tell us about your project..."></textarea>
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
