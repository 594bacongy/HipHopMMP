'use client';

import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { ThemeCard } from '@/components/themes/ThemeCard';
import { socialThemes } from '@/data/socialThemes';

export const ThemesSection: React.FC = () => {
  return (
    <section id="themes" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="05"
          category="Societal & Pedagogical Inquiry"
          title="Five Core Dimensions of"
          italicWord="Hip Hop Culture."
          subtitle="Examining identity formation, community sanctuaries, critical youth literacies, political dissent, and global creative vanguardism."
        />

        {/* Monograph Overview Callout */}
        <div className="mb-12 p-8 bg-[#141419] border border-white/10 text-[#9e9ba8] text-sm sm:text-base leading-relaxed font-light">
          <p className="mb-4">
            Hip Hop’s global resonance cannot be understood without dissecting the societal structures it interrogates. In our research for <strong className="text-white font-medium">EDUC 218</strong> at the University of Massachusetts Amherst, our group investigates these five interconnected thematic arenas.
          </p>
          <p className="text-xs font-editorial-mono text-[#c89643]">
            Expand each chapter below to inspect our central arguments, seminar inquiry prompts, and reserved case study slots.
          </p>
        </div>

        {/* The 5 Thematic Chapters */}
        <div className="space-y-6">
          {socialThemes.map((theme, idx) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              defaultExpanded={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
