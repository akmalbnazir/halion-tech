'use client';

import dynamic from 'next/dynamic';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroGlasses from '@/components/sections/HeroGlasses';
import {
  Brain, Eye, CalendarCheck, Circle, ShieldCheck,
  ArrowDown, ArrowUpRight, Calendar, Check,
} from 'lucide-react';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

/* ── Data ── */

const features = [
  {
    icon: Brain,
    title: 'Memory assistance',
    desc: 'Halion passively builds context as you move through your day, then surfaces the one detail you need before you finish the thought. The flagship capability — a reliable fall-back memory for high-output minds.',
  },
  {
    icon: Eye,
    title: 'Contextual overlays',
    desc: "Information appears transparently in your field of view only when it's relevant. No feeds, no notifications competing for attention — just what matters right now.",
  },
  {
    icon: CalendarCheck,
    title: 'Task automation',
    desc: 'Scheduling, reminders, and routine planning are handled in the background, on-device, so you can stay in the moment instead of reaching for a phone.',
  },
  {
    icon: Circle,
    title: 'Smart ring + voice activation',
    desc: 'Navigate with voice commands and confirm intent with a discreet paired smart ring. Deliberate input without screens, touch surfaces, or mid-air gestures.',
  },
];

const specs: [string, string][] = [
  ['Wearable weight', '~75 g'],
  ['Active battery', '~4 hrs'],
  ['Field of view', '60°'],
  ['Resolution', '1080 × 720 (both eyes combined)'],
  ['Brightness', '~1,000 nits'],
  ['Onboard storage', '64 GB'],
  ['Display', 'Binocular waveguide (DigiLens)'],
  ['Compute', 'ARM-based compute platform — independent & onboard'],
  ['Connectivity', 'Wi-Fi + BLE'],
  ['Input', 'Smart ring + voice activation'],
];

const notList = [
  { item: 'Not a headset', why: 'No bulky head-mounted display. It looks and feels like a pair of glasses.' },
  { item: 'Not a gaming device', why: 'Built for real life and real work, not immersion.' },
  { item: 'Not a face computer', why: 'Ambient and transparent — it never blocks your view of the world.' },
  { item: 'Not an accessory', why: 'A primary device with its own compute. It does not depend on your phone.' },
];

/* ── Page ── */

export default function ProductPage() {
  const featRef = useRef(null);
  const specRef = useRef(null);
  const privRef = useRef(null);

  const featInView = useInView(featRef, { once: true, margin: '-80px' });
  const specInView = useInView(specRef, { once: true, margin: '-80px' });
  const privInView = useInView(privRef, { once: true, margin: '-80px' });

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Noise */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />

      {/* ════════════════════════════════════════════
          HERO
         ════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[680px] flex flex-col">
        {/* glasses visual */}
        <HeroGlasses />

        <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16 lg:pt-48 lg:pb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-white/[0.12] px-3 py-1.5 mb-7"
            >
              <Calendar className="w-3.5 h-3.5 text-white/60" />
              <span className="font-podium text-[10px] tracking-[0.25em] uppercase text-white/60">
                Debuting at AWE · June 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-podium font-extrabold uppercase text-white leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem,6vw,4.8rem)' }}
            >
              Not an accessory.<br />A primary device.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-white/65 text-base sm:text-lg leading-relaxed mt-7 max-w-xl"
            >
              Halion contains a fully independent onboard compute. It is the device: a personal secretary you wear, built to remember
              so you don&apos;t have to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 mt-9"
            >
              <a
                href="/contact?type=waitlist"
                className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-6 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors"
              >
                Join the Waitlist
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#specs" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors">
                See full specs <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className="relative z-10 border-t border-white/[0.08] bg-white/[0.015] backdrop-blur-sm">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-7 sm:py-9">
            <div className="flex items-center justify-center sm:justify-start gap-10 sm:gap-16 md:gap-24">
              {[
                ['~75g', 'Weight'],
                ['~4 hrs', 'Battery'],
                ['60°', 'Field of View'],
              ].map(([v, l]) => (
                <div key={l} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">{v}</div>
                  <p className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PRIVACY — elevated callout
         ════════════════════════════════════════════ */}
      <section ref={privRef} className="relative border-t border-white/[0.08]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={privInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border border-white/[0.12] bg-white/[0.02] p-8 sm:p-12 lg:p-16"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
              <div className="shrink-0">
                <div className="w-14 h-14 border border-white/15 flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1">
                <p className="font-podium text-xs text-white/40 tracking-[0.25em] uppercase mb-4">Privacy by architecture</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight mb-6">
                  All data stays local. <span className="text-white/40">Your control, always.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
                  {[
                    'Everything stays on-device — no data ever leaves your glasses.',
                    'Complete opt-in and opt-out control over what Halion captures and remembers.',
                    'No cloud processing, no external servers, no third-party data sharing.',
                    'You own your data. No exceptions.',
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-white mt-1 shrink-0" />
                      <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: t }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FEATURES
         ════════════════════════════════════════════ */}
      <section ref={featRef} className="relative border-t border-white/[0.08]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
          <div className="max-w-2xl mb-16">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-4"
            >
              Core Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1]"
            >
              Built to help, <span className="text-white/40">not distract.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.08]">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={featInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="bg-black p-8 sm:p-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <f.icon className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                  {i === 0 && (
                    <span className="font-podium text-[10px] tracking-[0.2em] uppercase text-black bg-white px-2 py-0.5">Flagship</span>
                  )}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SPECS TABLE + WHAT HALION IS NOT
         ════════════════════════════════════════════ */}
      <section id="specs" ref={specRef} className="relative border-t border-white/[0.08]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Specs table */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={specInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-4"
              >
                Technical Specifications
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={specInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-3xl sm:text-4xl font-light text-white leading-[1.1] mb-10"
              >
                The full picture.
              </motion.h2>

              <div className="border-t border-white/[0.08]">
                {specs.map(([label, value], i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={specInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.04 }}
                    className="flex items-baseline justify-between gap-6 py-4 border-b border-white/[0.08]"
                  >
                    <span className="font-podium text-xs sm:text-[13px] tracking-wide uppercase text-white/40 shrink-0">{label}</span>
                    <span className="text-white text-sm sm:text-[15px] text-right">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What Halion is not */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={specInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:sticky lg:top-28 border border-white/[0.12] bg-white/[0.02] p-8 sm:p-10"
            >
              <h3 className="text-xl sm:text-2xl font-light text-white mb-3">What Halion is not</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                Halion is intentionally focused. It is a standalone device — not a peripheral that orbits your phone.
              </p>
              <div className="flex flex-col gap-6">
                {notList.map((e) => (
                  <div key={e.item} className="group">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-5 h-px bg-white/30 shrink-0" />
                      <span className="text-white text-[15px] font-medium">{e.item}</span>
                    </div>
                    <p className="text-white/45 text-sm pl-8 leading-relaxed">{e.why}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA
         ════════════════════════════════════════════ */}
      <section className="relative border-t border-white/[0.08]">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-tight max-w-2xl mx-auto mb-8"
          >
            A device that remembers, so you can stay present.
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact?type=waitlist"
              className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-7 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors"
            >
              Join the Waitlist
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/contact?type=investor"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-7 py-3.5 text-xs tracking-widest uppercase text-white/80 hover:text-white transition-colors"
            >
              Investor Inquiries
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
