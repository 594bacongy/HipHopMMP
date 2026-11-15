'use client';

import React, { useState } from 'react';
import { SocialTheme } from '@/types';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  FilePlus,
  BookOpen,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ThemeCardProps {
  theme: SocialTheme;
  defaultExpanded?: boolean;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
  theme,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-3xl bg-[#121316] border border-white/5 hover:border-amber-400/30 overflow-hidden transition-all duration-300">
      {/* Top Banner / Accordion Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 group focus:outline-none"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 font-mono font-bold text-lg flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-black transition-colors">
            0{theme.number}
          </div>
          <div>
            <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400 block mb-1">
              THEMATIC PILLAR 0{theme.number}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
              {theme.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 max-w-2xl font-light">
              {theme.shortDescription}
            </p>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors shrink-0">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {/* Expandable Details Area */}
      {expanded && (
        <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/5 space-y-6 animate-in fade-in duration-200">
          {/* Central Argument */}
          <div>
            <div className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Central Sociological Argument:
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light bg-[#16181f] p-5 rounded-2xl border border-white/5">
              {theme.centralArgument}
            </p>
          </div>

          {/* Pedagogical Relevance */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-gray-300 leading-relaxed font-mono">
            <span className="text-amber-400 font-bold block mb-1">
              EDUC 218 PEDAGOGICAL RELEVANCE:
            </span>
            {theme.pedagogicalRelevance}
          </div>

          {/* Key Inquiry Questions */}
          <div>
            <div className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              Core Inquiry Questions:
            </div>
            <div className="space-y-2">
              {theme.inquiryQuestions.map((question, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 flex items-start gap-2.5"
                >
                  <span className="text-amber-400 font-mono font-bold text-xs shrink-0 mt-0.5">
                    Q{idx + 1}.
                  </span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Research Slots */}
          <div>
            <div className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3 flex items-center gap-1.5">
              <FilePlus className="w-3.5 h-3.5 text-amber-400" />
              Reserved Case Study & Evidence Slots:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {theme.futureResearchSlots.map((slot, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-black/40 border border-dashed border-white/10 hover:border-amber-400/30 transition-colors"
                >
                  <div className="text-xs font-bold text-white mb-1">
                    {slot.title}
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono leading-normal">
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
