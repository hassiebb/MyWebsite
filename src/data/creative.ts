import { AchievementItem, ExperienceItem, GalleryItem, SkillCategory, SkillTool } from '../types/portfolio';

export const creativeAbout =
  'Sports Media & Social Media Specialist with proven experience founding, managing, and scaling sports digital media brands and tournament channels. Specialized in sports photography, graphic design, short-form video production, match coverage, and social media strategy across Instagram, Facebook, and TikTok — driving over 10M cumulative views and growing dedicated sports communities.';

export const creativeIntro =
  'I create and manage digital sports content through photography, design, video and social media strategy — helping sports organizations and brands turn game-day moments into engaging digital stories.';

export const photographyIntro =
  'I shoot live basketball games, high-stakes tournaments, team portraits, and editorial player profiles. Coming from a foundational background as a player and referee, I understand the tactical rhythm and emotional peaks of the game—allowing me to anticipate decisive moments before they happen.';

export const creativeAchievements: AchievementItem[] = [
  {
    id: 'fullcourt-followers',
    title: '10K+ Followers on Instagram & Facebook',
    description: 'Built Full Court digital media brand from scratch, growing active communities beyond 10,000 followers on both platforms.',
    metric: '10K+ Insta & FB',
    highlight: true,
  },
  {
    id: 'fullcourt-views',
    title: '~10M Cumulative Instagram Views',
    description: 'Generated approximately 10 million cumulative Instagram views across match coverage, photography reels, and basketball highlights in 6+ months.',
    metric: '~10M Views',
    highlight: true,
  },
  {
    id: 'giza-zone-growth',
    title: '54K → 750K+ Page Views Growth',
    description: 'Managed social media presence for Giza Basketball Zone during zones tournament, helping expand page views from 54K to over 750K.',
    metric: '750K+ Views',
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
  },
];

export const creativeExperience: ExperienceItem[] = [
  {
    id: 'full-court-media',
    title: 'Founder & Creative Director',
    company: 'Full Court',
    type: 'Digital Media Brand',
    period: 'Active (6+ months)',
    location: 'Egypt',
    description:
      'Built and developed Full Court into a flagship basketball media brand covering tournaments, teams, players, and basketball events across Egypt. Managed courtside sports photography, graphic design, short-form video/Reels production, player interviews, match coverage, and social strategy — scaling the platform to 10K+ followers on both Instagram and Facebook and ~10M cumulative Instagram views in its first 6+ months.',
    highlights: [
      'Founded and operated Full Court, a basketball media & content platform covering Egyptian leagues and tournaments',
      'Built and cultivated active sports community beyond 10K followers on both Instagram and Facebook',
      'Generated approximately 10M cumulative Instagram views within 6+ months of active publishing',
      'Directed courtside sports photography, match-day graphics, short-form video/Reels, player interviews, and commercial brand collaborations',
    ],
    skills: ['Sports Media', 'Social Media Strategy', 'Sports Photography', 'Graphic Design', 'Reels / Video', 'Audience Growth'],
  },
  {
    id: 'giza-basketball-zone',
    title: 'Social Media Manager',
    company: 'Giza Basketball Zone',
    type: 'Tournament Media',
    period: 'Zones Tournament',
    location: 'Giza, Egypt',
    description:
      'Selected to manage the multi-platform social media presence of Giza Basketball Zone across Instagram, Facebook, and TikTok during the zones tournament. Managed tournament content strategy, match coverage, photography, video production, and social publishing, scaling page views from 54K at takeover to more than 750K views.',
    highlights: [
      'Managed multi-platform social media presence across Instagram, Facebook, and TikTok for zones tournament',
      'Scaled total page views from 54K at takeover to 750K+ current views during tournament coverage',
      'Executed match coverage, action photography, short-form video clips, engagement campaigns, and publishing schedules',
    ],
    skills: ['Social Media Management', 'Instagram', 'Facebook', 'TikTok', 'Match Coverage', 'Performance Tracking'],
  },
  {
    id: 'creative-freelance',
    title: 'Graphic Designer & Sports Photographer',
    company: 'Freelance & Media Partnerships',
    type: 'Freelance',
    period: 'Cairo, Egypt',
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
      name: 'Sports Media',
      items: ['Sports Photography', 'Match Coverage', 'Tournament Coverage', 'Sports Storytelling', 'Player/Team Content'],
    },
    {
      name: 'Social Media',
      items: ['Instagram Management', 'Facebook Management', 'TikTok Management', 'Content Strategy', 'Social Media Growth', 'Performance Tracking'],
    },
    {
      name: 'Creative',
      items: ['Graphic Design', 'Visual Content', 'Branding', 'Social Media Design'],
    },
    {
      name: 'Video',
      items: ['Reels', 'Short-form Video', 'Video Editing'],
    },
    {
      name: 'Tools',
      items: ['Photoshop', 'Canva', 'DaVinci Resolve'],
    },
  ],
  tools: [
    { name: 'Photoshop', icon: 'photoshop', category: 'Tools' },
    { name: 'Canva', icon: 'canva', category: 'Tools' },
    { name: 'DaVinci Resolve', icon: 'davinci', category: 'Tools' },
    { name: 'Instagram', icon: 'instagram', category: 'Social Media' },
    { name: 'Sports Camera', icon: 'camera', category: 'Sports Media' },
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

