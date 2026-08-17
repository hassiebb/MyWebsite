import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';

// Tech Sections
import { TechHero } from './components/sections/tech/TechHero';
import { TechSkills } from './components/sections/tech/TechSkills';
import { TechProjects } from './components/sections/tech/TechProjects';
import { TechExperience } from './components/sections/tech/TechExperience';
import { TechEducation } from './components/sections/tech/TechEducation';
import { TechContact } from './components/sections/tech/TechContact';

// Creative Sections
import { CreativeHero } from './components/sections/creative/CreativeHero';
import { CreativeWork } from './components/sections/creative/CreativeWork';
import { PhotographySection } from './components/sections/creative/PhotographySection';
import { AchievementsSection } from './components/sections/creative/AchievementsSection';
import { CreativeExperience } from './components/sections/creative/CreativeExperience';
import { CreativeTools } from './components/sections/creative/CreativeTools';
import { CreativeContact } from './components/sections/creative/CreativeContact';

// Hooks & Data
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import {
  profileData,
  techAbout,
  techSkills,
  techExperience,
  techEducation,
  projectsData,
  creativeAbout,
  creativeIntro,
  photographyIntro,
  creativeAchievements,
  creativeExperience,
  creativeSkills,
  creativeGallery,
} from './data';
import { Persona } from './types/portfolio';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [activePersona, setActivePersona] = useState<Persona>('tech');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const techSectionIds = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];
  const creativeSectionIds = [
    'creative-about',
    'creative-work',
    'photography',
    'achievements',
    'creative-experience',
    'creative-tools',
    'creative-contact',
  ];

  const currentSectionIds = activePersona === 'tech' ? techSectionIds : creativeSectionIds;
  const activeSection = useActiveSection(currentSectionIds);

  const handlePersonaChange = (persona: Persona) => {
    if (persona === activePersona) return;
    setActivePersona(persona);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset scroll when switching personas
  useEffect(() => {
    // Sync document title based on persona
    document.title =
      activePersona === 'tech'
        ? 'Mohammad Hassieb | Software Engineer & Developer'
        : 'Mohammad Hassieb | Sports Media & Social Media';
  }, [activePersona]);


  return (
    <div
      className={`min-h-screen w-full max-w-full overflow-x-hidden transition-colors duration-300 ${
        activePersona === 'tech' ? 'bg-mesh-tech' : 'bg-mesh-creative'
      }`}
    >
      {/* Fixed Sticky Header */}
      <Header
        activePersona={activePersona}
        onPersonaChange={handlePersonaChange}
        theme={theme}
        onThemeToggle={toggleTheme}
        onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
      />

      {/* Desktop Fixed Left Sidebar */}
      <Sidebar
        profile={profileData}
        activePersona={activePersona}
        activeSection={activeSection}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        profile={profileData}
        activePersona={activePersona}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="lg:pl-64 pt-14 sm:pt-18 min-h-screen w-full max-w-full flex flex-col justify-between overflow-x-hidden">
        <div className="max-w-5xl mx-auto w-full px-3.5 sm:px-6 lg:px-10 min-w-0">
          <AnimatePresence mode="wait">
            {activePersona === 'tech' ? (
              <motion.div
                key="tech-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-full min-w-0"
              >
                <TechHero profile={profileData} aboutText={techAbout} />
                <TechSkills categories={techSkills.categories} tools={techSkills.tools} />
                <TechProjects projects={projectsData} />
                <TechExperience experience={techExperience} />
                <TechEducation education={techEducation} />
                <TechContact
                  profile={profileData}
                  ctaText="Open to full-time software engineering roles, frontend consulting, and technical collaborations."
                />
              </motion.div>
            ) : (
              <motion.div
                key="creative-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-full min-w-0"
              >
                <CreativeHero profile={profileData} aboutText={creativeAbout} />
                <CreativeWork introText={creativeIntro} />
                <PhotographySection introText={photographyIntro} gallery={creativeGallery} />
                <AchievementsSection achievements={creativeAchievements} />
                <CreativeExperience experience={creativeExperience} />
                <CreativeTools categories={creativeSkills.categories} tools={creativeSkills.tools} />
                <CreativeContact
                  profile={profileData}
                  ctaText="Open to live game coverage contracts, sports branding assignments, and creative media collaborations."
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Global Footer */}
        <Footer profile={profileData} />
      </main>
    </div>
  );
}

export default App;
