'use client';

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import BlurText from '@/components/reactbits/BlurText';
import ShinyText from '@/components/reactbits/ShinyText';
import StarBorder from '@/components/reactbits/StarBorder';

const Particles = dynamic(() => import('@/components/reactbits/Particles'), { ssr: false });
const HudDisplay = dynamic(() => import('@/components/HudDisplay'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-24 lg:pb-0">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={150}
          particleSpread={12}
          speed={0.04}
          particleColors={['#5227FF', '#7c5cff', '#B19EEF', '#1a1a2e']}
          moveParticlesOnHover
          particleHoverFactor={0.3}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.5}
          cameraDistance={25}
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/30 to-black pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center min-h-[calc(100vh-10rem)] lg:min-h-[600px] xl:min-h-[700px]">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 lg:gap-7">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5227FF] animate-pulse-glow" />
              <ShinyText
                text="Rethinking wearable computing"
                className="text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase"
                color="#555"
                shineColor="#B19EEF"
                speed={4}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <BlurText
            text="Augmented reality glasses, designed for everyday life."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.1] text-white"
            delay={80}
            animateBy="words"
            direction="bottom"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed font-light"
          >
            Subtle, contextual information directly in your field of view—only
            when it&apos;s needed. The goal isn&apos;t more technology. It&apos;s
            better technology.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <StarBorder
              as="a"
              href="/product"
              color="#7c5cff"
              speed="5s"
              className="text-sm"
            >
              Explore the product
            </StarBorder>
            <a
              href="/philosophy"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-white/[0.08] text-zinc-400 text-sm font-medium hover:border-white/[0.15] hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            >
              Our approach
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-wrap gap-2.5 mt-2"
          >
            {['Glasses-first', 'Minimal overlays', 'Contextual', 'All-day wear'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center h-7 px-3 rounded-full border border-white/[0.06] bg-white/[0.02] text-zinc-500 text-[10px] sm:text-[11px] tracking-widest uppercase"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: AR HUD Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full min-h-[360px] sm:min-h-[400px] lg:min-h-0 lg:h-full order-first lg:order-last flex items-center justify-center"
        >
          <HudDisplay />
        </motion.div>
      </div>
    </section>
  );
}
