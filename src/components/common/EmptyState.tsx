'use client';

import React from 'react';
import { Bookmark, FileSpreadsheet, Sparkles, Feather } from 'lucide-react';

interface EmptyStateProps {
  dossierTitle: string;
  leadCuratorNote: string;
  methodologyDispatch: string;
  fieldworkSlots: string[];
  folioRef?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  dossierTitle,
  leadCuratorNote,
  methodologyDispatch,
  fieldworkSlots,
  folioRef = 'DOC-EDUC218-UMASS',
}) => {
  return (
    <div className="relative rounded-xl border border-white/15 bg-[#14141a] p-8 md:p-10 text-left overflow-hidden shadow-2xl">
      {/* Top Ledger Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 text-xs font-editorial-mono text-[#9e9ba8]">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded border border-[#c89643]/40 bg-[#c89643]/10 text-[#e0b064] font-bold tracking-wider text-[11px] uppercase">
            Curator Dispatch
          </span>
          <span className="tracking-widest uppercase">
            {folioRef} // Fieldwork Dossier
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#9e9ba8]/80">
          <Feather className="w-3.5 h-3.5 text-[#c89643]" />
          <span>EDUC 218 Research Collective</span>
        </div>
      </div>

      {/* Main Narrative Area */}
      <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f5f2eb] tracking-tight mb-3">
            {dossierTitle}
          </h3>
          <p className="text-sm text-[#9e9ba8] leading-relaxed mb-5 font-light">
            {leadCuratorNote}
          </p>
          <div className="p-4 rounded-lg bg-black/40 border-l-2 border-[#c89643] text-xs font-editorial-mono text-[#e0b064]/90 leading-relaxed">
            <span className="font-bold text-white block mb-1">
              DISPATCH FROM THE TEAM:
            </span>
            {methodologyDispatch}
          </div>
        </div>

        {/* Archival Checkpoints / Forthcoming Ingest */}
        <div className="lg:col-span-5 bg-[#191922] p-5 rounded-lg border border-white/10">
          <div className="text-[11px] font-editorial-mono text-[#9e9ba8] uppercase tracking-wider mb-3 flex items-center justify-between">
            <span>Forthcoming Ingest Criteria</span>
            <span className="text-[#c89643] font-bold">Phase 1</span>
          </div>
          <ul className="space-y-2 text-xs font-editorial-mono text-[#f5f2eb]/90">
            {fieldworkSlots.map((slot, idx) => (
              <li key={idx} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c89643]/80" />
                <span className="line-clamp-1">{slot}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-editorial-mono text-[#9e9ba8]/70">
            Entries are added via <code className="text-[#e0b064]">src/data/</code> without altering design architecture.
          </div>
        </div>
      </div>
    </div>
  );
};
