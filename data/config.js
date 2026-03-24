/**
 * PORTFOLIO CONFIGURATION - Template for easy content management
 */
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Mohammad Hassieb",
    photo: "assets/img/My photo2.png",
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
    about: "Junior Software Developer with 3+ years of combined experience in frontend development and SAP ABAP within both freelance and corporate environments. Skilled in developing SAP solutions including reports, ALV reports, Adobe Forms, and enhancements, with exposure to SAP BTP. Proficient in building responsive web applications using HTML, CSS, JavaScript, and React. Demonstrates strong adaptability, problem-solving skills, and the ability to deliver real-world projects independently.",
    experience: [
      {
        title: "SAP ABAP Developer",
        company: "Accely",
        type: "Full-time",
        period: "January 2024 - January 2025 (1 year)",
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
        period: "July 2023 - Present (2 years 9 months)",
        location: "Remote",
        description: "Built responsive websites for clients using HTML, CSS, JavaScript, and React. Delivered projects independently from concept to deployment.",
        highlights: [
          "Responsive websites: HTML, CSS, JS, React",
          "End-to-end client delivery",
        ],
        skills: "React · Responsive Design · Git",
      },
      {
        title: "ECM Consultant",
        company: "ASSET Technology Group",
        type: "Internship",
        period: "July 2025 - August 2025 (2 months)",
        location: "Cairo, Egypt",
        description: "Short-term internship focused on ECM solutions. Gained insights into enterprise content management and related technologies.",
        highlights: [
          "ECM solutions implementation",
          "Enterprise content management",
          "Related technologies exposure",
        ],
        skills: "ECM · Enterprise Content Management",
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "Modern University for Technology & Information (MTI)",
        track: "Computer Science Track",
        period: "2024",
        expectedGrad: "Graduated",
        gpa: "",
        skills: "HTML · CSS · JavaScript · React · Bootstrap · Git · Responsive Design",
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
          items: ["React", "Bootstrap" , "Material-UI"],
        },
        {
          name: "SAP Technologies",
          items: ["Reports", "ALV Reports", "Adobe Forms", "Enhancements", "Function Modules", "Debugging", "SAP BTP (basic exposure)"],
        },
        {
          name: "Tools",
          items: ["Git", "Responsive Design" , "VS Code", "SAP GUI"],
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
        link: "null",
        github: "https://github.com/hassiebb/MyWebsite",
      },
      {
        title: "Trend / GALA Media Website",
        type: "Freelance",
        period: "Sep 2024 - Dec 2024 (4 months)",
        description: "Built for a media company using frontend technologies. Focused on performance and user experience.",
        link: "https://trendeg.net/",
        github: null,
      },
      {
        title: "Home Sphere Website (Graduation Project)",
        type: "Personal/Academic",
        period: "Jun 2024 - Sep 2024 (4 months)",
        description: "Graduation project focusing on creating a responsive website for a smart home system application.",
        link: "https://hassiebb.github.io/Home-Sphere/",
        github: "https://github.com/hassiebb/Home-Sphere",
      },
      {
        title: "Landing page for an e-commerce clothing shop",
        type: "Personal/Academic",
        period: "Nov 2022 - Dec 2022 (2 months)",
        description: "Created a landing page for an e-commerce clothing shop, focusing on user experience and conversion optimization.",
        link: "https://hassiebb.github.io/landingWebsite/",
        github: "https://github.com/hassiebb/landingWebsite",
      },
      {
        title: "Pets adoption website",
        type: "Personal/Academic",
        period: "Nov 2022 - Dec 2022 (2 months)",
        description: "Developed a website for a pet adoption platform, focusing on user experience and accessibility.",
        link: "https://hassiebb.github.io/sw-project/",
        github: "https://github.com/hassiebb/sw-project",
      },

    ],
      
    
  },

  creative: {
    title: "Creative",
    subtitle: "Graphic Designer & Sports Photographer",
    about: "Graphic Designer & Sports Photographer specializing in basketball media, with proven success in building engaging visual content. Grew a sports platform to 1.5M+ views and 3K+ followers within 2 months, working with teams, players, and referees.",
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
