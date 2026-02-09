'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const team = [
  {
    name: 'Akmal Nazir',
    role: 'CEO · Electronics & Systems Architecture',
    bio: 'Akmal leads Halion\'s electronics and systems architecture, focusing on the integration of hardware, power systems, sensing, and display technologies into a wearable form factor.',
    initials: 'AN',
    gradient: 'from-[#5227FF] to-[#7c5cff]',
    spotlight: 'rgba(82, 39, 255, 0.2)' as const,
  },
  {
    name: 'Ajith Varikuti',
    role: 'Product Development · Mechanical Engineering',
    bio: 'Ajith leads mechanical design and physical integration at Halion, focusing on enclosure design, structural integrity, and wearability.',
    initials: 'AV',
    gradient: 'from-[#7c5cff] to-[#B19EEF]',
    spotlight: 'rgba(124, 92, 255, 0.2)' as const,
  },
  {
    name: 'Aarya Raut',
    role: 'Product Development · Systems & Firmware Engineering',
    bio: 'Aarya works on low-level systems and firmware at Halion, bridging hardware and software to ensure reliable, responsive operation.',
    initials: 'AR',
    gradient: 'from-[#B19EEF] to-[#FF9FFC]',
    spotlight: 'rgba(177, 158, 239, 0.2)' as const,
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="team" className="relative" ref={ref}>
      <div className="w-full max-w-[1400px] mx-auto relative z-10 px-6 sm:px-8 lg:px-12 py-28 sm:py-36 lg:py-44">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] sm:text-xs font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-4"
          >
            Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-5 leading-tight"
          >
            A small team, focused on building{' '}
            <span className="text-zinc-500">things properly.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A close-knit team of engineers with a shared focus on
            human-centered design, technical depth, and long-term thinking.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
            >
              <SpotlightCard
                className="h-full hover:border-white/10 transition-all duration-500"
                spotlightColor={member.spotlight}
              >
                <div className="flex flex-col gap-4">
                  {/* Avatar */}
                  <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-semibold text-xs leading-none">{member.initials}</span>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-base sm:text-lg font-medium text-white mb-1">{member.name}</h3>
                    <p className="text-[#7c5cff] text-[10px] sm:text-[11px] font-mono leading-relaxed">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-zinc-500 text-xs sm:text-sm leading-[1.7]">{member.bio}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
