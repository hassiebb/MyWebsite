import {
  AchievementItem,
  ExperienceItem,
  GalleryItem,
  GraphicDesignItem,
  SkillCategory,
  SkillTool,
  SocialMediaCaseStudy,
} from '../types/portfolio';

export const creativeAbout =
  'Sports Media Specialist, Social Media Manager, Sports Photographer, and Graphic Designer managing official national sports federations — the Egyptian Table Tennis Federation (ETTF) and the Egyptian Volleyball Federation (EVBF) — alongside founding and scaling Full Court (@fullcourt.eg). Specialized in 5-platform social strategy (Facebook, Instagram, X, YouTube, TikTok), courtside action photography, and high-impact sports graphic design — driving 15M+ Instagram views, 5M+ Facebook views, and rapid community growth.';

export const socialMediaIntro =
  'Official social media management for national sports federations (ETTF & EVBF) and digital sports brands — delivering multi-platform content strategy, short-form Reels/TikTok production, and real-time championship coverage.';

export const photographyIntro =
  'Courtside live basketball coverage, high-stakes championship finals, team portraits, and editorial athlete profiles. Coming from a background as both a player and referee, I anticipate decisive moments on the court before they happen.';

export const graphicDesignIntro =
  'High-energy match-day posters, starting lineup graphics, official club scoreboards, and custom athlete visual identities crafted for maximum social engagement and brand authority.';

