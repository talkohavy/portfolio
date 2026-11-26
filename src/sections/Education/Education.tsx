import { motion } from 'motion/react';
import { EDUCATION } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import Section from '@src/components/Section';
import SectionHeading from '@src/components/SectionHeading';
import TiltCard from '@src/components/TiltCard';

export default function Education() {
  return (
    <Section id='education'>
      <SectionHeading index='05' eyebrow='Education' title='Academic foundations.' />

      <div className='grid gap-6 md:grid-cols-2'>
        {EDUCATION.map((education, index) => (
          <motion.div
            key={education.degree}
            initial={{ opacity: 0, y: 60, rotate: index === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: index * 0.15, ease: EASE_OUT_EXPO }}
          >
            <TiltCard className='h-full overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-8 backdrop-blur-sm md:p-10'>
              <span
                aria-hidden='true'
                className='pointer-events-none absolute -right-4 -bottom-10 font-display text-[9rem] leading-none font-bold text-white/3 select-none'
              >
                {education.degree}
              </span>

              <div className='relative flex items-center justify-between'>
                <span className='grid size-12 place-items-center rounded-2xl bg-linear-to-br from-violet-500/30 to-cyan-400/20 text-violet-200 ring-1 ring-white/10'>
                  <Icon name='graduation' size={22} />
                </span>
                <span className='font-mono text-sm text-zinc-400'>{education.period}</span>
              </div>

              <p className='text-gradient relative mt-8 font-display text-4xl font-bold'>{education.degree}</p>
              <h3 className='relative mt-2 font-display text-xl font-semibold text-white md:text-2xl'>
                {education.field}
              </h3>
              <p className='relative mt-4 text-zinc-400'>{education.institution}</p>
              <p className='relative mt-1 flex items-center gap-1.5 text-sm text-zinc-500'>
                <Icon name='mapPin' size={14} />
                {education.location}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
