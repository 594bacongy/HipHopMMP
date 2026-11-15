'use client';

import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { teamMembers } from '@/data/team';
import { projectInfo } from '@/data/projectInfo';
import { GraduationCap, UserCheck, Layers, BookOpen, Sparkles } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 border-t border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="07 // RESEARCH COLLECTIVE"
          title="Project Authors & Researchers"
          subtitle={`EDUC 218: ${projectInfo.courseTitle} • ${projectInfo.institution}`}
        />

        {/* Institutional Accreditation Callout */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#181a22] to-[#101116] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                ACADEMIC AFFILIATION
              </div>
              <div className="text-sm text-gray-200">
                Department of Teacher Education and Curriculum Studies • College of Education
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-gray-400">
            {projectInfo.institution} • {projectInfo.semester}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl bg-[#121316] border border-white/5 hover:border-amber-400/30 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black"
            >
              <div>
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1d2029] to-[#0e0f13] border border-white/10 flex items-center justify-center text-amber-400 text-lg font-mono font-bold mb-4 shadow-inner">
                  {member.name.charAt(0)}
                  <span className="text-amber-500/60 text-xs">.</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-amber-400 font-medium mb-3">
                  {member.role}
                </div>

                <p className="text-xs text-gray-400 leading-relaxed font-light mb-6">
                  {member.bio}
                </p>

                {/* Focus Areas */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2">
                    Research Focus
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((focus, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Individual Contributions Placeholder */}
              <div className="pt-4 border-t border-white/5">
                <div className="text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-2">
                  Key Project Contributions
                </div>
                <ul className="space-y-1 text-[11px] font-mono text-gray-400">
                  {member.contributions.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-400/80">•</span>
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
