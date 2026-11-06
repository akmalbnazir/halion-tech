'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowUpRight, Copy, Check, Globe } from 'lucide-react';

/** Minimal LinkedIn glyph — lucide's brand icons are deprecated, so this is inlined. */
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.84v1.64h.05c.53-1 1.85-2.05 3.81-2.05 4.07 0 4.82 2.68 4.82 6.16V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9Z" />
    </svg>
  );
}

/* ════════════════════════════════════════════
   ABOUT — what Halion is
   ════════════════════════════════════════════ */
function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-6"
        >
          The Device
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.08] max-w-4xl"
        >
          Assistive technology built around{' '}
          <span className="font-podium font-bold text-silver">
            privacy by design.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl mt-7"
        >
          Iris is assistive technology that looks and wears like an ordinary pair
          of glasses. It helps quietly through the day, and privacy is part of the
          design from the start, not an add-on.
        </motion.p>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   TEAM — vertical cards: headshot / name+title / specialization
   ════════════════════════════════════════════ */
type TeamMember = {
  name: string;
  title: string;
  specialization: string;
  initials: string;
  /** Drop headshots (square, e.g. 800x800) in public/images/team/ and set e.g. '/images/team/akmal.jpg' */
  photo?: string;
  /** Full LinkedIn profile URL, e.g. 'https://www.linkedin.com/in/akmalnazir' */
  linkedin?: string;
  /** Personal site, e.g. 'https://aaryaraut.dev' */
  website?: string;
};

