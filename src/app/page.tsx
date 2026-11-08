'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';
import HeroSection from '@/components/sections/HeroSection';
import HomeSections from '@/components/sections/HomeSections';

export default function Home() {
  // NOTE: no overflow-x-hidden on <main> — it breaks position:sticky in the hero.
  // Horizontal clipping is handled by body { overflow-x: hidden } in globals.css.
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Global noise overlay */}
      <GrainOverlay />

      {/* Navigation */}
      <Navbar />

      {/* Hero — pinned scroll reveal */}
      <HeroSection />

      {/* One-pager sections: about, team, press, contact */}
      <HomeSections />

      <Footer />
    </main>
  );
}
