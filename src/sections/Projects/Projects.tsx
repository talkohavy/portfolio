import { motion } from 'motion/react';
import { NPM_PACKAGES, PROFILE } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import Reveal from '@src/components/Reveal';
import Section from '@src/components/Section';
import SectionHeading from '@src/components/SectionHeading';
import FeaturedProjectCard from './content/FeaturedProjectCard';
import PackageCard from './content/PackageCard';

export default function Projects() {
  return (
    <Section id='projects'>
      <SectionHeading
        index='04'
        eyebrow='Projects'
        title="Things I've built."
        description='Side-projects and open-source work — where I get to own every decision, from architecture to deployment.'
      />

      <FeaturedProjectCard />

      <div className='mt-24 flex flex-wrap items-end justify-between gap-6'>
        <Reveal>
          <h3 className='flex items-center gap-3 font-display text-3xl font-bold text-white md:text-4xl'>
            <Icon name='npm' size={40} className='text-red-400' />
            Open source on npm
          </h3>
          <p className='mt-3 max-w-xl text-zinc-400'>
            I maintain a collection of published packages — libraries, React components and developer CLIs.
          </p>
        </Reveal>

        <motion.a
          href={PROFILE.npmUrl}
          target='_blank'
          rel='noreferrer'
          className='group inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:text-white'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
        >
          View all packages
          <Icon
            name='arrowUpRight'
            size={16}
            className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          />
        </motion.a>
      </div>

      <ul className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {NPM_PACKAGES.map((npmPackage, index) => (
          <PackageCard key={npmPackage.name} npmPackage={npmPackage} index={index} />
        ))}
      </ul>
    </Section>
  );
}
