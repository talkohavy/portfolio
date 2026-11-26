import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useIsFinePointer } from '@src/hooks/useIsFinePointer';

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor="hover"]';
const RING_SPRING = { stiffness: 350, damping: 30, mass: 0.5 };

export default function CustomCursor() {
  const isFinePointer = useIsFinePointer();

  if (!isFinePointer) return null;

  return <CursorFollower />;
}

function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, RING_SPRING);
  const ringY = useSpring(y, RING_SPRING);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);

      const target = event.target as Element | null;
      const interactiveElement = target?.closest?.(INTERACTIVE_SELECTOR);

      setIsHovering(Boolean(interactiveElement));
      setIsVisible(true);
    }

    function handlePointerDown() {
      setIsPressed(true);
    }

    function handlePointerUp() {
      setIsPressed(false);
    }

    function handleMouseLeave() {
      setIsVisible(false);
    }

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  const ringScale = isPressed ? 0.8 : isHovering ? 1.9 : 1;

  return (
    <>
      <motion.div
        aria-hidden='true'
        className='pointer-events-none fixed top-0 left-0 z-100 size-1.5 rounded-full bg-white mix-blend-difference'
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: isVisible && !isHovering ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        aria-hidden='true'
        className='pointer-events-none fixed top-0 left-0 z-100 size-9 rounded-full border border-white mix-blend-difference'
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: ringScale,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
    </>
  );
}
