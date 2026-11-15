'use client';

import React from 'react';
import { VisualMediaItem } from '@/types';
import { Camera, Disc, Film, Sparkles, Image as ImageIcon, MapPin, Tag } from 'lucide-react';

interface MediaCardProps {
  item: VisualMediaItem;
}

export const MediaCard: React.FC<MediaCardProps> = ({ item }) => {
  const getIcon = () => {
    switch (item.category) {
      case 'Album Art':
        return <Disc className="w-8 h-8 text-amber-400" />;
      case 'Video Archives':
        return <Film className="w-8 h-8 text-amber-400" />;
      case 'Regional Expression':
        return <MapPin className="w-8 h-8 text-amber-400" />;
      case 'Historical Imagery':
        return <Camera className="w-8 h-8 text-amber-400" />;
      default:
        return <ImageIcon className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <div className="group rounded-2xl bg-[#121316] border border-white/5 hover:border-amber-400/30 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black">
      {/* Tasteful Abstract Placeholder Illustration */}
      <div className="relative aspect-video w-full bg-gradient-to-br from-[#161820] to-[#0c0d10] border-b border-white/5 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

        {/* Ambient glow */}
        <div className="absolute w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
            {getIcon()}
          </div>
          <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
            {item.category} Slot
          </span>
          <span className="text-xs font-mono text-gray-500 mt-1 max-w-xs">
            {item.timePeriod}
          </span>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-gray-500 mb-2">
            <span className="text-amber-400/80 font-mono text-[11px]">
              ID: {item.id}
            </span>
            <span className="capitalize text-gray-400">{item.mediaType}</span>
          </div>

          <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
            {item.title}
          </h3>

          <p className="text-xs text-gray-400 leading-relaxed mb-4 font-light">
            {item.caption}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Source Credit */}
          <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-gray-500 flex items-center justify-between">
            <span className="truncate pr-2">Credit: {item.sourceCredit}</span>
            <span className="text-amber-400/60 font-mono">EDUC 218</span>
          </div>
        </div>
      </div>
    </div>
  );
};
