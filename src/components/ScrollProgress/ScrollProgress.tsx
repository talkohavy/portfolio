import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden='true'
      className='fixed inset-x-0 top-0 z-60 h-0.75 origin-left bg-linear-to-r from-violet-500 via-fuchsia-500 to-cyan-400'
      style={{ scaleX }}
    />
  );
}
