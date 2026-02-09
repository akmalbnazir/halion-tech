'use client';

import dynamic from 'next/dynamic';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import CountUp from '@/components/reactbits/CountUp';
import GradientText from '@/components/reactbits/GradientText';
import { Eye, Brain, CalendarCheck, Circle } from 'lucide-react';

const Aurora = dynamic(() => import('@/components/reactbits/Aurora'), { ssr: false });

const features = [
  {
    icon: Brain,
    title: 'Memory assistance',
    description: 'Remember what matters, from where you placed objects to past visual context—accessible instantly when you need it.',
    color: 'rgba(82, 39, 255, 0.25)' as const,
  },
  {
    icon: Eye,
    title: 'Contextual visual overlays',
    description: 'Information appears directly in your field of view only when it\'s relevant, reducing friction without overwhelming you.',
    color: 'rgba(124, 92, 255, 0.25)' as const,
  },
  {
    icon: CalendarCheck,
    title: 'Task automation',
    description: 'Routine actions like scheduling, bookings, and planning can be handled seamlessly in the background.',
    color: 'rgba(177, 158, 239, 0.25)' as const,
  },
  {
    icon: Circle,
    title: 'Hands-free interaction',
    description: 'Paired with a simple smart ring, Halion allows intentional input without screens, gestures, or distractions.',
    color: 'rgba(255, 159, 252, 0.25)' as const,
  },
];

const stats = [
  { value: 8, suffix: '+ hrs', label: 'All-day battery life' },
  { value: 38, suffix: 'g', label: 'Ultra-lightweight' },
  { value: 40, suffix: '°', label: 'Field of view' },
];

const notList = [
  'Not a headset',
  'Not an immersive gaming device',
  'Not a phone replacement',
  'Not a face-mounted computer',
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="product" className="relative overflow-hidden" ref={ref}>
      {/* Aurora background — subtle, behind everything */}
      <div className="absolute top-0 left-0 right-0 h-[500px] opacity-20 pointer-events-none">
        <Aurora
          colorStops={['#5227FF', '#1a1a2e', '#7c5cff']}
          amplitude={0.8}
          blend={0.6}
          speed={0.4}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 px-6 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
          >
            The Product
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-5 leading-tight"
          >
            Glasses first. Technology second.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A lightweight augmented reality glasses system designed to be worn
            naturally throughout the day. Every design decision starts with a
            simple question: would this still feel good if it were just a pair
            of glasses?
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xl mx-auto mb-16 sm:mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-1">
                <CountUp to={stat.value} duration={2} />
                <span className="text-[#7c5cff]">{stat.suffix}</span>
              </div>
              <p className="text-zinc-500 text-[10px] sm:text-xs tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-16 sm:mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <SpotlightCard
                className="h-full transition-all duration-300 hover:scale-[1.01]"
                spotlightColor={feature.color}
              >
                <div className="flex flex-col gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c5cff]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-white">{feature.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Everyday Wear + What it's not */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Everyday wear */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-light text-white mb-2.5">Designed for Everyday Wear</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Built around long-term comfort and usability. This is a device
                you forget you&apos;re wearing—until it helps.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Lightweight, glasses-first form factor',
                'Minimal, unobtrusive visual elements',
                'No bulky hardware or headset-style design',
                'Designed to blend into daily routines',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5227FF] group-hover:shadow-[0_0_12px_rgba(82,39,255,0.6)] transition-shadow flex-shrink-0" />
                  <span className="text-zinc-300 text-xs sm:text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What it's not */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-light text-white mb-2.5">What Halion Is Not</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Halion is intentionally focused. By narrowing its scope, Halion
                delivers a better experience where it matters most.
              </p>
            </div>
            <div className="space-y-4">
              {notList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-4 h-[1px] bg-zinc-600 group-hover:bg-[#5227FF] transition-colors flex-shrink-0" />
                  <span className="text-zinc-500 text-xs sm:text-sm group-hover:text-zinc-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-block">
            <GradientText
              colors={['#5227FF', '#B19EEF', '#FF9FFC', '#5227FF']}
              animationSpeed={6}
              className="text-base sm:text-lg md:text-xl font-light"
            >
              A wearable that feels natural—one that augments reality without competing with it.
            </GradientText>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
