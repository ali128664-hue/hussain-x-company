import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col space-y-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {label && (
        <span className="text-xs uppercase tracking-widest text-[#ED7A21] font-mono font-semibold">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 max-w-2xl text-lg mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
