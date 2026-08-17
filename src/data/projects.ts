import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'oyoun-eye-health',
    title: 'Oyoun (عيون)',
    type: 'Featured Web App',
    period: '2025',
    description:
      'Built a bilingual Arabic/English eye-health encyclopedia using Next.js 16, React, and TypeScript. Provides searchable eye disease information with search autocomplete, disease detail pages, eye anatomy guides, prevention tips, interactive doctor maps using Leaflet, RTL/LTR localization, and persistent theme/language preferences.',
    tags: [
      'Next.js 16',
      'React',
      'TypeScript',
      'Tailwind CSS v4',
      'shadcn/ui',
      'Lucide React',
      'React Leaflet',
      'Leaflet',
      'Next.js App Router',
    ],
    link: null,
    github: null,
    featured: true,
  },
  {
    id: 'brdg-marketplace',
    title: 'BRDG',
    type: 'E-commerce / Marketplace Concept',
    period: 'Startup Concept',
    description:
      'Designed an e-commerce marketplace platform concept to connect Egyptian consumers with local brands. The platform focuses on product discovery and local brand exposure, with conceptualized delivery partner integration, try-on/measurement experience, and a return management workflow.',
    tags: [
      'E-commerce',
      'Marketplace Concept',
      'Product Discovery',
      'Local Brands',
      'UX/UI Concept',
    ],
    link: null,
    github: null,
    featured: true,
  },
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website',
    type: 'Personal Project',
    period: 'Present',
    description:
      'Engineered a dual-persona portfolio application using React, TypeScript, and Tailwind CSS to present both Software Engineering and Sports Media achievements. Implemented dynamic persona switching, dark/light theme persistence, Framer Motion animations, and SEO optimization.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    link: null, // Self
    github: 'https://github.com/hassiebb/MyWebsite',
    featured: true,
  },
  {
    id: 'trend-gala-media',
    title: 'Trend / GALA Media Website',
    type: 'Freelance Project',
    period: 'Sep 2024 - Dec 2024 (4 months)',
    description:
      'Developed a responsive website for a digital media agency using modern frontend technologies. Focused on high-performance page rendering, fluid mobile-first layouts, and client media visual presentation.',
    tags: ['Frontend Technologies', 'Responsive Design', 'Performance', 'UI/UX'],
    link: 'https://trendeg.net/',
    github: null,
    featured: true,
  },
  {
    id: 'home-sphere',
    title: 'Home Sphere Website (Graduation Project)',
    type: 'Academic Project',
    period: 'Jun 2024 - Sep 2024 (4 months)',
    description:
      'Created a responsive web dashboard for a smart home system application as a graduation project. Designed intuitive UI controls for IoT smart devices, state management toggles, and responsive analytics components using JavaScript, HTML5, and CSS3.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Smart Home UI', 'Responsive Design'],
    link: 'https://hassiebb.github.io/Home-Sphere/',
    github: 'https://github.com/hassiebb/Home-Sphere',
    featured: false,
  },
  {
    id: 'ecommerce-landing',
    title: 'Landing page for an e-commerce clothing shop',
    type: 'Academic Project',
    period: 'Nov 2022 - Dec 2022 (2 months)',
    description:
      'Developed a conversion-focused landing page for an e-commerce apparel store using HTML5, CSS3, and JavaScript. Featured responsive product showcases, clear call-to-action flows, and cross-browser styling.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Conversion UX'],
    link: 'https://hassiebb.github.io/landingWebsite/',
    github: 'https://github.com/hassiebb/landingWebsite',
    featured: false,
  },
  {
    id: 'pets-adoption',
    title: 'Pets adoption website',
    type: 'Academic Project',
    period: 'Nov 2022 - Dec 2022 (2 months)',
    description:
      'Built an accessible pet adoption web application interface using HTML5, CSS3, and JavaScript. Solved pet discovery by structuring searchable animal profiles and user-friendly adoption inquiry forms.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility', 'User Experience'],
    link: 'https://hassiebb.github.io/sw-project/',
    github: 'https://github.com/hassiebb/sw-project',
    featured: false,
  },
];


