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
    <section id="creative-work" className="py-12 sm:py-16 border-t border-[var(--border)]">
      <SectionHeading
        title="Creative Work & Design Narrative"
        subtitle={introText}
        badge="Visual Storytelling"
        badgeVariant="purple"
        icon={<Palette className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card glow="purple" className="h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
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
