'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Calendar, Compass, Hand, Smartphone } from 'lucide-react';

const useCases = [
  {
    icon: MapPin,
    title: 'Remembering What Matters',
    description: 'Recalling where something was placed becomes effortless. A brief moment of visual context can be referenced later—without searching, retracing steps, or guessing.',
    detail: 'Halion supports memory the way humans naturally rely on it: visually, contextually, and on demand.',
  },
  {
    icon: Calendar,
    title: 'Everyday Planning, Without the Friction',
    description: 'Booking a restaurant, organizing plans, or handling routine scheduling usually requires pulling out a phone. Halion reduces that friction by handling tasks seamlessly in the background.',
    detail: 'The interaction is brief, intentional, and out of the way.',
  },
  {
    icon: Compass,
    title: 'Visual Context When You Need It',
    description: 'Subtle visual context directly in your field of view—whether that\'s relevant information while traveling, navigating a new environment, or understanding what you\'re looking at.',
    detail: 'No searching. No switching devices. Just clarity.',
  },
  {
    icon: Hand,
    title: 'Hands Busy, Mind Focused',
    description: 'Whether you\'re carrying groceries, working on something physical, or moving through your day, Halion allows you to interact without stopping what you\'re doing.',
    detail: 'Input remains simple and deliberate, keeping attention on the real world.',
  },
  {
    icon: Smartphone,
    title: 'Living Without Constant Screens',
    description: 'By delivering information only when it\'s relevant, Halion helps you stay present—checking fewer screens while staying informed and capable.',
    detail: 'Designed to reduce dependence on phones, not replace them.',
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="usecases" className="section-padding relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#5227FF]/3 blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-5"
          >
            Use Cases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6"
          >
            Designed to fit naturally into{' '}
            <span className="gradient-text-accent">everyday moments.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Halion is built to support daily life in small but meaningful ways. It quietly assists when it matters most.
          </motion.p>
        </div>

        {/* Use cases - alternating layout */}
        <div className="space-y-5">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="group"
            >
              <div className="relative p-6 sm:p-8 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5227FF]/0 to-[#B19EEF]/0 group-hover:from-[#5227FF]/5 group-hover:to-[#B19EEF]/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#5227FF]/20 group-hover:bg-[#5227FF]/5 transition-all duration-500">
                      <useCase.icon className="w-5 h-5 text-zinc-500 group-hover:text-[#7c5cff] transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 space-y-2">
                    <h3 className="text-base sm:text-lg font-medium text-white">
                      {useCase.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {useCase.description}
                    </p>
                    <p className="text-zinc-600 text-xs italic">
                      {useCase.detail}
                    </p>
                  </div>

                  {/* Number */}
                  <div className="hidden md:flex flex-shrink-0 items-center">
                    <span className="text-5xl font-extralight text-white/[0.04] group-hover:text-[#5227FF]/10 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <p className="text-white text-base font-light leading-relaxed">
              Halion isn&apos;t designed for constant use.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed">
              It&apos;s designed to be there when you need it—and invisible when you don&apos;t.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
