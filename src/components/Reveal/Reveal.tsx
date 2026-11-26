import type { PropsWithChildren } from 'react';
import { motion } from 'motion/react';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  x?: number;
  y?: number;
}>;

export default function Reveal(props: RevealProps) {
  const { children, className, delay = 0, x = 0, y = 40 } = props;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
