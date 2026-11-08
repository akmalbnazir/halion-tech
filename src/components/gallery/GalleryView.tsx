'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Maximize2, Play, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';

export type GalleryItem = {
  src: string;
  type: 'image' | 'video';
  caption: string | null;
  /** Intrinsic pixel size (images only; null when unknown) */
  width: number | null;
  height: number | null;
};

const WORD = ['G', 'A', 'L', 'L', 'E', 'R', 'Y'];
const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, '0');

function Media({
  item,
  className,
  controls = false,
}: {
  item: GalleryItem;
  className?: string;
  controls?: boolean;
}) {
  return item.type === 'video' ? (
    <video
      src={item.src}
      className={className}
      muted
      loop
      playsInline
      autoPlay
      controls={controls}
      preload="metadata"
    />
  ) : (
    <img
      src={item.src}
      alt={item.caption ?? ''}
      width={item.width ?? undefined}
      height={item.height ?? undefined}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={className}
    />
  );
}

/** 1 / 2 / 3 columns at the sm / lg breakpoints. Starts at 3 so SSR and first client render match. */
function useColumnCount() {
  const [cols, setCols] = useState(3);
  useEffect(() => {
    const lg = window.matchMedia('(min-width: 1024px)');
    const sm = window.matchMedia('(min-width: 640px)');
    const update = () => setCols(lg.matches ? 3 : sm.matches ? 2 : 1);
    update();
    lg.addEventListener('change', update);
    sm.addEventListener('change', update);
    return () => {
      lg.removeEventListener('change', update);
      sm.removeEventListener('change', update);
    };
  }, []);
  return cols;
}

/**
 * Masonry by aspect ratio: each item drops into the currently shortest column
 * (leftmost on ties), so columns end level and numbering reads left-to-right.
 */
function balanceColumns(items: GalleryItem[], cols: number) {
  const columns = Array.from({ length: cols }, () => ({
    height: 0,
    entries: [] as { item: GalleryItem; index: number }[],
  }));
  items.forEach((item, index) => {
    const ratio = item.width && item.height ? item.height / item.width : 9 / 16;
    const target = columns.reduce((best, c) => (c.height < best.height - 1e-6 ? c : best));
    target.entries.push({ item, index });
    target.height += ratio + 0.05; // + gap
  });
  return columns;
}

/* ════════════════════════════════════════════
   HEADER — wordmark rises letter-by-letter, echoing the hero
   ════════════════════════════════════════════ */
