'use client';

import dynamic from 'next/dynamic';

const Noise = dynamic(() => import('@/components/reactbits/Noise'), { ssr: false });

/** Site-wide film-grain overlay, shared by every page. */
export default function GrainOverlay() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <Noise
        patternSize={200}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={4}
        patternAlpha={8}
      />
    </div>
  );
}
