import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { InterviewCard } from '@/components/interviews/InterviewCard';
import { EmptyState } from '@/components/common/EmptyState';
import { interviews, interviewsDescription } from '@/data/interviews';
import { MessageSquare, Users2, Mic } from 'lucide-react';

export const InterviewsSection: React.FC = () => {
  return (
    <section id="interviews" className="py-24 border-t border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="03 // ORAL HISTORIES & PERSPECTIVES"
          title={interviewsDescription.sectionTitle}
          subtitle={interviewsDescription.sectionSubtitle}
        />

        {/* Why Personal Perspectives Matter - Contextual Statement */}
        <div className="rounded-3xl bg-gradient-to-r from-[#14161d] to-[#0e0f13] border border-white/10 p-8 md:p-10 mb-12 shadow-xl">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-amber-400 mb-3">
            <Users2 className="w-4 h-4" />
            <span>Epistemic Grounding: Why Personal Voices Matter</span>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
            {interviewsDescription.whyPerspectivesMatter}
          </p>
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-400 font-mono leading-relaxed">
            <span className="text-amber-400 font-bold block mb-1">
              ORAL HISTORY METHODOLOGY:
            </span>
            {interviewsDescription.methodologyNote}
          </div>
        </div>

        {/* Empty State / In-progress notice */}
        <div className="mb-12">
          <EmptyState
            statusLabel="Ethical Fieldwork Protocol Active"
            title="Community Interview Roster & Recording Slots"
            description="Our team is currently conducting audio interviews with undergraduate students, campus artists, and community members. As transcripts and recordings are edited, they will be published below using this modular layout."
            expectedFields={[
              'Interviewee Pseudonym / Identifier',
              'Campus or Community Role',
              'Key Highlight Quote',
              'Thematic Tags (e.g. Identity, HHNL, Sanctuary)',
              'Audio / Video Stream Recording',
              'Curated Q&A Transcriptions',
              'EDUC 218 Group Thematic Reflection',
            ]}
            actionNote="To add finished interviews, edit src/data/interviews.ts or provide interview transcripts to Antigravity."
          />
        </div>

        {/* Reusable Interview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))}
        </div>
      </div>
    </section>
  );
};
