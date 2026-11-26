import { motion } from 'motion/react';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Reveal from '../Reveal';
import SplitText from '../SplitText';

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading(props: SectionHeadingProps) {
  const { index, eyebrow, title, description } = props;

  return (
    <div className='mb-14 md:mb-20'>
      <motion.div
        className='flex items-center gap-3 font-mono text-xs text-violet-300 md:text-sm'
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
      >
        <span>{index}</span>
        <motion.span
          className='h-px w-12 origin-left bg-linear-to-r from-violet-400 to-cyan-300'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
        />
        <span className='tracking-[0.3em] uppercase'>{eyebrow}</span>
      </motion.div>

      <SplitText
        as='h2'
        text={title}
        delay={0.1}
        stagger={0.02}
        className='mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-6xl'
      />

      {description && (
        <Reveal delay={0.25}>
          <p className='mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg'>{description}</p>
        </Reveal>
      )}
    </div>
  );
}
