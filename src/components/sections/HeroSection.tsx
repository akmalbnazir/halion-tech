'use client';

import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const LETTERS = ['I', 'R', 'I', 'S'];

/**
 * Scroll-linked motion values are only attached after mount: motion
 * serialises them into the SSR markup but computes a different initial
 * value on the client, which trips React's hydration check. Pre-mount we
 * render static styles equal to the scroll-position-zero state instead.
 */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/**
 * One letter of the wordmark. Each letter rises out of an overflow-hidden
 * mask on its own scroll window, so the word builds left-to-right as the
 * user scrolls through the pinned hero.
 */
function HalionLetter({
  progress,
  index,
  mounted,
}: {
  progress: MotionValue<number>;
  index: number;
  mounted: boolean;
}) {
  const start = 0.18 + index * 0.05;
  const y = useTransform(progress, [start, start + 0.26], ['112%', '0%']);
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        style={mounted ? { y } : { transform: 'translateY(112%)' }}
        className="inline-block text-silver"
      >
        {LETTERS[index]}
      </motion.span>
    </span>
  );
}

/**
 * Pinned scroll hero: the glasses sit centre-stage under an overhead
 * spotlight. Scrolling raises the HALION wordmark up from behind the
 * product, then the section releases and normal scrolling resumes.
 */
export default function HeroSection() {
  const mounted = useMounted();
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  /* Glasses drift up + shrink slightly to make room for the wordmark */
  const glassesScale = useTransform(progress, [0, 0.6], [1, 0.72]);
  const glassesY = useTransform(progress, [0, 0.6], ['0vh', '-17vh']);

  /* Spotlight warms up as the reveal happens */
  const beamOpacity = useTransform(progress, [0, 0.5], [0.7, 1]);

  /* Opening copy fades out the moment scrolling starts */
  const introOpacity = useTransform(progress, [0, 0.12], [1, 0]);
  const introY = useTransform(progress, [0, 0.12], [0, 28]);

  /* Payoff line appears once the wordmark has landed */
  const taglineOpacity = useTransform(progress, [0.66, 0.82], [0, 1]);
  const taglineY = useTransform(progress, [0.66, 0.82], [18, 0]);

  return (
    <section ref={trackRef} className="relative h-[280vh] bg-black">
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* ── Stage lighting ── */}
        <motion.div
          style={mounted ? { opacity: beamOpacity } : { opacity: 0.7 }}
          className="spotlight-beam absolute inset-0 pointer-events-none"
        />
        <div className="stage-floor absolute inset-x-0 bottom-0 h-[38vh] pointer-events-none" />

        {/* ── Wordmark (behind the glasses) ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            aria-label="IRIS"
            className="font-podium font-extrabold uppercase leading-none whitespace-nowrap text-[21vw] sm:text-[17vw] xl:text-[15rem] translate-y-[6vh]"
          >
            {LETTERS.map((_, i) => (
              <HalionLetter key={i} progress={progress} index={i} mounted={mounted} />
            ))}
          </h1>
        </div>

        {/* ── Glasses, centre stage under the spotlight ── */}
        <motion.div
          style={mounted ? { scale: glassesScale, y: glassesY } : undefined}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="spotlight absolute w-[150%] aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img
              src="/images/glasses.png"
              alt="Halion AR glasses"
              className="glasses-img relative w-[78vw] sm:w-[54vw] max-w-[720px] select-none"
            />
          </motion.div>
        </motion.div>

        {/* ── Launch badge (top) ── */}
        <motion.div
          style={mounted ? { opacity: introOpacity } : undefined}
          className="absolute top-20 lg:top-24 inset-x-0 flex justify-center z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-white/[0.1] bg-white/[0.02] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse-glow" />
            <span className="font-podium text-[10px] sm:text-[11px] text-white/60 tracking-[0.25em] uppercase">
              Launching at AWE California · June 2026
            </span>
          </motion.div>
        </motion.div>

        {/* ── Opening copy + CTAs (bottom) ── */}
        <motion.div
          style={mounted ? { opacity: introOpacity, y: introY } : undefined}
          className="absolute bottom-0 inset-x-0 z-20 pb-8 sm:pb-12"
        >
          <div className="flex flex-col items-center text-center px-6 gap-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-md"
            >
              The personal secretary that lives in your glasses.{' '}
              <span className="text-white font-medium">
                It remembers, so you don&apos;t have to.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-xs font-medium tracking-widest uppercase transition-colors no-underline"
              >
                Join the Waitlist
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 border border-white/20 hover:border-white/50 hover:bg-white/[0.04] px-6 sm:px-7 py-3 sm:py-3.5 text-[11px] sm:text-xs tracking-widest uppercase text-white/80 hover:text-white transition-colors no-underline"
              >
                Investor Inquiries
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col items-center gap-2 mt-1"
            >
              <span className="font-podium text-[9px] text-white/35 tracking-[0.3em] uppercase">
                Scroll
              </span>
              <div className="relative w-px h-8 bg-white/[0.08] overflow-hidden">
                <motion.div
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent to-white/70"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Payoff line (after the wordmark lands) ── */}
        <motion.div
          style={mounted ? { opacity: taglineOpacity, y: taglineY } : { opacity: 0 }}
          className="absolute bottom-[9vh] inset-x-0 z-20 flex flex-col items-center gap-3 px-6 text-center"
        >
          <p className="font-podium text-xs sm:text-sm text-white/50 tracking-[0.35em] uppercase">
            Never forget again
          </p>
        </motion.div>
      </div>
    </section>
  );
}
