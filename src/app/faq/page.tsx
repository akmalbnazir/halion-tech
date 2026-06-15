'use client';

import dynamic from 'next/dynamic';
import { HelpCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/sections/PageHero';
import FAQSection from '@/components/sections/FAQSection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />
      <PageHero
        badge={{ icon: HelpCircle, text: 'FAQ' }}
        title={<>Questions,<br />answered.</>}
        subtitle="Everything you need to know about Halion — the device, privacy, availability, and how to get early access."
        ctas={[{ label: 'Join the Waitlist', href: '/contact?type=waitlist', primary: true }]}
      />
      <FAQSection />
      <Footer />
    </main>
  );
}
