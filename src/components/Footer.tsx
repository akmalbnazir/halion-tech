'use client';

import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand — takes 2 cols on large */}
          <div className="lg:col-span-2">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white">HALION</span>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mt-5">
              The personal secretary that lives in your glasses. A primary AR device with independent
              onboard compute — passive memory for busy, high-output people.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://www.linkedin.com/company/halion-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Halion on LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-white/[0.12] text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/haliontech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Halion on Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/[0.12] text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Product</h4>
            <div className="flex flex-col gap-3">
              <a href="/product" className="text-white/50 text-sm hover:text-white transition-colors">Overview</a>
              <a href="/use-cases" className="text-white/50 text-sm hover:text-white transition-colors">Use Cases</a>
              <a href="/philosophy" className="text-white/50 text-sm hover:text-white transition-colors">Philosophy</a>
              <a href="/faq" className="text-white/50 text-sm hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              <a href="/team" className="text-white/50 text-sm hover:text-white transition-colors">Team</a>
              <a href="/contact?type=waitlist" className="text-white/50 text-sm hover:text-white transition-colors">Join the waitlist</a>
              <a href="/contact?type=investor" className="inline-flex items-center gap-1 text-white/50 text-sm hover:text-white transition-colors">
                Investor inquiries <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Halion Technologies. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">Launching at AWE California · June 2026</p>
        </div>
      </div>
    </footer>
  );
}
