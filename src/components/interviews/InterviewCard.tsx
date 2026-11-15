'use client';

import React, { useState } from 'react';
import { InterviewPerspective } from '@/types';
import {
  Mic,
  ChevronDown,
  ChevronUp,
  Play,
  Pause,
  MapPin,
  Calendar,
  Volume2,
} from 'lucide-react';

interface InterviewCardProps {
  interview: InterviewPerspective;
}

export const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-[#141419] border border-white/10 hover:border-[#c89643]/50 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200">
      <div>
        {/* Top Fieldwork Tape Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 mb-6 font-editorial-mono text-xs text-[#9e9ba8]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
            <span className="text-white font-bold tracking-wider uppercase">
              TAPE SPECIMEN // {interview.id.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#c89643] uppercase font-medium">
              [{interview.perspectiveType}]
            </span>
            <span className="text-[#63616e]">|</span>
            <span>{interview.date || 'Fieldwork Active'}</span>
          </div>
        </div>

        {/* Participant Bio & Affiliation */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white tracking-tight">
            {interview.interviewee}
          </h3>
          <div className="text-xs font-editorial-mono text-[#c89643] mt-1 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{interview.roleOrAffiliation}</span>
          </div>
        </div>

        {/* Magazine Style Pull Quote */}
        <div className="relative mb-6 p-6 bg-[#0d0d11] border-l-2 border-[#c89643]">
          <p className="text-base sm:text-lg font-serif-display italic leading-relaxed text-[#f5f2eb]">
            {interview.keyQuote}
          </p>
        </div>

        {/* Field Audio Cassette / Player Console */}
        <div className="mb-6 p-4 bg-[#191922] border border-white/10">
          <div className="flex items-center justify-between text-xs font-editorial-mono text-[#9e9ba8] pb-2 mb-3 border-b border-white/5">
            <div className="flex items-center gap-2 text-[#e0b064]">
              <Volume2 className="w-3.5 h-3.5" />
              <span>FIELD RECORDER CASSETTE</span>
            </div>
            <span className="text-[#63616e]">TRACK LENGTH: PENDING EDIT</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-9 h-9 bg-[#c89643] hover:bg-[#e0b064] text-black flex items-center justify-center shrink-0 transition-colors"
              aria-label="Play sample"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
            </button>

            {/* Tactile tape progress bar */}
            <div className="flex-1 bg-black/60 h-3 border border-white/10 relative overflow-hidden">
              <div
                className={`h-full bg-[#c89643] transition-all duration-300 ${
                  isPlaying ? 'w-1/3' : 'w-0'
                }`}
              />
            </div>

            <span className="text-[11px] font-editorial-mono text-[#9e9ba8]">
              {isPlaying ? '00:14 / 04:32' : '00:00 / --:--'}
            </span>
          </div>

          <div className="mt-3 text-[10px] font-editorial-mono text-[#63616e]">
            {interview.mediaPlaceholderText}
          </div>
        </div>

        {/* Thematic Coding Tags */}
        <div className="mb-6">
          <div className="text-[10px] font-editorial-mono text-[#63616e] uppercase tracking-wider mb-2">
            RESEARCH CODING THEMES:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {interview.groupThemes.map((theme, idx) => (
              <span
                key={idx}
                className="text-[10px] font-editorial-mono px-2 py-0.5 bg-white/5 text-[#f5f2eb]/90 border border-white/5"
              >
                #{theme}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Interview Transcript Accordion */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-xs font-editorial-mono font-bold uppercase tracking-wider text-[#e0b064] hover:text-[#f5f2eb] transition-colors py-1"
        >
          <span>
            {expanded
              ? 'Hide Fieldwork Transcript [-]'
              : `View Fieldwork Questions & Transcript (${interview.qaList.length}) [+]`}
          </span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 pt-4 border-t border-white/5">
            {interview.qaList.map((qa, idx) => (
              <div key={idx} className="p-4 bg-[#0d0d11] border border-white/5 text-xs">
                <div className="font-bold text-[#e0b064] mb-2 font-editorial-mono">
                  QUESTION {idx + 1}: {qa.question}
                </div>
                <div className="text-[#9e9ba8] leading-relaxed font-light">
                  {qa.response}
                </div>
              </div>
            ))}

            <div className="p-4 bg-[#1a1712] border-l-2 border-[#e0b064] text-xs font-light text-[#f5f2eb]">
              <span className="font-editorial-mono font-bold text-[#e0b064] block mb-1">
                GROUP CURATORIAL REFLECTION:
              </span>
              {interview.groupReflection}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
