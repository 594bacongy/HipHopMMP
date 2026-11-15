'use client';

import React from 'react';
import { ArrowRight, Disc, Play, Sparkles, Layers, Mic, Eye, Users } from 'lucide-react';
import { projectInfo } from '@/data/projectInfo';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Ambient Lighting & Grid */}
      <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Academic / Project Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-inner animate-in fade-in duration-700">
          <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-gray-300">
            {projectInfo.course} • {projectInfo.institution}
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-xs font-mono text-amber-400 font-medium">
            Final Multimodal Research
          </span>
        </div>

        {/* Hero Title */}
        <div className="relative max-w-5xl mx-auto mb-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase leading-[0.92] select-none">
            <span className="block font-serif tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400">
              Cultural
            </span>
            <span className="block font-sans tracking-tight text-amber-400 gold-glow">
              Hip Hop
            </span>
          </h1>
        </div>

        {/* Supporting Statement */}
        <div className="max-w-3xl mx-auto mb-6">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-neutral-200 tracking-tight leading-snug">
            "{projectInfo.subtitle}"
          </p>
        </div>

        {/* Central Research Argument */}
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
            {projectInfo.centralIdea}
          </p>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono font-bold tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore The Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#music"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono font-semibold tracking-wider uppercase text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <Disc className="w-4 h-4 text-amber-400 animate-spin-slow" />
            <span>Music Analysis</span>
          </a>
          <a
            href="#interviews"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-mono font-semibold tracking-wider uppercase text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <Mic className="w-4 h-4 text-amber-400" />
            <span>Field Interviews</span>
          </a>
        </div>

        {/* Abstract Stylized Exhibition Console / Vinyl Motif */}
        <div className="relative max-w-4xl mx-auto pt-6">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#14161c]/90 to-[#0c0d10]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {/* Top Bar Indicators */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 uppercase tracking-widest text-[11px] text-gray-400">
                  DIGITAL ARCHIVE // EXHIBITION DECK
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-semibold tracking-wider">
                  STATUS: PHASE 1 FOUNDATION
                </span>
              </div>
            </div>

            {/* Quick Pillars Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
              <a
                href="#music"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-between text-amber-400 mb-2">
                  <Disc className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="text-[10px] font-mono opacity-60">01</span>
                </div>
                <div className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors">
                  Sonic Analysis
                </div>
                <div className="text-xs text-gray-400 line-clamp-2">
                  Lyrical syntax, beat production, and social significance deconstructions.
                </div>
              </a>

              <a
                href="#interviews"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-between text-amber-400 mb-2">
                  <Mic className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono opacity-60">02</span>
                </div>
                <div className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors">
                  Oral Histories
                </div>
                <div className="text-xs text-gray-400 line-clamp-2">
                  Student, artist, and community personal lived experiences.
                </div>
              </a>

              <a
                href="#media"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-between text-amber-400 mb-2">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono opacity-60">03</span>
                </div>
                <div className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors">
                  Visual Culture
                </div>
                <div className="text-xs text-gray-400 line-clamp-2">
                  Photography, album iconography, and regional graffiti archives.
                </div>
              </a>

              <a
                href="#themes"
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-amber-400/40 hover:bg-white/[0.05] transition-all"
              >
                <div className="flex items-center justify-between text-amber-400 mb-2">
                  <Layers className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono opacity-60">04</span>
                </div>
                <div className="font-bold text-white text-sm mb-1 group-hover:text-amber-300 transition-colors">
                  5 Social Themes
                </div>
                <div className="text-xs text-gray-400 line-clamp-2">
                  Identity, belonging, youth pedagogy, justice, and creative influence.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
