'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import HeroGlasses from '@/components/sections/HeroGlasses';

type CTA = { label: string; href: string; primary?: boolean; scroll?: boolean };
type Meta = { value: string; label: string };

interface PageHeroProps {
  badge?: { icon?: LucideIcon; text: string };
  title: ReactNode;
  subtitle: ReactNode;
  ctas?: CTA[];
  meta?: Meta[];
}

export default function PageHero({ badge, title, subtitle, ctas, meta }: PageHeroProps) {
  const BadgeIcon = badge?.icon;

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[680px] flex flex-col">
      {/* glasses visual */}
      <HeroGlasses />

      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-2xl">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 border border-white/[0.12] px-3 py-1.5 mb-7"
            >
              {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-white/60" />}
              <span className="font-podium text-[10px] tracking-[0.25em] uppercase text-white/60">{badge.text}</span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-podium font-extrabold uppercase text-white leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2.4rem,6vw,4.8rem)' }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/65 text-base sm:text-lg leading-relaxed mt-7 max-w-xl"
          >
            {subtitle}
          </motion.p>

          {ctas && ctas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mt-9"
            >
              {ctas.map((c) =>
                c.primary ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group inline-flex items-center gap-2.5 bg-white text-black hover:bg-white/90 px-6 py-3.5 text-xs font-medium tracking-widest uppercase transition-colors"
                  >
                    {c.label}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : c.scroll ? (
                  <a key={c.label} href={c.href} className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors">
                    {c.label} <ArrowDown className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    key={c.label}
                    href={c.href}
                    className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-6 py-3.5 text-xs tracking-widest uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {c.label}
                  </a>
                )
              )}
            </motion.div>
          )}
        </div>
      </div>

      {meta && meta.length > 0 && (
        <div className="relative z-10 border-t border-white/[0.08] bg-white/[0.015] backdrop-blur-sm">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-7 sm:py-9">
            <div className="flex items-center justify-center sm:justify-start gap-10 sm:gap-16 md:gap-24">
              {meta.map((m) => (
                <div key={m.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">{m.value}</div>
                  <p className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
