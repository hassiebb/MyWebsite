import React, { useState } from 'react';
import { Mail, Check, Copy, Send, Camera, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { SocialIcons } from '../../common/SocialIcons';
import { Profile } from '../../../types/portfolio';

interface CreativeContactProps {
  profile: Profile;
  ctaText: string;
}

export const CreativeContact: React.FC<CreativeContactProps> = ({ profile, ctaText }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="creative-contact" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Book Coverage or Commission Design"
        subtitle={ctaText}
        badge="Connect"
        badgeVariant="purple"
        icon={<Camera className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-full min-w-0">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 w-full max-w-full min-w-0"
        >
          <Card glow="purple" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
            <div className="min-w-0 max-w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 break-words">
                Elevate your team's visual identity & game coverage.
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5 break-words">
                Available for live tournament photography, club social media campaigns, athlete branding posters, and video production across Egypt and beyond.
              </p>

              {/* Direct Email Action Box */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-5 max-w-full min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium">Direct Inquiries</p>
                    <p className="text-xs sm:text-base font-bold text-[var(--text-primary)] truncate">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-shrink-0">
                  <Button
                    onClick={copyEmail}
                    variant="secondary"
                    size="sm"
                    icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>

                  <Button
                    href={`mailto:${profile.email}?subject=Creative%20Media%20Inquiry%20-%20Mohammad%20Hassieb`}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    size="sm"
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    Email Me
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Connection Row */}
            <div className="pt-2 min-w-0 max-w-full">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                Follow On Social Platforms
              </h4>
              <SocialIcons socials={profile.social} variant="contact" />
            </div>
          </Card>
        </motion.div>

        {/* Quick Highlights Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-full min-w-0"
        >
          <Card glow="purple" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
            <div className="min-w-0 max-w-full">
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-3 pb-2.5 border-b border-[var(--border)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span>Media Services</span>
              </h3>

              <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] min-w-0 max-w-full">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <span className="font-bold text-[11px] sm:text-xs text-[var(--text-primary)] block">🏀 Courtside Photography</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Live match action & championship finals</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <span className="font-bold text-[11px] sm:text-xs text-[var(--text-primary)] block">🎨 Game-Day Graphic Design</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Rosters, match announcements & scoreboards</span>
                </div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                  <span className="font-bold text-[11px] sm:text-xs text-[var(--text-primary)] block">⚡ Fast Turnaround</span>
                  <span className="text-[11px] text-[var(--text-muted)]">Same-day delivery for social engagement</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] sm:text-xs text-[var(--text-muted)]">
              Based in Cairo, Egypt · Available for travel
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
