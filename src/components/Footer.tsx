'use client';

import { Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-podium text-lg font-bold uppercase tracking-wider text-white">HALION</span>

          <p className="text-white/35 text-xs tracking-wide text-center order-last sm:order-none">
            © {new Date().getFullYear()} Halion Technologies
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/halion-technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Halion on LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-white/[0.12] text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/wearhalion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Halion on Instagram"
              className="w-9 h-9 flex items-center justify-center border border-white/[0.12] text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
