import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { countTokenChars, sliceTokens } from '@src/common/utils/sliceTokens';
import { CODE_TOKENS } from './logic/constants';

const TYPING_START_DELAY_MS = 1100;
const TYPING_INTERVAL_MS = 22;

const TOTAL_CHARS = countTokenChars(CODE_TOKENS);

type CodeWindowProps = {
  isActive: boolean;
};

export default function CodeWindow(props: CodeWindowProps) {
  const { isActive } = props;

  const shouldReduceMotion = useReducedMotion();
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (!isActive || shouldReduceMotion) return;

    let count = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        count += 1;
        setTypedCount(count);

        if (count >= TOTAL_CHARS) clearInterval(intervalId);
      }, TYPING_INTERVAL_MS);
    }, TYPING_START_DELAY_MS);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isActive, shouldReduceMotion]);

  const visibleCount = shouldReduceMotion ? TOTAL_CHARS : typedCount;
  const visibleTokens = sliceTokens({ tokens: CODE_TOKENS, charCount: visibleCount });

  return (
    <div className='w-72 overflow-hidden rounded-2xl border border-white/10 bg-ink-900/80 shadow-2xl shadow-black/50 backdrop-blur-xl sm:w-80'>
      <div className='flex items-center gap-2 border-b border-white/5 px-4 py-3'>
        <span className='size-2.5 rounded-full bg-red-400/80' />
        <span className='size-2.5 rounded-full bg-amber-400/80' />
        <span className='size-2.5 rounded-full bg-emerald-400/80' />
        <span className='ml-2 font-mono text-[11px] text-zinc-500'>engineer.ts</span>
      </div>

      <div className='grid p-4 font-mono text-[11px] leading-relaxed sm:text-xs'>
        <pre aria-hidden='true' className='invisible col-start-1 row-start-1 whitespace-pre'>
          {CODE_TOKENS.map((token) => token.text).join('')}
        </pre>
        <pre className='col-start-1 row-start-1 whitespace-pre text-zinc-400'>
          {visibleTokens.map((token, index) => (
            <span key={index} className={token.className}>
              {token.text}
            </span>
          ))}
          <motion.span
            aria-hidden='true'
            className='ml-px inline-block h-[1.1em] w-1.5 translate-y-[0.2em] bg-violet-400'
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </pre>
      </div>
    </div>
  );
}
