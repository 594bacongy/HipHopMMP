import React from 'react';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { projectInfo } from '@/data/projectInfo';
import { teamMembers } from '@/data/team';
import {
  Compass,
  Sparkles,
  Users,
  Radio,
  BookOpen,
  ShieldAlert,
  Flame,
  ArrowRight,
} from 'lucide-react';

const PILLAR_ICONS = [
  Sparkles,
  Users,
  ShieldAlert,
  BookOpen,
  Flame,
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          tag="01 // ABOUT OUR RESEARCH"
          title="Beyond The Beats: A Living Cultural Movement"
          subtitle="Our research examines how Hip Hop bridges individual consciousness to systemic societal forces across five foundational pillars."
        />

        {/* Central Argument Feature Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#15171d] via-[#101115] to-[#0d0e12] border border-white/10 p-8 md:p-12 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Central Project Thesis</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Hip Hop as an Epistemic Tradition of Resistance & Self-Definition
              </h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6 font-light">
                {projectInfo.centralIdea}
              </p>
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-gray-400 leading-relaxed font-mono">
                <span className="text-amber-400 font-bold block mb-1">
                  RESEARCH METHODOLOGY:
                </span>
                {projectInfo.researchApproach}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#181a20]/80 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
              <div className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-4 pb-3 border-b border-white/10">
                Institutional Context
              </div>
              <div className="space-y-3 text-xs font-mono">
                <div>
                  <span className="text-gray-500 block">COURSE</span>
                  <span className="text-white font-semibold">
                    {projectInfo.course}: {projectInfo.courseTitle}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">CAMPUS</span>
                  <span className="text-amber-400 font-semibold">
                    {projectInfo.institution}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">PROJECT TYPE</span>
                  <span className="text-gray-300">
                    Final Multimodal Digital Research Exhibition
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">COLLABORATORS</span>
                  <span className="text-gray-300">
                    Kellen S., Roy K., Sophia S., Nicholas S.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Research Pillars */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              The Five Pillars of Our Inquiry
            </h3>
            <span className="text-xs font-mono text-gray-500">
              FRAMEWORK ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectInfo.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl bg-[#121316]/90 border border-white/5 hover:border-amber-400/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-gray-600 group-hover:text-amber-400/60 transition-colors">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}

            {/* Sixth Card: Dynamic Research Note */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500/10 via-[#121316] to-[#0e0f13] border border-amber-500/20 p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block mb-2">
                  CONTINUOUS SYNTHESIS
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  Evolving Fieldwork
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  As our research team conducts lyrical dissections, student interviews, and
                  multimedia archival surveys, each pillar expands with direct fieldwork data.
                </p>
              </div>
              <a
                href="#themes"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 mt-4 group"
              >
                <span>Explore Societal Themes</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
