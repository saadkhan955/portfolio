export type ProjectCategory = 
  | 'all'
  | 'enterprise-drupal'
  | 'react-fullstack'
  | 'chrome-extensions'
  | 'mobile-native'
  | 'tools-oss';

export interface TicketReference {
  code: string;
  title: string;
  description?: string;
  pr?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  clientOrOrg?: string;
  timeframe: string;
  description: string;
  longDescription?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  featured: boolean;
  tickets?: TicketReference[];
  architectureHighlights?: string[];
  keyContributions: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  projectsSummary: string;
  deliverables: string[];
  technologies: string[];
}

export interface SkillGroup {
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    highlight?: boolean;
  }[];
}
