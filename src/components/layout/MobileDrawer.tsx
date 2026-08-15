import React, { useEffect } from 'react';
import { X, Download, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialIcons } from '../common/SocialIcons';
import { Profile, Persona } from '../../types/portfolio';
import { cn } from '../../utils/cn';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
  activePersona: Persona;
  activeSection: string;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  activePersona,
  activeSection,
}) => {
  // ESC key handler and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const techNavItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const creativeNavItems = [
    { id: 'creative-about', label: 'About' },
    { id: 'creative-work', label: 'Creative Work' },
    { id: 'photography', label: 'Photography' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'creative-experience', label: 'Experience' },
    { id: 'creative-tools', label: 'Tools & Media' },
    { id: 'creative-contact', label: 'Contact' },
  ];

  const navItems = activePersona === 'tech' ? techNavItems : creativeNavItems;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Offcanvas Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[85vw] bg-[var(--surface)] border-r border-[var(--border)] p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* Header with Close */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                    MH
                  </div>
                  <span className="font-bold text-sm text-[var(--text-primary)]">Menu</span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-[var(--border)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Bio Card */}
              <div className="my-5 flex items-center gap-3">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-2xl object-cover border border-[var(--border)] shadow-sm"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-[var(--text-primary)]">{profile.name}</h4>
                  <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Available</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 my-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={onClose}
                      className={cn(
                        'px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between',
                        isActive
                          ? activePersona === 'tech'
                            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--surface-hover)]'
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span
                          className={cn(
                            'w-1.5 h-1.5 rounded-full',
                            activePersona === 'tech' ? 'bg-blue-600' : 'bg-purple-600'
                          )}
                        />
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-4">
              {profile.cvPath ? (
                <a
                  href={profile.cvPath}
                  download
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-blue)] text-white shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              ) : (
                <a
                  href={`mailto:${profile.email}?subject=Resume%20Request`}
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                >
                  <Download className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
                  <span>Request CV by Email</span>
                </a>
              )}

              <div className="flex justify-center">
                <SocialIcons socials={profile.social} variant="hero" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
