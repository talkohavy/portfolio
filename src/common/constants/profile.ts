import type { SocialLink, Stat } from '../types';

export const PROFILE = {
  firstName: 'Tal',
  lastName: 'Kohavy',
  fullName: 'Tal Kohavy',
  title: 'Senior Full Stack Engineer',
  location: 'Israel',
  email: 'talkohavy@gmail.com',
  phone: '050-212-1252',
  phoneHref: 'tel:+972502121252',
  githubUrl: 'https://github.com/talkohavy',
  linkedinUrl: 'https://linkedin.com/in/talkohavy',
  npmUrl: 'https://www.npmjs.com/~talkohavy',
  photoPath: '/profile.jpg',
  cvPath: '/Tal-Kohavy-CV.pdf',
  cvFileName: 'Tal Kohavy - CV.pdf',
  tagline:
    'I build scalable, real-time web platforms — from polished React frontends to resilient Node.js microservices.',
  roles: [
    'Senior Full Stack Engineer',
    'React Specialist',
    'Node.js Engineer',
    'Micro-Frontend Builder',
    'Open-Source Maintainer',
  ],
} as const;

export const ABOUT_STATEMENT =
  'With over 6 years of experience as a Full Stack Developer, I specialize in both frontend and backend web development. I am passionate about programming and constantly stay up-to-date with industry trends through newsletters, articles and documentation. I am a hard-working, detail-oriented team player who thrives in collaborative environments.';

export const ABOUT_PARAGRAPHS = [
  'I am seeking a challenging full-time role as a Full Stack Developer, focusing on React and Node.js — building products that are fast, reliable and a pleasure to use.',
  "My academic background includes both a Bachelor's and a Master's degree in Industrial Engineering & Management from Ben-Gurion University, which taught me to think in systems, processes and trade-offs.",
];

export const STATS: Array<Stat> = [
  { value: 6, suffix: '+', label: 'Years of experience' },
  { value: 3, suffix: '', label: 'Product companies' },
  { value: 15, suffix: '+', label: 'Published npm packages' },
  { value: 2, suffix: '', label: 'Academic degrees' },
];

export const SOCIAL_LINKS: Array<SocialLink> = [
  { label: 'GitHub', href: PROFILE.githubUrl, icon: 'github' },
  { label: 'LinkedIn', href: PROFILE.linkedinUrl, icon: 'linkedin' },
  { label: 'npm', href: PROFILE.npmUrl, icon: 'npm' },
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: 'mail' },
];
