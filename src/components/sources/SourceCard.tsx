'use client';

import React, { useState } from 'react';
import { ResearchSource } from '@/types';
import { ExternalLink, Copy, Check, Bookmark, Calendar } from 'lucide-react';

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
    <div className="bg-[#141419] border border-white/10 hover:border-[#c89643]/50 p-6 flex flex-col justify-between transition-colors duration-200">
      <div>
        {/* Top Folio Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-editorial-mono text-xs text-[#9e9ba8]">
          <span className="px-2 py-0.5 border border-[#c89643]/40 bg-[#c89643]/10 text-[#e0b064] text-[10px] uppercase font-bold">
            {source.sourceType}
          </span>
          <span className="flex items-center gap-1 text-[#63616e]">
            <Calendar className="w-3.5 h-3.5" />
            {source.year}
          </span>
        </div>

        {/* Title & Author */}
        <h3 className="text-base font-bold text-white mb-1 leading-snug">
          {source.title}
        </h3>
        <div className="font-editorial-mono text-xs text-[#c89643] mb-4">
          By {source.author}
        </div>

        {/* APA Citation Monospace Block */}
        <div className="mb-4 p-3.5 bg-[#0d0d11] border border-white/10 font-editorial-mono text-xs text-[#f5f2eb] leading-relaxed relative group">
          <div className="pr-8">{source.citation}</div>
          <button
            onClick={handleCopyCitation}
            className="absolute top-3 right-3 p-1.5 bg-white/5 hover:bg-white/15 text-[#9e9ba8] hover:text-white transition-colors"
            title="Copy APA Citation"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Scholarly Annotation */}
        <p className="text-xs text-[#9e9ba8] leading-relaxed font-light mb-4">
          <strong className="text-[#f5f2eb] font-editorial-mono text-[11px] block mb-1">
            SCHOLARLY ANNOTATION:
          </strong>
          {source.annotation}
        </p>
      </div>

      {/* Footer Info */}
      <div className="pt-3 border-t border-white/10 font-editorial-mono text-[10px] flex items-center justify-between">
        <span className="text-[#c89643] truncate max-w-[200px]">
          ↳ {source.relatedSection}
        </span>
        {source.url ? (
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#9e9ba8] hover:text-white transition-colors"
          >
            <span>Publisher / DOI</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="text-[#63616e]">Archival Print</span>
        )}
      </div>
    </div>
  );
};
