'use client';

import React, { useState } from 'react';
import { InterviewPerspective } from '@/types';
import {
  Mic,
  Quote,
  ChevronDown,
  ChevronUp,
  Play,
  Volume2,
  Calendar,
  UserCheck,
  Tag,
} from 'lucide-react';

interface InterviewCardProps {
  interview: InterviewPerspective;
}

export const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
  const [expanded, setExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-2xl bg-[#121316] border border-white/5 hover:border-amber-400/30 p-6 md:p-8 transition-all duration-300">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1f222b] to-[#121317] border border-white/10 flex items-center justify-center text-amber-400">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">
                {interview.interviewee}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">
                {interview.perspectiveType}
              </span>
            </div>
            <div className="text-xs font-mono text-gray-400 mt-0.5">
              {interview.roleOrAffiliation} • {interview.date || 'Fieldwork Ongoing'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
            Format: {interview.mediaType.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Primary Key Quote */}
      <div className="relative mb-6 p-6 rounded-xl bg-[#16181f] border-l-2 border-amber-400">
        <Quote className="w-6 h-6 text-amber-400/30 absolute top-4 right-4" />
        <p className="text-base sm:text-lg text-white font-serif italic leading-relaxed">
          {interview.keyQuote}
        </p>
      </div>

      {/* Audio / Video Recording Embed Placeholder */}
      <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <span>RECORDING ARCHIVE // STREAM</span>
          </div>
          <span className="text-[11px] font-mono text-amber-400">
            [Audio Player Placeholder]
          </span>
        </div>

        {/* Audio Waveform Simulator */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center hover:bg-amber-300 transition-colors shrink-0"
            aria-label="Play recording placeholder"
          >
            <Play className="w-3.5 h-3.5 fill-black ml-0.5" />
          </button>
          <div className="flex-1 flex items-center gap-1 h-6">
            {[40, 65, 80, 35, 90, 50, 75, 40, 85, 30, 60, 45, 95, 70, 40, 60, 30, 80, 50, 65].map(
              (h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`w-1 rounded-full transition-all ${
                    isPlaying ? 'bg-amber-400 animate-pulse' : 'bg-white/20'
                  }`}
                />
              )
            )}
          </div>
          <span className="text-[10px] font-mono text-gray-500">00:00 / --:--</span>
        </div>
        <p className="text-[11px] text-gray-500 font-mono mt-2">
          {interview.mediaPlaceholderText}
        </p>
      </div>

      {/* Identified Themes */}
      <div className="mb-6">
        <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-amber-400" />
          Group Identified Themes:
        </div>
        <div className="flex flex-wrap gap-2">
          {interview.groupThemes.map((theme, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-gray-300 border border-white/5"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Interview Questions & Responses */}
      <div className="border-t border-white/5 pt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 py-2 transition-colors"
        >
          <span>
            {expanded
              ? 'Hide Interview Questions & Transcript'
              : `View Questions & Fieldwork Transcript (${interview.qaList.length})`}
          </span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 animate-in fade-in duration-200">
            {interview.qaList.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#16181f] border border-white/5 text-xs sm:text-sm"
              >
                <div className="font-bold text-amber-300 mb-2">
                  Q{idx + 1}: {item.question}
                </div>
                <div className="text-gray-300 leading-relaxed font-light">
                  {item.response}
                </div>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-gray-300">
              <span className="font-bold text-amber-400 block mb-1 font-mono uppercase">
                RESEARCH GROUP REFLECTION:
              </span>
              {interview.groupReflection}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
