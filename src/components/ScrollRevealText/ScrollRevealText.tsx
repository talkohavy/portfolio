import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';

type ScrollRevealTextProps = {
  text: string;
  className?: string;
};

/**
 * Words light up one after the other as the paragraph scrolls through the viewport.
 */
export default function ScrollRevealText(props: ScrollRevealTextProps) {
  const { text, className } = props;

  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });

  const words = text.split(' ');

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return <Word key={index} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
}

type WordProps = {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
};

function Word(props: WordProps) {
  const { word, range, progress } = props;

  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span aria-hidden='true' className='mr-[0.25em] inline-block' style={{ opacity, y }}>
      {word}
    </motion.span>
  );
}
