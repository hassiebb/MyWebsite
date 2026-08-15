import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  hoverEffect?: boolean;
  glow?: 'none' | 'blue' | 'purple';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = 'none',
  ...props
}) => {
  const glowStyles = {
    none: '',
    blue: 'hover:border-blue-500/40 hover:shadow-blue-500/5',
    purple: 'hover:border-purple-500/40 hover:shadow-purple-500/5',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
