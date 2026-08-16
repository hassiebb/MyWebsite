import React from 'react';
import { Code2, Layers, Cpu, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { SkillCategory, SkillTool } from '../../../types/portfolio';

interface TechSkillsProps {
  categories: SkillCategory[];
  tools: SkillTool[];
}

export const TechSkills: React.FC<TechSkillsProps> = ({ categories }) => {
  const getCategoryIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('programming') || n.includes('language')) return <Code2 className="w-5 h-5 text-blue-500" />;
    if (n.includes('framework') || n.includes('frontend')) return <Layers className="w-5 h-5 text-indigo-500" />;
    if (n.includes('sap') || n.includes('enterprise')) return <Cpu className="w-5 h-5 text-sky-500" />;
    return <Wrench className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="skills" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Technical Skills & Competencies"
        subtitle="Core programming languages, enterprise SAP development, modern frontend toolkits, and development workflows."
        badge="Skills Matrix"
        badgeVariant="blue"
        icon={<Code2 className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-full min-w-0">
        {categories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="blue" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="w-full max-w-full min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 pb-2.5 border-b border-[var(--border)]">
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex-shrink-0">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-[var(--text-primary)] truncate">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-blue)] hover:text-[var(--text-primary)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
