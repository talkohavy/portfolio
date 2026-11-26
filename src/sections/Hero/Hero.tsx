import { useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { PROFILE } from '@src/common/constants';
import { EASE_OUT_EXPO } from '@src/common/constants/motion';
import Icon from '@src/components/Icon';
import MagneticButton from '@src/components/MagneticButton';
import RotatingText from '@src/components/RotatingText';
import SplitText from '@src/components/SplitText';
import TiltCard from '@src/components/TiltCard';
import CodeWindow from './content/CodeWindow';
import Portrait from './content/Portrait';

const FLOATING_BADGES = [
  { label: 'React', className: '-top-5 right-6 md:-right-6', delay: 0 },
  { label: 'Node.js', className: 'top-1/3 -right-4 md:-right-12', delay: 1.2 },
  { label: 'TypeScript', className: 'top-10 -left-6 md:-left-10', delay: 2.4 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

type HeroProps = {
  isIntroDone: boolean;
};

export default function Hero(props: HeroProps) {
  const { isIntroDone } = props;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const animationState = isIntroDone ? 'visible' : 'hidden';

  return (
    <section
      ref={sectionRef}
      id='home'
      className='relative mx-auto flex min-h-svh w-full max-w-6xl items-center px-6 pt-32 pb-24 md:pt-28'
    >
      <div className='grid w-full items-center gap-16 md:grid-cols-[1.25fr_1fr] md:gap-10'>
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
          <motion.div variants={containerVariants} initial='hidden' animate={animationState}>
            <motion.div
              variants={itemVariants}
              className='mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-xs font-medium text-emerald-300'
            >
              <span className='relative flex size-2'>
                <span className='absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex size-2 rounded-full bg-emerald-400' />
              </span>
              Open to new opportunities
            </motion.div>

            <motion.p variants={itemVariants} className='mb-3 font-mono text-sm text-violet-300 md:text-base'>
              Hi there, I&apos;m
            </motion.p>
          </motion.div>

          <h1 className='font-display text-6xl leading-[0.95] font-bold tracking-tighter text-white sm:text-7xl lg:text-8xl'>
            <SplitText text={PROFILE.firstName} isActive={isIntroDone} delay={1.05} stagger={0.05} />
            <br />
            <SplitText
              text={PROFILE.lastName}
              isActive={isIntroDone}
              delay={1.25}
              stagger={0.05}
              charClassName='bg-linear-to-b from-white via-violet-200 to-violet-500 bg-clip-text text-transparent'
            />
          </h1>

          <motion.div variants={containerVariants} initial='hidden' animate={animationState}>
            <motion.p
              variants={itemVariants}
              className='mt-6 flex flex-wrap items-baseline gap-x-2 font-display text-xl text-zinc-300 sm:text-2xl md:text-3xl'
            >
              <span className='font-mono text-violet-400'>&gt;</span>
              <RotatingText words={PROFILE.roles} className='text-gradient font-semibold' />
            </motion.p>

            <motion.p
              variants={itemVariants}
              className='mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg'
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className='mt-10 flex flex-wrap items-center gap-4'>
              <MagneticButton
                href='#contact'
                className='group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 font-medium text-ink-950'
              >
                <span className='absolute inset-0 -translate-x-full bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-300 transition-transform duration-500 ease-out group-hover:translate-x-0' />
                <span className='relative'>Let&apos;s talk</span>
                <Icon
                  name='arrowUpRight'
                  size={18}
                  className='relative transition-transform duration-300 group-hover:rotate-45'
                />
              </MagneticButton>

              <MagneticButton
                href={PROFILE.cvPath}
                download={PROFILE.cvFileName}
                className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:border-white/40 hover:bg-white/10'
              >
                <Icon name='download' size={18} />
                Download CV
              </MagneticButton>

              <div className='flex items-center gap-2'>
                <MagneticButton
                  href={PROFILE.githubUrl}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub profile'
                  strength={0.5}
                  className='grid size-12 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors duration-300 hover:border-white/40 hover:text-white'
                >
                  <Icon name='github' />
                </MagneticButton>
                <MagneticButton
                  href={PROFILE.linkedinUrl}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='LinkedIn profile'
                  strength={0.5}
                  className='grid size-12 place-items-center rounded-full border border-white/10 text-zinc-300 transition-colors duration-300 hover:border-white/40 hover:text-white'
                >
                  <Icon name='linkedin' />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className='mt-10 flex items-center gap-2 text-sm text-zinc-500'>
              <Icon name='mapPin' size={16} />
              Based in {PROFILE.location} · 6+ years building for the web
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className='relative mx-auto w-full max-w-sm' style={{ y: visualY, scale: visualScale }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -6, y: 60 }}
            animate={isIntroDone ? { opacity: 1, scale: 1, rotate: 0, y: 0 } : undefined}
            transition={{ duration: 1.4, delay: 0.8, ease: EASE_OUT_EXPO }}
          >
            <TiltCard className='rounded-[2.2rem]' maxTilt={10}>
              <Portrait />
            </TiltCard>
          </motion.div>

          {FLOATING_BADGES.map((badge, index) => (
            <motion.div
              key={badge.label}
              className={`absolute ${badge.className}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={isIntroDone ? { opacity: 1, scale: 1 } : undefined}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1.6 + index * 0.15 }}
            >
              <motion.span
                className='block rounded-full border border-white/10 bg-ink-900/80 px-4 py-2 font-mono text-xs text-zinc-200 shadow-xl backdrop-blur-md'
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: badge.delay }}
              >
                {badge.label}
              </motion.span>
            </motion.div>
          ))}

          <motion.div
            className='absolute -bottom-16 -left-6 sm:-left-16'
            initial={{ opacity: 0, x: -40, y: 40 }}
            animate={isIntroDone ? { opacity: 1, x: 0, y: 0 } : undefined}
            transition={{ duration: 1.2, delay: 1.4, ease: EASE_OUT_EXPO }}
          >
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
              <CodeWindow isActive={isIntroDone} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator isActive={isIntroDone} />
    </section>
  );
}

function ScrollIndicator(props: { isActive: boolean }) {
  const { isActive } = props;

  return (
    <motion.a
      href='#about'
      aria-label='Scroll to the About section'
      className='absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs tracking-[0.3em] text-zinc-500 uppercase md:flex'
      initial={{ opacity: 0 }}
      animate={isActive ? { opacity: 1 } : undefined}
      transition={{ delay: 2.4, duration: 1 }}
    >
      <span className='relative flex h-10 w-6 justify-center rounded-full border border-white/20'>
        <motion.span
          className='mt-2 size-1.5 rounded-full bg-white'
          animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </span>
      Scroll
    </motion.a>
  );
}
