import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, PhoneCall, CheckCircle2, Sparkles } from 'lucide-react';
import { useConsultationModal } from '@/context/ConsultationModalContext';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { ShinyButton } from '@/components/ui/ShinyButton';

const serviceOptions = [
  'Custom Software Development',
  'Web Applications',
  'Mobile App Development (iOS & Android)',
  'SaaS Development',
  'API Integration & Development',
  'UI/UX Design',
  'E-Commerce Solutions (Shopify & Custom)',
  'WordPress Development',
  'Cloud & DevOps',
  'Database Architecture & Solutions',
  'AI & Process Automation',
  'Cyber Security & Code Auditing',
  'QA & Automated Testing',
  'Search Engine Optimization (SEO)',
  'Digital Marketing & Lead Gen',
  'Social Media Marketing & Management',
  'PPC & Paid Ad Campaigns (Meta/Google)',
  'Content Marketing & Copywriting',
  'Branding & Visual Identity Design',
  'Logo & Vector Design',
  'Graphic & Ad Creative Design',
  'Video Editing & Reels Production',
  'Motion Graphics & 2D Animation',
  'Complete Digital Growth Package',
  'Other / Custom Requirement'
];

export const ConsultationModal: React.FC = () => {
  const { isOpen, selectedService, closeModal } = useConsultationModal();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService || serviceOptions[0],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please enter your Name and WhatsApp / Phone Number');
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = 
`*🚀 FREE CONSULTATION REQUEST*
*HUSSAIN X SOLUTION*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📱 *WhatsApp/Phone:* ${formData.phone.trim()}
${formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}\n` : ''}💼 *Service Required:* ${formData.service}
📝 *Project Details:* ${formData.message.trim() || 'I am interested in a free consultation for my project.'}
━━━━━━━━━━━━━━━━━━━━
_Sent via hussainxsolution.com_`;

    const whatsappUrl = `https://wa.me/923480766608?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    setSuccess(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(false);
      closeModal();
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: serviceOptions[0],
        message: ''
      });
    }, 1800);
  };

  const handleDirectWhatsApp = () => {
    const directMessage = `Hello HUSSAIN X SOLUTION! I visited your website and would like to get a free consultation.`;
    window.open(`https://wa.me/923480766608?text=${encodeURIComponent(directMessage)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0A0A0A]/70 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-xl bg-[#FFFFFF] rounded-2xl border border-[#E5DED9] shadow-2xl overflow-hidden z-10 my-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Header with Top Orange Brand Accent */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#FF6A00] to-[#E85D00]" />
            
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <img 
                    src="/favicon.png" 
                    alt="HUSSAIN X" 
                    className="w-11 h-11 rounded-xl object-contain border border-[#E5DED9] bg-[#FAF8F6] p-1.5 shadow-sm shrink-0 mt-1" 
                  />
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F6] border border-[#E5DED9] text-[#FF6A00] text-xs font-semibold mb-2">
                      <Sparkles size={13} />
                      <span>Instant Free Consultation</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] tracking-tight">
                      Discuss Your Project
                    </h3>
                    <p className="text-sm text-[#5C504A] mt-1">
                      Fill the quick details below to directly connect with our experts on WhatsApp.
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  aria-label="Close modal"
                  className="p-2 rounded-full text-[#5C504A] hover:text-[#0A0A0A] hover:bg-[#FAF8F6] transition-colors border border-transparent hover:border-[#E5DED9] shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {success ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="relative">
                    <img src="/favicon.png" alt="HX" className="w-16 h-16 rounded-2xl object-contain border border-[#E5DED9] bg-[#FAF8F6] p-2 shadow-sm" />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow">
                      <CheckCircle2 size={16} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#0A0A0A]">Transferring to WhatsApp...</h4>
                  <p className="text-sm text-[#5C504A] max-w-sm">
                    Your consultation request is formatted and opening directly in WhatsApp (+92 348 0766608).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
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
                        placeholder="e.g. Ali Hussain"
                        className="w-full bg-[#FAF8F6] border border-[#E5DED9] rounded-xl px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
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
                        placeholder="e.g. 0348-0766608"
                        className="w-full bg-[#FAF8F6] border border-[#E5DED9] rounded-xl px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                        Email Address <span className="text-xs text-[#8A817C] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ali@example.com"
                        className="w-full bg-[#FAF8F6] border border-[#E5DED9] rounded-xl px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#FAF8F6] border border-[#E5DED9] rounded-xl px-3.5 py-2.5 text-sm text-[#0A0A0A] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors"
                      >
                        {serviceOptions.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]">
                      Project Requirements / Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're looking to build or grow..."
                      className="w-full bg-[#FAF8F6] border border-[#E5DED9] rounded-xl px-3.5 py-2.5 text-sm text-[#0A0A0A] placeholder-[#8A817C] focus:bg-[#FFFFFF] focus:outline-none focus:border-[#FF6A00] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold shadow-md hover:shadow-lg transition-all transform active:scale-[0.99]"
                  >
                    <WhatsAppIcon size={22} />
                    <span>Send &amp; Connect on WhatsApp</span>
                  </button>

                  <div className="pt-2 text-center flex items-center justify-center gap-2 text-xs text-[#5C504A]">
                    <span>Or chat instantly:</span>
                    <button
                      type="button"
                      onClick={handleDirectWhatsApp}
                      className="font-bold text-[#0A0A0A] hover:text-[#FF6A00] underline inline-flex items-center gap-1 transition-colors"
                    >
                      <PhoneCall size={12} className="text-[#FF6A00]" /> +92 348 0766608
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
