'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { SourceCard } from '@/components/sources/SourceCard';
import { researchSources } from '@/data/sources';
import { BookOpen, Search, Filter, Plus } from 'lucide-react';

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
    <section id="sources" className="py-24 border-t border-white/5 bg-[#0e0f13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="06 // SCHOLARLY BIBLIOGRAPHY & CITATIONS"
          title="Academic Sources & Foundational Literature"
          subtitle="Grounded in peer-reviewed sociolinguistics, critical race theory, and Hip Hop-based pedagogy (HHBP)."
        />

        {/* Search & Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by author, title, or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#121316] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {sourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  filterType === type
                    ? 'bg-amber-400 text-black font-bold'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
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

        {/* Source Ingestion Protocol Box */}
        <div className="p-6 rounded-2xl bg-[#14161c] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            <span className="text-amber-400 font-bold block mb-0.5">
              BIBLIOGRAPHIC ARCHITECTURE:
            </span>
            Sources are structured in <code className="text-white">src/data/sources.ts</code>. You can paste new citations, books, articles, or interviews directly into that file or through Antigravity.
          </div>
          <span className="text-gray-500">
            {filteredSources.length} of {researchSources.length} Sources Displayed
          </span>
        </div>
      </div>
    </section>
  );
};
