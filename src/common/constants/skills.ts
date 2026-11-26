import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: Array<SkillCategory> = [
  {
    title: 'Frontend',
    description: 'Fast, accessible and maintainable interfaces at scale.',
    icon: 'layout',
    skills: [
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'Vite',
      'Webpack',
      'Micro-Frontends',
      'Module Federation',
      'SSR',
      'i18n',
      'Code Splitting',
      'Sourcemaps',
    ],
  },
  {
    title: 'Backend',
    description: 'Robust APIs, real-time services and data layers.',
    icon: 'server',
    skills: [
      'Node.js',
      'NestJS',
      'Express',
      'Fastify',
      'Microservices',
      'REST APIs',
      'WebSockets',
      'Socket.io',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
      'JWT & Cookies Auth',
      'SSL Certificates',
    ],
  },
  {
    title: 'Testing',
    description: 'Confidence through unit, integration and end-to-end tests.',
    icon: 'flask',
    skills: ['Jest', 'Vitest', 'Node Test Runner', 'React Testing Library', 'Playwright', 'Puppeteer'],
  },
  {
    title: 'Architecture & DevOps',
    description: 'Shipping and operating software the right way.',
    icon: 'layers',
    skills: ['Monorepos (pnpm)', 'Docker', 'Kubernetes', 'Helm', 'CircleCI', 'CI/CD', 'GCP', 'Linux / macOS', 'Agile'],
  },
];

export const MARQUEE_TOP = [
  'React',
  'TypeScript',
  'Node.js',
  'NestJS',
  'Micro-Frontends',
  'Redux',
  'Vite',
  'Fastify',
  'Express',
  'WebSockets',
];

export const MARQUEE_BOTTOM = [
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Elasticsearch',
  'Kafka',
  'Docker',
  'Kubernetes',
  'Playwright',
  'Vitest',
  'CircleCI',
];
