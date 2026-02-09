'use client';

import { motion } from 'motion/react';
import { MapPin, Clock, Brain, Navigation, Wifi, Battery } from 'lucide-react';

export default function HudDisplay() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#5227FF]/[0.08] blur-[120px] pointer-events-none" />

      {/* Perspective container */}
      <div className="relative w-full max-w-[480px] h-[360px] sm:h-[400px]" style={{ perspective: '800px' }}>

        {/* ── Orbital ring ── */}
        <motion.div
          animate={{ rotateZ: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/[0.04]"
        />
        <motion.div
          animate={{ rotateZ: [0, -360] }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full border border-dashed border-white/[0.03]"
        />

        {/* ── Center reticle ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#5227FF]/40 to-transparent" />
            <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#5227FF]/40 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-[#5227FF]/60 shadow-[0_0_12px_rgba(82,39,255,0.5)]" />
          </div>
        </motion.div>

        {/* ── Status bar (top) ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex items-center gap-4 sm:gap-6 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3 h-3 text-[#7c5cff]/70" />
              <span className="text-[10px] font-mono text-zinc-600">Connected</span>
            </div>
            <div className="w-[1px] h-3 bg-white/[0.06]" />
            <div className="flex items-center gap-1.5">
              <Battery className="w-3 h-3 text-green-500/60" />
              <span className="text-[10px] font-mono text-zinc-600">94%</span>
            </div>
          </div>
        </motion.div>

        {/* ── Card: Time + Context (top-left) ── */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 sm:top-14 left-0 sm:left-2 z-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md px-4 py-3 w-[160px] sm:w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-3.5 h-3.5 text-[#7c5cff]" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Now</span>
              </div>
              <p className="text-white text-lg sm:text-xl font-light tabular-nums leading-none mb-1">2:47 PM</p>
              <p className="text-zinc-600 text-[10px] font-mono">Next: Design review · 25m</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Card: Navigation (top-right) ── */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-16 sm:top-20 right-0 sm:right-2 z-20"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md px-4 py-3 w-[150px] sm:w-[165px]">
              <div className="flex items-center gap-2 mb-2">
                <Navigation className="w-3.5 h-3.5 text-[#7c5cff]" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Navigate</span>
              </div>
              <p className="text-white text-sm font-light leading-snug mb-1">Turn right ahead</p>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-[2px] bg-[#5227FF] rounded-full" />
                <span className="text-zinc-600 text-[10px] font-mono">120m</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Card: Memory recall (bottom-left) ── */}
        <motion.div
          animate={{ y: [-7, 7, -7] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-14 sm:bottom-16 left-2 sm:left-4 z-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.4 }}
          >
            <div className="rounded-2xl border border-[#5227FF]/20 bg-[#5227FF]/[0.04] backdrop-blur-md px-4 py-3 w-[170px] sm:w-[185px]">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-3.5 h-3.5 text-[#B19EEF]" />
                <span className="text-[10px] font-mono text-[#7c5cff]/80 uppercase tracking-wider">Memory</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">Keys left on kitchen counter, 8:12 AM</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Card: Location context (bottom-right) ── */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-8 sm:bottom-10 right-0 sm:right-2 z-20"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md px-4 py-3 w-[155px] sm:w-[170px]">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#7c5cff]" />
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Context</span>
              </div>
              <p className="text-zinc-300 text-xs leading-relaxed">Open until 9 PM</p>
              <p className="text-zinc-600 text-[10px] font-mono mt-0.5">★ 4.8 · Café</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Scan line (decorative) ── */}
        <motion.div
          animate={{ top: ['10%', '90%', '10%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5227FF]/20 to-transparent z-0 pointer-events-none"
        />

        {/* ── Corner brackets ── */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/[0.1] rounded-tl-sm" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/[0.1] rounded-tr-sm" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/[0.1] rounded-bl-sm" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/[0.1] rounded-br-sm" />
      </div>
    </div>
  );
}
