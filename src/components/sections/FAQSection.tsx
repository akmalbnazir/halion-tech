'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is Halion meant to replace my phone?',
    answer: 'No. Halion is designed to reduce friction, not replace existing devices. It handles moments where pulling out a phone feels unnecessary or disruptive, while leaving more complex tasks where they belong.',
  },
  {
    question: 'How is Halion different from existing smart glasses?',
    answer: 'Most smart glasses prioritize cameras, displays, or immersion. Halion prioritizes wearability, intentional interaction, and everyday usefulness. The focus is not on doing more, but on doing the right things well.',
  },
  {
    question: 'Is Halion always recording?',
    answer: 'No. Halion is designed around intentional use. Visual and contextual capture only occurs when explicitly triggered by the user.',
  },
  {
    question: 'How do you interact with Halion?',
    answer: 'Interaction is simple and deliberate. Halion primarily uses a discreet smart ring for input, allowing control without screens, gestures, or constant visual interaction.',
  },
  {
    question: 'Will Halion be distracting to wear?',
    answer: 'No. Visual elements are minimal and appear only when relevant. Halion is designed to fade into the background during normal use.',
  },
  {
    question: 'Is Halion a headset or immersive AR device?',
    answer: 'No. Halion is not a headset and does not aim to create a fully immersive AR experience. It is designed to complement the real world, not replace it.',
  },
  {
    question: 'When will Halion be available?',
    answer: 'Halion is currently in active development. More information will be shared as the product matures.',
  },
  {
    question: 'Who is Halion for?',
    answer: 'Halion is built for people who value simplicity, clarity, and technology that fits naturally into their lives—without demanding attention or changing how they behave.',
  },
  {
    question: 'Can I try Halion or join a waitlist?',
    answer: 'Details about early access and availability will be announced in the future.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/5 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-white text-sm sm:text-base font-light group-hover:text-[#7c5cff] transition-colors leading-relaxed min-w-0">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-zinc-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-400 text-sm leading-[1.75] pb-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="section-padding relative" ref={ref}>
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-5"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white"
          >
            Common questions about Halion.
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-2 sm:px-8 sm:py-4">
          {isInView && faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
