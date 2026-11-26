import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';

const BLOBS = [
  {
    className: 'left-[-10%] top-[-10%] size-[45rem] bg-violet-600/30',
    animate: { x: [0, 120, -60, 0], y: [0, 80, 140, 0], scale: [1, 1.15, 0.9, 1] },
    duration: 22,
  },
  {
    className: 'right-[-15%] top-[20%] size-[40rem] bg-cyan-500/20',
    animate: { x: [0, -140, 40, 0], y: [0, 120, -60, 0], scale: [1, 0.9, 1.2, 1] },
    duration: 26,
  },
  {
    className: 'left-[20%] bottom-[-20%] size-[38rem] bg-fuchsia-600/20',
    animate: { x: [0, 100, -120, 0], y: [0, -100, 40, 0], scale: [1, 1.2, 1, 1] },
    duration: 30,
  },
];

export default function AnimatedBackground() {
  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);
  const spotlightX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const spotlightY = useSpring(pointerY, { stiffness: 80, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(139, 92, 246, 0.12), transparent 70%)`;

  const { scrollYProgress } = useScroll();
  const blobsY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.35]);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    }

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [pointerX, pointerY]);

  return (
    <div aria-hidden='true' className='pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950'>
      <motion.div className='absolute inset-0' style={{ y: blobsY }}>
        {BLOBS.map((blob) => (
          <motion.div
            key={blob.className}
            className={`absolute rounded-full blur-[120px] ${blob.className}`}
            animate={blob.animate}
            transition={{ duration: blob.duration, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>

      <motion.div className='bg-grid absolute inset-0' style={{ opacity: gridOpacity }} />

      <motion.div className='absolute inset-0' style={{ background: spotlight }} />

      <div className='bg-noise absolute inset-0 opacity-[0.035]' />
    </div>
  );
}
