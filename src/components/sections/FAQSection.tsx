'use client';

import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'When does Halion launch?',
    answer:
      'Halion debuts at AWE in California, June 2026 — an MVP prototype showcase of the device. Consumer availability is targeted to follow, with early-access units going to the waitlist first.',
  },
  {
    question: 'How much will it cost?',
    answer:
      'Halion is positioned as a primary device you would actually wear every day — priced to sit well below immersive headsets like the $3,500 Apple Vision Pro, not as a luxury novelty. Final consumer pricing will be confirmed closer to launch.',
  },
  {
    question: 'Does it require a phone?',
    answer:
      'No. Halion has fully independent onboard computation. It is the device, not an accessory — there is no phone tether and no companion app doing the real work.',
  },
  {
    question: 'How does the display work?',
    answer:
      'A binocular waveguide display developed in partnership with DigiLens. Information is overlaid transparently in your field of view without blocking your vision of the real world.',
  },
  {
    question: 'What about privacy?',
    answer:
      'Everything stays on-device — no data ever leaves your glasses. You have complete opt-in and opt-out control over what Halion captures and remembers. There is no cloud processing, no external servers, and no third-party data sharing.',
  },
  {
    question: 'How do I interact with it?',
    answer:
      'Voice commands for navigation, paired with a discreet smart ring for intentional input. No screens to tap, no eye tracking required, no mid-air gestures.',
  },
  {
    question: 'Who is Halion for?',
    answer:
      'Busy, high-output people — entrepreneurs, creatives, and executives — who are constantly moving and need a reliable fall-back memory system they can trust.',
  },
  {
    question: 'How do I get early access?',
    answer:
      'Join the waitlist or reach out directly through the contact page. Early-access units go to the waitlist first, after the AWE June 2026 showcase.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/[0.08] last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="text-white text-base sm:text-lg font-light group-hover:text-white/70 transition-colors leading-relaxed min-w-0">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
        >
          <Plus className="w-5 h-5 text-white/40" strokeWidth={1.5} />
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
            <p className="text-white/55 text-sm sm:text-[15px] leading-[1.8] pb-6 max-w-2xl">
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
    <section id="faq" className="relative border-t border-white/[0.08]" ref={ref}>
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto">
          {/* FAQ Items */}
          <div className="border-t border-white/[0.08]">
            {isInView && faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
