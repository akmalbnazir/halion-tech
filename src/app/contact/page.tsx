'use client';

import dynamic from 'next/dynamic';
import { Mail } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/sections/PageHero';
import ContactSection from '@/components/sections/ContactSection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />
      <PageHero
        badge={{ icon: Mail, text: 'Contact' }}
        title={<>Let&apos;s<br />talk.</>}
        subtitle="Whether you’re joining the waitlist, exploring investment, or reaching out about press and partnerships — we’d love to hear from you."
      />
      <ContactSection />
      <Footer />
    </main>
  );
}
