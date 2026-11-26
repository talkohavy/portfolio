import type { FeaturedProject, NpmPackage } from '../types';

export const FEATURED_PROJECT: FeaturedProject = {
  name: 'LuckyLove',
  tagline: 'A real-world, large-scale dating app',
  description:
    'A personal side-project built to be a performant, production-grade application — planned, designed, developed and deployed end-to-end by me, including a websocket-based real-time chat.',
  highlights: [
    'Real-time websocket chat',
    'Microservices architecture',
    'Full CI/CD pipeline',
    'Internationalized (i18n)',
  ],
  frontend: ['React', 'Vite', 'Redux', 'i18n'],
  backend: ['Node.js', 'MongoDB', 'Redis', 'ws', 'Microservices'],
};

export const NPM_PACKAGES: Array<NpmPackage> = [
  {
    name: 'lvlup',
    description: 'A simple version manager solution for packages.',
    category: 'CLI',
  },
  {
    name: '@talkohavy/filters',
    description: 'An easy & intuitive filtering mechanism.',
    category: 'Library',
  },
  {
    name: '@talkohavy/table',
    description: 'A simple Table implementation that fits 90% of your use-cases.',
    category: 'React',
  },
  {
    name: 'create-query-language',
    description: 'Parse and build query languages — lexical analysis, AST generation and token streams.',
    category: 'Library',
  },
  {
    name: 'lucky-server',
    description: 'A modular server framework built on Express, designed for flexibility and scalability.',
    category: 'Framework',
  },
  {
    name: '@talkohavy/charts',
    description: 'Basic, easy to configure charts for React.',
    category: 'React',
  },
  {
    name: 'es-cli-tool',
    description: 'Query your Elasticsearch right from the CLI.',
    category: 'CLI',
  },
  {
    name: 'k8x',
    description: 'A CLI tool for switching between Kubernetes contexts.',
    category: 'CLI',
  },
  {
    name: 'api-opener',
    description: 'Design your API easily with the Swagger OpenAPI specification.',
    category: 'Library',
  },
];

export function getNpmPackageUrl(packageName: string) {
  return `https://www.npmjs.com/package/${packageName}`;
}
