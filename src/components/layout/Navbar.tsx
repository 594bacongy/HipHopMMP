'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Disc, ArrowRight, BookOpen } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music Analysis' },
  { href: '#interviews', label: 'Interviews' },
  { href: '#media', label: 'Visual Media' },
  { href: '#themes', label: 'Social Themes' },
  { href: '#sources', label: 'Sources' },
  { href: '#team', label: 'Team' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group transition-transform duration-200"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-black shadow-lg shadow-amber-500/20 group-hover:rotate-180 transition-transform duration-700">
              <Disc className="w-5 h-5 animate-spin-slow" />
              <div className="absolute w-2 h-2 rounded-full bg-[#0a0a0c]" />
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-base sm:text-lg text-white block leading-none font-mono">
                CULTURAL<span className="text-amber-400">.</span>HIPHOP
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase font-mono block mt-0.5">
                EDUC 218 • UMass Amherst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono font-medium tracking-wide text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider uppercase text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Research</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0e0f13]/98 border-b border-white/10 px-4 pt-4 pb-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-sm font-mono text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-amber-500/50 font-mono">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-mono font-bold tracking-wider uppercase text-black bg-amber-400 hover:bg-amber-300 rounded-lg"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
