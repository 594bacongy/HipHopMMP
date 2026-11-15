import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { AboutSection } from '@/components/home/AboutSection';
import { MusicSection } from '@/components/music/MusicSection';
import { InterviewsSection } from '@/components/interviews/InterviewsSection';
import { MediaSection } from '@/components/media/MediaSection';
import { ThemesSection } from '@/components/themes/ThemesSection';
import { SourcesSection } from '@/components/sources/SourcesSection';
import { TeamSection } from '@/components/team/TeamSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-amber-400 selection:text-black">
      {/* Sticky Responsive Header */}
      <Navbar />

      {/* Main Exhibition Sections */}
      <main id="main-content">
        {/* A. Hero / Landing Page */}
        <Hero />

        {/* B. About Our Research & 5 Pillars */}
        <AboutSection />

        {/* C. Music & Sonic Analysis Framework */}
        <MusicSection />

        {/* D. Interviews & Personal Perspectives */}
        <InterviewsSection />

        {/* E. Visual Culture & Media Archives */}
        <MediaSection />

        {/* F. Hip Hop, Education, and Society (5 Themes) */}
        <ThemesSection />

        {/* G. Academic Research Bibliography & Sources */}
        <SourcesSection />

        {/* H. Project Team & Accreditation */}
        <TeamSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
