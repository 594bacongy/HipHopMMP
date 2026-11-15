'use client';

import React from 'react';
import { Disc, ArrowDown, BookOpen, Mic, Eye, Layers, Compass } from 'lucide-react';
import { projectInfo } from '@/data/projectInfo';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10 halftone-grain"
    >
      {/* Top Academic Masthead */}
      <div className="max-w-7xl mx-auto w-full pt-4 pb-6 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-editorial-mono text-[#9e9ba8]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c89643] rounded-full" />
          <span className="font-bold tracking-widest text-[#f5f2eb] uppercase">
            {projectInfo.institution}
          </span>
          <span className="text-white/20">/</span>
          <span>College of Education</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="tracking-wider uppercase text-[#c89643]">
            {projectInfo.course} Final Multimodal Exhibition
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[#9e9ba8]">Volume 01</span>
        </div>
      </div>

      {/* Main Cover Typography & Layout */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Bold Editorial Headline & Thesis */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-block">
            <span className="text-xs font-editorial-mono tracking-[0.25em] uppercase px-3 py-1 bg-white/5 border border-white/10 text-[#e0b064]">
              Curatorial Research Monograph
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black text-[#f5f2eb] tracking-tight leading-[0.88] uppercase">
            Cultural
            <span className="block font-serif-display italic font-normal text-[#e0b064] lowercase tracking-normal">
              Hip Hop.
            </span>
          </h1>

          <div className="border-l-2 border-[#c89643] pl-6 py-1">
            <p className="text-xl sm:text-2xl text-[#f5f2eb] font-light leading-snug tracking-tight">
              "{projectInfo.subtitle}"
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#9e9ba8] leading-relaxed max-w-xl font-light">
            {projectInfo.centralIdea}
          </p>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="px-6 py-3.5 bg-[#c89643] hover:bg-[#e0b064] text-black font-editorial-mono font-bold text-xs uppercase tracking-wider transition-all duration-200"
            >
              Enter The Exhibition ↓
            </a>
            <a
              href="#music"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-[#f5f2eb] font-editorial-mono text-xs uppercase tracking-wider transition-all duration-200"
            >
              Examine Sonic Analysis
            </a>
            <a
              href="#interviews"
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 text-[#f5f2eb] font-editorial-mono text-xs uppercase tracking-wider transition-all duration-200"
            >
              Oral Histories
            </a>
          </div>
        </div>

        {/* Right Column: Physical Vinyl & Archival Plate */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-full vinyl-grooves border-4 border-[#1c1c24] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center group">
            {/* Outer Runout Matrix */}
            <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />
            <div className="absolute inset-10 rounded-full border border-white/5 pointer-events-none" />

            {/* Center Record Label */}
            <div className="relative w-36 sm:w-40 aspect-square rounded-full bg-[#1b1712] border-2 border-[#c89643] flex flex-col items-center justify-center p-4 text-center shadow-inner">
              <span className="text-[9px] font-editorial-mono tracking-widest text-[#c89643] uppercase mb-1">
                SIDE A • 33 ⅓ RPM
              </span>
              <div className="w-full h-[1px] bg-[#c89643]/30 my-1" />
              <div className="font-editorial-heading font-black text-xs text-[#f5f2eb] uppercase leading-tight">
                EDUC 218
              </div>
              <div className="text-[10px] font-serif-display italic text-[#e0b064]">
                UMass Amherst
              </div>
              <div className="w-full h-[1px] bg-[#c89643]/30 my-1" />
              {/* Spindle hole */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#0d0d11] border border-white/20 mt-1" />
            </div>

            {/* Stamp Overlay */}
            <div className="absolute -bottom-4 -right-2 bg-[#191922] border border-[#c89643]/50 px-3 py-1.5 shadow-xl font-editorial-mono text-[10px] text-[#e0b064] tracking-widest uppercase">
              ARCHIVE // SPECIMEN 01
            </div>
          </div>

          {/* Catalog Metadata Card */}
          <div className="mt-8 w-full max-w-sm bg-[#141419] border border-white/10 p-4 text-xs font-editorial-mono text-[#9e9ba8]">
            <div className="flex justify-between border-b border-white/10 pb-2 mb-2">
              <span className="text-white font-bold">RESEARCH COLLECTIVE:</span>
              <span className="text-[#e0b064]">Kellen, Roy, Sophia, Nicholas</span>
            </div>
            <div className="flex justify-between">
              <span>PROJECT STATUS:</span>
              <span className="text-white">Active Multimodal Inquiry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Exhibition Table of Contents Bar */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-xs font-editorial-mono text-[#9e9ba8]">
          <a href="#about" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [01] ABOUT
          </a>
          <a href="#music" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [02] MUSIC
          </a>
          <a href="#interviews" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [03] ORAL HISTORY
          </a>
          <a href="#media" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [04] VISUALS
          </a>
          <a href="#themes" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [05] 5 THEMES
          </a>
          <a href="#sources" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [06] SOURCES
          </a>
          <a href="#team" className="p-2 hover:bg-white/5 hover:text-[#e0b064] transition-colors border border-transparent hover:border-white/10">
            [07] AUTHORS
          </a>
        </div>
      </div>
    </section>
  );
};
