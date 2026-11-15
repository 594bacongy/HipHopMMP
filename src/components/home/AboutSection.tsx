import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { projectInfo } from '@/data/projectInfo';
import { teamMembers } from '@/data/team';
import { ArrowDownRight, Compass, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="01"
          category="Curatorial Framework & Manifesto"
          title="More Than Sound Waves:"
          italicWord="An Epistemic Movement."
          subtitle="How our EDUC 218 research interrogates Hip Hop as an architecture of cultural sovereignty, community literacy, and political agency."
        />

        {/* Curatorial Essay Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          <div className="lg:col-span-8 space-y-6 text-[#f5f2eb]">
            <div className="flex items-center gap-2 font-editorial-mono text-xs text-[#c89643] uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>Project Manifesto // Central Argument</span>
            </div>

            <p className="text-xl sm:text-2xl font-serif-display leading-relaxed text-[#f5f2eb] font-light italic">
              "Hip Hop is more than entertainment. It is a cultural movement that allows individuals and communities to express themselves, develop their identities, build a sense of belonging, and address social and political issues."
            </p>

            <div className="text-sm sm:text-base text-[#9e9ba8] leading-relaxed space-y-4 font-light">
              <p>
                Too often, mainstream academic institutions and corporate media reduce Hip Hop to a passive commercial commodity—a collection of streaming statistics and radio hooks. In <strong className="text-white font-medium">EDUC 218: Hip Hop Nation Language and Literacy Practices</strong>, our group approaches Hip Hop as a living pedagogical tradition.
              </p>
              <p>
                Through rhythm, rhyme schemes, aerosol art, and communal ciphers, marginalized communities have forged a resilient counter-epistemology. This digital exhibition exists to trace that lineage—connecting personal lived encounters to larger systemic questions of identity, linguistic autonomy, and social justice.
              </p>
            </div>

            {/* Fieldwork note */}
            <div className="p-5 rounded-lg bg-[#141419] border border-white/10 text-xs font-editorial-mono text-[#9e9ba8] leading-relaxed">
              <span className="text-[#e0b064] font-bold block mb-1">
                OUR RESEARCH METHODOLOGY:
              </span>
              {projectInfo.researchApproach}
            </div>
          </div>

          {/* Right Column: Institutional Archival Ledger */}
          <div className="lg:col-span-4 bg-[#141419] border border-white/15 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-editorial-mono text-xs uppercase tracking-wider text-white font-bold">
                Exhibition Registry
              </span>
              <span className="font-editorial-mono text-[10px] text-[#c89643]">
                UMASS-EDUC218
              </span>
            </div>

            <div className="space-y-4 text-xs font-editorial-mono">
              <div>
                <span className="text-[#63616e] block uppercase">INSTITUTION</span>
                <span className="text-white font-medium">{projectInfo.institution}</span>
              </div>
              <div>
                <span className="text-[#63616e] block uppercase">COURSE</span>
                <span className="text-[#e0b064] font-medium">
                  {projectInfo.course}: {projectInfo.courseTitle}
                </span>
              </div>
              <div>
                <span className="text-[#63616e] block uppercase">RESEARCH COLLECTIVE</span>
                <span className="text-white">
                  Kellen S., Roy K., Sophia S., Nicholas S.
                </span>
              </div>
              <div>
                <span className="text-[#63616e] block uppercase">FORMAT</span>
                <span className="text-[#9e9ba8]">
                  Evolving Multimodal Research Monograph
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] font-editorial-mono text-[#63616e]">
              Fieldwork data, audio oral histories, and lyrical analyses are added iteratively throughout the semester.
            </div>
          </div>
        </div>

        {/* The 5 Pillars — Editorial Monograph Format */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-8">
            <h3 className="font-editorial-heading text-lg sm:text-xl text-white uppercase tracking-wider">
              The Five Theoretical Pillars
            </h3>
            <span className="text-xs font-editorial-mono text-[#c89643]">
              FOUNDATIONAL INQUIRY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectInfo.pillars.map((pillar, idx) => {
              const romanNumerals = ['I', 'II', 'III', 'IV', 'V'];
              return (
                <div
                  key={idx}
                  className="bg-[#141419] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c89643]/50 transition-colors duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 font-editorial-mono text-xs">
                      <span className="text-[#c89643] font-bold">
                        PILLAR {romanNumerals[idx]}
                      </span>
                      <ArrowDownRight className="w-3.5 h-3.5 text-[#63616e] group-hover:text-[#c89643] transition-colors" />
                    </div>

                    <h4 className="text-base font-bold text-[#f5f2eb] mb-3 group-hover:text-[#e0b064] transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#9e9ba8] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 text-[10px] font-editorial-mono text-[#63616e]">
                    Case studies & song analyses forthcoming.
                  </div>
                </div>
              );
            })}

            {/* 6th Tile: Living Research Note */}
            <div className="bg-[#191922] border border-[#c89643]/30 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-editorial-mono text-xs text-[#c89643]">
                  <span>NOTE FROM THE CURATORS</span>
                  <span>● ACTIVE</span>
                </div>
                <h4 className="text-base font-bold text-white mb-3">
                  Iterative Ingest
                </h4>
                <p className="text-xs text-[#9e9ba8] leading-relaxed font-light">
                  Each pillar will host direct textual, musical, and ethnographic evidence as our interviews and lyrical deconstructions are completed.
                </p>
              </div>
              <a
                href="#themes"
                className="mt-6 text-xs font-editorial-mono text-[#e0b064] hover:underline"
              >
                Inspect Societal Themes →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
