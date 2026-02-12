'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Send, ArrowRight } from 'lucide-react';
import StarBorder from '@/components/reactbits/StarBorder';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32" ref={ref}>
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#5227FF]/5 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs md:text-sm font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-5">
                Contact
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-5">
                Get in touch.
              </h2>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Interested in Halion? Have questions about our approach? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#7c5cff]" />
                </div>
                <div>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white text-base">akmal@haliontech.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <StarBorder
                as="a"
                color="#5227FF"
                speed="8s"
                className="cursor-pointer"
              >
                <span className="inline-flex items-center gap-3">
                  Stay updated
                  <ArrowRight className="w-4 h-4" />
                </span>
              </StarBorder>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="text-zinc-400 text-sm uppercase tracking-wider block mb-3">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#5227FF]/50 focus:bg-white/[0.05] transition-all"
                />
              </div>

              <div>
                <label className="text-zinc-400 text-sm uppercase tracking-wider block mb-3">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  placeholder="Tell us what you're interested in..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#5227FF]/50 focus:bg-white/[0.05] transition-all resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-lg bg-gradient-to-r from-[#5227FF] to-[#7c5cff] text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(82,39,255,0.35)] transition-all duration-300"
              >
                {submitted ? (
                  'Message sent!'
                ) : (
                  <>
                    Send message
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
