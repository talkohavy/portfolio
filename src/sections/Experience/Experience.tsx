import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { EXPERIENCE } from '@src/common/constants';
import Section from '@src/components/Section';
import SectionHeading from '@src/components/SectionHeading';
import ExperienceCard from './content/ExperienceCard';

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 75%', 'end 60%'] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Section id='experience'>
      <SectionHeading
        index='03'
        eyebrow='Experience'
        title="Where I've made an impact."
        description='Six years across product companies of every size — from a 10-person startup to an enterprise platform.'
      />

      <div ref={timelineRef} className='relative'>
        <div aria-hidden='true' className='absolute top-2 bottom-2 left-3.75 w-px bg-white/10 md:left-5.75' />
        <motion.div
          aria-hidden='true'
          className='absolute top-2 bottom-2 left-3.75 w-px origin-top bg-linear-to-b from-violet-400 via-fuchsia-400 to-cyan-300 md:left-5.75'
          style={{ scaleY: lineScale }}
        />

        <ol className='flex flex-col gap-10 md:gap-14'>
          {EXPERIENCE.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
