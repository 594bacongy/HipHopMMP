'use client';

import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { InterviewCard } from '@/components/interviews/InterviewCard';
import { EmptyState } from '@/components/common/EmptyState';
import { interviews, interviewsDescription } from '@/data/interviews';
import { Users2, Feather } from 'lucide-react';

export const InterviewsSection: React.FC = () => {
  return (
    <section id="interviews" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="03"
          category="Field Oral Histories"
          title="Personal Narratives &"
          italicWord="Lived Experience."
          subtitle={interviewsDescription.sectionSubtitle}
        />

        {/* Why Perspectives Matter Monograph Block */}
        <div className="bg-[#141419] border border-white/10 p-8 md:p-10 mb-12">
          <div className="flex items-center gap-2 font-editorial-mono text-xs text-[#c89643] uppercase tracking-widest mb-3">
            <Users2 className="w-4 h-4" />
            <span>Oral History Epistemology</span>
          </div>
          <p className="text-sm sm:text-base text-[#9e9ba8] leading-relaxed mb-6 font-light">
            {interviewsDescription.whyPerspectivesMatter}
          </p>
          <div className="p-4 bg-black/40 border-l-2 border-[#c89643] font-editorial-mono text-xs text-[#9e9ba8] leading-relaxed">
            <span className="font-bold text-white block mb-1">
              FIELD INTERVIEW METHODOLOGY:
            </span>
            {interviewsDescription.methodologyNote}
          </div>
        </div>

        {/* Curator Dispatch */}
        <div className="mb-12">
          <EmptyState
            folioRef="FOLIO-ORAL-HISTORIES"
            dossierTitle="Oral History Field Recordings in Transcription"
            leadCuratorNote="We are engaging with undergraduate students, local community organizers, and campus DJs across the UMass Amherst community. Each conversation investigates how Hip Hop provides a vernacular for navigating institutional spaces."
            methodologyDispatch="Recordings are captured with field microphones, edited for clarity, transcribed with ethical participant consent, and qualitatively coded by Kellen, Roy, Sophia, and Nicholas."
            fieldworkSlots={[
              'Participant Identity & Campus Affiliation',
              'Key Reflective Pull-Quote & Audio Snippet',
              'Linguistic Agency & HHNL Encounter Transcript',
              'Community Belonging & Everyday Resistance Dialogue',
              'EDUC 218 Thematic Coding & Synthesis',
            ]}
          />
        </div>

        {/* Grid of Interviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </div>
    </section>
  );
};
