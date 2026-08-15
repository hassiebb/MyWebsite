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
    <header className="fixed top-0 left-0 right-0 z-40 h-16 sm:h-18 glass-header transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href={activePersona === 'tech' ? '#about' : '#creative-about'}
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] rounded-xl"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
            MH
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors leading-tight">
              Mohammad Hassieb
            </span>
            <span className="text-[11px] font-medium text-[var(--text-muted)]">
              {activePersona === 'tech' ? 'Software & SAP Developer' : 'Designer & Photographer'}
            </span>
          </div>
        </a>

        {/* Center: Dual-Persona Switcher */}
        <div className="flex items-center">
          <PersonaSwitcher activePersona={activePersona} onChange={onPersonaChange} />
        </div>

        {/* Right Actions: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />

          <button
            onClick={onMobileMenuOpen}
            aria-label="Open mobile navigation"
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-[var(--accent-blue)] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
