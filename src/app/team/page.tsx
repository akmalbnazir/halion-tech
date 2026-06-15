'use client';

import dynamic from 'next/dynamic';
import { Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/sections/PageHero';
import TeamSection from '@/components/sections/TeamSection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />
      <PageHero
        badge={{ icon: Users, text: 'The Team' }}
        title={<>The people<br />behind Halion.</>}
        subtitle="A close-knit team with deep technical roots, recognized work, and a shared focus on shipping hardware that earns trust."
        ctas={[{ label: 'Investor Inquiries', href: '/contact?type=investor' }]}
        meta={[
          { value: '$10K', label: 'Autodesk “Make It Resilient” win' },
          { value: 'Forbes', label: '+ CBJ & Spectrum News' },
          { value: '15+ yrs', label: 'Combined experience' },
        ]}
      />
      <TeamSection />
      <Footer />
    </main>
  );
}
