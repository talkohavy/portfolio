import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import type { SectionId } from '@src/common/types';

type SectionProps = PropsWithChildren<{
  id: SectionId;
  className?: string;
}>;

export default function Section(props: SectionProps) {
  const { id, className, children } = props;

  return (
    <section id={id} className={clsx('relative mx-auto w-full max-w-6xl scroll-mt-20 px-6 py-24 md:py-36', className)}>
      {children}
    </section>
  );
}
