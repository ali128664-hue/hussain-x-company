import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient?: string;
  onClick?: () => void;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  gradient = 'from-orange-500/20 to-amber-500/20',
  onClick,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-[#FAF8F6] border border-[#E5DED9] p-8 transition-all duration-300 hover:border-[#FF6A00]/50 hover:shadow-[0_4px_20px_-5px_rgba(255,106,0,0.15)] cursor-pointer',
        className
      )}
    >
      <div className="absolute top-4 right-4 text-8xl font-black text-[#0A0A0A] opacity-5 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-10">
        {number}
      </div>

      <div
        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#E5DED9] shadow-sm group-hover:border-[#FF6A00]/40 transition-colors"
      >
        <div className="text-[#FF6A00]">{icon}</div>
      </div>

      <h3 className="mb-4 text-2xl font-bold text-[#0A0A0A] group-hover:text-[#FF6A00] transition-colors">{title}</h3>
      <p className="text-[#5C504A] leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
