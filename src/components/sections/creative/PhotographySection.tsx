import React from 'react';
import { Camera, Eye, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { GalleryItem } from '../../../types/portfolio';

interface PhotographySectionProps {
  introText: string;
  gallery: GalleryItem[];
}

export const PhotographySection: React.FC<PhotographySectionProps> = ({ introText, gallery }) => {
  return (
    <section id="photography" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Sports Photography Showcase"
        subtitle={introText}
        badge="Photography"
        badgeVariant="purple"
        icon={<Camera className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-full min-w-0">
        {gallery.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="purple" className="h-full flex flex-col justify-between overflow-hidden group w-full max-w-full min-w-0 p-4 sm:p-6">
              {/* Media Preview Box / Visual Architecture */}
              <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-purple-900/20 via-[var(--bg-secondary)] to-pink-900/20 border border-[var(--border)] flex flex-col items-center justify-center p-4 sm:p-6 text-center relative overflow-hidden group-hover:border-purple-500/40 transition-colors">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-2 border border-purple-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {item.category}
                </span>
                <span className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5">
                  Basketball Action Coverage · {item.year || '2024'}
                </span>
              </div>

              {/* Information */}
              <div className="mt-3.5 w-full min-w-0">
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-words">
                    {item.title}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)] flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>Courtside</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed break-words">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                      >
                        <Tag className="w-2.5 h-2.5" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
