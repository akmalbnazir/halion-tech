'use client';

import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import BlurText from '@/components/reactbits/BlurText';
import GradientText from '@/components/reactbits/GradientText';
import ShinyText from '@/components/reactbits/ShinyText';

const Particles = dynamic(() => import('@/components/reactbits/Particles'), { ssr: false });
const GlassesScene = dynamic(() => import('@/components/GlassesScene'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={12}
          speed={0.06}
          particleColors={['#5227FF', '#7c5cff', '#B19EEF', '#1a1a2e']}
          moveParticlesOnHover
          particleHoverFactor={0.4}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.5}
          cameraDistance={25}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-32 pb-20 lg:pt-0 lg:pb-0">
        {/* Left: Text */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ShinyText
              text="Rethinking wearable computing"
              className="text-xs md:text-sm font-mono tracking-[0.25em] uppercase"
              color="#555"
              shineColor="#B19EEF"
              speed={3}
            />
          </motion.div>

          <BlurText
            text="Augmented reality glasses, designed for everyday life."
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-white"
            delay={80}
            animateBy="words"
            direction="bottom"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg font-light"
          >
            Subtle, contextual information directly in your field of view—only when it&apos;s needed.
            The goal isn&apos;t more technology. It&apos;s better technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
              href="#product"
              className="group relative inline-flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-[#5227FF] to-[#7c5cff] text-white text-sm font-medium overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(82,39,255,0.4)] hover:scale-[1.02]"
            >
              <span className="relative z-10">Explore the product</span>
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/[0.1] text-zinc-400 text-sm font-medium hover:border-white/[0.2] hover:text-white hover:bg-white/[0.04] transition-all"
            >
              Our approach
            </a>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-wrap gap-3 mt-4"
          >
            {['Glasses-first', 'Minimal overlays', 'Contextual', 'All-day wear'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center h-8 px-4 rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-500 text-[11px] tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Glasses */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="h-[400px] md:h-[500px] lg:h-[600px] relative order-first lg:order-last"
        >
          <GlassesScene />
          {/* Glow behind glasses */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-[#5227FF]/8 blur-[100px] pointer-events-none" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-600 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-zinc-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
