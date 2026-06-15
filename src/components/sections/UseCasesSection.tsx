'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Users, ClipboardCheck, Focus, Plane, ArrowUpRight } from 'lucide-react';

const useCases = [
  {
    icon: Brain,
    flagship: true,
    title: 'The detail you forgot you needed',
    scenario: 'You had a conversation three days ago. You need one detail from it.',
    description:
      'Halion surfaces it before you finish the thought. It passively builds context as you go, so the number, the name, the promise — whatever you half-remember — is there the moment you reach for it. This is the flagship: a memory you can actually trust.',
  },
  {
    icon: Users,
    title: 'Every name, every face',
    scenario: 'You walk into a room of people you\'ve met once.',
    description:
      'Halion quietly reminds you who they are and where you left off — the project they mentioned, the thing they cared about. You stop bluffing through introductions and start every conversation already ahead.',
  },
  {
    icon: ClipboardCheck,
    title: 'Commitments that don\'t slip',
    scenario: 'The meeting ends and you\'ve made three promises.',
    description:
      'None of them make it to a notes app, because you\'re already onto the next thing. Halion captures what you committed to in the moment, so follow-through stops depending on your memory holding out until you sit down.',
  },
  {
    icon: Focus,
    title: 'Protected attention',
    scenario: 'You\'re heads-down and the work is finally flowing.',
    description:
      'Instead of a buzzing phone pulling you out, Halion holds the noise and surfaces only the one thing that genuinely can\'t wait — at the edge of your vision, on your terms. Fewer interruptions, more of the 47 seconds between task-switches back in your control.',
  },
  {
    icon: Plane,
    title: 'Context on the move',
    scenario: 'You\'re between two meetings in a city you don\'t know.',
    description:
      'The address, the confirmation number, the name of the person you\'re about to meet — all of it appears hands-free, exactly when you need it. No stopping, no digging through a phone, no breaking stride.',
  },
];

export default function UseCasesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="usecases" className="relative border-t border-white/[0.08]" ref={ref}>
      <div className="w-full max-w-7xl mx-auto relative z-10 px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        {/* Flagship use case — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="border border-white/20 bg-white/[0.04] p-8 sm:p-12 lg:p-14 mb-5"
        >
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />
            <span className="font-podium text-[10px] tracking-[0.2em] uppercase text-black bg-white px-2 py-0.5">Flagship</span>
          </div>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-snug max-w-3xl mb-5">
            {useCases[0].scenario}{' '}
            <span className="text-white/40">{useCases[0].title}.</span>
          </p>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            {useCases[0].description}
          </p>
        </motion.div>

        {/* Remaining use cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.08]">
          {useCases.slice(1).map((u, i) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="bg-black p-8 sm:p-10"
            >
              <div className="flex items-center justify-between mb-6">
                <u.icon className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                <span className="font-podium text-3xl font-extralight text-white/[0.08]">
                  {String(i + 2).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{u.title}</h3>
              <p className="text-white/70 text-sm italic leading-relaxed mb-3">{u.scenario}</p>
              <p className="text-white/50 text-sm leading-relaxed">{u.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/[0.08] pt-12"
        >
          <p className="text-xl sm:text-2xl font-light text-white max-w-lg leading-snug">
            If your day moves faster than your memory, Halion was built for you.
          </p>
          <a
            href="/contact?type=waitlist"
            className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-7 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors shrink-0"
          >
            Join the Waitlist
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
