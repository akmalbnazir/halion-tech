'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Brain, Smartphone, Glasses, Calendar } from 'lucide-react';

/* ════════════════════════════════════════════
   PROBLEM STATEMENT
   ════════════════════════════════════════════ */
function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const beats = [
    { icon: Brain, title: 'Mental overload', desc: 'High-output people carry more in their heads than any mind was built to hold — names, threads, commitments, the detail from a conversation three days ago.' },
    { icon: Smartphone, title: 'The phone made it worse', desc: 'The device meant to help became the interruption. Every glance pulls you out of the moment and into a feed designed to keep you there.' },
    { icon: Glasses, title: 'No AR device has solved it', desc: 'Headsets isolate. Camera-first wearables surveil. None of them give you back the one thing you actually lose: your own context.' },
  ];

  return (
    <section ref={ref} className="relative border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-36">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-5"
          >
            The Problem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] mb-6"
          >
            Knowledge workers switch tasks every{' '}
            <span className="font-podium font-bold text-white">47 seconds.</span>{' '}
            <span className="text-white/40">Halion gives that time back.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-white/60 text-base sm:text-lg leading-relaxed"
          >
            Busy people are drowning in context. Halion is the first AR device built to hold it for you —
            quietly, privately, and without another screen to check.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-16 sm:mt-20 border border-white/[0.06] bg-white/[0.06]">
          {beats.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="bg-black p-8 sm:p-10"
            >
              <b.icon className="w-6 h-6 text-white/70 mb-6" strokeWidth={1.5} />
              <h3 className="text-white text-lg font-medium mb-3">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CREDIBILITY / PARTNERS BAR
   ════════════════════════════════════════════ */
function CredibilityBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="relative border-t border-white/[0.06] bg-white/[0.015]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12"
        >
          <div className="flex items-center gap-3 shrink-0">
            <Calendar className="w-5 h-5 text-white" strokeWidth={1.5} />
            <div className="leading-tight">
              <div className="text-white text-sm font-semibold tracking-wide uppercase">Launching at AWE</div>
              <div className="text-white/50 text-xs tracking-wide uppercase">California · June 2026</div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-12 bg-white/10" />

          <div className="flex-1">
            <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-4">Built with industry partners</p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {['DigiLens', 'Avegant', 'Autodesk'].map((p) => (
                <span key={p} className="font-podium text-lg sm:text-xl font-bold text-white/70 tracking-tight">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PRESS — "As seen in"
   ════════════════════════════════════════════ */
function PressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const outlets = ['Forbes', 'Charlotte Business Journal', 'Spectrum News'];

  return (
    <section ref={ref} className="relative border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-white/40 text-[10px] tracking-[0.3em] uppercase mb-8"
        >
          As seen in
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {outlets.map((o) => (
            <span key={o} className="text-white/60 text-lg sm:text-2xl font-light tracking-tight">
              {o}
            </span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/35 text-xs mt-8"
        >
          Winner — Autodesk &ldquo;Make It Resilient&rdquo; competition ($10,000)
        </motion.p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   DUAL-CTA CONVERSION BLOCK
   ════════════════════════════════════════════ */
function ConversionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const cards = [
    {
      tag: 'For early adopters',
      title: 'Get on the waitlist.',
      desc: 'Be among the first to wear Halion. Early access opens after the AWE June 2026 showcase.',
      cta: 'Join the Waitlist',
      href: '/contact?type=waitlist',
      primary: true,
    },
    {
      tag: 'For investors',
      title: 'Talk to the team.',
      desc: 'Pre-seed hardware, sharp positioning, and a working prototype. Reach out for the deck and a conversation.',
      cta: 'Investor Inquiries',
      href: '/contact?type=investor',
      primary: false,
    },
  ];

  return (
    <section ref={ref} className="relative border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`flex flex-col justify-between gap-10 p-8 sm:p-12 border ${
                c.primary ? 'border-white/20 bg-white/[0.04]' : 'border-white/[0.08] bg-white/[0.015]'
              }`}
            >
              <div>
                <p className="font-podium text-xs text-white/40 tracking-[0.25em] uppercase mb-5">{c.tag}</p>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-4">{c.title}</h3>
                <p className="text-white/55 text-sm sm:text-base leading-relaxed max-w-md">{c.desc}</p>
              </div>
              <a
                href={c.href}
                className={`group inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] sm:text-xs font-medium tracking-widest uppercase transition-colors no-underline self-start ${
                  c.primary
                    ? 'bg-white text-black hover:bg-white/90'
                    : 'border border-white/20 text-white/80 hover:text-white hover:border-white/50'
                }`}
              >
                {c.cta}
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeSections() {
  return (
    <>
      <ProblemSection />
      <CredibilityBar />
      <PressSection />
      <ConversionSection />
    </>
  );
}
