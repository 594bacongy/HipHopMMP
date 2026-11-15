'use client';

import React, { useState } from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { SongCard } from '@/components/music/SongCard';
import { SongModal } from '@/components/music/SongModal';
import { EmptyState } from '@/components/common/EmptyState';
import { songAnalyses } from '@/data/musicAnalyses';
import { SongAnalysis } from '@/types';

export const MusicSection: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<SongAnalysis | null>(null);

  return (
    <section id="music" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="02"
          category="Sonic & Textual Deconstruction"
          title="The Anatomy of Track"
          italicWord="& Verse."
          subtitle="How our research evaluates lyrical syntax (Hip Hop Nation Language), sampling histories, drum dynamics, and sociopolitical resonance."
        />

        {/* Curatorial Dispatch */}
        <div className="mb-12">
          <EmptyState
            folioRef="FOLIO-SONIC-ANALYSIS"
            dossierTitle="Curatorial Ingest & Track Selection In Progress"
            leadCuratorNote="Our research team (Kellen, Roy, Sophia, and Nicholas) is presently conducting critical listening sessions. We are selecting tracks across foundational eras and contemporary voices that demonstrate how artists deploy language as counter-narrative."
            methodologyDispatch="Tracks will be deconstructed through a three-part lens: (1) Hip Hop Nation Language syntax & rhetorical devices, (2) Production, drum programming, and historical sample lineage, and (3) Social and systemic critique."
            fieldworkSlots={[
              'Lyrical Transcription & HHNL Wordplay Analysis',
              'Sample Origin & Sonic Lineage Deconstruction',
              'Official Music Video Iconography & Mise-en-scène',
              'Sociopolitical Context & Grassroots Resonance',
              'EDUC 218 Group Curatorial Synthesis',
            ]}
          />
        </div>

        {/* Modular Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
