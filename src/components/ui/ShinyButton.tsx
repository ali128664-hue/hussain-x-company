import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-offset-2 focus:ring-offset-white',
        variant === 'primary' 
          ? 'bg-[#FF6A00] hover:bg-[#E85D00] text-white shadow-md shadow-[#FF6A00]/20' 
          : 'bg-white text-[#0A0A0A] border border-[#0A0A0A] hover:bg-[#FAF8F6] hover:border-[#FF6A00] hover:text-[#FF6A00]',
        'px-6 py-3 text-sm font-semibold',
        className
      )}
      {...props}
    >
      {/* Shine effect overlay for primary variant */}
      {variant === 'primary' && (
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      )}
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default ShinyButton;
