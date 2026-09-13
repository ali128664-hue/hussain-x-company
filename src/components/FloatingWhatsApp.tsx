import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './ui/WhatsAppIcon';
import { X, MessageCircle } from 'lucide-react';
import { useConsultationModal } from '@/context/ConsultationModalContext';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { openModal } = useConsultationModal();

  const handleDirectChat = () => {
    const message = `Hello HUSSAIN X SOLUTION! I'm interested in your services and would like to discuss my project.`;
    window.open(`https://wa.me/923480766608?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2 group">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="hidden sm:flex items-center gap-2 bg-[#FFFFFF] border border-[#E5DED9] px-3.5 py-2 rounded-xl shadow-xl text-xs text-[#0A0A0A]"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="font-medium">Chat with us on WhatsApp</span>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="text-[#8A817C] hover:text-[#0A0A0A] ml-1 p-0.5"
              aria-label="Close tooltip"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <button
        onClick={handleDirectChat}
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        <WhatsAppIcon size={30} />
      </button>
    </div>
  );
};
