import { useEffect, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently crossing the middle of the viewport.
 */
export function useActiveSection<T extends string>(sectionIds: Array<T>) {
  const [activeId, setActiveId] = useState<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id as T);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
