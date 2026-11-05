import { ExperienceItem, EducationItem, SkillCategory, SkillTool } from '../types/portfolio';

export const techAbout =
  'Web & Mobile Application Developer specializing in building high-performance web platforms with React, Next.js, and TypeScript, alongside cross-platform mobile apps using React Native and Expo. Experienced across full-stack database integrations (Supabase, PostgreSQL, Firebase), responsive UI engineering, and enterprise SAP ABAP solutions.';

export const techSkills: {
  categories: SkillCategory[];
  tools: SkillTool[];
} = {
  categories: [
    {
      name: 'Web Development',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Vite', 'shadcn/ui'],
    },
    {
      name: 'Mobile App Development',
      items: ['React Native', 'Expo', 'Cross-Platform UI', 'Mobile Navigation', 'Native Device APIs', 'Mobile State Management'],
    },
    {
      name: 'Backend & Database',
      items: ['Supabase', 'PostgreSQL', 'Firebase', 'Firestore', 'REST APIs', 'SQL', 'Authentication'],
    },
    {
      name: 'Enterprise & Tools',
      items: ['Git', 'GitHub', 'Vercel', 'SAP ABAP', 'SAP BTP', 'ECM Workflows'],
    },
  ],
  tools: [
    { name: 'React', icon: 'react', category: 'Web' },
    { name: 'Next.js', icon: 'nextjs', category: 'Web' },
    { name: 'React Native', icon: 'react-native', category: 'Mobile' },
    { name: 'Expo', icon: 'expo', category: 'Mobile' },
    { name: 'TypeScript', icon: 'typescript', category: 'Language' },
    { name: 'JavaScript', icon: 'javascript', category: 'Language' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Styling' },
    { name: 'Supabase', icon: 'supabase', category: 'Backend' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'Database' },
    { name: 'Firebase', icon: 'firebase', category: 'Backend' },
    { name: 'Git & GitHub', icon: 'git', category: 'Tools' },
    { name: 'SAP ABAP', icon: 'sap', category: 'Enterprise' },
  ],
};

export const techExperience: ExperienceItem[] = [
  {
    id: 'freelance-web-mobile',
    title: 'Web & Mobile App Developer',
    company: 'Freelance & Independent Projects',
    type: 'Freelance',
    period: 'July 2023 - Present',
    location: 'Remote / Cairo, Egypt',
    description:
      'Delivering end-to-end modern web applications and cross-platform mobile apps from initial UI/UX architecture to production deployment using React, Next.js, React Native (Expo), TypeScript, and cloud backends.',
    highlights: [
      'Architected responsive web apps and bilingual platforms using Next.js, React, TypeScript, and Tailwind CSS',
      'Developed cross-platform mobile applications with React Native, Expo, Supabase, and Firebase',
      'Spearheaded end-to-end client engagements from UI consultation to production hosting with 100% on-time delivery',
    ],
    skills: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Git'],
  },
  {
    id: 'accely-sap-abap',
    title: 'SAP ABAP Developer',
    company: 'Accely',
    type: 'Full-time',
    period: 'January 2024 - January 2025 (1 year)',
    location: 'Cairo, Egypt',
    description:
      'Started as an intern and promoted to full-time developer. Delivered enterprise SAP solutions including complex reporting, Adobe Forms, ALV grids, performance debugging, and custom enhancements with exposure to SAP Business Technology Platform (BTP).',
    highlights: [
      'Promoted from Intern to full-time SAP ABAP Engineer',
      'Developed and maintained ALV Reports, Classical Reports, and custom Adobe Forms',
      'Implemented system enhancements, custom function modules, and rigorous debugging workflows',
      'Gained valuable architectural exposure to SAP BTP cloud environments',
    ],
    skills: ['ABAP', 'SAP Reports', 'ALV Grid', 'Adobe Forms', 'Function Modules', 'Debugging', 'SAP BTP'],
  },
  {
    id: 'asset-tech-ecm',
    title: 'ECM Consultant',
    company: 'ASSET Technology Group',
    type: 'Internship',
    period: 'July 2025 - August 2025 (2 months)',
    location: 'Cairo, Egypt',
    description:
      'Focused on enterprise content management solutions, workflow optimization, and understanding enterprise architectural integrations.',
    highlights: [
      'Implemented Enterprise Content Management (ECM) system workflows',
      'Analyzed enterprise document lifecycles and business process automation',
      'Collaborated on cross-functional enterprise technical architectures',
    ],
    skills: ['ECM', 'Enterprise Content Management', 'Workflow Automation', 'Business Systems'],
  },
];

export const techEducation: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Modern University for Technology & Information (MTI)',
    track: 'Computer Science Track',
    period: '2020 - 2024',
    status: 'Graduated',
    skills: ['Data Structures & Algorithms', 'Web Development', 'Mobile Computing', 'React & JavaScript', 'Database Systems', 'Software Engineering'],
  },
];
