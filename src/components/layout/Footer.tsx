import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Profile } from '../../types/portfolio';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8 sm:py-10 px-3.5 sm:px-6 lg:px-8 mt-16 sm:mt-20 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left w-full min-w-0">
        <div className="flex flex-col gap-1 min-w-0">
          <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] break-words">
            {profile.name} — Portfolio & CV
          </p>
          <p className="text-[11px] sm:text-xs text-[var(--text-muted)] flex items-center justify-center sm:justify-start gap-1">
            Built with React 19, TypeScript & Tailwind CSS <Heart className="w-3 h-3 text-red-500 fill-red-500 flex-shrink-0" />
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <span className="text-[11px] sm:text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-all hover:-translate-y-0.5 shadow-xs flex-shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
