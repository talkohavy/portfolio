import type { Experience } from '../types';

export const EXPERIENCE: Array<Experience> = [
  {
    company: 'ControlUp',
    role: 'Senior Full Stack Engineer',
    duration: '3 years',
    context: '6-person team · Enterprise real-time monitoring',
    summary:
      'Designed and developed scalable enterprise solutions for real-time monitoring across physical devices, leveraging microservices and a multi-tenant architecture.',
    highlights: [
      'Worked on a remote micro-frontend served under a host application',
      'Delivered real-time monitoring features for physical devices at enterprise scale',
      'Built across microservices in a multi-tenant architecture',
      'Services ran on Kubernetes (K8S) and were deployed with Helm',
    ],
    stack: ['React', 'Node.js', 'Microservices', 'PostgreSQL', 'Elasticsearch', 'Kubernetes', 'Helm'],
  },
  {
    company: 'Finout',
    role: 'Full Stack Engineer',
    duration: '1+ years',
    context: '4-person Application Team · ~30-employee startup',
    summary:
      'A fast-paced startup providing cloud cost observability to customers. Contributed to building a scalable SaaS application in a monorepo environment.',
    highlights: [
      'Developed across both the frontend and the backend',
      'Contributed to a scalable SaaS application in a monorepo environment',
      'Shipped through a CircleCI pipeline to microservices on Kubernetes',
      'Used Playwright for end-to-end testing',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'Playwright', 'CircleCI', 'Kubernetes'],
  },
  {
    company: 'SeaData',
    role: 'Full Stack Developer',
    duration: '2+ years',
    context: '3-developer team · 10-employee startup',
    summary: 'Created the expoint.co website as one of three developers in an early-stage startup.',
    highlights: [
      'Co-built expoint.co as part of a three-developer team',
      'Integrated a payment service wrapping a credit-card API',
      'Worked with a data layer of MySQL, MongoDB, Redis and Kafka',
      'Deployed the platform to Google Cloud Platform (GCP)',
    ],
    stack: ['React', 'Node.js', 'MySQL', 'MongoDB', 'Redis', 'Kafka', 'GCP'],
  },
];
