import React from 'react';
import {
  TrendingUp,
  CheckCircle2,
  Share2,
  ExternalLink,
  Award,
  Sparkles,
} from 'lucide-react';
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { AchievementItem, SocialMediaCaseStudy } from '../../../types/portfolio';

interface SocialMediaSectionProps {
  introText: string;
  caseStudies: SocialMediaCaseStudy[];
  achievements: AchievementItem[];
}

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  introText,
  caseStudies,
  achievements,
}) => {
  const getPlatformIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('instagram')) return <FaInstagram className="w-3.5 h-3.5 text-pink-500" />;
    if (p.includes('facebook')) return <FaFacebookF className="w-3.5 h-3.5 text-blue-500" />;
    if (p.includes('tiktok')) return <FaTiktok className="w-3.5 h-3.5 text-[var(--text-primary)]" />;
    if (p.includes('youtube')) return <FaYoutube className="w-3.5 h-3.5 text-red-500" />;
    if (p === 'x' || p.includes('twitter')) return <FaXTwitter className="w-3.5 h-3.5 text-[var(--text-primary)]" />;
    return null;
  };

  return (
    <section
      id="social-media"
      className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden"
    >
      <SectionHeading
        title="Social Media Management & Growth"
        subtitle={introText}
        badge="1 · Social Media Specialist"
        badgeVariant="purple"
        icon={<Share2 className="w-4 h-4" />}
      />

      {/* Featured Case Studies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 mb-10 w-full max-w-full min-w-0">
        {caseStudies.map((study, idx) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="purple" className="h-full flex flex-col justify-between p-5 sm:p-7 w-full max-w-full min-w-0">
              <div className="w-full min-w-0">
                {/* Optional Case Study Banner Image */}
                {study.image && (
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-4 border border-[var(--border)]">
                    <img
                      src={study.image}
                      alt={study.brand}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Top Header */}
                <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                  <div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{study.period}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] mt-0.5">
                      {study.brand}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[var(--text-secondary)]">
                      {study.role}
                    </p>
                  </div>

                  {/* Platform Pills */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {study.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)]"
                      >
                        {getPlatformIcon(platform)}
                        <span>{platform}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 my-4">
                  {study.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-2.5 sm:p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center"
                    >
                      <span className="text-base sm:text-xl font-black text-purple-600 dark:text-purple-400 block">
                        {m.value}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold text-[var(--text-primary)] block truncate">
                        {m.label}
                      </span>
                      {m.growth && (
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium block mt-0.5 truncate">
                          {m.growth}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {study.summary}
                </p>

                {/* Strategy Highlights */}
                <div className="pt-3 border-t border-[var(--border)]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Content & Growth Strategy
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {study.strategyHighlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Optional Channel Links */}
              {study.links && study.links.length > 0 && (
                <div className="mt-5 pt-3.5 border-t border-[var(--border)] flex flex-wrap gap-2">
                  {study.links.map((link) => (
                    <Button
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      variant="secondary"
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Key Media Milestones Sub-Grid */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-4 h-4 text-purple-500" />
          <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--text-muted)]">
            Verified Media Impact & Partnerships
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <Card glow="purple" className="h-full p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    {item.metric && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-black bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        {item.metric}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
