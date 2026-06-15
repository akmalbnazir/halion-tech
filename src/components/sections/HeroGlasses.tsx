'use client';

import { motion } from 'motion/react';

/**
 * Shared hero background: the glasses render + spotlight.
 *
 * Sizing is driven by the hero's own HEIGHT (not viewport width), vertically
 * centered and bleeding off the right edge. This keeps the placement stable
 * across every resolution and aspect ratio — the image scales with the hero
 * instead of drifting when the viewport proportions change. A max-height cap
 * keeps it sane on very large displays.
 */
export default function HeroGlasses({ large = false }: { large?: boolean }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* left scrim for text legibility — behind the product so it doesn't dim it */}
      <div className="absolute inset-0 md:bg-gradient-to-r md:from-black md:via-black/70 md:to-transparent bg-black/60" />

      {/* image + spotlight, vertically centered, bleeding off the right */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-[-10%] sm:right-[-6%] lg:right-[-2%] flex items-center justify-center ${
          large
            ? 'h-[44%] sm:h-[58%] md:h-[70%] lg:h-[80%] max-h-[900px]'
            : 'h-[40%] sm:h-[52%] md:h-[62%] lg:h-[70%] max-h-[720px]'
        }`}
      >
        {/* spotlight tracks the image size so the dark product reads against black */}
        <div className="spotlight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square" />
        <motion.img
          src="/images/glasses.png"
          alt="Halion AR glasses"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="glasses-img relative h-full w-auto max-w-none object-contain select-none"
        />
      </div>
    </div>
  );
}
