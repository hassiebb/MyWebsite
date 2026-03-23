/**
 * PORTFOLIO CONFIGURATION - Template for easy content management
 */
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Mohammad Hassieb",
    photo: "assets/img/My photo.png",
    location: "Makka al Mokarma Street · Hadaaiek Al Kobba, Cairo",
    phone: "+20 01211494107",
    email: "mohammadhassieb@gmail.com",
    cvPath: "assets/img/Mohammad Hassieb resume.pdf",
    social: [
      { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/mo-hassieb/", label: "LinkedIn" },
      { icon: "fab fa-github", url: "https://github.com/hassiebb", label: "GitHub" },
      { icon: "fab fa-whatsapp", url: "https://wa.link/fthmku", label: "WhatsApp" },
      { icon: "fab fa-instagram", url: "https://www.instagram.com/mhassieb_/", label: "Instagram" },
      { icon: "fab fa-youtube", url: "https://www.youtube.com/@Mohammad_Hassieb", label: "YouTube" },
    ],
  },

  tech: {
    title: "Tech",
    subtitle: "Software Engineer & Developer",
    about: "I'm a hybrid professional—developer and creative. I build with SAP ABAP and frontend technologies, and I create in sports media (basketball). I combine technical precision with visual storytelling to deliver results that work.",
    experience: [
      {
        title: "SAP ABAP Developer",
        company: "[Company Name]",
        type: "Full-time",
        period: "[Period]",
        location: "Cairo, Egypt",
        description: "Started as intern, promoted to full-time. Delivered reports, ALV, Adobe Forms, enhancements, and debugging. Gained exposure to SAP BTP.",
        highlights: [
          "Intern → full-time employee",
          "Reports, ALV Reports, Adobe Forms, debugging, enhancements",
          "Exposure to SAP BTP",
        ],
        skills: "ABAP · SAP Reports · Adobe Forms · Function Modules · Debugging",
      },
      {
        title: "Frontend Developer",
        company: "Freelance",
        type: "Freelance",
        period: "[Period]",
        location: "Remote",
        description: "Built responsive websites for clients using HTML, CSS, JavaScript, and React. Delivered projects independently from concept to deployment.",
        highlights: [
          "Responsive websites: HTML, CSS, JS, React",
          "End-to-end client delivery",
        ],
        skills: "React · Responsive Design · Git",
      },
      {
        title: "Graphic Designer & Sports Photographer",
        company: "Freelance",
        type: "Freelance",
        period: "[Period]",
        location: "Cairo, Egypt",
        description: "Designed graphics for teams and players. Shot games, portraits, and events. Known for fast delivery and a distinct sports visual style.",
        highlights: [
          "Graphics for teams and players",
          "Game photography, portraits, events",
          "Fast delivery, unique sports style",
        ],
        skills: "Photoshop · Canva · Sports Photography",
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "Modern University for Technology & Information (MTI)",
        track: "Computer Science Track",
        period: "[Graduation Year]",
        expectedGrad: null,
        gpa: null,
        skills: null,
      },
    ],
    skills: {
      categories: [
        {
          name: "Programming",
          items: ["JavaScript", "HTML", "CSS", "ABAP"],
        },
        {
          name: "Frameworks & Libraries",
          items: ["React", "Bootstrap"],
        },
        {
          name: "SAP",
          items: ["Reports", "ALV Reports", "Adobe Forms", "Enhancements", "Function Modules", "Debugging", "SAP BTP (basic exposure)"],
        },
        {
          name: "Tools",
          items: ["Git", "Responsive Design"],
        },
      ],
      tools: [
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "Git", icon: "fab fa-git-alt" },
      ],
    },
    projects: [
      {
        title: "Portfolio Website",
        type: "Personal",
        period: "Present",
        description: "Personal website showcasing projects and skills. Focus on responsive design and clean UI.",
        link: null,
        github: "https://github.com/hassiebb",
      },
      {
        title: "Trend / GALA Media Website",
        type: "Freelance",
        period: "[Year]",
        description: "Built for a media company using frontend technologies. Focused on performance and user experience.",
        link: null,
        github: null,
      },
    ],
  },

  creative: {
    title: "Creative",
    subtitle: "Graphic Designer & Sports Photographer",
    about: "I blend graphic design and sports photography to tell visual stories. My focus is the basketball niche—teams, players, and the energy of the game.",
    creativeIntro: "Graphic design and sports photography are at the core of my creative work. I focus on visual storytelling with a clear niche: basketball.",
    photographyIntro: "I shoot basketball games, teams, and players. Coming from a background as a player and referee, I understand the game—which helps me capture key moments.",
    achievements: [
      "1.5M+ views on Instagram within 2 months",
      "3.1K+ followers in the same period",
      "Worked with teams like Al Dakhlia",
      "Worked with players from Zamalek, Al Ahly, Gezira",
      "Built content for referees—first in Egypt",
      "Referee-focused page with 600+ followers",
      "Collaborated with Cairo Basketball Zone",
    ],
    experience: [
      {
        title: "Graphic Designer & Sports Photographer",
        company: "Freelance",
        type: "Freelance",
        period: "[Period]",
        location: "Cairo, Egypt",
        description: "Designed graphics for teams and players. Shot games, portraits, and events. Known for fast delivery and a distinct sports visual style.",
        highlights: [
          "Graphics for teams and players",
          "Game photography, portraits, events",
          "Fast delivery, unique sports style",
        ],
        skills: "Photoshop · Canva · Sports Photography",
      },
    ],
    education: [],
    skills: {
      categories: [
        {
          name: "Design",
          items: ["Photoshop", "Canva"],
        },
        {
          name: "Video",
          items: ["DaVinci Resolve"],
        },
        {
          name: "Development",
          items: ["React", "Git"],
        },
      ],
      tools: [
        { name: "Photoshop", icon: "fas fa-image" },
        { name: "Canva", icon: "fas fa-palette" },
        { name: "DaVinci Resolve", icon: "fas fa-video" },
      ],
    },
    projects: [],
  },

  contact: {
    cta: "Open to collaboration and job opportunities. Let's connect.",
    email: "mohammadhassieb@gmail.com",
    linkedin: "https://www.linkedin.com/in/mo-hassieb/",
    instagram: "https://www.instagram.com/mhassieb_/",
  },
};
