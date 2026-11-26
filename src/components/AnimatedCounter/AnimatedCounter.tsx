import { useEffect, useRef } from 'react';
import { animate, motion, useInView, useMotionValue, useTransform } from 'motion/react';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export default function AnimatedCounter(props: AnimatedCounterProps) {
  const { value, suffix = '', className } = props;

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, { duration: 2.2, ease: EASE_OUT_EXPO });

    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <span ref={ref} className={className} aria-label={`${value}${suffix}`}>
      <motion.span aria-hidden='true'>{rounded}</motion.span>
      <span aria-hidden='true'>{suffix}</span>
    </span>
  );
}
