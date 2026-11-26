type Rect = Pick<DOMRect, 'left' | 'top' | 'width' | 'height'>;

/**
 * Converts a pointer position into coordinates relative to an element's center,
 * normalized to the range [-0.5, 0.5] on both axes.
 */
export function getRelativePointerPosition(props: { rect: Rect; clientX: number; clientY: number }) {
  const { rect, clientX, clientY } = props;

  if (rect.width === 0 || rect.height === 0) return { x: 0, y: 0 };

  const rawX = (clientX - rect.left) / rect.width - 0.5;
  const rawY = (clientY - rect.top) / rect.height - 0.5;

  const x = Math.min(0.5, Math.max(-0.5, rawX));
  const y = Math.min(0.5, Math.max(-0.5, rawY));

  return { x, y };
}
