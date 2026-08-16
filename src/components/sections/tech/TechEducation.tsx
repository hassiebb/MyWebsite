import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { EducationItem } from '../../../types/portfolio';

interface TechEducationProps {
  education: EducationItem[];
}

export const TechEducation: React.FC<TechEducationProps> = ({ education }) => {
  return (
    <section id="education" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Education & Credentials"
        subtitle="Formal academic foundations in computer science and software engineering principles."
        badge="Academics"
        badgeVariant="blue"
        icon={<GraduationCap className="w-4 h-4" />}
      />

      <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-full min-w-0">
        {education.map((edu, idx) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="blue" className="w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0 max-w-full">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex-shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0 max-w-full">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] break-words">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[var(--text-secondary)] mt-0.5 break-words">
                      {edu.school} {edu.track && <span className="text-xs font-normal text-[var(--text-muted)]">· {edu.track}</span>}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1 text-[11px] sm:text-xs text-[var(--text-muted)] font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    <span>{edu.status}</span>
                  </span>
                </div>
              </div>

              {edu.skills && edu.skills.length > 0 && (
                <div className="mt-3.5 pt-3 border-t border-[var(--border)] w-full min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Core Coursework & Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] break-words"
                      >
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 flex-shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
