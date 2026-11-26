import clsx from 'clsx';

type MarqueeProps = {
  items: Array<string>;
  isReversed?: boolean;
  durationSeconds?: number;
};

const COPIES = [0, 1];

export default function Marquee(props: MarqueeProps) {
  const { items, isReversed = false, durationSeconds = 40 } = props;

  return (
    <div className='group flex overflow-hidden mask-x-from-85% mask-x-to-100%'>
      {COPIES.map((copyIndex) => (
        <ul
          key={copyIndex}
          aria-hidden={copyIndex > 0}
          className={clsx(
            'flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]',
            isReversed && '[animation-direction:reverse]',
          )}
          style={{ animationDuration: `${durationSeconds}s` }}
        >
          {items.map((item) => (
            <li
              key={item}
              className='flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-6 py-3 font-display text-lg whitespace-nowrap text-zinc-300 backdrop-blur-sm transition-colors duration-300 hover:border-violet-400/50 hover:text-white md:text-xl'
            >
              <span className='size-2 rounded-full bg-linear-to-br from-violet-400 to-cyan-300' />
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
