'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Team', href: '/team' },
  { label: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-16 h-16 lg:h-[72px]">
          {/* Wordmark */}
          <a href="/" className="font-podium text-2xl sm:text-[1.7rem] font-bold uppercase tracking-wider text-white no-underline shrink-0">
            HALION
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-white/70 tracking-[0.15em] uppercase hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact?type=waitlist"
            className="hidden md:inline-flex items-center gap-2 border border-white/30 hover:border-white/60 hover:bg-white/[0.06] px-5 py-2.5 text-[11px] tracking-widest uppercase text-white transition-colors shrink-0"
          >
            Join waitlist <ArrowUpRight size={14} />
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col space-y-1.5 p-1"
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 sm:px-10 h-16">
              <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">HALION</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-white p-1">
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-start justify-center h-[calc(100vh-80px)] px-6 sm:px-10 gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-podium text-4xl sm:text-5xl text-white uppercase"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/contact?type=waitlist"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1 }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 inline-flex items-center gap-2 border border-white/30 px-6 py-3 text-xs tracking-widest uppercase text-white"
              >
                Join waitlist <ArrowUpRight size={14} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
