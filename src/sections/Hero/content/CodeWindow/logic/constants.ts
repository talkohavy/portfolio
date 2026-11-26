import type { CodeToken } from '@src/common/types';

const KEYWORD = 'text-fuchsia-400';
const NAME = 'text-sky-300';
const KEY = 'text-violet-300';
const STRING = 'text-emerald-300';
const BOOLEAN = 'text-amber-300';

export const CODE_TOKENS: Array<CodeToken> = [
  { text: 'const ', className: KEYWORD },
  { text: 'engineer', className: NAME },
  { text: ' = {\n' },
  { text: '  name', className: KEY },
  { text: ': ' },
  { text: "'Tal Kohavy'", className: STRING },
  { text: ',\n' },
  { text: '  role', className: KEY },
  { text: ': ' },
  { text: "'Full Stack'", className: STRING },
  { text: ',\n' },
  { text: '  experience', className: KEY },
  { text: ': ' },
  { text: "'6+ years'", className: STRING },
  { text: ',\n' },
  { text: '  stack', className: KEY },
  { text: ': [' },
  { text: "'React'", className: STRING },
  { text: ', ' },
  { text: "'Node.js'", className: STRING },
  { text: '],\n' },
  { text: '  loves', className: KEY },
  { text: ': ' },
  { text: "'clean code'", className: STRING },
  { text: ',\n' },
  { text: '  openToWork', className: KEY },
  { text: ': ' },
  { text: 'true', className: BOOLEAN },
  { text: ',\n};' },
];
