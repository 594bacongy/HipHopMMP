'use client';

import React from 'react';
import { SongAnalysis } from '@/types';
import { X, Disc, Calendar, Layers, BookOpen, Music, Film, FileText, Feather } from 'lucide-react';

interface SongModalProps {
  song: SongAnalysis | null;
  onClose: () => void;
}

export const SongModal: React.FC<SongModalProps> = ({ song, onClose }) => {
  if (!song) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141419] border border-white/20 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#181820]">
          <div>
            <div className="font-editorial-mono text-[11px] tracking-widest text-[#c89643] uppercase mb-1">
              EDUC 218 // Curatorial Liner Notes
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {song.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scroll Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Metadata Ledger */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-black/40 border border-white/10 text-xs font-editorial-mono">
            <div>
              <span className="text-[#63616e] block uppercase">ARTIST</span>
              <span className="text-white font-bold">{song.artist}</span>
            </div>
            <div>
              <span className="text-[#63616e] block uppercase">PROJECT / ALBUM</span>
              <span className="text-[#9e9ba8]">{song.albumTitle}</span>
            </div>
            <div>
              <span className="text-[#63616e] block uppercase">RELEASE YEAR</span>
              <span className="text-[#e0b064]">{song.releaseYear}</span>
            </div>
            <div>
              <span className="text-[#63616e] block uppercase">STATUS</span>
              <span className="text-[#c89643] uppercase font-bold">{song.status}</span>
            </div>
          </div>

          {/* Section 1: Cultural & Historical Context */}
          <div>
            <div className="font-editorial-mono text-xs text-[#c89643] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>01. Historical & Cultural Provenance</span>
            </div>
            <p className="text-sm text-[#9e9ba8] leading-relaxed p-4 bg-[#181820] border-l-2 border-[#c89643] font-light">
              {song.culturalContext}
            </p>
          </div>

          {/* Section 2: Core Themes */}
          <div>
            <div className="font-editorial-mono text-xs text-[#c89643] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>02. Lyrical & Social Themes</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {song.lyricalThemes.map((theme, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-editorial-mono text-[#f5f2eb]"
                >
                  #{theme}
                </span>
              ))}
            </div>
          </div>

          {/* Section 3: Formal Tripartite Analysis */}
          <div>
            <div className="font-editorial-mono text-xs text-[#c89643] uppercase tracking-wider mb-3">
              03. Detailed Sonic & Textual Deconstruction
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#181820] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#e0b064] mb-2 font-bold uppercase">
                  <FileText className="w-4 h-4" />
                  Lyrical Syntax & HHNL
                </div>
                <p className="text-xs text-[#9e9ba8] leading-relaxed font-light">
                  {song.musicalAnalysis.lyrics}
                </p>
              </div>

              <div className="p-4 bg-[#181820] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#e0b064] mb-2 font-bold uppercase">
                  <Music className="w-4 h-4" />
                  Beats & Production
                </div>
                <p className="text-xs text-[#9e9ba8] leading-relaxed font-light">
                  {song.musicalAnalysis.beatsAndProduction}
                </p>
              </div>

              <div className="p-4 bg-[#181820] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-editorial-mono text-[#e0b064] mb-2 font-bold uppercase">
                  <Film className="w-4 h-4" />
                  Visual Iconography
                </div>
                <p className="text-xs text-[#9e9ba8] leading-relaxed font-light">
                  {song.musicalAnalysis.visualsAndAesthetics ||
                    'Visual analysis will accompany official video archives.'}
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Sociopolitical Significance */}
          <div>
            <div className="font-editorial-mono text-xs text-[#c89643] uppercase tracking-wider mb-2">
              04. Sociopolitical Significance
            </div>
            <p className="text-sm text-[#9e9ba8] leading-relaxed p-4 bg-[#181820] border border-white/5 font-light">
              {song.socialPoliticalSignificance}
            </p>
          </div>

          {/* Section 5: Group Synthesis */}
          <div>
            <div className="font-editorial-mono text-xs text-[#c89643] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Feather className="w-4 h-4" />
              <span>05. EDUC 218 Curatorial Synthesis</span>
            </div>
            <div className="p-4 bg-[#1a1712] border-l-2 border-[#e0b064] text-sm text-[#f5f2eb] leading-relaxed font-light">
              {song.groupInterpretation}
            </div>
          </div>

          {/* Supporting Sources */}
          <div>
            <div className="font-editorial-mono text-xs text-[#63616e] uppercase tracking-wider mb-2">
              Bibliographic References & Citations:
            </div>
            <ul className="space-y-1 text-xs font-editorial-mono text-[#9e9ba8] list-disc list-inside">
              {song.supportingSources.map((source, idx) => (
                <li key={idx}>{source}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#181820] border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-editorial-mono text-xs uppercase tracking-wider transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
