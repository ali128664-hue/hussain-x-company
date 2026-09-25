import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

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
  onClick,
  className,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      transition={{ duration: 0.2 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white border border-[#E8E4E0] p-7 transition-all duration-300 hover:border-[#F5620F]/60 hover:shadow-[0_12px_40px_-12px_rgba(245,98,15,0.2)] cursor-pointer flex flex-col h-full',
        className
      )}
    >
      {/* Top row: icon + number */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-14 h-14 rounded-xl bg-[#F9F8F6] border border-[#E8E4E0] flex items-center justify-center group-hover:bg-[#F5620F]/10 group-hover:border-[#F5620F]/30 transition-all duration-300 shadow-sm">
          <div className="text-[#F5620F]">{icon}</div>
        </div>
        <span className="text-5xl font-black text-[#0A0A0A] opacity-[0.06] select-none group-hover:opacity-[0.12] transition-opacity duration-300 leading-none">
          {number}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#F5620F] transition-colors duration-200 mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-sm text-[#5C504A] leading-relaxed flex-1">{description}</p>

      {/* Bottom arrow */}
      <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#F5620F] opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
        Learn More <ArrowUpRight size={13} />
      </div>

      {/* Hover left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#F5620F] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-full" />
    </motion.div>
  );
};

export default ServiceCard;
