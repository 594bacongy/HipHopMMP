import React from 'react';
import { Disc, ExternalLink, GraduationCap } from 'lucide-react';
import { teamMembers } from '@/data/team';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08090a] pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Main Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-black font-bold">
                <Disc className="w-5 h-5" />
              </div>
              <span className="font-extrabold tracking-wider text-xl text-white font-mono">
                CULTURAL<span className="text-amber-400">.</span>HIPHOP
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
              An evolving multimodal digital research exhibition examining Hip Hop as a cultural
              movement of identity, linguistic autonomy, collective belonging, and political resistance.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>EDUC 218 • University of Massachusetts Amherst</span>
            </div>
          </div>

          {/* Research Sections */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono font-semibold tracking-wider text-white uppercase mb-4">
              Project Navigation
            </div>
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  01. About & Pillars
                </a>
              </li>
              <li>
                <a href="#music" className="hover:text-amber-400 transition-colors">
                  02. Music Analysis
                </a>
              </li>
              <li>
                <a href="#interviews" className="hover:text-amber-400 transition-colors">
                  03. Field Interviews
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-amber-400 transition-colors">
                  04. Visual Culture & Media
                </a>
              </li>
              <li>
                <a href="#themes" className="hover:text-amber-400 transition-colors">
                  05. Societal Themes
                </a>
              </li>
              <li>
                <a href="#sources" className="hover:text-amber-400 transition-colors">
                  06. Bibliography & Sources
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-400 transition-colors">
                  07. Research Team
                </a>
              </li>
            </ul>
          </div>

          {/* Research Team */}
          <div className="md:col-span-4">
            <div className="text-xs font-mono font-semibold tracking-wider text-white uppercase mb-4">
              Project Researchers
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5"
                >
                  <div className="font-semibold text-white text-xs">{member.name}</div>
                  <div className="text-[11px] text-amber-400/80 font-mono mt-0.5">
                    Co-Researcher
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 leading-normal">
              Final Multimodal Media Project. Built with Next.js, TypeScript, and Tailwind CSS.
              Optimized for continuous updates via Antigravity & Vercel.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Cultural Hip Hop Project • EDUC 218 UMass Amherst.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-400/80">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Version 1.0 Foundation • Active Research
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
