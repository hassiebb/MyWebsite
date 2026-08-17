import { ExperienceItem, EducationItem, SkillCategory, SkillTool } from '../types/portfolio';

export const techAbout =
  'Software Engineer & Developer with experience spanning modern web applications, React, Next.js, TypeScript, database-driven systems, enterprise software, and API integrations. Skilled in building responsive, scalable frontend interfaces, developing SAP ABAP enterprise solutions, and optimizing workflows across both freelance and corporate environments.';

export const techSkills: {
  categories: SkillCategory[];
  tools: SkillTool[];
} = {
  categories: [
    {
      name: 'Programming',
      items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'ABAP'],
    },
    {
      name: 'Frontend',
      items: ['React', 'Next.js', 'React Native', 'Expo', 'Vite', 'Tailwind CSS'],
    },
    {
      name: 'Backend / Data',
      items: ['Supabase', 'PostgreSQL', 'Firebase', 'Firestore', 'APIs'],
    },
    {
      name: 'Enterprise',
      items: ['SAP ABAP', 'ECM'],
    },
    {
      name: 'Tools',
      items: ['Git', 'GitHub', 'Vercel'],
    },
  ],
  tools: [
    { name: 'JavaScript', icon: 'javascript', category: 'Programming' },
    { name: 'TypeScript', icon: 'typescript', category: 'Programming' },
    { name: 'React', icon: 'react', category: 'Frontend' },
    { name: 'Next.js', icon: 'nextjs', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
    { name: 'PostgreSQL', icon: 'postgresql', category: 'Backend / Data' },
    { name: 'Supabase', icon: 'supabase', category: 'Backend / Data' },
    { name: 'SAP ABAP', icon: 'sap', category: 'Enterprise' },
    { name: 'Git', icon: 'git', category: 'Tools' },
  ],
};


export const techExperience: ExperienceItem[] = [
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
    id: 'freelance-frontend',
    title: 'Frontend Developer',
    company: 'Freelance',
    type: 'Freelance',
    period: 'July 2023 - Present',
    location: 'Remote / Cairo, Egypt',
    description:
      'Delivered end-to-end modern web applications and responsive client websites from initial UI concepts to production deployment using React, JavaScript, and modern styling solutions.',
    highlights: [
      'Architected responsive, performant websites using HTML, CSS, JavaScript, and React',
      'Spearheaded end-to-end client projects from design consultation to production hosting',
      'Maintained 100% on-time delivery across multiple client engagements',
    ],
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design', 'Git', 'Client Consultation'],
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
    skills: ['Data Structures & Algorithms', 'Web Development', 'React', 'JavaScript', 'Database Systems', 'Software Engineering'],
  },
];

