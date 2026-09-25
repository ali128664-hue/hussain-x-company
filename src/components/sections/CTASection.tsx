import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ShinyButton } from '@/components/ui/ShinyButton';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { useConsultationModal } from '@/context/ConsultationModalContext';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  'Free strategy consultation',
  'Dedicated project manager',
  'On-time delivery — guaranteed',
  'Post-launch support included',
];

export const CTASection = () => {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-28 relative px-6 overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <AnimatedSection className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden">
        {/* Dark card */}
        <div className="relative bg-gradient-to-br from-[#1A0E08] via-[#2B1A12] to-[#0A0A0A] border border-[#3A2920] p-12 md:p-16 text-center shadow-2xl">
          <BorderBeam size={350} duration={10} colorFrom="#FF6A00" colorTo="#FF9A40" />

          {/* Glow blobs */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-[#FF6A00]/15 blur-[80px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-48 h-32 bg-[#FF6A00]/8 blur-[60px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6A00]/30 bg-[#FF6A00]/10 text-[#FF6A00] text-xs font-mono font-semibold uppercase tracking-widest mb-8"
            >
              <Layers size={12} /> Let's Build Together
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Ready to Build Your{' '}
              <span className="text-[#FF6A00]">Digital Solution?</span>
            </h2>

            <p className="text-base md:text-lg text-[#A89A92] max-w-2xl mx-auto mb-8 leading-relaxed">
              Let's discuss how{' '}
              <span className="text-white font-semibold">HUSSAIN X SOLUTION</span>{' '}
              can transform your business with cutting-edge software, creative design, and powerful digital growth strategies.
            </p>

            {/* Highlight checklist */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#D8D2CE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] inline-block" />
                  {h}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShinyButton
                variant="primary"
                onClick={() => openModal()}
                className="flex items-center gap-2 px-8"
              >
                <MessageSquare size={16} />
                Get a Free Consultation
              </ShinyButton>

              <Link to="/services">
                <ShinyButton
                  variant="outline"
                  className="bg-transparent text-white border-white/25 hover:bg-white/8 hover:text-white hover:border-white/50 flex items-center gap-2"
                >
                  View All Services <ArrowRight size={15} />
                </ShinyButton>
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default CTASection;
