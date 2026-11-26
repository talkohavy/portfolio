import { AnimatePresence, motion } from 'motion/react';
import { PROFILE } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import MagneticButton from '@src/components/MagneticButton';
import Reveal from '@src/components/Reveal';
import Section from '@src/components/Section';
import SplitText from '@src/components/SplitText';
import { useCopyToClipboard } from '@src/hooks/useCopyToClipboard';
import type { IconName } from '@src/common/types';

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: IconName;
  isExternal?: boolean;
};

const CHANNELS: Array<ContactChannel> = [
  { label: 'Phone', value: PROFILE.phone, href: PROFILE.phoneHref, icon: 'phone' },
  { label: 'LinkedIn', value: 'in/talkohavy', href: PROFILE.linkedinUrl, icon: 'linkedin', isExternal: true },
  { label: 'GitHub', value: '@talkohavy', href: PROFILE.githubUrl, icon: 'github', isExternal: true },
];

export default function Contact() {
  const { isCopied, copy } = useCopyToClipboard();

  return (
    <Section id='contact' className='text-center'>
      <div
        aria-hidden='true'
        className='absolute top-1/2 left-1/2 -z-10 size-160 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]'
      />

      <motion.p
        className='font-mono text-xs tracking-[0.3em] text-violet-300 uppercase md:text-sm'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
      >
        06 — What&apos;s next?
      </motion.p>

      <SplitText
        as='h2'
        text="Let's build something great together."
        stagger={0.02}
        className='mx-auto mt-6 max-w-4xl font-display text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-7xl'
      />

      <Reveal delay={0.3}>
        <p className='mx-auto mt-8 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg'>
          I&apos;m currently looking for a full-time Full Stack role focused on React and Node.js. Whether you have a
          position in mind or just want to connect — my inbox is always open.
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className='mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row'>
          <MagneticButton
            href={`mailto:${PROFILE.email}`}
            className='group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-medium text-ink-950'
          >
            <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-300 transition-transform duration-500 ease-out group-hover:translate-x-0' />
            <Icon name='mail' size={20} className='relative' />
            <span className='relative'>Say hello</span>
          </MagneticButton>

          <button
            type='button'
            onClick={() => copy(PROFILE.email)}
            className='inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-4 font-mono text-sm text-zinc-200 backdrop-blur-sm transition-colors duration-300 hover:border-white/40'
            aria-label={`Copy email address ${PROFILE.email}`}
          >
            {PROFILE.email}
            <span className='relative grid size-5 place-items-center'>
              <AnimatePresence mode='wait' initial={false}>
                <motion.span
                  key={isCopied ? 'check' : 'copy'}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className={isCopied ? 'text-emerald-400' : 'text-zinc-400'}
                >
                  <Icon name={isCopied ? 'check' : 'copy'} size={16} />
                </motion.span>
              </AnimatePresence>
            </span>
          </button>
        </div>
        <p aria-live='polite' className='mt-3 h-5 text-sm text-emerald-400'>
          {isCopied ? 'Email copied to clipboard!' : ''}
        </p>
      </Reveal>

      <ul className='mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3'>
        {CHANNELS.map((channel, index) => (
          <motion.li
            key={channel.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: EASE_OUT_EXPO }}
          >
            <motion.a
              href={channel.href}
              target={channel.isExternal ? '_blank' : undefined}
              rel={channel.isExternal ? 'noreferrer' : undefined}
              className='group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 text-left backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/40 hover:bg-white/6'
              whileHover={{ y: -4 }}
            >
              <span className='grid size-11 place-items-center rounded-xl bg-white/5 text-zinc-300 transition-colors duration-300 group-hover:bg-violet-500/20 group-hover:text-white'>
                <Icon name={channel.icon} size={20} />
              </span>
              <span>
                <span className='block text-xs text-zinc-500'>{channel.label}</span>
                <span className='block text-sm font-medium text-zinc-200'>{channel.value}</span>
              </span>
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
