import React from 'react';
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { SocialLink } from '../../types/portfolio';
import { cn } from '../../utils/cn';

interface SocialIconsProps {
  socials: SocialLink[];
  variant?: 'sidebar' | 'hero' | 'contact';
  className?: string;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ socials, variant = 'sidebar', className }) => {
  const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes('linkedin')) return <FaLinkedinIn className="w-4 h-4" />;
    if (p.includes('github')) return <FaGithub className="w-4 h-4" />;
    if (p.includes('whatsapp')) return <FaWhatsapp className="w-4 h-4" />;
    if (p.includes('instagram')) return <FaInstagram className="w-4 h-4" />;
    if (p.includes('youtube')) return <FaYoutube className="w-4 h-4" />;
    return null;
  };

  return (
    <div className={cn('flex items-center gap-2 flex-wrap', className)}>
      {socials.map((item) => (
        <a
          key={item.platform}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className={cn(
            'inline-flex items-center justify-center rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]',
            variant === 'sidebar' &&
              'w-9 h-9 bg-white/5 hover:bg-[var(--accent-blue)] text-slate-300 hover:text-white border border-white/10 hover:border-transparent hover:-translate-y-0.5',
            variant === 'hero' &&
              'w-11 h-11 glass-card hover:bg-[var(--accent-blue)] text-[var(--text-secondary)] hover:text-white hover:-translate-y-1 hover:shadow-lg',
            variant === 'contact' &&
              'px-4 py-2.5 glass-card text-sm font-medium hover:bg-[var(--accent-blue)] text-[var(--text-primary)] hover:text-white gap-2 hover:-translate-y-0.5 shadow-sm'
          )}
        >
          {getIcon(item.platform)}
          {variant === 'contact' && <span>{item.platform}</span>}
        </a>
      ))}
    </div>
  );
};