function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const team: TeamMember[] = [
    {
      name: 'Akmal Nazir',
      title: 'Chief Executive Officer',
      specialization: 'Electronics & Systems Architecture',
      initials: 'AN',
      photo: '/images/team/akmal.jpg',
      linkedin: 'https://www.linkedin.com/in/',
    },
    {
      name: 'Ajith Varikuti',
      title: 'Chief Technology Officer',
      specialization: 'Mechanical Engineering',
      initials: 'AV',
      photo: '/images/team/ajith.jpg',
      linkedin: 'https://www.linkedin.com/in/',
      website: 'https://ajithvarikuti.com',
    },
    {
      name: 'Aarya Raut',
      title: 'Chief Technology Officer',
      specialization: 'Systems & Firmware Engineering',
      initials: 'AR',
      photo: '/images/team/aarya.jpg',
      linkedin: 'https://www.linkedin.com/in/',
      website: 'https://aaryaraut.dev',
    },
    {
      name: 'Aarnav Sathish',
      title: 'Chief Operations Officer',
      specialization: 'Operations & Partnerships',
      initials: 'AS',
      photo: '/images/team/aarnav.jpg',
      linkedin: 'https://www.linkedin.com/in/',
    },
  ];

  return (
    <section id="team" ref={ref} className="relative border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-6"
        >
          The Team
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] mb-14 sm:mb-16"
        >
          Four builders. <span className="text-white/40">One device.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="group border border-white/[0.08] bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Headshot */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#08080a]">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                ) : (
                  <>
                    {/* placeholder monogram under a soft spotlight, until real headshots land */}
                    <div className="spotlight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-podium text-6xl sm:text-7xl font-bold text-white/[0.14] group-hover:text-white/25 tracking-tight transition-colors duration-500">
                        {m.initials}
                      </span>
                    </div>
                  </>
                )}
                {/* bottom fade into the meta block */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
              </div>

              {/* Meta */}
              <div className="p-5 sm:p-6 border-t border-white/[0.08]">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white text-lg font-medium leading-snug">{m.name}</h3>
                  <div className="shrink-0 flex items-center gap-3">
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                    {m.website && (
                      <a
                        href={m.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name}'s personal website`}
                        title={m.website.replace('https://', '')}
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-1">{m.title}</p>
                <p className="font-podium text-[10px] text-white/40 tracking-[0.18em] uppercase mt-4 leading-relaxed">
                  {m.specialization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   PRESS — coverage links
   ════════════════════════════════════════════ */
/** Logos live in public/images/press/; forced to grayscale, dimmed at rest and lit on hover. */
const PRESS = [
  {
    outlet: 'Charlotte Business Journal',
    logo: '/images/press/cbj.svg',
    logoClass: 'w-[62%] max-w-[340px]',
    href: 'https://www.bizjournals.com/charlotte/news/2026/08/26/teens-ar-glasses-startup-halion-tech.html',
  },
  {
    outlet: 'Yahoo Tech',
    logo: '/images/press/yahoo-tech.svg',
    logoClass: 'w-[72%] max-w-[400px]',
    href: 'https://tech.yahoo.com/ar-vr/articles/charlotte-teens-launch-ap-startup-103643324.html',
  },
];

function PressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="press" ref={ref} className="relative border-t border-white/[0.06] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 sm:py-36">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-6"
        >
          In the Press
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-[1.15] mb-14 sm:mb-16"
        >
          As featured in.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRESS.map((p, i) => (
            <motion.a
              key={p.outlet}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read the ${p.outlet} article`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="group flex flex-col border border-white/[0.08] bg-white/[0.015] hover:border-white/25 hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-300 no-underline"
            >
              {/* Logo stage */}
              <div className="relative flex items-center justify-center min-h-[220px] sm:min-h-[300px] px-8 overflow-hidden">
                <div className="spotlight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square opacity-20 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
                <img
                  src={p.logo}
                  alt={p.outlet}
                  className={`relative h-auto select-none grayscale opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ${p.logoClass}`}
                />
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6 border-t border-white/[0.08]">
                <h3 className="text-white text-base sm:text-lg font-medium">{p.outlet}</h3>
                <span className="inline-flex items-center gap-2 font-podium text-[11px] sm:text-xs text-white/50 group-hover:text-white tracking-[0.2em] uppercase transition-colors duration-300">
                  Read the article
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   CONTACT — one email, centre stage
   ════════════════════════════════════════════ */
const CONTACT_EMAIL = 'info@haliontech.com';

function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <section id="contact" ref={ref} className="relative border-t border-white/[0.06] bg-black overflow-hidden">
      {/* Stage lighting — echoes the hero */}
      <div className="spotlight-beam absolute inset-0 opacity-60 pointer-events-none" />
      <div className="spotlight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(1100px,120vw)] aspect-square opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 sm:py-44 flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-light text-white leading-[1.05]"
        >
          Have questions?
        </motion.h2>

        {/* The email — the centrepiece */}
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          href={`mailto:${CONTACT_EMAIL}`}
          className="group relative inline-block mt-12 sm:mt-16 no-underline"
        >
          <span className="font-podium font-bold text-silver tracking-tight leading-none text-[clamp(1.5rem,6.5vw,4.75rem)] break-all sm:break-normal">
            {CONTACT_EMAIL}
          </span>
          {/* underline sweep */}
          <span className="absolute -bottom-2 sm:-bottom-3 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          <ArrowUpRight
            className="absolute -right-6 sm:-right-9 top-0 w-5 h-5 sm:w-7 sm:h-7 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          />
        </motion.a>

        {/* Copy chip */}
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          onClick={copyEmail}
          className="group/copy inline-flex items-center gap-2.5 mt-10 sm:mt-12 px-5 py-2.5 border border-white/[0.12] text-white/60 hover:text-white hover:border-white/40 text-[11px] tracking-widest uppercase transition-colors"
        >
          {copied ? (
            <>
              <Check size={14} className="text-white" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} className="transition-transform group-hover/copy:scale-110" />
              Copy email
            </>
          )}
        </motion.button>
      </div>
    </section>
  );
}

export default function HomeSections() {
  return (
    <>
      <AboutSection />
      <TeamSection />
      <PressSection />
      <ContactSection />
    </>
  );
}
