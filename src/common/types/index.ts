export type SectionId = 'home' | 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact';

export type NavItem = {
  id: SectionId;
  label: string;
};

export type IconName =
  | 'github'
  | 'linkedin'
  | 'mail'
  | 'phone'
  | 'download'
  | 'arrowUpRight'
  | 'arrowDown'
  | 'npm'
  | 'copy'
  | 'check'
  | 'layout'
  | 'server'
  | 'flask'
  | 'layers'
  | 'graduation'
  | 'heart'
  | 'mapPin';

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: IconName;
  skills: Array<string>;
};

export type Experience = {
  company: string;
  role: string;
  duration: string;
  context: string;
  summary: string;
  highlights: Array<string>;
  stack: Array<string>;
};

export type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  highlights: Array<string>;
  frontend: Array<string>;
  backend: Array<string>;
};

export type NpmPackage = {
  name: string;
  description: string;
  category: 'Library' | 'CLI' | 'Framework' | 'React';
};

export type Education = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
};

export type CodeToken = {
  text: string;
  className?: string;
};
