'use client';

import React from 'react';
import { VisualMediaItem } from '@/types';
import { Disc, Film, Camera, MapPin, Image as ImageIcon } from 'lucide-react';

interface MediaCardProps {
  item: VisualMediaItem;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item }) => {
  const getIcon = () => {
    switch (item.category) {
      case 'Album Art':
        return <Disc className="w-6 h-6 text-[#c89643]" />;
      case 'Video Archives':
        return <Film className="w-6 h-6 text-[#c89643]" />;
      case 'Regional Expression':
        return <MapPin className="w-6 h-6 text-[#c89643]" />;
      case 'Historical Imagery':
        return <Camera className="w-6 h-6 text-[#c89643]" />;
      default:
        return <ImageIcon className="w-6 h-6 text-[#c89643]" />;
    }
  };

  return (
    <div className="bg-[#141419] border border-white/10 hover:border-[#c89643]/50 p-5 flex flex-col justify-between transition-colors duration-200">
      <div>
        {/* Archival Plate Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 font-editorial-mono text-[11px] text-[#9e9ba8]">
          <span className="text-[#c89643] font-bold uppercase">
            ARCHIVAL SPECIMEN // {item.id.toUpperCase()}
          </span>
          <span className="uppercase text-[#63616e]">{item.timePeriod}</span>
        </div>

        {/* Archival Matte Specimen Placeholder */}
        <div className="relative aspect-[4/3] w-full bg-[#0d0d11] border border-white/10 p-6 flex flex-col items-center justify-center text-center mb-5 overflow-hidden">
          {/* Subtle archival framing grid */}
          <div className="absolute inset-3 border border-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1b1712] border border-[#c89643]/40 flex items-center justify-center mb-2">
              {getIcon()}
            </div>
            <span className="text-xs font-editorial-mono uppercase tracking-widest text-[#e0b064] font-bold">
              {item.category}
            </span>
            <span className="text-[11px] font-editorial-mono text-[#63616e] mt-1 max-w-[220px]">
              {item.placeholderDescription}
            </span>
          </div>
        </div>

        {/* Title & Curatorial Caption */}
        <h3 className="text-base font-bold text-white mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-xs text-[#9e9ba8] leading-relaxed mb-4 font-light">
          {item.caption}
        </p>
      </div>

      <div>
        {/* Curatorial Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-editorial-mono px-2 py-0.5 bg-white/5 text-[#f5f2eb]/80 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Source Citation */}
        <div className="pt-3 border-t border-white/5 font-editorial-mono text-[10px] text-[#63616e] flex items-center justify-between">
          <span className="truncate pr-2">PROVENANCE: {item.sourceCredit}</span>
          <span className="text-[#c89643]">EDUC 218</span>
        </div>
      </div>
    </div>
  );
};
