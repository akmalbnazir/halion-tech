'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Team', href: '/team' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
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
        <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img 
              src="/images/icon.png" 
              alt="Halion" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-zinc-500 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-white/[0.06] border border-white/[0.08] text-white text-[13px] font-medium hover:bg-white/[0.1] transition-colors shrink-0"
          >
            Get in touch
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[1.5px] bg-white"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-[1.5px] bg-white origin-center"
            />
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-white font-light"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
