import clsx from 'clsx';
import { motion, type Variants } from 'motion/react';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
};

const charVariants: Variants = {
  hidden: { y: '115%', rotate: 8, opacity: 0 },
  visible: { y: '0%', rotate: 0, opacity: 1, transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

type SplitTextProps = {
  text: string;
  as?: keyof typeof MOTION_TAGS;
  className?: string;
  charClassName?: string;
  delay?: number;
  stagger?: number;
  /**
   * When provided, the animation is driven by this flag. Otherwise, it plays when scrolled into view.
   */
  isActive?: boolean;
};

export default function SplitText(props: SplitTextProps) {
  const { text, as = 'span', className, charClassName, delay = 0, stagger = 0.03, isActive } = props;

  const MotionTag = MOTION_TAGS[as];
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const triggerProps =
    isActive === undefined
      ? { whileInView: 'visible', viewport: { once: true, margin: '-60px' } }
      : { animate: isActive ? 'visible' : 'hidden' };

  return (
    <MotionTag className={className} aria-label={text} initial='hidden' variants={containerVariants} {...triggerProps}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} aria-hidden='true' className='inline-block whitespace-nowrap'>
          {Array.from(word).map((char, charIndex) => (
            <span key={charIndex} className='-mb-[0.1em] inline-block overflow-hidden pb-[0.22em] align-bottom'>
              <motion.span
                className={clsx('inline-block will-change-transform', charClassName)}
                variants={charVariants}
              >
                {char}
              </motion.span>
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className='inline-block'>&nbsp;</span>}
        </span>
      ))}
    </MotionTag>
  );
}
