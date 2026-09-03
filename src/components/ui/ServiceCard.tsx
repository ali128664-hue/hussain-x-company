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
        'group relative overflow-hidden rounded-2xl bg-[#161616] border border-[#222222] p-8 transition-all duration-300 hover:border-[#ED7A21]/30 hover:shadow-[0_0_30px_-5px_rgba(237,122,33,0.15)] cursor-pointer',
        className
      )}
    >
      <div className="absolute top-4 right-4 text-8xl font-black text-white opacity-5 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-10">
        {number}
      </div>

      <div
        className={cn(
          'mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br',
          gradient
        )}
      >
        <div className="text-white">{icon}</div>
      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