// 1. SOCIAL MEDIA MANAGEMENT SECTION DATA
export const socialMediaCaseStudies: SocialMediaCaseStudy[] = [
  {
    id: 'ettf-social',
    brand: 'Egyptian Table Tennis Federation (ETTF)',
    role: 'Social Media Manager / Specialist',
    period: 'August 2026 - Present',
    summary:
      'Managing the official digital presence of the Egyptian Table Tennis Federation across 5 social media platforms (Facebook, Instagram, X, YouTube, and TikTok). Took over the accounts with 24K Facebook followers and 500 Instagram followers, scaling them to 40K+ on Facebook and 3K+ on Instagram, and producing a viral Reel that reached 2.2M+ views within the first week.',
    platforms: ['Facebook', 'Instagram', 'X', 'YouTube', 'TikTok'],
    metrics: [
      { label: 'Facebook Followers', value: '40K+', growth: 'Up from 24K' },
      { label: 'Instagram Followers', value: '3K+', growth: 'Up from 500 (6x)' },
      { label: 'Platforms Managed', value: '5 Channels', growth: 'FB · IG · X · YT · TikTok' },
    ],
    strategyHighlights: [
      'Grew official Facebook audience from 24,000 to 40,000+ followers since August 2026',
      'Scaled official Instagram community 6x from 500 to 3,000+ active followers',
      'Produced a breakout Reel that reached 2.2M+ views within the first week of joining ETTF',
      'Responsible for end-to-end management across 5 official platforms: Facebook, Instagram, X, YouTube, and TikTok',
    ],
    links: [
      { label: 'Instagram (@ettf_eg)', url: 'https://www.instagram.com/ettf_eg/' },
      { label: 'Facebook', url: 'https://www.facebook.com/Ettf.eg' },
      { label: 'TikTok (@ettf.eg)', url: 'https://www.tiktok.com/@ettf.eg' },
      { label: 'YouTube (@ETTF)', url: 'https://www.youtube.com/@ETTF-EG' },
    ],
    featured: true,
  },
  {
    id: 'evbf-social',
    brand: 'Egyptian Volleyball Federation (EVBF)',
    role: 'Social Media Manager',
    period: 'November 2026 - Present',
    summary:
      'Appointed in November 2026 as the official Social Media Manager for the Egyptian Volleyball Federation (EVBF). Leading the federation’s digital transformation, content calendar, live national team and league coverage, and multi-platform community engagement.',
    platforms: ['Facebook', 'Instagram', 'TikTok'],
    metrics: [
      { label: 'Official Federation', value: 'EVBF', growth: 'National Governing Body' },
      { label: 'Tenure Started', value: 'Nov 2026', growth: 'Active Role' },
      { label: 'Scope', value: 'Full-Stack', growth: 'Strategy & Coverage' },
    ],
    strategyHighlights: [
      'Newly onboarded in November 2026 to lead official social media operations for the Egyptian Volleyball Federation',
      'Structuring multi-platform content strategy for national teams, domestic leagues, and official federation announcements',
      'Establishing cohesive match-day visual templates, real-time score updates, and short-form video workflows',
      'Driving audience engagement and modernizing digital storytelling for Egyptian volleyball',
    ],
    featured: true,
  },
  {
    id: 'full-court-social',
    brand: 'Full Court (@fullcourt.eg)',
    role: 'Founder & Sports Media Director',
    period: 'Feb 2026 - Present',
    summary:
      'Built and scaled Full Court from zero into a flagship Egyptian basketball media platform. Grown to 10K+ followers on both Instagram and Facebook, generating 15M+ Instagram views and 5M+ Facebook views in 6 months while coordinating a multi-court media team and partnering with NBA Jr. Egypt, EBF, Cairo & Giza Zones, and NBA Outlet.',
    platforms: ['Instagram', 'Facebook', 'TikTok'],
    metrics: [
      { label: 'IG & FB Community', value: '10K+', growth: 'On Both Platforms' },
      { label: 'Instagram Views', value: '15M+', growth: 'In 6 Months' },
      { label: 'Facebook Views', value: '5M+', growth: 'Organic Reach' },
    ],
    strategyHighlights: [
      'Built the platform to 10K+ followers on Instagram and Facebook, generating 15M+ IG views and 5M+ FB views',
      'Lead game and tournament coverage including photography, social media, graphics, Reels, Stories, and written content',
      'Manage and coordinate a media team across multiple courts and simultaneous games',
      'Key partnerships: NBA Jr. Egypt, Egyptian Basketball Federation, Cairo & Giza Basketball Zones, NBA Outlet, and Champiqo',
    ],
    links: [
      { label: 'Instagram (@fullcourt.eg)', url: 'https://www.instagram.com/fullcourt.eg/' },
      { label: 'Facebook', url: 'https://www.facebook.com/FullCourtEG' },
    ],
    featured: true,
    // image: '/creative/social/full-court-case.png',
  },
  {
    id: 'giza-zone-social',
    brand: 'Giza Basketball Zone',
    role: 'Social Media Manager (Tournament Takeover)',
    period: 'Zones Tournament',
    summary:
      'Selected to lead multi-platform social media management across Instagram, Facebook, and TikTok during the official Zones Tournament. Overhauled content velocity, visual quality, and video coverage.',
    platforms: ['Instagram', 'Facebook', 'TikTok'],
    metrics: [
      { label: 'Total Page Views', value: '750K+', growth: 'Up from 54K (~14x)' },
      { label: 'Platforms Managed', value: '3 Channels', growth: 'IG · FB · TikTok' },
      { label: 'Coverage Turnaround', value: 'Same-Day', growth: 'Live Match Reels' },
    ],
    strategyHighlights: [
      'Scaled page reach from 54,000 views at takeover to over 750,000+ views during the tournament window',
      'Coordinated daily courtside action clips, schedule graphics, and post-match score updates',
      'Cross-posted tailored vertical video cuts for Instagram Reels, TikTok, and Facebook Reels',
      'Tracked audience analytics and peak engagement hours to optimize tournament posting cadence',
    ],
    featured: true,
    // image: '/creative/social/giza-zone-case.png',
  },
];

