import clsx from 'clsx';
import { motion, type Variants } from 'motion/react';

const MESSAGES = [
  { id: 1, text: 'Hey! I saw you love hiking too', isOwn: false },
  { id: 2, text: 'Yes! Any trail you recommend?', isOwn: true },
  { id: 3, text: 'The Ramon Crater at sunrise — unreal.', isOwn: false },
  { id: 4, text: 'Adding it to my list right now', isOwn: true },
];

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.55, delayChildren: 0.6 } },
};

const bubbleVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 22 } },
};

const TYPING_DOTS = [0, 1, 2];

/**
 * A decorative, animated preview of LuckyLove's real-time chat.
 */
export default function ChatMock() {
  return (
    <div aria-hidden='true' className='relative mx-auto w-full max-w-xs'>
      <motion.div
        className='rounded-[2.2rem] border border-white/10 bg-ink-900 p-3 shadow-2xl shadow-fuchsia-950/40'
        animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className='rounded-[1.7rem] bg-ink-950 p-4'>
          <div className='flex items-center gap-3 border-b border-white/5 pb-3'>
            <span className='size-9 rounded-full bg-linear-to-br from-fuchsia-500 to-violet-500' />
            <div className='flex-1'>
              <p className='text-sm font-semibold text-white'>Noa</p>
              <p className='flex items-center gap-1.5 text-[11px] text-emerald-400'>
                <span className='size-1.5 animate-pulse rounded-full bg-emerald-400' />
                connected · ws
              </p>
            </div>
          </div>

          <motion.ul
            className='flex flex-col gap-2.5 pt-4'
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-80px' }}
          >
            {MESSAGES.map((message) => (
              <motion.li
                key={message.id}
                variants={bubbleVariants}
                className={clsx(
                  'max-w-[85%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed',
                  message.isOwn
                    ? 'self-end rounded-br-sm bg-linear-to-br from-violet-500 to-fuchsia-500 text-white'
                    : 'self-start rounded-bl-sm bg-white/10 text-zinc-200',
                )}
              >
                {message.text}
              </motion.li>
            ))}
            <motion.li
              variants={bubbleVariants}
              className='flex w-fit gap-1 self-start rounded-2xl rounded-bl-sm bg-white/10 px-3.5 py-3'
            >
              {TYPING_DOTS.map((dot) => (
                <motion.span
                  key={dot}
                  className='size-1.5 rounded-full bg-zinc-300'
                  animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
                />
              ))}
            </motion.li>
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
}
