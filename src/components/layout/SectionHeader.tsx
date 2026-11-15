import React from 'react';

interface SectionHeaderProps {
  sectionNumber: string;
  category: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  sectionNumber,
  category,
  title,
  italicWord,
  subtitle,
  align = 'left',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-4xl' : 'max-w-4xl'
      }`}
    >
      {/* Editorial Folio / Section Tag */}
      <div className="flex items-center gap-3 font-editorial-mono text-xs tracking-[0.2em] text-[#c89643] uppercase mb-4">
        <span className="font-bold">[{sectionNumber}]</span>
        <span className="w-8 h-[1px] bg-[#c89643]/50" />
        <span>{category}</span>
      </div>

      {/* Main Headline with Editorial Serif Contrast */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5f2eb] tracking-tight leading-[1.1] mb-5">
        {title}{' '}
        {italicWord && (
          <span className="font-serif-display italic font-normal text-[#e0b064]">
            {italicWord}
          </span>
        )}
      </h2>

      {/* Human Editorial Subtitle */}
      {subtitle && (
        <p className="text-base sm:text-lg text-[#9e9ba8] leading-relaxed font-light max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* Fine Print Hairline Rule */}
      <div className="mt-8 h-[1px] w-full bg-white/10" />
    </div>
  );
};
