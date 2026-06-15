'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Award } from 'lucide-react';
import HeroGlasses from '@/components/sections/HeroGlasses';

const stats: [string, string][] = [
  ['~75g', 'Wearable Weight'],
  ['60°', 'Field of View'],
  ['~4 hrs', 'Active Battery'],
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* ===== Background visual — glasses render ===== */}
      <HeroGlasses large />

      {/* ===== Hero content ===== */}
      <div className="relative z-20 min-h-screen flex items-center pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div className="px-6 sm:px-10 lg:px-16 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="font-podium font-extrabold text-white uppercase tracking-tight"
              style={{ lineHeight: 0.95 }}
            >
              <span className="block" style={{ fontSize: 'clamp(2.6rem,7vw,6.2rem)' }}>Never.</span>
              <span className="block" style={{ fontSize: 'clamp(2.6rem,7vw,6.2rem)' }}>Forget.</span>
              <span className="block" style={{ fontSize: 'clamp(2.6rem,7vw,6.2rem)' }}>Again.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="text-white/70 text-sm sm:text-base font-sans leading-relaxed max-w-md mt-6 lg:mt-8"
            >
              The personal secretary that lives in your glasses.
              <br />
              Passive memory for busy minds —{' '}
              <span className="font-bold text-white">it remembers, so you don&apos;t have to.</span>
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="mt-8 lg:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <a
                href="/contact?type=waitlist"
                className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs font-medium tracking-widest uppercase transition-colors no-underline"
              >
                Join the Waitlist
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/contact?type=investor"
                className="group inline-flex items-center gap-2.5 border border-white/20 hover:border-white/50 hover:bg-white/[0.04] px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase text-white/80 hover:text-white transition-colors no-underline"
              >
                Investor Inquiries
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="hidden sm:flex items-center gap-3">
                <Award size={32} className="text-white/50" />
                <div className="leading-tight">
                  <div className="text-white/60 text-xs tracking-wider uppercase">Built With</div>
                  <div className="text-white/60 text-xs tracking-wider uppercase">DigiLens Optics</div>
                </div>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
              className="mt-7 sm:mt-9 lg:mt-12 flex flex-wrap gap-6 sm:gap-12 lg:gap-16"
            >
              {stats.map(([v, l]) => (
                <div key={l}>
                  <div className="font-sans text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{v}</div>
                  <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">{l}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
