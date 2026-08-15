import { AchievementItem, ExperienceItem, GalleryItem, SkillCategory, SkillTool } from '../types/portfolio';

export const creativeAbout =
  'Graphic Designer & Sports Photographer specializing in basketball media, with proven success in building engaging visual content. Grew a sports platform to 1.5M+ views and 3K+ followers within 2 months, working with teams, players, and referees.';

export const creativeIntro =
  'Graphic design and sports photography are at the core of my creative work. I focus on high-impact visual storytelling with a dedicated niche in basketball, capturing game intensity, athlete identity, and dynamic team narratives.';

export const photographyIntro =
  'I shoot live basketball games, high-stakes tournaments, team portraits, and editorial player profiles. Coming from a foundational background as a player and referee, I understand the tactical rhythm and emotional peaks of the game—allowing me to anticipate decisive moments before they happen.';

export const creativeAchievements: AchievementItem[] = [
  {
    id: 'views-growth',
    title: '1.5M+ Views on Instagram',
    description: 'Rapidly scaled a niche sports media channel to over 1.5 million impressions within a 2-month campaign window.',
    metric: '1.5M+',
    highlight: true,
  },
  {
    id: 'followers-growth',
    title: '3.1K+ Dedicated Community',
    description: 'Organically cultivated an active basketball community of 3,100+ engaged followers in 60 days.',
    metric: '3.1K+',
    highlight: true,
  },
  {
    id: 'team-dakhlia',
    title: 'Official Media for Al Dakhlia',
    description: 'Delivered official game-day graphics, player roster assets, and match photography coverage.',
    metric: 'Club Partner',
  },
  {
    id: 'top-clubs',
    title: 'Elite Club Player Collaborations',
    description: 'Created custom visual identities and portraits for athletes from top Egyptian clubs: Zamalek, Al Ahly, and Gezira.',
    metric: 'Elite Athletes',
  },
  {
    id: 'referee-content',
    title: 'Pioneered Referee Media in Egypt',
    description: 'First creative in Egypt to build dedicated, high-production visual content spotlighting basketball referees.',
    metric: 'Pioneer',
    highlight: true,
  },
  {
    id: 'referee-community',
    title: '600+ Official Referee Network',
    description: 'Curated and published educational and highlight content for a dedicated referee page with 600+ officials.',
    metric: '600+ Refs',
  },
  {
    id: 'cairo-basketball-zone',
    title: 'Cairo Basketball Zone Collaboration',
    description: 'Partnered on key tournament coverage, social campaigns, and championship photography.',
    metric: 'Media Collab',
  },
];

export const creativeExperience: ExperienceItem[] = [
  {
    id: 'creative-freelance',
    title: 'Graphic Designer & Sports Photographer',
    company: 'Freelance & Media Partnerships',
    type: 'Freelance',
    period: 'Freelance · Cairo, Egypt',
    location: 'Cairo, Egypt',
    description:
      'Produced high-energy visual graphics, match-day posters, and courtside photography for premier clubs, tournament organizers, and individual athletes. Recognized for fast turnaround delivery under tight game-day deadlines and a distinctive sports editorial aesthetic.',
    highlights: [
      'High-impact match posters, starting lineup graphics, and tournament branding',
      'Courtside high-speed action photography, athlete portraits, and championship coverage',
      'Rapid turnaround delivery tailored for instant post-game social media engagement',
      'Developed tailored visual identities for professional players across Egyptian leagues',
    ],
    skills: ['Photoshop', 'Canva', 'Sports Photography', 'Visual Storytelling', 'DaVinci Resolve', 'Editorial Design'],
  },
];

export const creativeSkills: {
  categories: SkillCategory[];
  tools: SkillTool[];
} = {
  categories: [
    {
      name: 'Design & Visual Arts',
      items: ['Adobe Photoshop', 'Canva Pro', 'Typography & Layout', 'Poster & Banner Design', 'Athlete Branding'],
    },
    {
      name: 'Photography & Camera',
      items: ['Sports Action Photography', 'High-Speed Shutter Tracking', 'Courtside Lighting', 'Color Grading', 'Editorial Portraits'],
    },
    {
      name: 'Video & Media Production',
      items: ['DaVinci Resolve', 'Reels / Short-form Video', 'Audio Synchronization', 'Social Media Strategy'],
    },
    {
      name: 'Technical Integration',
      items: ['React & UI Showcase', 'Web Media Optimization', 'Git Version Control'],
    },
  ],
  tools: [
    { name: 'Adobe Photoshop', icon: 'photoshop', category: 'Design' },
    { name: 'Canva', icon: 'canva', category: 'Design' },
    { name: 'DaVinci Resolve', icon: 'davinci', category: 'Video' },
    { name: 'Sports Camera', icon: 'camera', category: 'Photography' },
    { name: 'Color Grading', icon: 'palette', category: 'Media' },
  ],
};

// Ready-to-populate creative gallery architecture
export const creativeGallery: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Courtside Intensity',
    category: 'Sports Photography',
    aspectRatio: 'landscape',
    description: 'High-speed action capture during premier Egyptian league basketball championship match.',
    year: '2024',
    tags: ['Basketball', 'Action', 'Live Match'],
  },
  {
    id: 'gallery-2',
    title: 'Game-Day Roster Showcase',
    category: 'Graphic Design',
    aspectRatio: 'portrait',
    description: 'Official starting lineup graphic design featuring modern typography and dynamic player lighting.',
    year: '2024',
    tags: ['Poster Design', 'Photoshop', 'Branding'],
  },
  {
    id: 'gallery-3',
    title: 'Championship Moments',
    category: 'Sports Photography',
    aspectRatio: 'landscape',
    description: 'Emotional victory capture and trophy celebration under arena spotlight.',
    year: '2024',
    tags: ['Championship', 'Emotion', 'Victory'],
  },
  {
    id: 'gallery-4',
    title: 'Athlete Editorial Profile',
    category: 'Graphic Design',
    aspectRatio: 'square',
    description: 'Editorial portrait composition for elite club player social announcement.',
    year: '2024',
    tags: ['Portrait', 'Editorial', 'Athletes'],
  },
];
