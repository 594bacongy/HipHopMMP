'use client';

import React, { useState } from 'react';
import { SocialTheme } from '@/types';
import { ChevronDown, ChevronUp, HelpCircle, FileText, Compass, Sparkles } from 'lucide-react';

interface ThemeCardProps {
  theme: SocialTheme;
  defaultExpanded?: boolean;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];
  const roman = romanNumerals[theme.number - 1] || 'I';

  return (
    <div className="bg-[#141419] border border-white/10 hover:border-[#c89643]/50 transition-colors duration-200">
      {/* Chapter Banner */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6 group focus:outline-none"
      >
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 bg-[#1b1712] border border-[#c89643]/50 text-[#e0b064] font-editorial-mono font-bold text-lg flex items-center justify-center shrink-0">
            {roman}
          </div>
          <div>
            <div className="font-editorial-mono text-[11px] text-[#c89643] uppercase tracking-widest mb-1 font-bold">
              THEMATIC CHAPTER {roman} // RESEARCH FRAMEWORK
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#f5f2eb] tracking-tight group-hover:text-[#e0b064] transition-colors">
              {theme.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9e9ba8] mt-1 max-w-3xl font-light">
              {theme.shortDescription}
            </p>
          </div>
        </div>

        <div className="p-2 border border-white/10 bg-white/5 text-[#9e9ba8] group-hover:text-white transition-colors shrink-0 font-editorial-mono text-xs">
          {expanded ? 'HIDE [-]' : 'EXPAND [+]'}
        </div>
      </button>

      {/* Expandable Monograph Chapter Body */}
      {expanded && (
        <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 space-y-8">
          {/* Central Sociological Argument */}
          <div>
            <div className="font-editorial-mono text-xs text-[#c89643] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Curatorial Argument & Theoretical Foundation</span>
            </div>
            <p className="text-sm sm:text-base text-[#f5f2eb] leading-relaxed font-light p-5 bg-[#0d0d11] border-l-2 border-[#c89643]">
              {theme.centralArgument}
            </p>
          </div>

          {/* Pedagogical Relevance */}
          <div className="p-4 bg-[#191922] border border-white/10 font-editorial-mono text-xs text-[#9e9ba8] leading-relaxed">
            <span className="text-[#e0b064] font-bold block mb-1">
              EDUC 218 PEDAGOGICAL SIGNIFICANCE:
            </span>
            {theme.pedagogicalRelevance}
          </div>

          {/* Core Inquiry Questions */}
          <div>
            <div className="font-editorial-mono text-xs text-[#63616e] uppercase tracking-wider mb-3">
              Core Seminar Inquiry Questions:
            </div>
            <div className="space-y-2">
              {theme.inquiryQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#0d0d11] border border-white/5 text-xs text-[#9e9ba8] flex items-start gap-3"
                >
                  <span className="font-editorial-mono text-[#e0b064] font-bold shrink-0">
                    Q{idx + 1}.
                  </span>
                  <span>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reserved Case Study Ingest Slots */}
          <div>
            <div className="font-editorial-mono text-xs text-[#63616e] uppercase tracking-wider mb-3">
              Reserved Case Study & Evidence Ingest Slots:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {theme.futureResearchSlots.map((slot, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-black/40 border border-dashed border-white/15 hover:border-[#c89643]/40 transition-colors"
                >
                  <div className="text-xs font-bold text-white mb-1">
                    {slot.title}
                  </div>
                  <div className="text-[11px] font-editorial-mono text-[#9e9ba8] leading-normal font-light">
                    {slot.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
