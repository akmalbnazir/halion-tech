'use client';

import dynamic from 'next/dynamic';
import { Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/sections/PageHero';
import PhilosophySection from '@/components/sections/PhilosophySection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />
      <PageHero
        badge={{ icon: Compass, text: 'Design Philosophy' }}
        title={<>Built around<br />the human.</>}
        subtitle="Our philosophy is grounded in a simple belief: the best technology is the kind you barely notice — and the decisions that make Halion last are made on purpose."
      />
      <PhilosophySection />
      <Footer />
    </main>
  );
}