export const creativeAchievements: AchievementItem[] = [
  {
    id: 'ettf-growth',
    title: 'ETTF Growth: 24K → 40K+ FB & 500 → 3K+ IG',
    description:
      'Scaled the Egyptian Table Tennis Federation (ETTF) from 24K to 40K+ Facebook followers and 500 to 3K+ Instagram followers since August 2026 across 5 platforms (FB, IG, X, YouTube, TikTok).',
    metric: '40K+ FB · 3K+ IG',
    highlight: true,
  },
  {
    id: 'evbf-appointment',
    title: 'Egyptian Volleyball Federation (EVBF) SMM',
    description:
      'Appointed in November 2026 as official Social Media Manager for the Egyptian Volleyball Federation to lead digital strategy and championship coverage.',
    metric: 'Nov 2026 - Present',
    highlight: true,
  },
  {
    id: 'fullcourt-followers',
    title: '10K+ Followers on Instagram & Facebook',
    description: 'Built Full Court digital media brand from scratch, growing active communities beyond 10,000 followers on both platforms.',
    metric: '10K+ IG & FB',
    highlight: true,
  },
  {
    id: 'fullcourt-views',
    title: '15M+ IG Views & 5M+ FB Views on Full Court',
    description: 'Generated 15M+ Instagram views and 5M+ Facebook views across match coverage, photography reels, and basketball highlights in 6 months.',
    metric: '20M+ Total Views',
    highlight: true,
  },
  {
    id: 'ettf-viral-reel',
    title: '2.2M+ Views on a Single ETTF Reel',
    description: 'Produced a viral table tennis Reel that reached 2.2M+ views within the first week of joining the Egyptian Table Tennis Federation.',
    metric: '2.2M+ Reel Views',
    highlight: true,
  },
  {
    id: 'nba-jr-egypt',
    title: 'Official Media Coverage for NBA Jr. Egypt',
    description: 'Officially invited by the Egyptian organizers to cover the NBA Jr. Egypt event — delivering event photography, Stories, graphics, and interviews.',
    metric: 'NBA Jr. Egypt',
    highlight: true,
  },
  {
    id: 'giza-zone-growth',
    title: '54K → 750K+ Page Views Growth',
    description: 'Managed social media presence for Giza Basketball Zone during zones tournament, expanding page views from 54K to over 750K.',
    metric: '750K+ Views',
    highlight: true,
  },
  {
    id: 'team-dakhlia',
    title: 'Official Media Partner for Al Dakhlia',
    description: 'Delivered official game-day graphics, player roster assets, and match photography coverage.',
    metric: 'Club Partner',
  },
  {
    id: 'top-clubs',
    title: 'Elite Club Athlete Collaborations',
    description: 'Created custom visual identities and portraits for athletes from top Egyptian clubs: Zamalek, Al Ahly, and Gezira.',
    metric: 'Elite Athletes',
  },
  {
    id: 'referee-content',
    title: 'Pioneered Referee Media in Egypt',
    description: 'First creative in Egypt to build dedicated, high-production visual content spotlighting basketball referees.',
    metric: 'Industry First',
  },
];

// 2. SPORTS PHOTOGRAPHY SECTION DATA
export const creativeGallery: GalleryItem[] = [
  {
    id: 'photo-courtside-intensity',
    title: 'Courtside Championship Intensity',
    category: 'Live Match Action',
    aspectRatio: 'landscape',
    description: 'High-shutter courtside capture freezing peak athletic motion during an Egyptian league matchup.',
    year: '2024',
    location: 'Cairo, Egypt',
    tags: ['Fast Shutter', 'Courtside', 'Basketball'],
    // image: '/creative/photography/courtside-1.jpg',
  },
  {
    id: 'photo-elite-portrait',
    title: 'Elite Club Athlete Portrait',
    category: 'Player Portraits',
    aspectRatio: 'portrait',
    description: 'Dramatic editorial lighting and composition for professional players from Al Ahly, Zamalek, and Gezira.',
    year: '2024',
    location: 'Cairo, Egypt',
    tags: ['Portrait', 'Lighting', 'Elite Athletes'],
    // image: '/creative/photography/portrait-1.jpg',
  },
  {
    id: 'photo-championship-celebration',
    title: 'Trophy & Victory Emotion',
    category: 'Championships',
    aspectRatio: 'landscape',
    description: 'Raw emotional peak captured immediately at the final buzzer under arena spotlights.',
    year: '2024',
    location: 'Giza, Egypt',
    tags: ['Championship', 'Storytelling', 'Arena'],
    // image: '/creative/photography/championship-1.jpg',
  },
  {
    id: 'photo-referee-spotlight',
    title: 'Commanding the Court — Referee Series',
    category: 'Referee Spotlight',
    aspectRatio: 'portrait',
    description: 'Pioneering visual series in Egypt dedicated to capturing the focus, authority, and humanity of game officials.',
    year: '2024',
    location: 'Egypt',
    tags: ['Referee Media', 'Editorial', 'First in Egypt'],
    // image: '/creative/photography/referee-1.jpg',
  },
];

