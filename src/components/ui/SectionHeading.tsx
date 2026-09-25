import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  accentWord?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'left',
  dark = false,
  className,
  accentWord,
}) => {
  // If accentWord is provided, highlight it inside the title
  const renderTitle = () => {
    if (!accentWord || !title.includes(accentWord)) {
      return title;
    }
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#FF6A00]">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        'flex flex-col space-y-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {label && (
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#FF6A00] font-mono font-semibold px-3 py-1.5 rounded-full bg-[#FF6A00]/8 border border-[#FF6A00]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] inline-block" />
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]',
          dark ? 'text-white' : 'text-[#0A0A0A]'
        )}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base md:text-lg leading-relaxed',
            dark ? 'text-[#A89A92]' : 'text-[#5C504A]'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
