import React, { useState } from 'react';
import { Palette, Layers, Tag, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { LightboxModal, LightboxItem } from '../../common/LightboxModal';
import { GraphicDesignCategory, GraphicDesignItem } from '../../../types/portfolio';
import { cn } from '../../../utils/cn';

interface GraphicDesignSectionProps {
  introText: string;
  designs: GraphicDesignItem[];
}

const DESIGN_CATEGORIES: ('All' | GraphicDesignCategory)[] = [
  'All',
  'Match-Day Graphics',
  'Roster & Lineups',
  'Athlete Branding',
  'Tournament Identity',
];

export const GraphicDesignSection: React.FC<GraphicDesignSectionProps> = ({
  introText,
  designs,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | GraphicDesignCategory>('All');
  const [selectedDesign, setSelectedDesign] = useState<LightboxItem | null>(null);

  const filteredDesigns =
    activeCategory === 'All'
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  const openLightbox = (item: GraphicDesignItem) => {
    setSelectedDesign({
      title: item.title,
      category: item.category,
      subtitle: [item.client, item.year].filter(Boolean).join(' · '),
      description: item.description,
      image: item.image,
      tags: item.tags,
    });
  };

  return (
    <section
      id="graphic-design"
      className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden"
    >
      <SectionHeading
        title="Graphic Design & Sports Branding"
        subtitle={introText}
        badge="3 · Graphic Designer"
        badgeVariant="purple"
        icon={<Palette className="w-4 h-4" />}
      />

      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label="Filter graphic design work by category"
        className="flex items-center gap-1.5 sm:gap-2 flex-wrap mb-6 sm:mb-8"
      >
        {DESIGN_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border',
                isActive
                  ? 'bg-purple-600 text-white border-purple-600 shadow-sm shadow-purple-500/20'
                  : 'bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-purple-500/40 hover:text-[var(--text-primary)]'
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Design Showcase Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full max-w-full min-w-0">
        <AnimatePresence mode="popLayout">
          {filteredDesigns.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="w-full max-w-full min-w-0"
            >
              <Card
                glow="purple"
                onClick={() => openLightbox(item)}
                className="h-full flex flex-col justify-between overflow-hidden group cursor-pointer w-full max-w-full min-w-0 p-4 sm:p-6"
              >
                {/* Visual Design Canvas or Actual Poster Image */}
                <div className="w-full h-52 sm:h-60 rounded-xl bg-gradient-to-br from-pink-900/20 via-[var(--bg-secondary)] to-purple-900/20 border border-[var(--border)] flex flex-col items-center justify-center text-center relative overflow-hidden group-hover:border-purple-500/40 transition-colors">
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2.5 rounded-xl bg-black/70 text-white backdrop-blur-xs">
                          <Maximize2 className="w-5 h-5" />
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="p-4 sm:p-6 flex flex-col items-center">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-2.5 border border-pink-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
                        <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-pink-600 dark:text-pink-400">
                        {item.category}
                      </span>
                      {item.client && (
                        <span className="text-[10px] sm:text-xs text-[var(--text-muted)] mt-0.5">
                          {item.client} · {item.year || '2024'}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="mt-4 w-full min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      {item.category}
                    </span>
                    {item.client && (
                      <span className="text-[11px] font-semibold text-[var(--text-muted)] flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{item.client}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors break-words mb-1.5">
                    {item.title}
                  </h3>

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
        </AnimatePresence>
      </motion.div>

      <LightboxModal item={selectedDesign} onClose={() => setSelectedDesign(null)} />
    </section>
  );
};
