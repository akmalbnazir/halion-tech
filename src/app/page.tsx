'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductSection from '@/components/sections/ProductSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import TeamSection from '@/components/sections/TeamSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
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

      {/* Sections */}
      <HeroSection />
      <div className="section-divider" />
      <ProductSection />
      <div className="section-divider" />
      <PhilosophySection />
      <div className="section-divider" />
      <UseCasesSection />
      <div className="section-divider" />
      <TeamSection />
      <div className="section-divider" />
      <FAQSection />
      <div className="section-divider" />
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
