'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { SourceCard } from '@/components/sources/SourceCard';
import { researchSources } from '@/data/sources';
import { Search } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('All');

  const sourceTypes = ['All', 'Book', 'Journal Article', 'Oral History', 'Documentary', 'Archival Record'];

  const filteredSources = researchSources.filter((source) => {
    const matchesSearch =
      source.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      source.annotation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || source.sourceType === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section id="sources" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="06"
          category="Academic References & Literature"
          title="Scholarly Bibliography &"
          italicWord="Course Texts."
          subtitle="Grounded in canonical scholarship on Hip Hop Nation Language (HHNL), critical race theory, reality pedagogy, and multimodal literacies."
        />

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#63616e] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by author, title, keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#141419] border border-white/15 px-4 pl-10 py-2.5 font-editorial-mono text-xs text-white placeholder-[#63616e] focus:outline-none focus:border-[#c89643] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {sourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 font-editorial-mono text-xs uppercase tracking-wider transition-all ${
                  filterType === type
                    ? 'bg-[#c89643] text-black font-bold'
                    : 'bg-[#141419] text-[#9e9ba8] hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSources.map((source) => (
            <SourceCard key={source.id} source={source} />
          ))}
        </div>

        {/* Bibliography Ingestion Note */}
        <div className="p-5 bg-[#141419] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-editorial-mono text-xs text-[#9e9ba8]">
          <div>
            <span className="text-[#e0b064] font-bold block mb-0.5">
              BIBLIOGRAPHIC ARCHITECTURE:
            </span>
            As our team gathers peer-reviewed citations, they are appended to <code className="text-white">src/data/sources.ts</code>.
          </div>
          <span className="text-[#63616e]">
            {filteredSources.length} of {researchSources.length} Citations Cataloged
          </span>
        </div>
      </div>
    </section>
  );
};
