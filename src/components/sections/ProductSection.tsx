'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import GradientText from '@/components/reactbits/GradientText';
import { Eye, Brain, CalendarCheck, Circle } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Memory assistance',
    description: 'Remember what matters, from where you placed objects to past visual context—accessible instantly when you need it.',
    color: 'rgba(82, 39, 255, 0.25)',
  },
  {
    icon: Eye,
    title: 'Contextual visual overlays',
    description: 'Information appears directly in your field of view only when it\'s relevant, reducing friction without overwhelming you.',
    color: 'rgba(124, 92, 255, 0.25)',
  },
  {
    icon: CalendarCheck,
    title: 'Task automation',
    description: 'Routine actions like scheduling, bookings, and planning can be handled seamlessly in the background.',
    color: 'rgba(177, 158, 239, 0.25)',
  },
  {
    icon: Circle,
    title: 'Hands-free interaction',
    description: 'Paired with a simple smart ring, Halion allows intentional input without screens, gestures, or distractions.',
    color: 'rgba(255, 159, 252, 0.25)',
  },
];

const notList = [
  'Not a headset',
  'Not an immersive gaming device',
  'Not a phone replacement',
  'Not a face-mounted computer',
];

export default function ProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="product" className="section-padding relative" ref={ref}>
      {/* Subtle background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#5227FF]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-5"
          >
            The Product
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6"
          >
            Glasses first. Technology second.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A lightweight augmented reality glasses system designed to be worn naturally throughout the day. 
            Every design decision starts with a simple question: would this still feel good if it were just a pair of glasses?
          </motion.p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <SpotlightCard
                className="h-full transition-transform duration-300 hover:scale-[1.02]"
                spotlightColor={feature.color as `rgba(${number}, ${number}, ${number}, ${number})`}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-[#7c5cff]" />
                  </div>
                  <h3 className="text-lg font-medium text-white mt-1">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Everyday Wear + What it's not */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Everyday wear */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-light text-white mb-3">Designed for Everyday Wear</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Built around long-term comfort and usability. This is a device you forget you&apos;re wearing—until it helps.
              </p>
            </div>
            <div className="space-y-5">
              {[
                'Lightweight, glasses-first form factor',
                'Minimal, unobtrusive visual elements',
                'No bulky hardware or headset-style design',
                'Designed to blend into daily routines'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-[#5227FF] group-hover:shadow-[0_0_12px_rgba(82,39,255,0.6)] transition-shadow flex-shrink-0" />
                  <span className="text-zinc-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What it's not */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xl font-light text-white mb-3">What Halion Is Not</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Halion is intentionally focused. By narrowing its scope, Halion delivers a better experience where it matters most.
              </p>
            </div>
            <div className="space-y-5">
              {notList.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-5 h-[1px] bg-zinc-600 group-hover:bg-[#5227FF] transition-colors flex-shrink-0" />
                  <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <GradientText
              colors={['#5227FF', '#B19EEF', '#FF9FFC', '#5227FF']}
              animationSpeed={6}
              className="text-lg md:text-xl font-light"
            >
              A wearable that feels natural—one that augments reality without competing with it.
            </GradientText>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
