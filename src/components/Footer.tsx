'use client';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5227FF] to-[#7c5cff] flex items-center justify-center">
                <span className="text-white font-bold text-xs leading-none">H</span>
              </div>
              <span className="text-white font-medium text-base">Halion</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Augmented reality glasses designed for everyday life. 
              Better technology—designed around the human.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Product</h4>
            <div className="flex flex-col gap-3">
              <a href="#product" className="text-zinc-500 text-sm hover:text-white transition-colors">Overview</a>
              <a href="#philosophy" className="text-zinc-500 text-sm hover:text-white transition-colors">Philosophy</a>
              <a href="#usecases" className="text-zinc-500 text-sm hover:text-white transition-colors">Use Cases</a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              <a href="#team" className="text-zinc-500 text-sm hover:text-white transition-colors">Team</a>
              <a href="#faq" className="text-zinc-500 text-sm hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="text-zinc-500 text-sm hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Halion Technologies. All rights reserved.
          </p>
          <p className="text-zinc-700 text-sm">
            Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
