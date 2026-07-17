'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import HomeSections from '@/components/sections/HomeSections';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function Home() {
  // NOTE: no overflow-x-hidden on <main> — it breaks position:sticky in the hero.
  // Horizontal clipping is handled by body { overflow-x: hidden } in globals.css.
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Global noise overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise
          patternSize={200}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={4}
          patternAlpha={8}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero — pinned scroll reveal */}
      <HeroSection />

      {/* One-pager sections: about, team, contact */}
      <HomeSections />

      <Footer />
    </main>
  );
}
