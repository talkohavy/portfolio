import { useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { NAV_ITEMS, PROFILE } from '@src/common/constants';
import { EASE_IN_OUT_QUART, EASE_OUT_EXPO } from '@src/common/constants/motion';
import { useActiveSection } from '@src/hooks/useActiveSection';
import Icon from '../Icon';
import MenuToggle from './MenuToggle';

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

type NavbarProps = {
  isIntroDone: boolean;
};

export default function Navbar(props: NavbarProps) {
  const { isIntroDone } = props;

  const activeId = useActiveSection(SECTION_IDS);
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setIsHidden(latest > previous && latest > 240);
    setIsScrolled(latest > 24);
  });

  const shouldHide = !isIntroDone || (isHidden && !isMenuOpen);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <motion.header
        className='fixed inset-x-0 top-4 z-50 px-4'
        initial={{ y: '-150%' }}
        animate={{ y: shouldHide ? '-150%' : '0%' }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <nav
          aria-label='Main'
          className={clsx(
            'mx-auto flex max-w-6xl items-center justify-between rounded-full border py-2 pr-2 pl-4 transition-all duration-500',
            isScrolled || isMenuOpen
              ? 'border-white/10 bg-ink-950/70 shadow-2xl shadow-violet-950/30 backdrop-blur-xl'
              : 'border-transparent bg-transparent',
          )}
        >
          <a href='#home' className='group flex items-center gap-3' onClick={closeMenu}>
            <motion.span
              className='grid size-9 place-items-center rounded-full bg-linear-to-br from-violet-500 via-fuchsia-500 to-cyan-400 font-display text-sm font-bold text-white'
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              TK
            </motion.span>
            <span className='hidden font-display text-sm font-semibold text-white sm:inline'>{PROFILE.fullName}</span>
          </a>

          <ul className='hidden items-center gap-1 lg:flex'>
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={clsx(
                      'relative block rounded-full px-4 py-2 text-sm transition-colors duration-300',
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-white',
                    )}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId='nav-active-pill'
                        className='absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/10'
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className='flex items-center gap-2'>
            <a
              href={PROFILE.cvPath}
              download={PROFILE.cvFileName}
              className='hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 transition-transform duration-300 hover:scale-105 sm:flex'
            >
              <Icon name='download' size={16} />
              Resume
            </a>
            <MenuToggle isOpen={isMenuOpen} onToggle={() => setIsMenuOpen((isOpen) => !isOpen)} />
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='fixed inset-0 z-40 flex flex-col justify-center bg-ink-950/95 px-8 backdrop-blur-xl lg:hidden'
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.8, ease: EASE_IN_OUT_QUART }}
          >
            <ul className='flex flex-col gap-2'>
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.06, ease: EASE_OUT_EXPO }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className='flex items-baseline gap-4 py-2 font-display text-4xl font-bold text-white sm:text-5xl'
                  >
                    <span className='font-mono text-sm text-violet-300'>0{index + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={PROFILE.cvPath}
              download={PROFILE.cvFileName}
              className='mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-ink-950'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Icon name='download' size={18} />
              Download resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
