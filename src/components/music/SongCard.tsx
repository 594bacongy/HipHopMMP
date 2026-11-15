'use client';

import React from 'react';
import { SongAnalysis } from '@/types';
import { Disc, ArrowRight, Music, Calendar } from 'lucide-react';

interface SongCardProps {
  song: SongAnalysis;
  onOpenModal: (song: SongAnalysis) => void;
}

export const SongCard: React.FC<SongCardProps> = ({ song, onOpenModal }) => {
  return (
    <div className="bg-[#141419] border border-white/10 hover:border-[#c89643]/60 p-6 flex flex-col justify-between transition-all duration-200">
      <div>
        {/* Top Sleeve Ledger Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-editorial-mono text-[#9e9ba8]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c89643]" />
            <span className="text-white font-bold uppercase">{song.id.toUpperCase()}</span>
          </div>
          <span className="text-[#c89643]">
            {song.status === 'planned' ? '[FIELDWORK FORTHCOMING]' : '[INGESTED]'}
          </span>
        </div>

        {/* Vinyl Record Sleeve Representation */}
        <div className="relative aspect-[4/3] w-full bg-[#0d0d11] border border-white/10 mb-6 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Subtle vinyl grooves effect */}
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full vinyl-grooves border-2 border-[#1c1c24] opacity-50 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#1b1712] border border-[#c89643] text-[#e0b064] flex items-center justify-center mb-3">
              <Disc className="w-5 h-5" />
            </div>
            <span className="text-xs font-editorial-mono tracking-widest text-[#e0b064] uppercase font-bold mb-1">
              {song.title}
            </span>
            <span className="text-xs text-[#9e9ba8] font-editorial-mono">
              {song.artist} • {song.releaseYear}
            </span>
          </div>
        </div>

        {/* Lyrical Context Summary */}
        <div className="mb-4">
          <div className="text-[11px] font-editorial-mono text-[#63616e] uppercase tracking-wider mb-1">
            RESEARCH FOCUS:
          </div>
          <p className="text-xs text-[#9e9ba8] leading-relaxed font-light line-clamp-3">
            {song.culturalContext}
          </p>
        </div>

        {/* Lyrical Theme Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {song.lyricalThemes.map((theme, idx) => (
            <span
              key={idx}
              className="text-[10px] font-editorial-mono px-2 py-0.5 bg-white/5 text-[#f5f2eb]/80 border border-white/5"
            >
              #{theme}
            </span>
          ))}
        </div>
      </div>

      {/* Button to open Liner Notes Modal */}
      <button
        onClick={() => onOpenModal(song)}
        className="w-full py-3 bg-[#191922] hover:bg-[#c89643] text-[#f5f2eb] hover:text-black border border-white/10 hover:border-[#c89643] font-editorial-mono text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
      >
        <span>Open Liner Notes & Analysis</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
