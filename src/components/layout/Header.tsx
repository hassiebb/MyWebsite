import React from 'react';
import { Menu } from 'lucide-react';
import { PersonaSwitcher } from '../common/PersonaSwitcher';
import { ThemeToggle } from '../common/ThemeToggle';
import { Persona, Theme } from '../../types/portfolio';

interface HeaderProps {
  activePersona: Persona;
  onPersonaChange: (persona: Persona) => void;
  theme: Theme;
  onThemeToggle: () => void;
  onMobileMenuOpen: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePersona,
  onPersonaChange,
  theme,
  onThemeToggle,
  onMobileMenuOpen,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 sm:h-18 glass-header transition-all duration-300 w-full max-w-full">
      <div className="max-w-7xl mx-auto h-full px-2.5 sm:px-6 lg:px-8 flex items-center justify-between gap-1.5 sm:gap-4 w-full">
        {/* Brand / Logo */}
        <a
          href={activePersona === 'tech' ? '#about' : '#creative-about'}
          className="flex items-center gap-2 sm:gap-3 group focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded-xl flex-shrink-0 min-w-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            MH
          </div>
          <div className="hidden sm:flex flex-col min-w-0">
            <span className="font-extrabold text-xs sm:text-base text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-tight truncate">
              Mohammad Hassieb
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-[var(--text-muted)] truncate">
              {activePersona === 'tech' ? 'Software Engineer & Developer' : 'Sports Media & Social Media'}
            </span>

          </div>
        </a>

        {/* Center: Dual-Persona Switcher */}
        <div className="flex items-center flex-shrink min-w-0 justify-center">
          <PersonaSwitcher activePersona={activePersona} onChange={onPersonaChange} />
        </div>

        {/* Right Actions: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />

          <button
            onClick={onMobileMenuOpen}
            aria-label="Open mobile navigation"
            className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] transition-colors flex-shrink-0"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
