import type { CodeToken } from '../types';

/**
 * Returns the tokens that fit within the first `charCount` characters, cutting the last one if needed.
 * Used to "type out" syntax-highlighted code one character at a time.
 */
export function sliceTokens(props: { tokens: Array<CodeToken>; charCount: number }) {
  const { tokens, charCount } = props;

  const result: Array<CodeToken> = [];
  let remaining = Math.max(0, charCount);

  tokens.forEach((token) => {
    if (remaining <= 0) return;

    const visibleText = token.text.slice(0, remaining);
    remaining -= visibleText.length;

    result.push({ ...token, text: visibleText });
  });

  return result;
}

export function countTokenChars(tokens: Array<CodeToken>) {
  const total = tokens.reduce((sum, token) => sum + token.text.length, 0);

  return total;
}
