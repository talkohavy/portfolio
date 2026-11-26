import { motion } from 'motion/react';
import { FEATURED_PROJECT } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import ChatMock from './ChatMock';

export default function FeaturedProjectCard() {
  const { name, tagline, description, highlights, frontend, backend } = FEATURED_PROJECT;

  return (
    <motion.article
      className='relative rounded-[2rem] p-px'
      initial={{ opacity: 0, y: 80, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.1, ease: EASE_OUT_EXPO }}
    >
      <div aria-hidden='true' className='animated-border absolute inset-0 rounded-[2rem] opacity-60' />

      <div className='relative grid gap-10 overflow-hidden rounded-[calc(2rem-1px)] bg-ink-950/90 p-7 backdrop-blur-xl md:grid-cols-[1.15fr_1fr] md:p-12'>
        <div aria-hidden='true' className='absolute -top-32 -left-32 size-96 rounded-full bg-fuchsia-600/20 blur-3xl' />

        <div className='relative'>
          <span className='inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 font-mono text-xs text-fuchsia-200'>
            <Icon name='heart' size={14} />
            Featured side-project
          </span>

          <h3 className='mt-6 font-display text-5xl font-bold tracking-tight text-white md:text-6xl'>{name}</h3>
          <p className='text-gradient mt-2 font-display text-xl font-semibold'>{tagline}</p>
          <p className='mt-5 leading-relaxed text-zinc-400'>{description}</p>

          <ul className='mt-7 grid grid-cols-2 gap-3'>
            {highlights.map((highlight, index) => (
              <motion.li
                key={highlight}
                className='flex items-center gap-2 text-sm text-zinc-300'
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.08, ease: EASE_OUT_EXPO }}
              >
                <Icon name='check' size={16} className='shrink-0 text-emerald-400' />
                {highlight}
              </motion.li>
            ))}
          </ul>

          <div className='mt-8 grid gap-4 border-t border-white/5 pt-6 sm:grid-cols-2'>
            <TechList label='Frontend' items={frontend} />
            <TechList label='Backend' items={backend} />
          </div>
        </div>

        <ChatMock />
      </div>
    </motion.article>
  );
}

function TechList(props: { label: string; items: Array<string> }) {
  const { label, items } = props;

  return (
    <div>
      <p className='mb-2 font-mono text-xs tracking-widest text-zinc-500 uppercase'>{label}</p>
      <ul className='flex flex-wrap gap-1.5'>
        {items.map((item) => (
          <li key={item} className='rounded-md bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
