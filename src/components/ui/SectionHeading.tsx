import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  dark = false,
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
        <span className="text-xs uppercase tracking-widest text-[#FF6A00] font-mono font-semibold px-3 py-1 rounded-full bg-[#FAF8F6] border border-[#E5DED9]">
          {label}
        </span>
      )}
      <h2 className={cn("text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight", dark ? "text-white" : "text-[#0A0A0A]")}>
        {title}
      </h2>
      {description && (
        <p className={cn("max-w-2xl text-base md:text-lg mt-2 leading-relaxed", dark ? "text-[#D8D2CE]" : "text-[#5C504A]")}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
