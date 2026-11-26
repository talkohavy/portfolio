import { motion } from 'motion/react';
import { getNpmPackageUrl } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import type { NpmPackage } from '@src/common/types';

type PackageCardProps = {
  npmPackage: NpmPackage;
  index: number;
};

export default function PackageCard(props: PackageCardProps) {
  const { npmPackage, index } = props;

  const { name, description, category } = npmPackage;
  const href = getNpmPackageUrl(name);

  return (
    <motion.li
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: EASE_OUT_EXPO }}
      style={{ transformPerspective: 800 }}
    >
      <motion.a
        href={href}
        target='_blank'
        rel='noreferrer'
        className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-violet-400/40'
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <span
          aria-hidden='true'
          className='absolute inset-0 bg-linear-to-br from-violet-500/15 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
        />

        <div className='relative flex items-center justify-between'>
          <span className='rounded-full bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-wide text-zinc-400 uppercase'>
            {category}
          </span>
          <Icon
            name='arrowUpRight'
            size={18}
            className='text-zinc-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white'
          />
        </div>

        <h4 className='relative mt-5 font-mono text-base font-semibold text-white'>{name}</h4>
        <p className='relative mt-2 text-sm leading-relaxed text-zinc-400'>{description}</p>
      </motion.a>
    </motion.li>
  );
}
