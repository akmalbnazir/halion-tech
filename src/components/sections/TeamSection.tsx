'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import SpotlightCard from '@/components/reactbits/SpotlightCard';

const team = [
  {
    name: 'Akmal Nazir',
    role: 'CEO · Electronics & Systems Architecture',
    bio: 'Akmal leads Halion\'s electronics and systems architecture, focusing on the integration of hardware, power systems, sensing, and display technologies into a wearable form factor. His work centers on building reliable, production-minded electronics that prioritize efficiency, modularity, and long-term scalability. With experience spanning embedded systems, custom PCB design, and low-level software integration, Akmal approaches AR as a systems problem—balancing performance, wearability, and human factors.',
    initials: 'AN',
    gradient: 'from-[#5227FF] to-[#7c5cff]',
  },
  {
    name: 'Ajith Varikuti',
    role: 'Product Development · Mechanical Engineering',
    bio: 'Ajith leads mechanical design and physical integration at Halion, focusing on enclosure design, structural integrity, and wearability.',
    initials: 'AV',
    gradient: 'from-[#7c5cff] to-[#B19EEF]',
  },
  {
    name: 'Aarya Raut',
    role: 'Product Development · Systems & Firmware Engineering',
    bio: 'Aarya works on low-level systems and firmware at Halion, bridging hardware and software to ensure reliable, responsive operation.',
    initials: 'AR',
    gradient: 'from-[#B19EEF] to-[#FF9FFC]',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-mono text-[#7c5cff] tracking-[0.25em] uppercase mb-5"
          >
            Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6"
          >
            A small team, focused on building{' '}
            <span className="text-zinc-500">things properly.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A close-knit team of engineers with a shared focus on human-centered design, technical depth, and long-term thinking.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <SpotlightCard
                className="h-full hover:border-white/10 transition-all duration-500"
                spotlightColor="rgba(82, 39, 255, 0.15)"
              >
                <div className="flex flex-col gap-5">
                  {/* Avatar */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-semibold text-sm leading-none">{member.initials}</span>
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{member.name}</h3>
                    <p className="text-[#7c5cff] text-[11px] font-mono leading-relaxed">{member.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-zinc-500 text-sm leading-[1.75]">{member.bio}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
