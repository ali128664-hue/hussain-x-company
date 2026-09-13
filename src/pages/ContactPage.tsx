import React, { useState, useEffect } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GradientText } from '@/components/ui/GradientText';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const servicesList = [
  'Custom Software Development',
  'Web Applications',
  'Mobile App Development (iOS & Android)',
  'SaaS Development',
  'API Integration',
  'UI/UX Design',
  'E-Commerce Solutions',
  'WordPress Development',
  'Shopify Solutions',
  'Cloud & DevOps',
  'Database Solutions',
  'AI & Automation',
  'Cyber Security',
  'QA & Automated Testing',
  'SEO Services',
  'Digital Marketing',
  'Social Media Marketing',
  'PPC & Paid Campaigns',
  'Content Marketing & Copywriting',
  'Branding & Visual Identity',
  'Video Editing & Reels',
  'Complete Digital Growth Package',
  'Other / Custom Inquiry'
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: servicesList[0],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your Name and WhatsApp / Phone number.');
      return;
    }

    const text = 
`*📩 NEW INQUIRY — HUSSAIN X SOLUTION*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📱 *WhatsApp/Phone:* ${formData.phone.trim()}
${formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}\n` : ''}💼 *Service Required:* ${formData.service}
📝 *Message:* ${formData.message.trim() || 'I would like to inquire about your services.'}
━━━━━━━━━━━━━━━━━━━━
_Sent via hussainxsolution.com/contact_`;

    const waUrl = `https://wa.me/923480766608?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: servicesList[0],
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-36 md:pt-40 pb-0">
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#FFFFFF]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6A00]/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5DED9] bg-[#FAF8F6] mb-6">
              <span className="text-xs font-semibold text-[#FF6A00] tracking-wide uppercase">Connect With Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A0A0A] mb-6">
               Get in <GradientText>Touch</GradientText>
            </h1>
            <p className="text-xl text-[#5C504A] max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out to <strong className="text-[#0A0A0A]">HUSSAIN X SOLUTION</strong> and let's build something extraordinary together.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection delay={0.1} direction="left">
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-6">Contact Information</h3>
                
                {/* WhatsApp Direct */}
                <div className="flex items-start gap-4 mb-5 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9] hover:border-[#25D366]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <WhatsAppIcon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">WhatsApp Direct</h4>
                    <a 
                      href="https://wa.me/923480766608" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#5C504A] hover:text-[#25D366] transition-colors text-sm font-medium inline-flex items-center gap-1"
                    >
                      0348-0766608 <span className="text-xs bg-[#25D366]/10 text-[#25D366] px-2 py-0.5 rounded-full font-semibold">Online</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 mb-5 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="text-[#FF6A00]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">Phone Call</h4>
                    <a href="tel:+923480766608" className="text-[#5C504A] hover:text-[#FF6A00] transition-colors text-sm font-medium">0348-0766608</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 mb-5 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="text-[#FF6A00]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">Official Email</h4>
                    <a href="mailto:info@hussainxsolution.com" className="text-[#5C504A] hover:text-[#FF6A00] transition-colors text-sm font-medium">info@hussainxsolution.com</a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF8F6] border border-[#E5DED9]">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DED9] shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="text-[#FF6A00]" size={22} />
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0A] font-semibold mb-1">Office Location</h4>
                    <p className="text-[#5C504A] text-sm">Model Town Q Block,<br />Lahore, Pakistan</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="bg-[#FAF8F6] border border-[#E5DED9] p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Send us an Inquiry</h3>
                <p className="text-sm text-[#5C504A] mb-6">
                  Fill out the form and it will transfer directly to our WhatsApp support team.
                </p>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-3 bg-white rounded-xl border border-[#E5DED9] p-6">
                    <div className="w-14 h-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-[#0A0A0A]">Opening WhatsApp...</h4>
                    <p className="text-xs text-[#5C504A] max-w-xs">
                      Your inquiry details have been transferred to WhatsApp (+92 348 0766608).
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                          Your Name <span className="text-[#FF6A00]">*</span>
                        </label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-[#E5DED9] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" 
                          placeholder="e.g. John Doe" 
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                          WhatsApp / Phone <span className="text-[#FF6A00]">*</span>
                        </label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-white border border-[#E5DED9] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" 
                          placeholder="e.g. 0348-0766608" 
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                          Email Address <span className="text-[#8A817C] font-normal text-xs">(Optional)</span>
                        </label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#E5DED9] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm" 
                          placeholder="john@example.com" 
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                          Service Required
                        </label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-white border border-[#E5DED9] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#FF6A00] transition-colors shadow-sm"
                        >
                          {servicesList.map((svc, i) => (
                            <option key={i} value={svc}>{svc}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                        Your Message / Requirements
                      </label>
                      <textarea 
                        name="message"
                        rows={4} 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#E5DED9] rounded-xl px-4 py-3 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:outline-none focus:border-[#FF6A00] transition-colors resize-none shadow-sm" 
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md hover:shadow-lg transition-all transform active:scale-[0.99]"
                    >
                      <WhatsAppIcon size={20} />
                      <span>Send &amp; Transfer to WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
