'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UseCasesSection from '@/components/sections/UseCasesSection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise
          patternSize={200}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={4}
          patternAlpha={8}
        />
      </div>

      <Navbar />
      <UseCasesSection />
      <Footer />
    </main>
  );
}
