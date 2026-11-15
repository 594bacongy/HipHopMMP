import React from 'react';
import { GraduationCap } from 'lucide-react';
import { teamMembers } from '@/data/team';
import { projectInfo } from '@/data/projectInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0d] pt-16 pb-12 text-[#9e9ba8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Main Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#1b1712] border border-[#c89643] text-[#e0b064] flex items-center justify-center font-editorial-mono text-xs font-bold">
                HH
              </div>
              <span className="font-editorial-heading font-black tracking-wider text-xl text-white">
                CULTURAL HIP HOP
              </span>
            </div>
            <p className="text-sm text-[#9e9ba8] leading-relaxed max-w-md font-light">
              An evolving multimodal digital research exhibition examining Hip Hop as a cultural
              movement of identity, linguistic autonomy, collective belonging, and political resistance.
            </p>
            <div className="inline-flex items-center gap-2 p-2.5 bg-[#141419] border border-white/10 text-xs font-editorial-mono text-[#f5f2eb]">
              <GraduationCap className="w-4 h-4 text-[#c89643]" />
              <span>{projectInfo.course}: {projectInfo.courseTitle} • {projectInfo.institution}</span>
            </div>
          </div>

          {/* Research Sections */}
          <div className="md:col-span-3">
            <div className="text-xs font-editorial-mono font-bold tracking-wider text-white uppercase mb-4">
              Exhibition Directory
            </div>
            <ul className="space-y-2 text-xs font-editorial-mono">
              <li>
                <a href="#about" className="hover:text-[#e0b064] transition-colors">
                  [01] Curatorial Manifesto
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-[#e0b064] transition-colors">
                  [02] Sonic & Track Deconstruction
                </a>
              </li>
              <li>
                <a href="#interviews" className="hover:text-[#e0b064] transition-colors">
                  [03] Field Oral Histories
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-[#e0b064] transition-colors">
                  [04] Visual Culture & Iconography
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-[#e0b064] transition-colors">
                  [05] Societal & Pedagogical Themes
                </a>
              </li>
              <li>
                <a href="#sources" className="hover:text-[#e0b064] transition-colors">
                  [06] Scholarly Bibliography
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#e0b064] transition-colors">
                  [07] Research Collective
                </a>
              </li>
            </ul>
          </div>

          {/* Research Collective */}
          <div className="md:col-span-4">
            <div className="text-xs font-editorial-mono font-bold tracking-wider text-white uppercase mb-4">
              Research Collective
            </div>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-3 bg-[#141419] border border-white/10"
                >
                  <div className="font-bold text-white text-xs">{member.name}</div>
                  <div className="text-[10px] text-[#c89643] font-editorial-mono mt-0.5">
                    Co-Researcher
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#63616e] font-editorial-mono leading-normal">
              Final Multimodal Media Project. Built for iterative fieldwork ingests via Antigravity.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#63616e] font-editorial-mono gap-4">
          <div>
            © {new Date().getFullYear()} Cultural Hip Hop Monograph • EDUC 218 UMass Amherst.
          </div>
          <div className="flex items-center gap-4 text-[#c89643]">
            <span>Volume 01 • Active Fieldwork</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
