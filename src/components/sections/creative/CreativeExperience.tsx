import React from 'react';
import { Briefcase, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { ExperienceItem } from '../../../types/portfolio';

interface CreativeExperienceProps {
  experience: ExperienceItem[];
}

export const CreativeExperience: React.FC<CreativeExperienceProps> = ({ experience }) => {
  return (
    <section id="creative-experience" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Creative Experience & Production"
        subtitle="Freelance design engagements, club contracts, and courtside game coverage."
        badge="Experience"
        badgeVariant="purple"
        icon={<Briefcase className="w-4 h-4" />}
      />

      <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-full min-w-0">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="purple" className="w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2 mb-2.5">
                <div className="min-w-0 max-w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] break-words">
                    {exp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-purple-600 dark:text-purple-400 mt-0.5 break-words">
                    {exp.company} <span className="text-xs font-normal text-[var(--text-muted)]">· {exp.type}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[var(--text-muted)] font-medium">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="mt-2.5 text-xs sm:text-base leading-relaxed text-[var(--text-secondary)] break-words">
                {exp.description}
              </p>

              {exp.highlights && exp.highlights.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-[var(--border)] w-full min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Scope of Work
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 w-full min-w-0">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)] min-w-0">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1 sm:gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
