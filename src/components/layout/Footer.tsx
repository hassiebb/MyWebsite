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
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-10 px-4 sm:px-6 lg:px-8 mt-20 transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-[var(--text-primary)]">
            {profile.name} — Portfolio & CV
          </p>
          <p className="text-xs text-[var(--text-muted)] flex items-center justify-center sm:justify-start gap-1">
            Built with React 19, TypeScript & Tailwind CSS <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--bg-primary)] hover:border-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-[var(--accent-blue)] transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
