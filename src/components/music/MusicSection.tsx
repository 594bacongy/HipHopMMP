'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { SongCard } from '@/components/music/SongCard';
import { SongModal } from '@/components/music/SongModal';
import { EmptyState } from '@/components/common/EmptyState';
import { songAnalyses } from '@/data/musicAnalyses';
import { SongAnalysis } from '@/types';
import { Disc, Info, PlusCircle } from 'lucide-react';

export const MusicSection: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<SongAnalysis | null>(null);

  return (
    <section id="music" className="py-24 border-t border-white/5 bg-[#0e0f13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="02 // MUSIC & SONIC DECONSTRUCTION"
          title="Lyrical Syntax, Beats & Cultural Resonance"
          subtitle="Our research analyzes selected tracks across lyrical wordplay (HHNL), production aesthetics, historical context, and sociopolitical commentary."
        />

        {/* Empty State / Research Banner */}
        <div className="mb-12">
          <EmptyState
            statusLabel="Song Curation In Progress"
            title="Music Analysis Framework Ready for Ingest"
            description="Our team is currently evaluating songs that best exemplify the cultural and political dimensions of Hip Hop. Below are modular analysis slots built to display full breakdowns—including lyric deciphering, beat production, and group reflections—without requiring code restructuring."
            expectedFields={[
              'Song Title & Artist',
              'Release Year & Label',
              'Lyrical Syntax & HHNL Breakdown',
              'Beat & Sample Production Lineage',
              'Music Video Visual Semiotics',
              'Social & Political Significance',
              'EDUC 218 Group Interpretation',
              'Academic Citations',
            ]}
            actionNote="To add songs, edit src/data/musicAnalyses.ts or instruct Antigravity to ingest track analyses."
          />
        </div>

        {/* Modular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {songAnalyses.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onOpenModal={(s) => setSelectedSong(s)}
            />
          ))}
        </div>

        {/* Inspection Modal */}
        <SongModal song={selectedSong} onClose={() => setSelectedSong(null)} />
      </div>
    </section>
  );
};
