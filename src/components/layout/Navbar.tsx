'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDown } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#music', label: 'Music', num: '02' },
  { href: '#interviews', label: 'Oral History', num: '03' },
  { href: '#media', label: 'Visuals', num: '04' },
  { href: '#themes', label: '5 Themes', num: '05' },
  { href: '#sources', label: 'Sources', num: '06' },
  { href: '#team', label: 'Authors', num: '07' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0d0d11]/95 backdrop-blur-sm border-b border-white/10 py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Academic Folio */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#1b1712] border border-[#c89643] text-[#e0b064] flex items-center justify-center font-editorial-mono text-xs font-bold">
              HH
            </div>
            <div>
              <span className="font-editorial-heading font-black tracking-wider text-base sm:text-lg text-[#f5f2eb] block leading-none">
                CULTURAL HIP HOP
              </span>
              <span className="text-[10px] font-editorial-mono tracking-widest text-[#9e9ba8] uppercase block mt-1">
                EDUC 218 • UMass Amherst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1 text-xs font-editorial-mono text-[#9e9ba8] hover:text-[#e0b064] hover:bg-white/5 transition-colors"
              >
                <span className="text-[#63616e] mr-1">[{link.num}]</span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center">
            <a
              href="#about"
              className="px-4 py-2 text-xs font-editorial-mono font-bold tracking-wider uppercase text-black bg-[#c89643] hover:bg-[#e0b064] transition-colors"
            >
              Enter Exhibition
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-[#9e9ba8] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#141419] border-b border-white/10 px-4 pt-4 pb-6">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-sm font-editorial-mono text-[#9e9ba8] hover:text-[#e0b064] hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>
                  <span className="text-[#63616e] mr-2">[{link.num}]</span>
                  {link.label}
                </span>
                <span className="text-xs text-[#c89643]">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center py-3 text-xs font-editorial-mono font-bold uppercase text-black bg-[#c89643]"
              >
                Enter Exhibition
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
