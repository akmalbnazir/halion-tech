'use client';

import dynamic from 'next/dynamic';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import CountUp from '@/components/reactbits/CountUp';
import BlurText from '@/components/reactbits/BlurText';
import ShinyText from '@/components/reactbits/ShinyText';
import DecryptedText from '@/components/reactbits/DecryptedText';
import GradientText from '@/components/reactbits/GradientText';
import StarBorder from '@/components/reactbits/StarBorder';
import {
  Eye, Brain, CalendarCheck, Circle,
  Zap, Shield, Cpu, Layers, ArrowDown, Check,
} from 'lucide-react';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });
const Particles = dynamic(() => import('@/components/reactbits/Particles'), { ssr: false });
const Aurora = dynamic(() => import('@/components/reactbits/Aurora'), { ssr: false });
const HudDisplay = dynamic(() => import('@/components/HudDisplay'), { ssr: false });

/* ── Data ── */

const features = [
  {
    icon: Brain,
    title: 'Memory assistance',
    desc: 'Remember what matters — from where you placed your keys to past visual context — accessible instantly when you need it.',
    color: 'rgba(82, 39, 255, 0.25)' as const,
  },
  {
    icon: Eye,
    title: 'Contextual overlays',
    desc: "Information appears in your field of view only when it's relevant. No feeds, no noise — just what matters right now.",
    color: 'rgba(124, 92, 255, 0.25)' as const,
  },
  {
    icon: CalendarCheck,
    title: 'Task automation',
    desc: 'Scheduling, bookings, and planning are handled seamlessly in the background while you focus on what matters.',
    color: 'rgba(177, 158, 239, 0.25)' as const,
  },
  {
    icon: Circle,
    title: 'Hands-free interaction',
    desc: 'Paired with a smart ring for intentional input without pulling out your phone, tapping screens, or waving your hands.',
    color: 'rgba(255, 159, 252, 0.15)' as const,
  },
];

const specs = [
  { icon: Cpu, label: 'Custom silicon', detail: 'Purpose-built low-power processor optimized for contextual AR workloads.' },
  { icon: Zap, label: 'Waveguide display', detail: 'Transparent waveguide that overlays information without blocking your view.' },
  { icon: Shield, label: 'Privacy-first', detail: 'No always-on camera. Visual capture is user-triggered and fully intentional.' },
  { icon: Layers, label: 'Modular design', detail: 'Swappable prescription lenses and temple tips for a personalized fit.' },
];

const notList = [
  { item: 'Not a headset', why: 'No bulky head-mounted display.' },
  { item: 'Not a gaming device', why: 'Built for real life, not immersion.' },
  { item: 'Not a phone replacement', why: "Complements your phone — doesn't compete." },
  { item: 'Not a face computer', why: 'Looks and feels like normal glasses.' },
];

const comfort = [
  'Lightweight, glasses-first form factor',
  'Minimal, unobtrusive visual elements',
  'No bulky hardware or headset-style design',
  'Designed to blend into daily routines',
  'Balanced weight distribution for all-day comfort',
];

/* ── Page ── */

