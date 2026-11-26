import { motion, type Variants } from 'motion/react';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import TiltCard from '@src/components/TiltCard';
import type { Experience } from '@src/common/types';

const highlightListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
};

const highlightVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

export default function ExperienceCard(props: ExperienceCardProps) {
  const { experience, index } = props;

  const { company, role, duration, context, summary, highlights, stack } = experience;

  return (
    <li className='relative pl-12 md:pl-20'>
      <motion.span
        aria-hidden='true'
        className='absolute top-8 left-0 grid size-8 place-items-center rounded-full border border-white/15 bg-ink-950 md:left-2'
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      >
        <motion.span
          className='size-3 rounded-full bg-linear-to-br from-violet-400 to-cyan-300'
          animate={{ boxShadow: ['0 0 0 0 rgba(167,139,250,0.6)', '0 0 0 10px rgba(167,139,250,0)'] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
        />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: EASE_OUT_EXPO }}
      >
        <TiltCard
          maxTilt={3}
          className='rounded-3xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-7 backdrop-blur-sm md:p-10'
        >
          <div className='flex flex-wrap items-start justify-between gap-4'>
            <div>
              <h3 className='font-display text-2xl font-semibold text-white md:text-3xl'>{role}</h3>
              <p className='text-gradient mt-1 font-display text-xl font-semibold md:text-2xl'>@ {company}</p>
            </div>
            <span className='rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 font-mono text-xs text-violet-200'>
              {duration}
            </span>
          </div>

          <p className='mt-4 font-mono text-xs tracking-wide text-zinc-500'>{context}</p>
          <p className='mt-5 leading-relaxed text-zinc-300'>{summary}</p>

          <motion.ul
            className='mt-6 grid gap-3 sm:grid-cols-2'
            variants={highlightListVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-60px' }}
          >
            {highlights.map((highlight) => (
              <motion.li key={highlight} variants={highlightVariants} className='flex gap-3 text-sm text-zinc-400'>
                <Icon name='check' size={16} className='mt-0.5 shrink-0 text-emerald-400' />
                {highlight}
              </motion.li>
            ))}
          </motion.ul>

          <ul className='mt-7 flex flex-wrap gap-2 border-t border-white/5 pt-6'>
            {stack.map((tech) => (
              <li key={tech} className='rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300'>
                {tech}
              </li>
            ))}
          </ul>
        </TiltCard>
      </motion.div>
    </li>
  );
}
