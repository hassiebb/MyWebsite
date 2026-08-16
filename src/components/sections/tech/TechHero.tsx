import React from 'react';
import { MapPin, Mail, Phone, ArrowDown, FolderCode, Send, Terminal, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../../common/SocialIcons';
import { Button } from '../../common/Button';
import { Profile } from '../../../types/portfolio';

interface TechHeroProps {
  profile: Profile;
  aboutText: string;
}

export const TechHero: React.FC<TechHeroProps> = ({ profile, aboutText }) => {
  const highlightSkills = ['React', 'TypeScript', 'SAP ABAP', 'JavaScript', 'Tailwind CSS', 'Git'];

  return (
    <section id="about" className="pt-6 sm:pt-14 pb-10 sm:pb-20 relative overflow-hidden w-full max-w-full">
      {/* Subtle Ambient Glow (Constrained) */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10 max-w-full" />

      {/* Mobile-Only Avatar */}
      <div className="lg:hidden flex flex-col items-center mb-6 text-center">
        <div className="relative mb-3">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[var(--border)] shadow-lg">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {profile.availableForHire && (
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-emerald-500 border-2 border-[var(--surface)]"></span>
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-full min-w-0">
        {/* Developer Terminal Tag & Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 max-w-full"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] shadow-xs max-w-full truncate">
            <Terminal className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
            <span className="truncate">status: ready_for_engineering</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Opportunities</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-full min-w-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] break-words leading-tight">
            Mohammad{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-400">
              Hassieb
            </span>
          </h1>
          <p className="mt-1.5 text-lg sm:text-2xl font-bold text-[var(--text-secondary)] flex items-center gap-2 flex-wrap">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0" />
            <span>{profile.techTitle}</span>
          </p>
        </motion.div>

        {/* Technology Highlights Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 max-w-full"
        >
          {highlightSkills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-semibold bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all shadow-xs"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Contact Metadata Lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="flex flex-wrap items-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-[var(--text-muted)] max-w-full min-w-0"
        >
          <div className="flex items-start gap-1.5 max-w-full">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <span className="break-words">{profile.location}</span>
          </div>
          <div className="flex items-center gap-1.5 max-w-full truncate">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[var(--accent-blue)] transition-colors truncate"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 max-w-full">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="hover:text-[var(--accent-blue)] transition-colors"
            >
              {profile.phone}
            </a>
          </div>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)] max-w-3xl pt-1 break-words"
        >
          {aboutText}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center gap-2.5 pt-2 max-w-full"
        >
          <Button href="#projects" variant="primary" size="sm" icon={<FolderCode className="w-4 h-4" />}>
            View Featured Projects
          </Button>

          <Button href="#contact" variant="secondary" size="sm" icon={<Send className="w-4 h-4" />}>
            Get In Touch
          </Button>

          <Button href="#skills" variant="ghost" size="sm" icon={<ArrowDown className="w-4 h-4" />}>
            Explore Skills
          </Button>
        </motion.div>

        {/* Mobile Socials */}
        <div className="lg:hidden pt-2">
          <SocialIcons socials={profile.social} variant="hero" />
        </div>
      </div>
    </section>
  );
};
