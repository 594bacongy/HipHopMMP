'use client';

import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { teamMembers } from '@/data/team';
import { projectInfo } from '@/data/projectInfo';
import { GraduationCap, Feather, ArrowDownRight } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 border-b border-white/10 bg-[#0d0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="07"
          category="Research Collective & Authors"
          title="Curatorial Team &"
          italicWord="Contributors."
          subtitle={`EDUC 218: ${projectInfo.courseTitle} • ${projectInfo.institution}`}
        />

        {/* Academic Affiliation Header Card */}
        <div className="mb-12 p-6 bg-[#141419] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1b1712] border border-[#c89643]/40 text-[#c89643] flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="font-editorial-mono text-xs uppercase tracking-wider text-[#c89643] font-bold">
                DEPARTMENT OF TEACHER EDUCATION & CURRICULUM STUDIES
              </div>
              <div className="text-sm text-[#f5f2eb]">
                College of Education • {projectInfo.institution}
              </div>
            </div>
          </div>
          <div className="font-editorial-mono text-xs text-[#9e9ba8]">
            {projectInfo.semester}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="bg-[#141419] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c89643]/50 transition-colors duration-200"
            >
              <div>
                {/* Researcher Monogram Badge */}
                <div className="w-12 h-12 bg-[#0d0d11] border border-white/15 text-[#e0b064] font-editorial-mono font-bold text-base flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <div className="font-editorial-mono text-xs text-[#c89643] mb-3">
                  {member.role}
                </div>

                <p className="text-xs text-[#9e9ba8] leading-relaxed font-light mb-6">
                  {member.bio}
                </p>

                {/* Research Focus Areas */}
                <div className="mb-6">
                  <div className="font-editorial-mono text-[10px] uppercase text-[#63616e] tracking-wider mb-2">
                    Research Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((focus, fIdx) => (
                      <span
                        key={fIdx}
                        className="text-[10px] font-editorial-mono px-2 py-0.5 bg-white/5 text-[#f5f2eb]/90 border border-white/5"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Project Contributions */}
              <div className="pt-4 border-t border-white/5">
                <div className="font-editorial-mono text-[10px] uppercase text-[#63616e] tracking-wider mb-2">
                  Contributions:
                </div>
                <ul className="space-y-1 text-[11px] font-editorial-mono text-[#9e9ba8]">
                  {member.contributions.map((c, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-1.5">
                      <span className="text-[#c89643]">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
