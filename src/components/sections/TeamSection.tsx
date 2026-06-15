'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const team = [
  {
    name: 'Akmal Nazir',
    role: 'CEO · Electronics & Systems Architecture',
    initials: 'AN',
    bio: 'Akmal leads Halion\'s electronics and systems architecture, owning the integration of hardware, power, sensing, and display into a wearable form factor. He has spent over a decade building and scaling robotics and engineering organizations, and sets the technical direction for the platform. His focus is making complex hardware feel effortless to the person wearing it.',
  },
  {
    name: 'Ajith Varikuti',
    role: 'Product Development · Mechanical Engineering',
    initials: 'AV',
    bio: 'Ajith leads mechanical design and physical integration at Halion — enclosure design, structural integrity, thermal behavior, and all-day wearability. He turns dense electronics into something that sits comfortably on a face for hours. His prototyping work has been recognized in international engineering and research showcases.',
  },
  {
    name: 'Aarya Raut',
    role: 'Product Development · Systems & Firmware Engineering',
    initials: 'AR',
    bio: 'Aarya works on low-level systems and firmware, bridging hardware and software so Halion stays reliable and responsive in real time. He builds the on-device pipeline that lets the glasses process context privately, without a phone or the cloud. His contributions span sensing, power management, and the runtime that makes ambient memory possible.',
  },
  {
    name: 'Aarnav Sathish',
    role: 'Lead Business Development & Operations',
    initials: 'AS',
    bio: 'Aarnav leads business development and operations at Halion — partnerships, go-to-market, fundraising, and the day-to-day that keeps a hardware company moving. He drives the relationships with optics and supply partners that make the product credible, and owns the path to AWE June 2026. He translates the technical work into a story investors and early customers can act on.',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="team" className="relative border-t border-white/[0.08]" ref={ref}>
      <div className="w-full max-w-7xl mx-auto relative z-10 px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.08]">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                {/* Avatar — replace with a real headshot when available */}
                <div className="w-14 h-14 border border-white/15 bg-white/[0.03] flex items-center justify-center shrink-0">
                  <span className="font-podium text-white/80 font-bold text-sm leading-none">{member.initials}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="font-podium text-[11px] text-white/45 tracking-wide leading-relaxed mt-0.5">{member.role}</p>
                </div>
              </div>
              <p className="text-white/55 text-sm leading-[1.75]">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
