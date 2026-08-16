import React from 'react';
import { Code2, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { Persona } from '../../types/portfolio';
import { cn } from '../../utils/cn';

interface PersonaSwitcherProps {
  activePersona: Persona;
  onChange: (persona: Persona) => void;
  className?: string;
}

export const PersonaSwitcher: React.FC<PersonaSwitcherProps> = ({
  activePersona,
  onChange,
  className,
}) => {
  const tabs: { id: Persona; label: string; icon: React.ReactNode }[] = [
    {
      id: 'tech',
      label: 'Tech',
      icon: <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
    {
      id: 'creative',
      label: 'Creative',
      icon: <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    },
  ];

  return (
    <div
      role="tablist"
      aria-label="Portfolio Mode"
      className={cn(
        'relative inline-flex items-center p-0.5 sm:p-1 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl sm:rounded-2xl shadow-inner max-w-full',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activePersona === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative z-10 flex items-center gap-1 sm:gap-2 px-2 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-sm font-semibold rounded-lg sm:rounded-xl transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] select-none whitespace-nowrap',
              isActive
                ? tab.id === 'tech'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-purple-600 dark:text-purple-400'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>

            {isActive && (
              <motion.div
                layoutId="persona-indicator"
                transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                className="absolute inset-0 z-[-1] bg-[var(--surface)] rounded-lg sm:rounded-xl shadow-md border border-[var(--border)]"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
