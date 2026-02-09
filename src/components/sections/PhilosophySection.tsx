'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import DecryptedText from '@/components/reactbits/DecryptedText';

const principles = [
  {
    title: 'Glasses First',
    subtitle: 'If it doesn\'t work as a pair of glasses, it doesn\'t belong.',
    description: 'Wearability is not a constraint—it\'s the foundation. Comfort, balance, and familiarity come before performance metrics or feature count.',
  },
  {
    title: 'Less, but Better',
    subtitle: 'More technology does not automatically mean better experiences.',
    description: 'Rather than chasing maximum field-of-view or immersion, Halion focuses on delivering the right information at the right time.',
  },
  {
    title: 'Context Over Content',
    subtitle: 'Halion prioritizes relevance over volume.',
    description: 'Information should appear only when it\'s useful, aligned with the user\'s environment and intent. The goal is to reduce friction—not create another screen.',
  },
  {
    title: 'Intentional Interaction',
    subtitle: 'Interaction should be deliberate and distraction-free.',
    description: 'Halion avoids complex gestures, touch surfaces, or constant visual input. Instead, input is simple and purposeful.',
  },
  {
    title: 'Technology That Disappears',
    subtitle: 'The best wearable technology fades into the background.',
    description: 'Halion is designed to support daily life quietly and reliably, enhancing moments without interrupting them.',
  },
  {
    title: 'Designed for the Long Term',
    subtitle: 'Halion is built with longevity in mind.',
    description: 'Design decisions prioritize consistency, clarity, and trust—ensuring the platform can evolve without losing its core identity.',
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="philosophy" className="relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#5227FF]/[0.03] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#B19EEF]/[0.03] blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
          >
            Design Philosophy
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-5 leading-tight"
          >
            Built around the human,{' '}
            <span className="text-zinc-500">not the hardware.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Our philosophy is grounded in a simple belief: the best technology
            is the kind you barely notice.
          </motion.p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
            >
              <SpotlightCard
                className="h-full hover:border-white/10 transition-all duration-500"
                spotlightColor="rgba(82, 39, 255, 0.15)"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#5227FF]/10 border border-[#5227FF]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#7c5cff] text-[10px] font-mono leading-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-medium text-white truncate">
                      <DecryptedText
                        text={principle.title}
                        animateOn="view"
                        speed={40}
                        maxIterations={8}
                        className="text-white"
                        encryptedClassName="text-[#5227FF]"
                      />
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-xs sm:text-[13px] font-medium italic leading-relaxed">
                    {principle.subtitle}
                  </p>
                  <p className="text-zinc-500 text-xs sm:text-[13px] leading-[1.7]">
                    {principle.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
