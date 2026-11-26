import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';

type RotatingTextProps = {
  words: ReadonlyArray<string>;
  className?: string;
  intervalMs?: number;
};

export default function RotatingText(props: RotatingTextProps) {
  const { words, className, intervalMs = 2600 } = props;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, [words.length, intervalMs]);

  const word = words[index];

  return (
    <span className='relative inline-flex overflow-hidden py-1 align-bottom'>
      <AnimatePresence mode='wait' initial={false}>
        <motion.span
          key={word}
          className={className}
          initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
