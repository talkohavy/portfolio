import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { PROFILE } from '@src/common/constants';
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO } from '@src/common/constants/motion';

const LOADING_DURATION_SECONDS = 1.8;
const CURRENT_YEAR = new Date().getFullYear();

type PreloaderProps = {
  onComplete: () => void;
};

export default function Preloader(props: PreloaderProps) {
  const { onComplete } = props;

  const progress = useMotionValue(0);
  const counterText = useTransform(progress, (latest) => {
    const rounded = Math.round(latest);

    return rounded.toString().padStart(3, '0');
  });
  const barScale = useTransform(progress, [0, 100], [0, 1]);

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const controls = animate(progress, 100, {
      duration: LOADING_DURATION_SECONDS,
      ease: EASE_IN_OUT_QUART,
      onComplete,
    });

    return () => {
      controls.stop();
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [progress, onComplete]);

  return (
    <motion.div
      className='fixed inset-0 z-90 flex flex-col justify-between bg-ink-950 p-6 md:p-12'
      exit={{ clipPath: 'inset(0 0 100% 0)' }}
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
      transition={{ duration: 1, ease: EASE_IN_OUT_QUART }}
      role='status'
      aria-label='Loading portfolio'
    >
      <motion.p
        className='font-mono text-xs tracking-[0.3em] text-zinc-500 uppercase'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Portfolio — {CURRENT_YEAR}
      </motion.p>

      <div className='overflow-hidden'>
        <motion.h2
          className='font-display text-6xl font-bold tracking-tight text-white md:text-9xl'
          initial={{ y: '110%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 1, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
          {PROFILE.firstName}
          <span className='text-gradient'> {PROFILE.lastName}</span>
        </motion.h2>
      </div>

      <div className='flex items-end justify-between gap-6'>
        <div className='h-px flex-1 overflow-hidden bg-white/10'>
          <motion.div
            className='h-full origin-left bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400'
            style={{ scaleX: barScale }}
          />
        </div>
        <motion.span className='font-display text-5xl font-semibold text-white tabular-nums md:text-7xl'>
          {counterText}
        </motion.span>
      </div>
    </motion.div>
  );
}
