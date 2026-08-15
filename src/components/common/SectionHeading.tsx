import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeVariant?: 'blue' | 'purple' | 'green' | 'amber';
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  icon,
  badge,
  badgeVariant = 'blue',
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12',
        align === 'center' ? 'text-center flex flex-col items-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-3"
        >
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border',
              badgeVariant === 'blue' && 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
              badgeVariant === 'purple' && 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
              badgeVariant === 'green' && 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
              badgeVariant === 'amber' && 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
            )}
          >
            {icon && <span className="w-3.5 h-3.5">{icon}</span>}
            <span>{badge}</span>
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] flex items-center gap-3"
      >
        {!badge && icon && <span className="text-[var(--accent-blue)]">{icon}</span>}
        <span>{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
