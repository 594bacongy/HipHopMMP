import React from 'react';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      }`}
    >
      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
        <span className="w-2 h-0.5 bg-amber-400" />
        {tag}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};
