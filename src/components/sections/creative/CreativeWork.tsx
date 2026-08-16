import React from 'react';
import { Palette, Sparkles, Image as ImageIcon, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';

interface CreativeWorkProps {
  introText: string;
}

export const CreativeWork: React.FC<CreativeWorkProps> = ({ introText }) => {
  const pillars = [
    {
      icon: <Flame className="w-5 h-5 text-purple-500" />,
      title: 'Game-Day Energy',
      description:
        'High-intensity match day graphics, player rosters, starting lineups, and dynamic scoreboards built for immediate fan engagement.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-pink-500" />,
      title: 'Athlete Branding',
      description:
        'Custom social media identities and editorial portrait compositions for elite basketball players across national leagues.',
    },
    {
      icon: <ImageIcon className="w-5 h-5 text-indigo-500" />,
      title: 'Sports Storytelling',
      description:
        'Visual narratives that bridge courtside emotion with modern typography, dynamic lighting, and punchy sports aesthetics.',
    },
  ];

  return (
    <section id="creative-work" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Creative Work & Design Narrative"
        subtitle={introText}
        badge="Visual Storytelling"
        badgeVariant="purple"
        icon={<Palette className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full max-w-full min-w-0">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="w-full max-w-full min-w-0"
          >
            <Card glow="purple" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
              <div className="w-full min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/10 flex items-center justify-center mb-3.5 border border-purple-500/20 flex-shrink-0">
                  {pillar.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-2 break-words">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed break-words">
                  {pillar.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
