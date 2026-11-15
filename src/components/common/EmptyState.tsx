'use client';

import React from 'react';
import { Sparkles, FileText, PlusCircle, ArrowUpRight } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  actionNote?: string;
  expectedFields?: string[];
  statusLabel?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionNote = 'Research team is currently conducting fieldwork and qualitative analysis.',
  expectedFields = [],
  statusLabel = 'Fieldwork In Progress',
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121316]/80 p-8 md:p-12 text-center backdrop-blur-sm">
      {/* Subtle background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          {statusLabel}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-3">
          {title}
        </h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
          {description}
        </p>

        {expectedFields.length > 0 && (
          <div className="w-full text-left bg-[#0c0d10] border border-white/5 rounded-xl p-4 mb-6">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              Incoming Data Schema & Components
            </div>
            <div className="flex flex-wrap gap-2">
              {expectedFields.map((field, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-white/5 text-gray-300 px-2.5 py-1 rounded-md border border-white/5 font-mono"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{actionNote}</span>
        </div>
      </div>
    </div>
  );
};
