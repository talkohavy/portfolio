import { describe, expect, it } from 'vite-plus/test';
import { countTokenChars, sliceTokens } from './sliceTokens';

const tokens = [{ text: 'const', className: 'keyword' }, { text: ' ' }, { text: 'tal', className: 'variable' }];

describe('sliceTokens', () => {
  it('should return an empty array when charCount is 0', () => {
    const actualResult = sliceTokens({ tokens, charCount: 0 });

    expect(actualResult).toEqual([]);
  });

  it('should return an empty array when charCount is negative', () => {
    const actualResult = sliceTokens({ tokens, charCount: -5 });

    expect(actualResult).toEqual([]);
  });

  it('should cut the token that crosses the charCount boundary', () => {
    const expectedResult = [{ text: 'con', className: 'keyword' }];

    const actualResult = sliceTokens({ tokens, charCount: 3 });

    expect(actualResult).toEqual(expectedResult);
  });

  it('should keep whole tokens and cut only the last one', () => {
    const expectedResult = [
      { text: 'const', className: 'keyword' },
      { text: ' ' },
      { text: 't', className: 'variable' },
    ];

    const actualResult = sliceTokens({ tokens, charCount: 7 });

    expect(actualResult).toEqual(expectedResult);
  });

  it('should return all tokens when charCount exceeds the total length', () => {
    const actualResult = sliceTokens({ tokens, charCount: 100 });

    expect(actualResult).toEqual(tokens);
  });
});

describe('countTokenChars', () => {
  it('should sum the length of all tokens', () => {
    const actualResult = countTokenChars(tokens);

    expect(actualResult).toBe(9);
  });

  it('should return 0 for an empty list', () => {
    const actualResult = countTokenChars([]);

    expect(actualResult).toBe(0);
  });
});
