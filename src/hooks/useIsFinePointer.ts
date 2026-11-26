import { useSyncExternalStore } from 'react';

const QUERY = '(hover: hover) and (pointer: fine)';

function subscribe(onChange: () => void) {
  const mediaQueryList = window.matchMedia(QUERY);
  mediaQueryList.addEventListener('change', onChange);

  return () => mediaQueryList.removeEventListener('change', onChange);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/**
 * Whether the user has a precise pointer (mouse / trackpad), i.e. not a touch-only device.
 */
export function useIsFinePointer() {
  const isFinePointer = useSyncExternalStore(subscribe, getSnapshot, () => false);

  return isFinePointer;
}
