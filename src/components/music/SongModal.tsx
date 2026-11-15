'use client';

import React from 'react';
import { SongAnalysis } from '@/types';
import {
  X,
  Disc,
  Calendar,
  Layers,
  Sparkles,
  Music,
  Video,
  FileText,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

interface SongModalProps {
  song: SongAnalysis | null;
  onClose: () => void;
}

export const SongModal: React.FC<SongModalProps> = ({ song, onClose }) => {
  if (!song) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#121316] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#16181e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <Disc className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                Full Song Deconstruction
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                {song.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-black/40 border border-white/5 text-xs font-mono">
            <div>
              <span className="text-gray-500 block">ARTIST</span>
              <span className="text-white font-semibold">{song.artist}</span>
            </div>
            <div>
              <span className="text-gray-500 block">ALBUM</span>
              <span className="text-gray-300">{song.albumTitle}</span>
            </div>
            <div>
              <span className="text-gray-500 block">RELEASE YEAR</span>
              <span className="text-amber-400">{song.releaseYear}</span>
            </div>
            <div>
              <span className="text-gray-500 block">STATUS</span>
              <span className="text-amber-400/90 capitalize">{song.status}</span>
            </div>
          </div>

          {/* Cultural & Historical Context */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              1. Cultural & Historical Context
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed bg-[#181a20] p-4 rounded-xl border border-white/5">
              {song.culturalContext}
            </p>
          </div>

          {/* Lyrical Themes */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4" />
              2. Core Lyrical Themes
            </h4>
            <div className="flex flex-wrap gap-2">
              {song.lyricalThemes.map((theme, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-xs font-mono text-amber-300"
                >
                  #{theme}
                </span>
              ))}
            </div>
          </div>

          {/* Tripartite Breakdown: Lyrics, Beats, Visuals */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4" />
              3. Tripartite Formal Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#16181e] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-white font-bold mb-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  LYRICAL SYNTAX & HHNL
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {song.musicalAnalysis.lyrics}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#16181e] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-white font-bold mb-2">
                  <Music className="w-4 h-4 text-amber-400" />
                  BEATS & PRODUCTION
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {song.musicalAnalysis.beatsAndProduction}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#16181e] border border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-white font-bold mb-2">
                  <Video className="w-4 h-4 text-amber-400" />
                  VISUALS & AESTHETICS
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {song.musicalAnalysis.visualsAndAesthetics ||
                    'Visual media analysis will accompany official music video release archives.'}
                </p>
              </div>
            </div>
          </div>

          {/* Sociopolitical Significance */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4" />
              4. Social & Political Significance
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed bg-[#181a20] p-4 rounded-xl border border-white/5">
              {song.socialPoliticalSignificance}
            </p>
          </div>

          {/* Group Interpretation */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4" />
              5. EDUC 218 Group Interpretation & Synthesis
            </h4>
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-sm text-gray-200 leading-relaxed">
              {song.groupInterpretation}
            </div>
          </div>

          {/* Supporting Sources */}
          <div>
            <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">
              Supporting Sources & Citations
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-gray-400 list-disc list-inside">
              {song.supportingSources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#16181e] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
