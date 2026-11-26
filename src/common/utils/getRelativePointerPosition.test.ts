import { describe, expect, it } from 'vite-plus/test';
import { getRelativePointerPosition } from './getRelativePointerPosition';

const rect = { left: 100, top: 200, width: 200, height: 100 };

describe('getRelativePointerPosition', () => {
  it('should return zero offsets at the element center', () => {
    const expectedResult = { x: 0, y: 0 };

    const actualResult = getRelativePointerPosition({ rect, clientX: 200, clientY: 250 });

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return -0.5 at the top-left corner', () => {
    const expectedResult = { x: -0.5, y: -0.5 };

    const actualResult = getRelativePointerPosition({ rect, clientX: 100, clientY: 200 });

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return 0.5 at the bottom-right corner', () => {
    const expectedResult = { x: 0.5, y: 0.5 };

    const actualResult = getRelativePointerPosition({ rect, clientX: 300, clientY: 300 });

    expect(actualResult).toEqual(expectedResult);
  });

  it('should clamp positions outside of the element', () => {
    const expectedResult = { x: 0.5, y: -0.5 };

    const actualResult = getRelativePointerPosition({ rect, clientX: 1000, clientY: 0 });

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return zero offsets for an element with no size', () => {
    const expectedResult = { x: 0, y: 0 };

    const actualResult = getRelativePointerPosition({
      rect: { left: 0, top: 0, width: 0, height: 0 },
      clientX: 50,
      clientY: 50,
    });

    expect(actualResult).toEqual(expectedResult);
  });
});
