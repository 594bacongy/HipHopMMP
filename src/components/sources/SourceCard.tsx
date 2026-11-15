'use client';

import React, { useState } from 'react';
import { ResearchSource } from '@/types';
import {
  BookOpen,
  ExternalLink,
  Copy,
  Check,
  Bookmark,
  Calendar,
  Layers,
} from 'lucide-react';

interface SourceCardProps {
  source: ResearchSource;
}

export const SourceCard: React.FC<SourceCardProps> = ({ source }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(source.citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-[#121316] border border-white/5 hover:border-amber-400/30 p-6 flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-3">
          <span className="px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-semibold">
            {source.sourceType}
          </span>
          <span className="flex items-center gap-1 text-gray-400">
            <Calendar className="w-3.5 h-3.5" />
            {source.year}
          </span>
        </div>

        {/* Title & Author */}
        <h3 className="text-lg font-bold text-white mb-1.5 leading-snug">
          {source.title}
        </h3>
        <div className="text-xs font-mono text-gray-400 mb-4">
          By <span className="text-gray-200 font-semibold">{source.author}</span>
        </div>

        {/* APA Citation Box with Copy Action */}
        <div className="mb-4 p-3.5 rounded-xl bg-black/50 border border-white/5 font-mono text-xs text-gray-300 leading-relaxed relative group">
          <div className="pr-8">{source.citation}</div>
          <button
            onClick={handleCopyCitation}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Copy citation"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Annotation */}
        <p className="text-xs text-gray-400 leading-relaxed font-light mb-4">
          <strong className="text-gray-300 font-semibold font-mono uppercase text-[11px] block mb-0.5">
            Scholarly Annotation:
          </strong>
          {source.annotation}
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
        <span className="text-amber-400/80 truncate max-w-[200px]">
          ↳ {source.relatedSection}
        </span>
        {source.url ? (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-400 hover:text-amber-400 transition-colors"
          >
            <span>View Source</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-gray-600">Archival / Print</span>
        )}
      </div>
    </div>
  );
};
