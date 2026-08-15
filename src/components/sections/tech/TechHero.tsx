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
    <section id="about" className="pt-8 sm:pt-14 pb-12 sm:pb-20 relative">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Mobile-Only Avatar */}
      <div className="lg:hidden flex flex-col items-center mb-8 text-center">
        <div className="relative mb-4">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-[var(--border)] shadow-xl">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {profile.availableForHire && (
            <span className="absolute -bottom-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-[var(--surface)]"></span>
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Developer Terminal Tag & Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2.5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-blue-500" />
            <span>status: ready_for_engineering</span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to Opportunities</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)]">
            Mohammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 dark:from-blue-400 dark:via-indigo-400 dark:to-sky-400">Hassieb</span>
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-[var(--text-secondary)] flex items-center gap-2">
            <Code2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <span>{profile.techTitle}</span>
          </p>
        </motion.div>

        {/* Technology Highlights Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2"
        >
          {highlightSkills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] transition-all shadow-xs"
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
          className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[var(--text-muted)]"
        >
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span>{profile.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-[var(--accent-blue)] transition-colors"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
          className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-3xl pt-2"
        >
          {aboutText}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Button href="#projects" variant="primary" icon={<FolderCode className="w-4 h-4" />}>
            View Featured Projects
          </Button>

          <Button href="#contact" variant="secondary" icon={<Send className="w-4 h-4" />}>
            Get In Touch
          </Button>

          <Button href="#skills" variant="ghost" icon={<ArrowDown className="w-4 h-4" />}>
            Explore Skills
          </Button>
        </motion.div>

        {/* Mobile Socials */}
        <div className="lg:hidden pt-4">
          <SocialIcons socials={profile.social} variant="hero" />
        </div>
      </div>
    </section>
  );
};
