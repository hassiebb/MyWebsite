import React from 'react';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { ExperienceItem } from '../../../types/portfolio';

interface TechExperienceProps {
  experience: ExperienceItem[];
}

export const TechExperience: React.FC<TechExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Work Experience"
        subtitle="Corporate engineering roles, enterprise consulting, and independent freelance development."
        badge="Career Journey"
        badgeVariant="blue"
        icon={<Briefcase className="w-4 h-4" />}
      />

      <div className="flex flex-col gap-5 sm:gap-8 w-full max-w-full min-w-0">
        {experience.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="blue" className="relative overflow-hidden w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 sm:gap-2 mb-2.5">
                <div className="min-w-0 max-w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] break-words">
                    {exp.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[var(--accent-blue)] mt-0.5 break-words">
                    {exp.company} <span className="text-xs font-normal text-[var(--text-muted)]">· {exp.type}</span>
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-[11px] sm:text-xs text-[var(--text-muted)] font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="mt-2.5 text-xs sm:text-base leading-relaxed text-[var(--text-secondary)] break-words">
                {exp.description}
              </p>

              {/* Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-[var(--border)] w-full min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Key Deliverables & Responsibilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 w-full min-w-0">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)] min-w-0">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="break-words">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Tags */}
              {exp.skills && exp.skills.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1 sm:gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
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
