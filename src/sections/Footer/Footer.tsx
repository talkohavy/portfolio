import { motion } from 'motion/react';
import { PROFILE, SOCIAL_LINKS } from '@src/common/constants';
import Icon from '@src/components/Icon';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className='relative border-t border-white/5'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row'>
        <p className='text-sm text-zinc-500'>
          © {CURRENT_YEAR} {PROFILE.fullName}. Built with React, TypeScript & Motion.
        </p>

        <ul className='flex items-center gap-2'>
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <motion.a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel='noreferrer'
                aria-label={link.label}
                className='grid size-10 place-items-center rounded-full text-zinc-500 transition-colors duration-300 hover:bg-white/5 hover:text-white'
                whileHover={{ y: -3 }}
              >
                <Icon name={link.icon} size={18} />
              </motion.a>
            </li>
          ))}
        </ul>

        <motion.a
          href='#home'
          className='group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white'
          whileHover={{ y: -2 }}
        >
          Back to top
          <span className='grid size-8 place-items-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-white/40'>
            <Icon name='arrowDown' size={14} className='rotate-180' />
          </span>
        </motion.a>
      </div>
    </footer>
  );
}
