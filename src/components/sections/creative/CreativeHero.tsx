import React from 'react';
import { Camera, Palette, Send, Share2, ShieldCheck, TrendingUp } from 'lucide-react';
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
    <section id="creative-about" className="pt-6 sm:pt-14 pb-10 sm:pb-20 relative overflow-hidden w-full max-w-full">
      {/* Mobile Avatar */}
      <div className="lg:hidden flex flex-col items-center mb-6 text-center">
        <div className="relative mb-3">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-lg shadow-purple-500/10">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              width={128}
              height={128}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-purple-500 border-2 border-[var(--surface)]"></span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-full min-w-0">
        {/* 3 Core Role Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-2 max-w-full"
        >
          <a
            href="#social-media"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Media Specialist</span>
          </a>

          <a
            href="#photography"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 hover:bg-pink-500/20 transition-colors"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Sports Photographer</span>
          </a>

          <a
            href="#graphic-design"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 hover:bg-amber-500/20 transition-colors"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Graphic Designer</span>
          </a>

          {profile.militaryStatus && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{profile.militaryStatus}</span>
            </span>
          )}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-full min-w-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] break-words leading-tight">
            Mohammad{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400">
              Hassieb
            </span>
          </h1>
          <p className="mt-1.5 text-base sm:text-xl font-bold text-[var(--text-secondary)]">
            {profile.creativeTitle}
          </p>
        </motion.div>

        {/* Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl w-full"
        >
          <div className="p-3 rounded-xl sm:rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 block">40K+</span>
            <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)]">ETTF FB (From 24K)</span>
          </div>
          <div className="p-3 rounded-xl sm:rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 block">3K+</span>
            <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)]">ETTF IG (From 500)</span>
          </div>
          <div className="p-3 rounded-xl sm:rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 block">10K+</span>
            <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)]">Full Court IG & FB</span>
          </div>
          <div className="p-3 rounded-xl sm:rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400 block">15M+</span>
            <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)]">Full Court IG Views</span>
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

        {/* Action Buttons Jumping Directly to Each Specialty Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex flex-wrap items-center gap-2.5 pt-2 max-w-full"
        >
          <Button
            href="#social-media"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-md shadow-purple-500/20"
            size="sm"
            icon={<TrendingUp className="w-4 h-4" />}
          >
            Social Media Growth
          </Button>

          <Button href="#photography" variant="secondary" size="sm" icon={<Camera className="w-4 h-4" />}>
            Photography Showcase
          </Button>

          <Button href="#graphic-design" variant="secondary" size="sm" icon={<Palette className="w-4 h-4" />}>
            Graphic Design
          </Button>

          <Button href="#creative-contact" variant="ghost" size="sm" icon={<Send className="w-4 h-4" />}>
            Collaborate
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
