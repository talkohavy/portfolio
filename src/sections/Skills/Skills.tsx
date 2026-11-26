import { motion, type Variants } from 'motion/react';
import { MARQUEE_BOTTOM, MARQUEE_TOP, SKILL_CATEGORIES } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import Marquee from '@src/components/Marquee';
import Section from '@src/components/Section';
import SectionHeading from '@src/components/SectionHeading';
import TiltCard from '@src/components/TiltCard';

const chipListVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.3 } },
};

const chipVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 22 } },
};

export default function Skills() {
  return (
    <>
      <Section id='skills' className='pb-12 md:pb-16'>
        <SectionHeading
          index='02'
          eyebrow='Skills'
          title='A full-stack toolbox.'
          description='From the first pixel to the last packet — the technologies I use to design, build, test and ship production software.'
        />

        <div className='grid gap-6 md:grid-cols-2'>
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: (index % 2) * 0.15, ease: EASE_OUT_EXPO }}
            >
              <TiltCard
                maxTilt={5}
                className='h-full rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-white/2 p-7 backdrop-blur-sm md:p-9'
              >
                <div className='flex items-start gap-4'>
                  <span className='grid size-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-violet-500/30 to-cyan-400/20 text-violet-200 ring-1 ring-white/10'>
                    <Icon name={category.icon} size={22} />
                  </span>
                  <div>
                    <h3 className='font-display text-2xl font-semibold text-white'>{category.title}</h3>
                    <p className='mt-1 text-sm text-zinc-400'>{category.description}</p>
                  </div>
                </div>

                <motion.ul
                  className='mt-7 flex flex-wrap gap-2'
                  variants={chipListVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, margin: '-40px' }}
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={chipVariants}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className='rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-zinc-200 transition-colors duration-300 hover:border-violet-400/60 hover:bg-violet-500/15 hover:text-white'
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className='flex flex-col gap-4 py-8 md:py-12'>
        <Marquee items={MARQUEE_TOP} durationSeconds={45} />
        <Marquee items={MARQUEE_BOTTOM} durationSeconds={50} isReversed />
      </div>
    </>
  );
}
