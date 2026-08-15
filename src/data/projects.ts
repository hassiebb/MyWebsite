import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'portfolio-v2',
    title: 'Portfolio Website',
    type: 'Personal',
    period: 'Present',
    description:
      'Personal website showcasing projects and skills. Focus on responsive design, modern UI, and dual-persona presentation.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    link: null, // Self
    github: 'https://github.com/hassiebb/MyWebsite',
    featured: true,
  },
  {
    id: 'trend-gala-media',
    title: 'Trend / GALA Media Website',
    type: 'Freelance',
    period: 'Sep 2024 - Dec 2024 (4 months)',
    description:
      'Built for a media company using frontend technologies. Focused on performance and user experience.',
    tags: ['Frontend Technologies', 'Responsive Design', 'Performance', 'UI/UX'],
    link: 'https://trendeg.net/',
    github: null,
    featured: true,
  },
  {
    id: 'home-sphere',
    title: 'Home Sphere Website (Graduation Project)',
    type: 'Personal/Academic',
    period: 'Jun 2024 - Sep 2024 (4 months)',
    description:
      'Graduation project focusing on creating a responsive website for a smart home system application.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Smart Home UI', 'Responsive Design'],
    link: 'https://hassiebb.github.io/Home-Sphere/',
    github: 'https://github.com/hassiebb/Home-Sphere',
    featured: true,
  },
  {
    id: 'ecommerce-landing',
    title: 'Landing page for an e-commerce clothing shop',
    type: 'Personal/Academic',
    period: 'Nov 2022 - Dec 2022 (2 months)',
    description:
      'Created a landing page for an e-commerce clothing shop, focusing on user experience and conversion optimization.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Conversion UX'],
    link: 'https://hassiebb.github.io/landingWebsite/',
    github: 'https://github.com/hassiebb/landingWebsite',
    featured: false,
  },
  {
    id: 'pets-adoption',
    title: 'Pets adoption website',
    type: 'Personal/Academic',
    period: 'Nov 2022 - Dec 2022 (2 months)',
    description:
      'Developed a website for a pet adoption platform, focusing on user experience and accessibility.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Accessibility', 'User Experience'],
    link: 'https://hassiebb.github.io/sw-project/',
    github: 'https://github.com/hassiebb/sw-project',
    featured: false,
  },
];
