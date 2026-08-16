import React from 'react';
import { Trophy, CheckCircle2, TrendingUp, Users, Award, ShieldCheck, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { AchievementItem } from '../../../types/portfolio';

interface AchievementsSectionProps {
  achievements: AchievementItem[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  const getAchievementIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />;
      case 1:
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />;
      case 2:
      case 3:
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />;
      case 4:
      case 5:
        return <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />;
      default:
        return <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />;
    }
  };

  return (
    <section id="achievements" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Key Media Milestones & Impact"
        subtitle="Tangible growth, athlete partnerships, and ground-breaking sports content initiatives."
        badge="Proven Impact"
        badgeVariant="purple"
        icon={<Trophy className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full max-w-full min-w-0">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className={`w-full max-w-full min-w-0 ${item.highlight && idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
          >
            <Card glow="purple" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="w-full min-w-0">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex-shrink-0">
                    {getAchievementIcon(idx)}
                  </div>
                  {item.metric && (
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-black bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      {item.metric}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-lg font-bold text-[var(--text-primary)] mb-1.5 break-words">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed break-words">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-[var(--border)] flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Verified Milestones</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
