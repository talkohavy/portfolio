import type { PointerEvent } from 'react';
import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'motion/react';
import { SOFT_SPRING } from '@src/common/constants/motion';
import { getRelativePointerPosition } from '@src/common/utils/getRelativePointerPosition';

type MagneticButtonProps = HTMLMotionProps<'a'> & {
  /**
   * How far (as a fraction of the element's size) the button follows the pointer.
   */
  strength?: number;
};

export default function MagneticButton(props: MagneticButtonProps) {
  const { strength = 0.35, children, ...rest } = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SOFT_SPRING);
  const springY = useSpring(y, SOFT_SPRING);

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== 'mouse') return;

    const rect = event.currentTarget.getBoundingClientRect();
    const position = getRelativePointerPosition({ rect, clientX: event.clientX, clientY: event.clientY });

    x.set(position.x * rect.width * strength);
    y.set(position.y * rect.height * strength);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileTap={{ scale: 0.94 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
