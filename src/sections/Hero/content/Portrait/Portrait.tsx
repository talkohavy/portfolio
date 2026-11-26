import { useState } from 'react';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { PROFILE } from '@src/common/constants';

type ImageStatus = 'loading' | 'loaded' | 'error';

/**
 * Shows the photo at `PROFILE.photoPath` (src/public/profile.jpg) once it exists,
 * and an animated monogram placeholder until then.
 */
export default function Portrait() {
  const [imageStatus, setImageStatus] = useState<ImageStatus>('loading');

  const isLoaded = imageStatus === 'loaded';

  return (
    <div className='relative aspect-4/5 w-full'>
      <div aria-hidden='true' className='animated-border absolute -inset-0.5 rounded-[2.25rem] opacity-80 blur-[1px]' />
      <div
        aria-hidden='true'
        className='absolute -inset-10 -z-10 rounded-full bg-linear-to-br from-violet-600/40 via-fuchsia-600/20 to-cyan-500/30 blur-3xl'
      />

      <div className='relative h-full w-full overflow-hidden rounded-[2.2rem] bg-ink-900'>
        {!isLoaded && <PortraitPlaceholder />}

        <img
          src={PROFILE.photoPath}
          alt={`Portrait of ${PROFILE.fullName}`}
          className={clsx(
            'h-full w-full object-cover transition-opacity duration-1000',
            isLoaded ? 'opacity-100' : 'opacity-0',
            imageStatus === 'error' && 'hidden',
          )}
          onLoad={() => setImageStatus('loaded')}
          onError={() => setImageStatus('error')}
          data-test-id='portrait-image'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink-950/80 to-transparent'
        />
      </div>
    </div>
  );
}

const RINGS = [0, 1, 2];

function PortraitPlaceholder() {
  return (
    <div
      className='absolute inset-0 grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.25),transparent_55%)]'
      data-test-id='portrait-placeholder'
    >
      {RINGS.map((ring) => (
        <motion.span
          key={ring}
          aria-hidden='true'
          className='absolute aspect-square w-1/2 rounded-full border border-white/15'
          animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: ring * 1.3, ease: 'easeOut' }}
        />
      ))}
      <motion.span
        className='text-gradient relative font-display text-8xl font-bold tracking-tighter md:text-9xl'
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        TK
      </motion.span>
    </div>
  );
}