function GalleryHeader({ count }: { count: number }) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="spotlight-beam absolute inset-0 pointer-events-none" />
      <div className="stage-floor absolute inset-x-0 bottom-0 h-1/2 pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-36 sm:pt-44 pb-14 sm:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase mb-6"
        >
          Behind the build
        </motion.p>

        <h1
          aria-label="Gallery"
          className="font-podium font-extrabold uppercase leading-none whitespace-nowrap text-[16vw] sm:text-[13vw] xl:text-[11rem]"
        >
          {WORD.map((letter, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
              <motion.span
                initial={{ y: '112%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.06, ease: EASE }}
                className="inline-block text-silver"
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-end justify-between gap-6 mt-8 sm:mt-10 pt-8 border-t border-white/[0.08]"
        >
          <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl">
            Moments from building Iris.
          </p>
          <span className="font-podium text-xs text-white/40 tracking-[0.3em] uppercase">
            {pad(count)} {count === 1 ? 'frame' : 'frames'}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════
   GRID — masonry columns, numbered tiles
   ════════════════════════════════════════════ */
function GalleryGrid({
  items,
  onOpen,
}: {
  items: GalleryItem[];
  onOpen: (i: number) => void;
}) {
  const cols = useColumnCount();

  if (items.length === 0) {
    return (
      <div className="relative flex flex-col items-center justify-center text-center py-28 sm:py-36 border border-white/[0.08] bg-white/[0.015] overflow-hidden">
        <div className="spotlight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,110%)] aspect-square opacity-30 pointer-events-none" />
        <p className="relative font-podium text-xs text-white/40 tracking-[0.3em] uppercase">
          Coming soon
        </p>
        <p className="relative mt-4 text-2xl sm:text-3xl font-light text-white">
          The first frames are on their way.
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 sm:gap-5">
      {balanceColumns(items, cols).map((column, c) => (
        <div key={c} className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-5">
          {column.entries.map(({ item, index: i }) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`Open ${item.caption ?? `item ${i + 1}`}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: c * 0.08, ease: EASE }}
              className="group relative block w-full overflow-hidden border border-white/[0.08] bg-[#08080a] hover:border-white/25 transition-colors duration-300 text-left cursor-zoom-in"
            >
              <Media
                item={item}
                className="block w-full h-auto group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />

              {/* hover shade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* index tag */}
              <span className="absolute top-3 left-3 font-podium text-[10px] tracking-[0.2em] text-white/75 bg-black/50 backdrop-blur-sm px-2 py-1">
                {pad(i + 1)}
              </span>
              {item.type === 'video' && (
                <span className="absolute top-3 right-3 flex items-center gap-1.5 font-podium text-[10px] tracking-[0.2em] uppercase text-white/75 bg-black/50 backdrop-blur-sm px-2 py-1">
                  <Play size={10} className="fill-current" /> Video
                </span>
              )}

              {/* caption on hover */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-white text-sm font-medium leading-snug">{item.caption}</span>
                <Maximize2 size={16} className="shrink-0 text-white/70" />
              </div>
            </motion.button>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   LIGHTBOX — full-screen viewer: arrows, keys, swipe, filmstrip
   ════════════════════════════════════════════ */
const slide = {
  enter: (dir: number) => ({ x: dir * 80, opacity: 0, scale: 0.98 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir * -80, opacity: 0, scale: 0.98 }),
};

function Lightbox({
  items,
  index,
  dir,
  onStep,
  onJump,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  dir: number;
  onStep: (d: number) => void;
  onJump: (i: number) => void;
  onClose: () => void;
}) {
  const item = items[index];
  const multiple = items.length > 1;
  const stripRef = useRef<HTMLDivElement>(null);

  /* keep the active thumbnail in view */
  useEffect(() => {
    const thumb = stripRef.current?.children[index] as HTMLElement | undefined;
    thumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [index]);

  const navBtn =
    'w-11 h-11 flex items-center justify-center border border-white/[0.12] bg-black/40 backdrop-blur-sm text-white/70 hover:text-white hover:border-white/40 transition-colors';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery viewer"
      className="fixed inset-0 z-[90] flex flex-col bg-black/95 backdrop-blur-xl"
    >
      <div className="spotlight-beam absolute inset-0 opacity-70 pointer-events-none" />

      {/* Top bar */}
      <div className="relative shrink-0 flex items-center justify-between h-16 lg:h-[72px] px-6 sm:px-10">
        <span className="font-podium text-xs text-white/70 tracking-[0.3em]">
          {pad(index + 1)} <span className="text-white/25">/ {pad(items.length)}</span>
        </span>
        <button type="button" onClick={onClose} aria-label="Close viewer" className={navBtn}>
          <X size={18} />
        </button>
      </div>

      {/* Stage — click the empty space to close */}
      <div
        onClick={onClose}
        className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-24"
      >
        <AnimatePresence initial={false} custom={dir} mode="popLayout">
          <motion.div
            key={item.src}
            custom={dir}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: EASE }}
            drag={multiple && item.type === 'image' ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) onStep(1);
              else if (info.offset.x > 80) onStep(-1);
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex items-center justify-center max-h-full"
          >
            <Media
              item={item}
              controls
              className="block w-auto h-auto max-w-full max-h-[calc(100svh-13rem)] sm:max-h-[calc(100svh-15rem)] object-contain select-none border border-white/[0.08]"
            />
          </motion.div>
        </AnimatePresence>

        {multiple && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onStep(-1);
              }}
              aria-label="Previous"
              className={`${navBtn} hidden sm:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onStep(1);
              }}
              aria-label="Next"
              className={`${navBtn} hidden sm:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2`}
            >
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Caption + filmstrip */}
      <div className="relative shrink-0 px-6 sm:px-10 pt-4 pb-6">
        <p className="text-center text-white/70 text-sm min-h-5">{item.caption}</p>
        {multiple && (
          <div className="mt-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div ref={stripRef} className="flex gap-2 w-max mx-auto">
              {items.map((t, i) => (
                <button
                  key={t.src}
                  type="button"
                  onClick={() => onJump(i)}
                  aria-label={`Show item ${i + 1}`}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 overflow-hidden border transition-all duration-300 ${
                    i === index
                      ? 'border-white/80 opacity-100'
                      : 'border-white/[0.08] opacity-35 hover:opacity-70'
                  }`}
                >
                  {t.type === 'video' ? (
                    <video src={t.src} muted playsInline preload="metadata" className="w-full h-full object-cover" />
                  ) : (
                    <img src={t.src} alt="" loading="lazy" className="w-full h-full object-cover" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════ */
export default function GalleryView({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<{ index: number; dir: number } | null>(null);
  const count = items.length;

  const open = useCallback((index: number) => setActive({ index, dir: 0 }), []);
  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (d: number) =>
      setActive((a) => (a ? { index: (a.index + d + count) % count, dir: d } : a)),
    [count],
  );
  const jump = useCallback(
    (i: number) => setActive((a) => (a ? { index: i, dir: i > a.index ? 1 : -1 } : a)),
    [],
  );

  /* keyboard + scroll lock while the viewer is open */
  const isOpen = active !== null;
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close, step]);

  return (
    <main className="min-h-screen bg-black text-white">
      <GrainOverlay />
      <Navbar />

      <GalleryHeader count={count} />

      <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24">
        <GalleryGrid items={items} onOpen={open} />
      </section>

      <Footer />

      <AnimatePresence>
        {active && (
          <Lightbox
            key="lightbox"
            items={items}
            index={active.index}
            dir={active.dir}
            onStep={step}
            onJump={jump}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
