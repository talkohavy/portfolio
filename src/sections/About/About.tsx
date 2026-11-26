import { motion } from 'motion/react';
import { ABOUT_PARAGRAPHS, ABOUT_STATEMENT, STATS } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import AnimatedCounter from '@src/components/AnimatedCounter';
import Reveal from '@src/components/Reveal';
import ScrollRevealText from '@src/components/ScrollRevealText';
import Section from '@src/components/Section';
import SectionHeading from '@src/components/SectionHeading';

export default function About() {
  return (
    <Section id='about'>
      <SectionHeading index='01' eyebrow='About me' title='Engineering with purpose.' />

      <ScrollRevealText
        text={ABOUT_STATEMENT}
        className='font-display text-2xl leading-snug font-medium text-white md:text-4xl md:leading-tight'
      />

      <div className='mt-20 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16'>
        <div className='flex flex-col gap-6'>
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.15}>
              <p className='text-base leading-relaxed text-zinc-400 md:text-lg'>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-4'>
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm md:p-8'
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: EASE_OUT_EXPO }}
            >
              <div
                aria-hidden='true'
                className='absolute -top-12 -right-12 size-32 rounded-full bg-violet-500/20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-cyan-400/25'
              />
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className='text-gradient relative font-display text-5xl font-bold tracking-tight md:text-6xl'
              />
              <p className='relative mt-3 text-sm text-zinc-400'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
