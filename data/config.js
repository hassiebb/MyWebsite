/**
 * PORTFOLIO CONFIGURATION - Template for easy content management
 * Add/remove items in arrays to update your portfolio. Each section (Tech/Creative) has its own content.
 */
const PORTFOLIO_CONFIG = {
  // Shared info (used in both sections)
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

  // TECH / PROGRAMMING SECTION
  tech: {
    title: "Tech",
    subtitle: "Software Engineer & Developer",
    about: "As a skilled Front End Developer, I am driven to continuously expand my knowledge and gain practical experience through various internship opportunities. With a strong foundation in HTML, CSS, and JavaScript, I am eager to apply my technical skills and contribute to a company's success. I am eager to continue my professional growth and become a valuable asset to any team I join.",
    experience: [
      {
        title: "Software Engineer",
        company: "alx_africa",
        type: "Internship",
        period: "Jan 2023 - Present",
        location: "Cairo, Egypt · Remote",
        description: "ALX is a top-tier talent accelerator that prepares ambitious individuals to excel in the technology industry. During my software engineering internship with ALX, I gained hands-on experience working on real-world projects, collaborated with other interns and industry professionals, and developed essential skills in software development including problem-solving, coding, and testing. I emerged with a deeper understanding of the software development life cycle and the confidence to tackle complex problems.",
        highlights: [
          "Hands-on experience on real-world projects",
          "Collaboration with interns and industry professionals",
          "Problem-solving, coding, and testing",
        ],
        skills: "Software Development · Shell Scripting · C · Git · GitHub · Python",
      },
      {
        title: "Basketball Referee",
        company: "Egyptian basketball federation",
        type: "Part-time",
        period: "Sep 2018 - Present",
        location: "Cairo, Egypt · On-site",
        description: "Served as a referee for various local matches across different age groups. Led teams of referees during camps and participated in extensive training programs conducted by renowned Egyptian and foreign trainers.",
        highlights: [
          "Refereeing local matches across age groups 9-30",
          "Camp leadership and referee team coordination",
          "Professional training with Egyptian and international trainers",
        ],
        skills: "Leadership · Stress Management · Negotiation · Decision-Making",
      },
      {
        title: "Vendor (Organizer)",
        company: "Basketball Africa League (BAL)",
        type: "Part-time",
        period: "Apr 2023 - May 2023",
        location: "6th of October, Giza, Egypt · On-site",
        description: "As a vendor for the VIP section of the BAL, I provided exceptional service to distinguished guests. My role involved anticipating and fulfilling their needs, ensuring their comfort, and representing the BAL in a professional manner.",
        highlights: [
          "Exceptional customer service in VIP section",
          "Working effectively under pressure",
          "Contributing to inaugural BAL season success",
        ],
        skills: "Customer Service · Communication · Teamwork · Stress Management",
      },
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "Modern University for Technology & Information - MTI",
        track: "Computer Science Track",
        period: "September 2020 - Present",
        expectedGrad: "2024",
        gpa: "2.9",
        skills: "Software Development · Web Development · Front-End Development · Problem Solving · AI · CSS · Data Structures · C++ · Algorithms · OOP · Java · Python · SQL · Adobe Photoshop",
      },
    ],
    skills: {
      tools: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "React", icon: "fab fa-react" },
        { name: "Node.js", icon: "fab fa-node-js" },
        { name: "Figma", icon: "fab fa-figma" },
      ],
      workflow: [
        "Proficient in HTML, CSS and JavaScript",
        "Experience with front-end frameworks such as React",
        "Good with version control systems such as Git",
        "Good understanding of responsive design and mobile optimization",
        "Strong problem-solving skills",
      ],
    },
    projects: [
      {
        title: "My website resume",
        type: "Self Project",
        period: "Nov 2022 - Present",
        description: "Personal website showcasing professional profile and portfolio. Built with HTML, CSS, JavaScript and Bootstrap. Includes skills, work experiences, social media links, CV, and hobbies.",
        link: null,
        github: "https://github.com/hassiebb",
      },
      {
        title: "Tic Tac Toe game with AI player",
        type: "Self Project",
        period: "Jan 2023 - Feb 2023",
        description: "Tic Tac Toe game using HTML, CSS, and JavaScript, featuring an unbeatable AI player utilizing the minimax algorithm.",
        link: "https://hassiebb.github.io/Tic-Tac-Toe-website/",
        github: "https://github.com/hassiebb",
      },
      {
        title: "Calculator website",
        type: "Self Project",
        period: "Dec 2022 - Jan 2023",
        description: "User-friendly, responsive calculator with customizable light and dark themes. Optimized for all screen sizes.",
        link: "https://hassiebb.github.io/calculatorWebsite/",
        github: "https://github.com/hassiebb",
      },
      {
        title: "Landing page for e-commerce clothing shop",
        type: "Self Project",
        period: "Nov 2022 - Dec 2022",
        description: "Fully responsive landing page with light/dark mode. Adaptable for e-commerce and Shopify needs.",
        link: "https://hassiebb.github.io/landingWebsite/",
        github: "https://github.com/hassiebb",
      },
    ],
  },

  // CREATIVE SECTION (Graphic Design / Photography)
  creative: {
    title: "Creative",
    subtitle: "Graphic Designer & Photographer",
    about: "With a passion for visual storytelling, I blend graphic design and photography to create compelling narratives. I bring creative concepts to life through thoughtful composition, color theory, and attention to detail. From digital design in Adobe Creative Suite to capturing moments through the lens, I strive to deliver work that resonates and inspires.",
    experience: [
      // Add your creative work experience here - same structure as tech experience
      // Example:
      // {
      //   title: "Freelance Graphic Designer",
      //   company: "Self-employed",
      //   type: "Freelance",
      //   period: "2020 - Present",
      //   location: "Cairo, Egypt",
      //   description: "...",
      //   highlights: ["..."],
      //   skills: "...",
      // },
    ],
    education: [
      // Add creative education if different from tech
      // Leave empty to use shared education or duplicate from tech
    ],
    skills: {
      tools: [
        { name: "Adobe Photoshop", icon: "fas fa-image" },
        { name: "Adobe Illustrator", icon: "fas fa-pen-fancy" },
        { name: "Lightroom", icon: "fas fa-camera" },
        { name: "Figma", icon: "fab fa-figma" },
      ],
      workflow: [
        "Photo editing and retouching",
        "Brand identity and logo design",
        "Social media graphics",
        "Understanding of color theory and composition",
        "UX/UI design principles",
      ],
    },
    projects: [
      // Add your creative projects (design work, photography portfolios, etc.)
      // Example:
      // {
      //   title: "Brand Identity for X",
      //   type: "Client Project",
      //   period: "2023",
      //   description: "...",
      //   link: "...",
      //   image: "assets/img/creative-project-1.jpg",
      // },
    ],
    gallery: [
      // Optional: Add image paths for a photography/design gallery
      // "assets/img/gallery/1.jpg",
    ],
  },
};
