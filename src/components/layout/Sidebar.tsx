import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import { SocialIcons } from '../common/SocialIcons';
import { Profile, Persona } from '../../types/portfolio';
import { cn } from '../../utils/cn';

interface SidebarProps {
  profile: Profile;
  activePersona: Persona;
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ profile, activePersona, activeSection }) => {
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
    <aside className="hidden lg:flex fixed top-18 left-0 bottom-0 w-64 bg-[var(--surface)] border-r border-[var(--border)] p-6 flex-col justify-between z-30 transition-all duration-300 overflow-y-auto">
      {/* Top Section: Avatar & Status */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4 group">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[var(--border)] shadow-md group-hover:border-[var(--accent-blue)] transition-all duration-300">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={96}
              height={96}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback if avatar fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          {profile.availableForHire && (
            <span
              className="absolute -bottom-1 -right-1 flex h-4 w-4"
              title="Available for opportunities"
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[var(--surface)]"></span>
            </span>
          )}
        </div>

        <h3 className="font-extrabold text-base text-[var(--text-primary)]">{profile.name}</h3>
        <p className="text-xs text-[var(--text-muted)] mt-0.5 max-w-[190px]">
          {activePersona === 'tech' ? profile.techTitle : profile.creativeTitle}
        </p>

        <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <Sparkles className="w-3 h-3" />
          <span>Available for hire</span>
        </div>
      </div>

      {/* Center Navigation */}
      <nav className="my-6 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between',
                isActive
                  ? activePersona === 'tech'
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold translate-x-1'
                    : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold translate-x-1'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
              )}
            >
              <span>{item.label}</span>
              {isActive && (
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    activePersona === 'tech' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-purple-600 dark:bg-purple-400'
                  )}
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* Bottom Section: CV & Social Icons */}
      <div className="flex flex-col gap-4 pt-4 border-t border-[var(--border)]">
        {profile.cvPath ? (
          <a
            href={profile.cvPath}
            download
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--accent-blue)] hover:bg-[var(--accent-blue-hover)] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        ) : (
          <a
            href={`mailto:${profile.email}?subject=Resume%20Request%20-%20Mohammad%20Hassieb`}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold bg-[var(--bg-secondary)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-all duration-200"
          >
            <Download className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            <span>Request CV by Email</span>
          </a>
        )}

        <div className="flex justify-center">
          <SocialIcons socials={profile.social} variant="sidebar" />
        </div>
      </div>
    </aside>
  );
};
