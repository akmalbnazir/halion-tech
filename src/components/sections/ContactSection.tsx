'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Mail, Send, TrendingUp, Sparkles } from 'lucide-react';

type Mode = 'waitlist' | 'investor' | 'general';

const modes: { id: Mode; label: string }[] = [
  { id: 'waitlist', label: 'Join the waitlist' },
  { id: 'investor', label: 'Investor inquiry' },
  { id: 'general', label: 'General' },
];

const copy: Record<Mode, { icon: typeof Mail; title: string; blurb: string; email: string; placeholder: string; cta: string }> = {
  waitlist: {
    icon: Sparkles,
    title: 'Request early access.',
    blurb: 'Be first in line for Halion. Early-access units go to the waitlist first, after the AWE June 2026 showcase.',
    email: 'hello@haliontech.com',
    placeholder: 'Tell us a bit about how you\'d use Halion…',
    cta: 'Join the waitlist',
  },
  investor: {
    icon: TrendingUp,
    title: 'Let\'s talk.',
    blurb: 'Pre-seed hardware with sharp positioning, recognized partners, and a working prototype. Reach out for the deck and a conversation.',
    email: 'investors@haliontech.com',
    placeholder: 'Tell us about your fund or thesis, and we\'ll send the deck…',
    cta: 'Send investor inquiry',
  },
  general: {
    icon: Mail,
    title: 'Get in touch.',
    blurb: 'Questions about the product, press, or partnerships? We\'d love to hear from you.',
    email: 'hello@haliontech.com',
    placeholder: 'What\'s on your mind?',
    cta: 'Send message',
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mode, setMode] = useState<Mode>('waitlist');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Preselect mode from ?type= query param (avoids useSearchParams Suspense requirement)
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('type');
    if (t === 'investor' || t === 'waitlist' || t === 'general') setMode(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
    setMessage('');
  };

  const c = copy[mode];
  const Icon = c.icon;

  return (
    <section id="contact" className="relative border-t border-white/[0.08] py-20 sm:py-28" ref={ref}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              {/* Mode tabs */}
              <div className="inline-flex flex-wrap gap-2 mb-8">
                {modes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={`px-4 py-2 text-[11px] tracking-widest uppercase transition-colors border ${
                      mode === m.id
                        ? 'bg-white text-black border-white'
                        : 'border-white/15 text-white/60 hover:text-white hover:border-white/40'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <h2 className="text-3xl sm:text-4xl font-light text-white mb-5">{c.title}</h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">{c.blurb}</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-11 h-11 border border-white/[0.12] flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-white/70" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  {mode === 'investor' ? 'Investor email' : 'Email'}
                </p>
                <a href={`mailto:${c.email}`} className="text-white text-base hover:text-white/70 transition-colors">
                  {c.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-3">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/[0.12] px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-3">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder={c.placeholder}
                  className="w-full bg-white/[0.03] border border-white/[0.12] px-4 py-3.5 text-white text-sm placeholder-white/30 focus:outline-none focus:border-white/40 focus:bg-white/[0.05] transition-all resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2.5 h-12 px-6 bg-white text-black text-xs font-medium tracking-widest uppercase hover:bg-white/90 transition-colors"
              >
                {submitted ? (
                  'Message sent'
                ) : (
                  <>
                    {c.cta}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
