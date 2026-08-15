# Mohammad Hassieb — Personal Portfolio & CV Platform

A modern, high-performance personal portfolio and dual-persona website built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

The platform features an interactive persona switcher spotlighting two professional specializations:
1. **Tech Persona:** Software Engineer, Frontend Web Developer, and Enterprise SAP ABAP Developer.
2. **Creative Persona:** Sports Photographer, Graphic Designer, and Basketball Media Specialist.

---

## ✨ Key Features

- 🌓 **Dual-Persona Architecture:** Seamlessly toggle between Tech and Creative identities with fluid Framer Motion layout transitions.
- 🎨 **Modern Design System:** Built with Tailwind CSS v4, custom glassmorphism effects, curated typography (`Outfit` + `DM Sans`), and dark/light theme support.
- 📱 **Fully Responsive:** Fluid layouts designed from 320px mobile screens to ultra-wide desktop monitors, featuring an accessible off-canvas mobile drawer.
- ⚡ **Ultra-Fast Performance:** Zero runtime CDNs, tree-shakable SVG icons (Lucide React & React Icons), optimized asset handling, and instant Vite HMR.
- ♿ **Accessibility First:** Semantic HTML5 landmarks, ARIA tablist/tab semantics, focus-visible states, keyboard ESC navigation, and `prefers-reduced-motion` compliance.
- 🔍 **SEO & Social Optimization:** Comprehensive Open Graph cards, Twitter metadata, Favicon icons, and Schema.org JSON-LD Person structured data.
- 🛡️ **Type-Safe Data Architecture:** Centralized and strongly-typed data layer (`src/data/`) with zero fragile DOM queries or stringified links.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 19 (Strict Mode) |
| **Build Tool & Bundler** | Vite 6 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS v4 with CSS Variables |
| **Animations** | Framer Motion (Spring-based physics) |
| **Icons** | Lucide React + React Icons (Fa6) |
| **Fonts** | Google Fonts (`Outfit` & `DM Sans`) |

---

## 📁 Project Structure

```text
MyWebsite/
├── public/
│   ├── avatar.png                  # Profile photograph
│   ├── favicon.ico                 # Site favicon
│   ├── preview.png                 # Open Graph preview image
│   └── documents/                  # CV / Resume documents
├── src/
│   ├── assets/                     # Bundled visual assets
│   ├── components/
│   │   ├── common/                 # Reusable UI atoms (Button, Card, Badge, ThemeToggle, etc.)
│   │   ├── layout/                 # Layout shell (Header, Sidebar, MobileDrawer, Footer)
│   │   └── sections/
│   │       ├── tech/               # Tech persona sections (Hero, Skills, Projects, Experience, Education, Contact)
│   │       └── creative/           # Creative persona sections (Hero, Work, Photography, Achievements, Tools, Contact)
│   ├── data/                       # Strongly typed data modules
│   │   ├── profile.ts              # Core profile and social links
│   │   ├── tech.ts                 # Technical bio, skills, experience, education
│   │   ├── creative.ts             # Creative bio, achievements, tools, gallery
│   │   └── projects.ts             # Featured engineering and web projects
│   ├── hooks/                      # Custom hooks (useTheme, useActiveSection)
│   ├── types/                      # TypeScript domain interfaces
│   ├── utils/                      # Class merging utilities (clsx, twMerge)
│   ├── App.tsx                     # Main application layout coordinator
│   ├── main.tsx                    # React root entry point
│   └── index.css                   # Tailwind CSS v4 & custom design tokens
├── index.html                      # SEO metadata & JSON-LD entry
├── package.json                    # Project dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hassiebb/MyWebsite.git
cd MyWebsite
npm install
```

### 2. Run Locally (Development)

Start the Vite development server with Hot Module Replacement:

```bash
npm run dev
```

The application will be accessible at: `http://localhost:3000`

### 3. Production Build

Compile TypeScript and build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📄 Adding Your Resume / CV

To enable direct CV downloads:
1. Place your resume PDF in `public/documents/Mohammad-Hassieb-Resume.pdf`
2. Update `cvPath` in [`src/data/profile.ts`](src/data/profile.ts) to `'/documents/Mohammad-Hassieb-Resume.pdf'`

---

## 📬 Contact & Links

- **Email:** [mohammadhassieb@gmail.com](mailto:mohammadhassieb@gmail.com)
- **LinkedIn:** [Mohammad Hassieb](https://www.linkedin.com/in/mo-hassieb/)
- **GitHub:** [@hassiebb](https://github.com/hassiebb)
- **Instagram:** [@mhassieb_](https://www.instagram.com/mhassieb_/)
- **YouTube:** [@Mohammad_Hassieb](https://www.youtube.com/@Mohammad_Hassieb)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
