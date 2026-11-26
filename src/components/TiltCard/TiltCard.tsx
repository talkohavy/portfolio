import type { PointerEvent, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import { SOFT_SPRING } from '@src/common/constants/motion';
import { getRelativePointerPosition } from '@src/common/utils/getRelativePointerPosition';

type TiltCardProps = PropsWithChildren<{
  className?: string;
  maxTilt?: number;
  hasGlare?: boolean;
}>;

export default function TiltCard(props: TiltCardProps) {
  const { children, className, maxTilt = 8, hasGlare = true } = props;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rawRotateX = useTransform(pointerY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rawRotateY = useTransform(pointerX, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useSpring(rawRotateX, SOFT_SPRING);
  const rotateY = useSpring(rawRotateY, SOFT_SPRING);

  const glareX = useTransform(pointerX, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(pointerY, [-0.5, 0.5], ['0%', '100%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 55%)`;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse') return;

    const rect = event.currentTarget.getBoundingClientRect();
    const position = getRelativePointerPosition({ rect, clientX: event.clientX, clientY: event.clientY });

    pointerX.set(position.x);
    pointerY.set(position.y);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className={clsx('group/tilt relative', className)}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: 'preserve-3d' }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
      {hasGlare && (
        <motion.div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100'
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  );
}
