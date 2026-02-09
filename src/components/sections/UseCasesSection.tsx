'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import { MapPin, Calendar, Compass, Hand, Smartphone } from 'lucide-react';

const useCases = [
  {
    icon: MapPin,
    title: 'Remembering What Matters',
    description: 'Recalling where something was placed becomes effortless. A brief moment of visual context can be referenced later—without searching or retracing steps.',
    detail: 'Halion supports memory the way humans naturally rely on it: visually, contextually, and on demand.',
    color: 'rgba(82, 39, 255, 0.2)' as const,
  },
  {
    icon: Calendar,
    title: 'Everyday Planning, Without the Friction',
    description: 'Booking a restaurant, organizing plans, or handling routine scheduling usually requires pulling out a phone. Halion reduces that friction.',
    detail: 'The interaction is brief, intentional, and out of the way.',
    color: 'rgba(124, 92, 255, 0.2)' as const,
  },
  {
    icon: Compass,
    title: 'Visual Context When You Need It',
    description: 'Subtle visual context directly in your field of view—whether that\'s relevant information while traveling or navigating a new environment.',
    detail: 'No searching. No switching devices. Just clarity.',
    color: 'rgba(177, 158, 239, 0.2)' as const,
  },
  {
    icon: Hand,
    title: 'Hands Busy, Mind Focused',
    description: 'Whether you\'re carrying groceries, working on something physical, or moving through your day, Halion lets you interact without stopping.',
    detail: 'Input remains simple and deliberate, keeping attention on the real world.',
    color: 'rgba(82, 39, 255, 0.15)' as const,
  },
  {
    icon: Smartphone,
    title: 'Living Without Constant Screens',
    description: 'By delivering information only when it\'s relevant, Halion helps you stay present—checking fewer screens while staying informed.',
    detail: 'Designed to reduce dependence on phones, not replace them.',
    color: 'rgba(255, 159, 252, 0.15)' as const,
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="usecases" className="relative" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#5227FF]/[0.03] blur-[180px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
          >
            Use Cases
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-5 leading-tight"
          >
            Designed to fit naturally into{' '}
            <span className="text-zinc-500">everyday moments.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Halion is built to support daily life in small but meaningful ways.
            It quietly assists when it matters most.
          </motion.p>
        </div>

        {/* Use cases — card grid on large, stacked on small */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className={i === 3 ? 'lg:col-span-1 md:col-span-1' : i === 4 ? 'lg:col-span-2 md:col-span-1' : ''}
            >
              <SpotlightCard
                className="h-full transition-all duration-300 hover:border-white/10"
                spotlightColor={useCase.color}
              >
                <div className="flex flex-col gap-3">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-4 h-4 text-[#7c5cff]" />
                    </div>
                    <span className="text-3xl font-extralight text-white/[0.05]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-base font-medium text-white mt-1">
                    {useCase.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                  <p className="text-zinc-600 text-[11px] sm:text-xs italic leading-relaxed">
                    {useCase.detail}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-2.5 px-6 sm:px-8 py-5 sm:py-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
            <p className="text-white text-sm sm:text-base font-light leading-relaxed">
              Halion isn&apos;t designed for constant use.
            </p>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
              It&apos;s designed to be there when you need it—and invisible
              when you don&apos;t.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
