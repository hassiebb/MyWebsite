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
  social: SocialLink[];
  availableForHire: boolean;
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

export interface Project {
  id: string;
  title: string;
  type: string;
  period: string;
  description: string;
  tags: string[];
  link: string | null;
  github: string | null;
  featured?: boolean;
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

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Sports Photography' | 'Graphic Design' | 'Event Coverage' | 'Brand Media';
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  description?: string;
  year?: string;
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
