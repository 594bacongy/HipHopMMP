'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { MediaCard } from '@/components/media/MediaCard';
import { visualMediaItems, visualMediaCategories } from '@/data/visualMedia';
import { Camera, Film, Layers, Filter } from 'lucide-react';

export const MediaSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems =
    activeCategory === 'All'
      ? visualMediaItems
      : visualMediaItems.filter((item) => item.category === activeCategory);

  return (
    <section id="media" className="py-24 border-t border-white/5 bg-[#0e0f13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="04 // VISUAL CULTURE & MULTIMEDIA"
          title="Iconography, Style & Aerosol Cartography"
          subtitle="Documenting album artwork, historical photographs, regional street murals, and cinematic video storytelling."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 uppercase mr-2">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Filter Archive:</span>
          </div>
          {visualMediaCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium tracking-wide transition-all ${
                activeCategory === category
                  ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
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

        {/* Curation Protocol Notice */}
        <div className="p-6 rounded-2xl bg-[#14161c] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            <span className="text-amber-400 font-bold block mb-0.5">
              FAIR USE & EDUCATIONAL ATTRIBUTION PROTOCOL:
            </span>
            All forthcoming archival imagery, album art sleeves, and video embeds will include full provenance citations and creator credits.
          </div>
          <span className="shrink-0 text-gray-500">
            src/data/visualMedia.ts
          </span>
        </div>
      </div>
    </section>
  );
};
