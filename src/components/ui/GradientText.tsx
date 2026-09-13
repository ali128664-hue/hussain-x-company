import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  from = 'from-[#FF6A00]',
  to = 'to-[#E85D00]',
}) => {
  return (
    <span
      className={cn(
        'bg-clip-text text-transparent bg-gradient-to-r',
        from,
        to,
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