// 3. GRAPHIC DESIGN SECTION DATA
export const graphicDesignGallery: GraphicDesignItem[] = [
  {
    id: 'design-gameday-poster',
    title: 'Match-Day Hype Poster',
    client: 'Al Dakhlia Basketball',
    category: 'Match-Day Graphics',
    aspectRatio: 'portrait',
    description: 'High-contrast match announcement poster featuring custom player cutouts, rim lighting, and bold kinetic typography.',
    year: '2024',
    tools: ['Adobe Photoshop'],
    tags: ['Match Poster', 'Photo Manipulation', 'Club Media'],
    // image: '/creative/design/gameday-1.jpg',
  },
  {
    id: 'design-starting-lineup',
    title: 'Official Starting V & Final Score',
    client: 'Al Dakhlia / Full Court',
    category: 'Roster & Lineups',
    aspectRatio: 'square',
    description: 'Modular social media template system designed for rapid game-day turnaround of starting lineups and quarter/final scores.',
    year: '2024',
    tools: ['Adobe Photoshop', 'Canva'],
    tags: ['Starting Lineup', 'Scoreboard', 'Fast Turnaround'],
    // image: '/creative/design/lineup-1.jpg',
  },
  {
    id: 'design-athlete-branding',
    title: 'Pro Athlete Visual Identity',
    client: 'Zamalek / Al Ahly / Gezira Players',
    category: 'Athlete Branding',
    aspectRatio: 'portrait',
    description: 'Custom-crafted personal brand posters and highlight covers tailored for premier Egyptian basketball athletes.',
    year: '2024',
    tools: ['Adobe Photoshop'],
    tags: ['Athlete Branding', 'Poster Design', 'Typography'],
    // image: '/creative/design/athlete-1.jpg',
  },
  {
    id: 'design-tournament-identity',
    title: 'Zones Tournament Visual Package',
    client: 'Giza Basketball Zone',
    category: 'Tournament Identity',
    aspectRatio: 'square',
    description: 'Complete cohesive social media graphic suite covering tournament brackets, MVP announcements, and daily fixtures.',
    year: '2024',
    tools: ['Adobe Photoshop', 'Canva'],
    tags: ['Tournament Branding', 'Social Suite', 'Giza Zone'],
    // image: '/creative/design/tournament-1.jpg',
  },
];

