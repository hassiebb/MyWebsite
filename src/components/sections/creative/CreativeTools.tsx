import React from 'react';
import { PenTool, Film, Palette, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { SkillCategory, SkillTool } from '../../../types/portfolio';

interface CreativeToolsProps {
  categories: SkillCategory[];
  tools: SkillTool[];
}

export const CreativeTools: React.FC<CreativeToolsProps> = ({ categories }) => {
  const getCategoryIcon = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('design') || n.includes('visual')) return <PenTool className="w-5 h-5 text-purple-500" />;
    if (n.includes('photo') || n.includes('camera')) return <Palette className="w-5 h-5 text-pink-500" />;
    if (n.includes('video') || n.includes('media')) return <Film className="w-5 h-5 text-indigo-500" />;
    return <Monitor className="w-5 h-5 text-emerald-500" />;
  };

  return (
    <section id="creative-tools" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Creative Suite & Software Arsenal"
        subtitle="Professional digital design software, video post-production tools, and photography hardware."
        badge="Software & Tools"
        badgeVariant="purple"
        icon={<PenTool className="w-4 h-4" />}
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
            <Card glow="purple" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="w-full min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-3.5 pb-2.5 border-b border-[var(--border)]">
                  <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] flex-shrink-0">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="font-bold text-sm sm:text-lg text-[var(--text-primary)] truncate">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.items.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] hover:border-purple-500 hover:text-[var(--text-primary)] transition-all duration-200"
                    >
                      {tool}
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
