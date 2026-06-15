'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const principles = [
  {
    title: 'Glasses First',
    subtitle: 'If it doesn\'t work as a pair of glasses, it doesn\'t belong.',
    description: 'Wearability is not a constraint — it\'s the foundation. Comfort, balance, and familiarity come before performance metrics or feature count.',
  },
  {
    title: 'Less, but Better',
    subtitle: 'More technology does not automatically mean better experiences.',
    description: 'Rather than chasing maximum field-of-view or immersion, Halion focuses on delivering the right information at the right time.',
  },
  {
    title: 'Context Over Content',
    subtitle: 'Halion prioritizes relevance over volume.',
    description: 'Information should appear only when it\'s useful, aligned with your environment and intent. The goal is to reduce friction — not create another screen.',
  },
  {
    title: 'Intentional Interaction',
    subtitle: 'Interaction should be deliberate and distraction-free.',
    description: 'Halion avoids complex gestures, touch surfaces, and constant visual input. Instead, input is simple and purposeful — voice commands and a discreet ring.',
  },
  {
    title: 'Technology That Disappears',
    subtitle: 'The best wearable technology fades into the background.',
    description: 'Halion is designed to support daily life quietly and reliably, enhancing moments without interrupting them.',
  },
  {
    title: 'Built to Last',
    subtitle: 'Longevity is a design decision, not a marketing promise.',
    description: 'A modular, software-updatable platform — swappable components and a device that gets better through updates instead of being replaced. No planned obsolescence by design.',
  },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const ctaRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  return (
    <section id="philosophy" className="relative border-t border-white/[0.08]" ref={ref}>
      <div className="w-full max-w-7xl mx-auto relative z-10 px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-white/[0.08] bg-white/[0.08]">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="bg-black p-8 sm:p-9"
            >
              <span className="font-podium text-[11px] text-white/30 tracking-widest">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-lg font-medium text-white mt-4 mb-3">{principle.title}</h3>
              <p className="text-white/70 text-sm font-medium italic leading-relaxed mb-3">
                {principle.subtitle}
              </p>
              <p className="text-white/45 text-sm leading-[1.7]">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.08] pt-12"
        >
          <p className="text-xl sm:text-2xl font-light text-white max-w-lg leading-snug">
            See how the philosophy becomes a product.
          </p>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="/product"
              className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-7 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors"
            >
              Explore the Product
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/contact?type=waitlist"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-7 py-3.5 text-xs tracking-widest uppercase text-white/80 hover:text-white transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
