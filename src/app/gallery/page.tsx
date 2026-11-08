import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import GalleryView, { type GalleryItem } from '@/components/gallery/GalleryView';

export const metadata: Metadata = {
  title: 'Gallery — Iris by Halion',
  description: 'Moments from building Iris by Halion.',
};

/**
 * Drop photos/videos into public/images/gallery/ and they show up here,
 * sorted by filename. Prefix with numbers (01-, 02-, ...) to control order;
 * the rest of the filename becomes the caption ("03-first-prototype.jpg"
 * → "First prototype"). Camera names like IMG_1234 get no caption.
 */
const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery');
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov']);

/** Filename minus extension and download/duplicate noise ("Copy of x", "x (1)"). */
function cleanName(file: string): string {
  return path
    .parse(file)
    .name.replace(/^copy of\s+/i, '')
    .replace(/\s*\(\d+\)$/, '')
    .trim();
}

function captionFor(file: string): string | null {
  const base = cleanName(file)
    .replace(/^\d+[-_.\s]+/, '')
    .replace(/[-_]+/g, ' ')
    .trim();
  // single tokens ("13", "goodpicofme") and camera names aren't real captions
  if (!base.includes(' ')) return null;
  if (/^(img|dsc|dscn|pxl|mvimg|vid|photo|image|screenshot|screen shot)\b/i.test(base)) return null;
  return base.charAt(0).toUpperCase() + base.slice(1);
}

/** EXIF orientation tag from a JPEG APP1 segment's TIFF header, if present. */
function exifOrientation(buf: Buffer, tiff: number): number | null {
  const le = buf.toString('ascii', tiff, tiff + 2) === 'II';
  const u16 = (o: number) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
  const u32 = (o: number) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
  const ifd = tiff + u32(tiff + 4);
  for (let k = 0, n = u16(ifd); k < n; k++) {
    const entry = ifd + 2 + k * 12;
    if (u16(entry) === 0x0112) return u16(entry + 8);
  }
  return null;
}

/**
 * Pixel size as displayed (EXIF rotation applied), read straight from the
 * file header so the grid can reserve each tile's space before it loads.
 */
function imageSize(file: string): { width: number; height: number } | null {
  try {
    const buf = fs.readFileSync(file);
    if (buf.readUInt32BE(0) === 0x89504e47) {
      return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    }
    if (buf.toString('ascii', 0, 3) === 'GIF') {
      return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
    }
    if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
      const chunk = buf.toString('ascii', 12, 16);
      if (chunk === 'VP8X') return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
      if (chunk === 'VP8 ') return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
      if (chunk === 'VP8L') {
        const bits = buf.readUInt32LE(21);
        return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
      }
      return null;
    }
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let orientation = 1;
      let i = 2;
      while (i + 9 < buf.length) {
        if (buf[i] !== 0xff || buf[i + 1] === 0xff) {
          i++;
          continue;
        }
        const marker = buf[i + 1];
        if (marker === 0xe1 && buf.toString('ascii', i + 4, i + 8) === 'Exif') {
          orientation = exifOrientation(buf, i + 10) ?? 1;
        }
        // SOFn frame header (excluding DHT/JPG/DAC markers) carries the size
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          const height = buf.readUInt16BE(i + 5);
          const width = buf.readUInt16BE(i + 7);
          return orientation >= 5 ? { width: height, height: width } : { width, height };
        }
        i += 2 + buf.readUInt16BE(i + 2);
      }
    }
  } catch {
    /* unreadable or truncated — the grid falls back to a default ratio */
  }
  return null;
}

function readGallery(): GalleryItem[] {
  let files: string[];
  try {
    files = fs.readdirSync(GALLERY_DIR);
  } catch {
    return [];
  }
  return files
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext);
    })
    .sort((a, b) =>
      cleanName(a).localeCompare(cleanName(b), undefined, { numeric: true, sensitivity: 'base' }),
    )
    .map((f) => {
      const isVideo = VIDEO_EXT.has(path.extname(f).toLowerCase());
      const size = isVideo ? null : imageSize(path.join(GALLERY_DIR, f));
      return {
        src: `/images/gallery/${encodeURIComponent(f)}`,
        type: isVideo ? 'video' : 'image',
        caption: captionFor(f),
        width: size?.width ?? null,
        height: size?.height ?? null,
      };
    });
}

export default function GalleryPage() {
  return <GalleryView items={readGallery()} />;
}
