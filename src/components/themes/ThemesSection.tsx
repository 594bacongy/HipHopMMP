'use client';

import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { ThemeCard } from '@/components/themes/ThemeCard';
import { socialThemes } from '@/data/socialThemes';
import { Layers } from 'lucide-react';

export const ThemesSection: React.FC = () => {
  return (
    <section id="themes" className="py-24 border-t border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="05 // HIP HOP, EDUCATION & SOCIETY"
          title="Five Intersecting Societal Frameworks"
          subtitle="Investigating how Hip Hop acts as a cultural counter-narrative, community sanctuary, critical literacy practice, and instrument of political empowerment."
        />

        {/* Introductory Argument Context Box */}
        <div className="mb-12 p-8 rounded-3xl bg-[#14161c] border border-white/10 text-gray-300 text-sm md:text-base leading-relaxed font-light">
          <p className="mb-4">
            Hip Hop’s profound global trajectory cannot be separated from the systemic realities
            it challenges. In our research for <strong className="text-white font-semibold">EDUC 218</strong>, we analyze Hip Hop not as commercial product, but as an
            autonomous site of intellectual inquiry.
          </p>
          <p className="text-xs font-mono text-gray-400">
            Click into each of the five core themes below to explore the theoretical arguments,
            pedagogical questions, and reserved case study slots.
          </p>
        </div>

        {/* The 5 Expandable Theme Cards */}
        <div className="space-y-6">
          {socialThemes.map((theme, idx) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              defaultExpanded={idx === 0} // Expand first card by default
            />
          ))}
        </div>
      </div>
    </section>
  );
};
