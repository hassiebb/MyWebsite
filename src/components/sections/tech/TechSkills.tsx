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
    <section id="skills" className="py-12 sm:py-16 border-t border-[var(--border)]">
      <SectionHeading
        title="Technical Skills & Competencies"
        subtitle="Core programming languages, enterprise SAP development, modern frontend toolkits, and development workflows."
        badge="Skills Matrix"
        badgeVariant="blue"
        icon={<Code2 className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Card glow="blue" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[var(--border)]">
                  <div className="p-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-[var(--accent-blue)] hover:text-[var(--text-primary)] transition-all duration-200"
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