export const creativeExperience: ExperienceItem[] = [
  {
    id: 'ettf-social-manager',
    title: 'Social Media Manager / Specialist',
    company: 'Egyptian Table Tennis Federation (ETTF)',
    type: 'National Sports Federation',
    period: 'August 2026 - Present',
    location: 'Cairo, Egypt',
    description:
      'Leading the official digital presence and multi-platform social strategy for the Egyptian Table Tennis Federation (ETTF) across 5 platforms (Facebook, Instagram, X, YouTube, and TikTok). Took over the channels in August 2026 with 24K Facebook followers and 500 Instagram followers, scaling them to 40K+ on Facebook and 3K+ on Instagram.',
    highlights: [
      'Scaled official Facebook audience from 24K to 40K+ followers and Instagram from 500 to 3K+ followers since August 2026',
      'Produced a viral Reel that reached 2.2M+ views within the first week of joining ETTF',
      'Directly responsible for managing 5 official social media platforms: Facebook, Instagram, X, YouTube, and TikTok',
      'Executed real-time national and international tournament coverage, match-day graphics, and short-form video reels',
    ],
    skills: ['Social Media Management', 'Facebook', 'Instagram', 'X (Twitter)', 'YouTube', 'TikTok', 'Audience Growth', 'Federation Media'],
  },
  {
    id: 'evbf-social-manager',
    title: 'Social Media Manager / Specialist',
    company: 'Egyptian Volleyball Federation (EVBF)',
    type: 'National Sports Federation',
    period: 'November 2026 - Present',
    location: 'Cairo, Egypt',
    description:
      'Appointed in November 2026 as the Social Media Manager for the Egyptian Volleyball Federation (EVBF). Overseeing official digital communications, league and national team coverage, visual branding, and community growth across federation platforms.',
    highlights: [
      'Assumed leadership of official Egyptian Volleyball Federation social media channels in November 2026',
      'Developing end-to-end content strategy for national volleyball leagues, championships, and national team campaigns',
      'Coordinating real-time match updates, graphic design templates, and multimedia coverage',
    ],
    skills: ['Social Media Management', 'Content Strategy', 'Federation Media', 'Sports Coverage', 'Brand Direction'],
  },
  {
    id: 'full-court-media',
    title: 'Founder & Sports Media Director',
    company: 'Full Court (@fullcourt.eg)',
    type: 'Digital Media Brand',
    period: 'Feb 2026 - Present',
    location: 'Cairo, Egypt',
    description:
      'Built and developed Full Court into a flagship basketball media platform covering tournaments, teams, players, and basketball events across Egypt. Grown to 10K+ followers on both Instagram and Facebook, generating 15M+ Instagram views and 5M+ Facebook views in 6 months.',
    highlights: [
      'Built the platform to 10K+ followers on Instagram and Facebook, generating 15M+ Instagram views and 5M+ Facebook views in 6 months',
      'Lead game and tournament coverage including photography, social media, graphics, Reels, Stories, and written content',
      'Manage and coordinate a media team across multiple courts and simultaneous games',
      'Key partnerships: NBA Jr. Egypt, Egyptian Basketball Federation, Cairo Basketball Zone, Giza Basketball Zone, NBA Outlet, and Champiqo',
    ],
    skills: ['Social Media Strategy', 'Sports Photography', 'Graphic Design', 'Reels / TikTok', 'Team Coordination', 'Brand Partnerships'],
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
      'Scaled total page views from 54K at takeover to 750K+ views during tournament coverage',
      'Executed match coverage, action photography, short-form video clips, engagement campaigns, and publishing schedules',
    ],
    skills: ['Social Media Management', 'Instagram', 'Facebook', 'TikTok', 'Match Coverage', 'Analytics'],
  },
  {
    id: 'creative-freelance',
    title: 'Graphic Designer & Sports Photographer',
    company: 'Clubs, Federations & Elite Athletes',
    type: 'Freelance & Partnerships',
    period: 'Cairo, Egypt',
    location: 'Cairo, Egypt',
    description:
      'Produced high-energy visual graphics, match-day posters, and courtside photography for premier clubs (including official media for Al Dakhlia), tournament organizers, and athletes from Al Ahly, Zamalek, and Gezira.',
    highlights: [
      'High-impact match posters, starting lineup graphics, and official club tournament branding',
      'Courtside high-speed action photography, athlete portraits, and championship coverage',
      'Rapid same-day turnaround tailored for instant post-game social media engagement',
      'Pioneered dedicated high-production visual content spotlighting basketball referees in Egypt',
    ],
    skills: ['Adobe Photoshop', 'Canva', 'Sports Photography', 'DaVinci Resolve', 'Athlete Branding', 'Editorial Design'],
  },
];

export const creativeSkills: {
  categories: SkillCategory[];
  tools: SkillTool[];
} = {
  categories: [
    {
      name: 'Social Media & Growth',
      items: ['Facebook Management', 'Instagram Management', 'X (Twitter) Management', 'YouTube Channel Strategy', 'TikTok Strategy', 'Content Calendars', 'Reels & Short-Form Video', 'Analytics & Reach Optimization'],
    },
    {
      name: 'Sports Photography',
      items: ['Courtside Action Photography', 'High-Speed Shutter Capture', 'Athlete Editorial Portraits', 'Championship Event Coverage', 'Color Grading & Retouching'],
    },
    {
      name: 'Graphic Design & Branding',
      items: ['Match-Day Posters', 'Starting Lineups & Scoreboards', 'Athlete Visual Identities', 'Tournament Branding Packages', 'Typography & Compositing'],
    },
    {
      name: 'Creative Software & Analytics',
      items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut', 'Canva', 'Figma', 'Meta Business Suite'],
    },
  ],
  tools: [
    { name: 'Adobe Photoshop', icon: 'photoshop', category: 'Design & Photo' },
    { name: 'Adobe Lightroom', icon: 'lightroom', category: 'Photography' },
    { name: 'Premiere Pro & After Effects', icon: 'premiere', category: 'Video' },
    { name: 'DaVinci Resolve & CapCut', icon: 'davinci', category: 'Video Editing' },
    { name: 'Illustrator & Figma', icon: 'illustrator', category: 'Design' },
    { name: 'Canva Pro', icon: 'canva', category: 'Fast Turnaround' },
    { name: 'Meta Business Suite', icon: 'meta', category: 'Social Media' },
    { name: 'IG · FB · TikTok Analytics', icon: 'analytics', category: 'Growth' },
  ],
};
