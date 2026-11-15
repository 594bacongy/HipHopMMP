'use client';

import React from 'react';
import { SongAnalysis } from '@/types';
import { Disc, ArrowUpRight, Music, Calendar, Sparkles } from 'lucide-react';

interface SongCardProps {
  song: SongAnalysis;
  onOpenModal: (song: SongAnalysis) => void;
}

export const SongCard: React.FC<SongCardProps> = ({ song, onOpenModal }) => {
  return (
    <div className="group relative rounded-2xl bg-[#121316] border border-white/5 hover:border-amber-400/30 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black">
      <div>
        {/* Album Cover Graphic Placeholder */}
        <div className="relative aspect-square w-full rounded-xl bg-gradient-to-br from-[#181a22] to-[#0e0f14] border border-white/10 mb-6 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Subtle concentric vinyl lines in CSS */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-56 h-56 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-3 group-hover:rotate-90 transition-transform duration-500">
              <Disc className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider uppercase mb-1">
              {song.status === 'planned' ? 'Analysis Slot' : 'Song Analysis'}
            </span>
            <span className="text-xs font-mono text-gray-400 max-w-[200px]">
              {song.albumTitle}
            </span>
          </div>
        </div>

        {/* Song Meta */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
          <span className="text-amber-400/90 font-semibold uppercase tracking-wider">
            {song.artist}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {song.releaseYear}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
          {song.title}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light">
          {song.culturalContext}
        </p>

        {/* Lyrical Theme Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {song.lyricalThemes.slice(0, 3).map((theme, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-300 border border-white/5"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>

      {/* Button to Trigger Full Analysis Inspector */}
      <button
        onClick={() => onOpenModal(song)}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase text-white bg-white/[0.04] hover:bg-amber-400 hover:text-black border border-white/10 hover:border-amber-400 transition-all"
      >
        <span>Inspect Analysis Breakdown</span>
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </div>
  );
};
