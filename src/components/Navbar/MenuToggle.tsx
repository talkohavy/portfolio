import { motion } from 'motion/react';

type MenuToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export default function MenuToggle(props: MenuToggleProps) {
  const { isOpen, onToggle } = props;

  return (
    <button
      type='button'
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className='relative grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 lg:hidden'
    >
      <motion.span
        className='absolute h-0.5 w-4 rounded-full bg-white'
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
      />
      <motion.span
        className='absolute h-0.5 w-4 rounded-full bg-white'
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
      />
    </button>
  );
}
