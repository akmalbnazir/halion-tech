'use client';

import dynamic from 'next/dynamic';
import { Brain } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/sections/PageHero';
import UseCasesSection from '@/components/sections/UseCasesSection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />
      <PageHero
        badge={{ icon: Brain, text: 'Use Cases' }}
        title={<>Too much to<br />hold in your head.</>}
        subtitle="Halion is built for entrepreneurs, creatives, and executives — high-output people who move fast and can’t afford to drop a detail. It remembers, so you don’t have to."
        ctas={[{ label: 'Join the Waitlist', href: '/contact?type=waitlist', primary: true }]}
      />
      <UseCasesSection />
      <Footer />
    </main>
  );
}