export default function ProductPage() {
  const featRef = useRef(null);
  const specRef = useRef(null);
  const wearRef = useRef(null);

  const featInView = useInView(featRef, { once: true, margin: '-80px' });
  const specInView = useInView(specRef, { once: true, margin: '-80px' });
  const wearInView = useInView(wearRef, { once: true, margin: '-80px' });

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Noise */}
      <div className="fixed inset-0 z-[100] pointer-events-none">
        <Noise patternSize={200} patternScaleX={1} patternScaleY={1} patternRefreshInterval={4} patternAlpha={8} />
      </div>

      <Navbar />

      {/* ════════════════════════════════════════════
          HERO — centered, 3D model dominant
         ════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex flex-col">
        {/* Particles bg */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleCount={100}
            particleSpread={14}
            speed={0.025}
            particleColors={['#5227FF', '#7c5cff', '#B19EEF', '#1a1a2e']}
            moveParticlesOnHover
            particleHoverFactor={0.2}
            alphaParticles
            particleBaseSize={80}
            sizeRandomness={1.5}
            cameraDistance={25}
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/10 to-black pointer-events-none" />

        {/* Content — stacked center layout */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5227FF] animate-pulse-glow" />
                <ShinyText text="The Product" className="text-xs font-mono tracking-[0.2em] uppercase" color="#555" shineColor="#B19EEF" speed={4} />
              </div>
            </motion.div>

            {/* Heading */}
            <div className="text-center mb-6">
              <BlurText
                text="Glasses first. Technology second."
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-white text-center"
                delay={60}
                animateBy="words"
                direction="bottom"
              />
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light max-w-xl mx-auto text-center mb-8"
            >
              A lightweight AR glasses system designed to be worn naturally —
              inspired by the form factor you already trust.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-wrap items-center justify-center gap-5 mb-10 lg:mb-4"
            >
              <StarBorder
                as="a"
                href="/contact"
                color="#7c5cff"
                speed="5s"
                className="text-sm"
              >
                Get in touch
              </StarBorder>
              <a href="#features" className="inline-flex items-center gap-2 text-zinc-500 text-sm hover:text-white transition-colors">
                See features <ArrowDown className="w-4 h-4" />
              </a>
            </motion.div>

            {/* AR HUD Display — large, centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px] w-full max-w-3xl mx-auto"
            >
              <HudDisplay />
            </motion.div>
          </div>
        </div>

        {/* Stats ribbon at bottom */}
        <div className="relative z-10 border-t border-white/[0.04] bg-white/[0.01] backdrop-blur-sm">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-7 sm:py-9">
            <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-24">
              {[
                { val: 38, unit: 'g', label: 'Weight' },
                { val: 8, suf: '+', unit: 'hr', label: 'Battery' },
                { val: 40, unit: '°', label: 'Field of View' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-light text-white tabular-nums">
                    <CountUp to={s.val} duration={2.2} delay={1.5} />
                    <span className="text-[#7c5cff]">{s.suf || ''}{s.unit}</span>
                  </div>
                  <p className="text-zinc-600 text-[10px] sm:text-xs tracking-widest uppercase mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════════
          FEATURES
         ════════════════════════════════════════════ */}
      <section id="features" ref={featRef} className="relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[500px] opacity-[0.12] pointer-events-none">
          <Aurora colorStops={['#5227FF', '#0a0a0a', '#7c5cff']} amplitude={0.7} blend={0.6} speed={0.3} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent to-black pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
            >
              Core Capabilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1] mb-6"
            >
              Designed to help, <span className="text-zinc-500">not distract.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={featInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-zinc-400 text-base sm:text-lg leading-relaxed"
            >
              Every capability exists because it solves a genuine, everyday friction — not because the technology made it possible.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                animate={featInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              >
                <SpotlightCard className="h-full hover:scale-[1.01] transition-transform duration-300" spotlightColor={f.color}>
                  <div className="flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <f.icon className="w-5 h-5 text-[#7c5cff]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-white">
                      <DecryptedText text={f.title} animateOn="view" speed={35} maxIterations={6} className="text-white" encryptedClassName="text-[#5227FF]" />
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed">{f.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          SPECS + WHAT HALION IS NOT
         ════════════════════════════════════════════ */}
      <section ref={specRef} className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5227FF]/[0.03] blur-[200px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={specInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
              >
                Under the Surface
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={specInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1] mb-5"
              >
                Thoughtful engineering, <span className="text-zinc-500">invisible complexity.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={specInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10"
              >
                Every technical decision serves one goal — delivering a wearable that works so well you stop thinking about the technology.
              </motion.p>

              <div className="flex flex-col gap-4">
                {specs.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={specInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 group-hover:border-[#5227FF]/20 group-hover:bg-[#5227FF]/[0.06] transition-all">
                      <s.icon className="w-[18px] h-[18px] text-zinc-500 group-hover:text-[#7c5cff] transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-[15px] font-medium mb-0.5">{s.label}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed">{s.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — "What Halion Is Not" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={specInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:sticky lg:top-28"
            >
              <SpotlightCard className="h-auto" spotlightColor="rgba(82, 39, 255, 0.12)">
                <div className="flex flex-col gap-7">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-light text-white mb-2">What Halion Is Not</h3>
                    <p className="text-zinc-500 text-sm sm:text-[15px] leading-relaxed">
                      Halion is intentionally focused. By narrowing scope, it delivers a better experience where it matters most.
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    {notList.map((e, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 14 }}
                        animate={specInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-5 h-[1px] bg-zinc-700 group-hover:bg-[#5227FF] transition-colors shrink-0" />
                          <span className="text-zinc-200 text-[15px] font-medium group-hover:text-white transition-colors">{e.item}</span>
                        </div>
                        <p className="text-zinc-600 text-sm pl-8 leading-relaxed">{e.why}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ════════════════════════════════════════════
          EVERYDAY WEAR
         ════════════════════════════════════════════ */}
      <section ref={wearRef} className="relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[350px] h-[350px] rounded-full bg-[#5227FF]/[0.03] blur-[180px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={wearInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
              >
                Wearability
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={wearInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.1] mb-5"
              >
                Designed for <span className="text-zinc-500">everyday</span> wear.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={wearInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-9"
              >
                Built around long-term comfort and usability. A device you forget you&apos;re wearing — until it helps.
              </motion.p>

              <div className="flex flex-col gap-4">
                {comfort.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -14 }}
                    animate={wearInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-6 h-6 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-[#5227FF]/40 group-hover:bg-[#5227FF]/[0.08] transition-all">
                      <Check className="w-3 h-3 text-[#7c5cff]" />
                    </div>
                    <span className="text-zinc-300 text-sm sm:text-[15px]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — visual card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={wearInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-12 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[250px] h-[250px] rounded-full bg-[#5227FF]/[0.06] blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center gap-7">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5227FF] to-[#7c5cff] flex items-center justify-center shadow-lg shadow-[#5227FF]/20">
                    <span className="text-white text-2xl font-light">H</span>
                  </div>

                  <div>
                    <p className="text-white text-xl sm:text-2xl font-light mb-2">
                      Weighs only <span className="text-[#7c5cff] font-medium"><CountUp to={38} duration={2} />g</span>
                    </p>
                    <p className="text-zinc-500 text-sm sm:text-[15px] leading-relaxed max-w-xs mx-auto">
                      Lighter than most everyday sunglasses. Comfortable from morning to night.
                    </p>
                  </div>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                  <div className="grid grid-cols-2 gap-6 w-full">
                    <div>
                      <p className="text-white text-2xl sm:text-3xl font-light mb-0.5">
                        <CountUp to={8} duration={1.8} /><span className="text-[#7c5cff]">+ hrs</span>
                      </p>
                      <p className="text-zinc-600 text-[11px] uppercase tracking-wider">Battery</p>
                    </div>
                    <div>
                      <p className="text-white text-2xl sm:text-3xl font-light mb-0.5">
                        <CountUp to={40} duration={1.8} /><span className="text-[#7c5cff]">° FoV</span>
                      </p>
                      <p className="text-zinc-600 text-[11px] uppercase tracking-wider">Display</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CTA
         ════════════════════════════════════════════ */}
      <section className="relative">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center gap-7"
          >
            <GradientText
              colors={['#5227FF', '#B19EEF', '#FF9FFC', '#5227FF']}
              animationSpeed={6}
              className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed max-w-2xl"
            >
              A wearable that feels natural — one that augments reality without competing with it.
            </GradientText>

            <p className="text-zinc-500 text-base sm:text-lg max-w-lg leading-relaxed">
              Halion isn&apos;t designed for constant use. It&apos;s designed to be there when you need it — and invisible when you don&apos;t.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <StarBorder
                as="a"
                href="/contact"
                color="#7c5cff"
                speed="5s"
                className="text-sm"
              >
                Get in touch
              </StarBorder>
              <a
                href="/philosophy"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-white/[0.08] text-zinc-400 text-sm font-medium hover:border-white/[0.15] hover:text-white hover:bg-white/[0.04] transition-all"
              >
                Our philosophy
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
