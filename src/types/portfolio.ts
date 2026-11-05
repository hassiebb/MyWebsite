export type Persona = 'tech' | 'creative';
export type Theme = 'light' | 'dark';

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string; // identifier or component key
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  techTitle: string;
  creativeTitle: string;
  location: string;
  phone: string;
  email: string;
  avatarUrl: string;
  cvPath: string | null;
  techCvPath?: string | null;
  creativeCvPath?: string | null;
  social: SocialLink[];
  availableForHire: boolean;
  militaryStatus?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface SkillTool {
  name: string;
  icon: string;
  category?: string;
}

export type ProjectPlatform = 'web' | 'mobile' | 'academic';

export interface Project {
  id: string;
  title: string;
  type: string;
  platform: ProjectPlatform;
  period: string;
  description: string;
  tags: string[];
  link: string | null;
  github: string | null;
  appStoreUrl?: string | null;
  playStoreUrl?: string | null;
  featured?: boolean;
  archived?: boolean;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  track?: string;
  period: string;
  status: string;
  gpa?: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  description?: string;
  metric?: string;
  highlight?: boolean;
}

export interface SocialMediaCaseStudy {
  id: string;
  brand: string;
  role: string;
  period: string;
  summary: string;
  platforms: ('Instagram' | 'Facebook' | 'TikTok' | 'YouTube' | 'X')[];
  metrics: {
    label: string;
    value: string;
    growth?: string;
  }[];
  strategyHighlights: string[];
  links?: {
    label: string;
    url: string;
  }[];
  image?: string;
  featured?: boolean;
}

export type PhotographyCategory =
  | 'Live Match Action'
  | 'Player Portraits'
  | 'Championships'
  | 'Referee Spotlight';

export interface GalleryItem {
  id: string;
  title: string;
  category: PhotographyCategory;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  description?: string;
  year?: string;
  location?: string;
  image?: string;
  tags?: string[];
}

export type GraphicDesignCategory =
  | 'Match-Day Graphics'
  | 'Athlete Branding'
  | 'Roster & Lineups'
  | 'Tournament Identity';

export interface GraphicDesignItem {
  id: string;
  title: string;
  client?: string;
  category: GraphicDesignCategory;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
  description: string;
  year?: string;
  tools?: string[];
  image?: string;
  tags?: string[];
}

export interface ContactInfo {
  cta: string;
  email: string;
  phone: string;
  location: string;
  social: SocialLink[];
}
