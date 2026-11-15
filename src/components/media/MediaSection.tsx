'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { MediaCard } from '@/components/media/MediaCard';
import { visualMediaItems, visualMediaCategories } from '@/data/visualMedia';
import { Filter } from 'lucide-react';

export const MediaSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems =
    activeCategory === 'All'
      ? visualMediaItems
      : visualMediaItems.filter((item) => item.category === activeCategory);

  return (
    <section id="media" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="04"
          category="Visual Culture & Iconography"
          title="Aerosol Murals & Album"
          italicWord="Semiotics."
          subtitle="Documenting street photography, wildstyle typography, sleeve iconography, and cinematic music video narratives."
        />

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <div className="inline-flex items-center gap-1.5 font-editorial-mono text-xs text-[#9e9ba8] uppercase mr-3">
            <Filter className="w-3.5 h-3.5 text-[#c89643]" />
            <span>Filter Specimen Index:</span>
          </div>
          {visualMediaCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 font-editorial-mono text-xs uppercase tracking-wider transition-all ${
                activeCategory === category
                  ? 'bg-[#c89643] text-black font-bold'
                  : 'bg-[#141419] text-[#9e9ba8] hover:text-white hover:bg-white/5 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <MediaCard key={item.id} item={item} />
          ))}
        </div>

        {/* Fair-use Archival Notice */}
        <div className="p-5 bg-[#141419] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-editorial-mono text-xs text-[#9e9ba8]">
          <div>
            <span className="text-[#e0b064] font-bold block mb-0.5">
              FAIR-USE PEDAGOGICAL CURATION NOTE:
            </span>
            All visual plates and video excerpts are curated strictly for non-profit scholarly analysis within EDUC 218.
          </div>
          <span className="shrink-0 text-[#63616e]">
            src/data/visualMedia.ts
          </span>
        </div>
      </div>
    </section>
  );
};
