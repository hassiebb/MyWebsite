import React from 'react';
import { Camera, Palette, Trophy, Send, Sparkles, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { SocialIcons } from '../../common/SocialIcons';
import { Button } from '../../common/Button';
import { Profile } from '../../../types/portfolio';

interface CreativeHeroProps {
  profile: Profile;
  aboutText: string;
}

export const CreativeHero: React.FC<CreativeHeroProps> = ({ profile, aboutText }) => {
  return (
    <section id="creative-about" className="pt-8 sm:pt-14 pb-12 sm:pb-20">
      {/* Mobile Avatar */}
      <div className="lg:hidden flex flex-col items-center mb-8 text-center">
        <div className="relative mb-4">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-xl shadow-purple-500/10">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500 border-2 border-[var(--surface)]"></span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
            <Palette className="w-3.5 h-3.5" />
            <span>Sports Visual Media & Design</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Flame className="w-3.5 h-3.5" />
            <span>Basketball Media Specialist</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)]">
            Mohammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Hassieb</span>
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-[var(--text-secondary)]">
            {profile.creativeTitle}
          </p>
        </motion.div>

        {/* Highlight Stats Snippet */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl"
        >
          <div className="p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
            <span className="text-2xl font-black text-purple-600 dark:text-purple-400 block">1.5M+</span>
            <span className="text-xs font-medium text-[var(--text-muted)]">Instagram Views in 60 Days</span>
          </div>
          <div className="p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm">
            <span className="text-2xl font-black text-purple-600 dark:text-purple-400 block">3.1K+</span>
            <span className="text-xs font-medium text-[var(--text-muted)]">Active Sports Community</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm flex flex-col justify-center">
            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pro Clubs</span>
            </div>
            <span className="text-xs font-medium text-[var(--text-muted)]">Al Ahly · Zamalek · Al Dakhlia</span>
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
          <Button
            href="#achievements"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md shadow-purple-500/20"
            icon={<Trophy className="w-4 h-4" />}
          >
            View Key Achievements
          </Button>

          <Button href="#photography" variant="secondary" icon={<Camera className="w-4 h-4" />}>
            Photography Showcase
          </Button>

          <Button href="#creative-contact" variant="ghost" icon={<Send className="w-4 h-4" />}>
            Collaborate
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
