import React, { useState } from 'react';
import {
  ExternalLink,
  FolderGit2,
  Star,
  ArrowUpRight,
  Globe,
  Code,
  Smartphone,
  Archive,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { FaGithub, FaApple, FaGooglePlay } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { Project } from '../../../types/portfolio';
import { cn } from '../../../utils/cn';

interface TechProjectsProps {
  projects: Project[];
}

type FilterTab = 'all' | 'web' | 'mobile';

export const TechProjects: React.FC<TechProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [showArchived, setShowArchived] = useState(false);

  const mainProjects = projects.filter((p) => !p.archived);
  const archivedProjects = projects.filter((p) => p.archived);

  const filteredProjects = mainProjects.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.platform === activeFilter;
  });

  const getDisplayUrl = (project: Project) => {
    if (project.link) {
      try {
        const url = new URL(project.link);
        return url.hostname + url.pathname.replace(/\/$/, '');
      } catch {
        return project.link;
      }
    }
    if (project.github) {
      return project.github.replace('https://', '');
    }
    return project.platform === 'mobile' ? `${project.id}.app` : `${project.id}.web`;
  };

  const filterTabs: { id: FilterTab; label: string; icon: React.ReactNode; count: number }[] = [
    {
      id: 'all',
      label: 'All Projects',
      icon: <FolderGit2 className="w-3.5 h-3.5" />,
      count: mainProjects.length,
    },
    {
      id: 'web',
      label: 'Web Platforms',
      icon: <Globe className="w-3.5 h-3.5" />,
      count: mainProjects.filter((p) => p.platform === 'web').length,
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
      icon: <Smartphone className="w-3.5 h-3.5" />,
      count: mainProjects.filter((p) => p.platform === 'mobile').length,
    },
  ];

  const renderProjectCard = (project: Project, idx: number, isFeaturedSpan = false) => {
    const hasLiveLink = Boolean(project.link && project.link !== 'null' && project.link.trim() !== '');
    const hasGithubLink = Boolean(project.github && project.github !== 'null' && project.github.trim() !== '');
    const hasAppStore = Boolean(project.appStoreUrl && project.appStoreUrl.trim() !== '');
    const hasPlayStore = Boolean(project.playStoreUrl && project.playStoreUrl.trim() !== '');
    const isMobile = project.platform === 'mobile';

    return (
      <motion.div
        key={project.id}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, delay: idx * 0.05 }}
        className={cn('w-full max-w-full min-w-0', isFeaturedSpan && 'md:col-span-2')}
      >
        <Card glow="blue" className="h-full flex flex-col justify-between group overflow-hidden p-0 sm:p-0 w-full max-w-full min-w-0">
          {/* Device / Browser Header Preview */}
          <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden w-full max-w-full min-w-0">
            {/* Top Bar */}
            <div className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 border-b border-[var(--border)] bg-[var(--surface)] w-full max-w-full min-w-0">
              <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              <div className="flex-1 min-w-0 max-w-[200px] sm:max-w-[260px] truncate px-2 sm:px-3 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1 sm:gap-1.5 justify-center">
                {isMobile ? (
                  <Smartphone className="w-2.5 h-2.5 text-indigo-500 flex-shrink-0" />
                ) : (
                  <Globe className="w-2.5 h-2.5 text-blue-500 flex-shrink-0" />
                )}
                <span className="truncate">{getDisplayUrl(project)}</span>
              </div>

              <div className="flex items-center gap-1 text-[var(--text-muted)] flex-shrink-0">
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] border border-[var(--border)]">
                  {isMobile ? 'Mobile' : 'Web'}
                </span>
                <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60 hidden sm:inline" />
              </div>
            </div>

            {/* Visual Preview Canvas or Actual Image */}
            <div className="h-36 sm:h-44 relative flex items-center justify-center bg-gradient-to-br from-blue-950/10 via-[var(--bg-secondary)] to-indigo-950/10 group-hover:from-blue-900/20 group-hover:to-indigo-900/20 transition-all duration-300 w-full max-w-full overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-center z-10 min-w-0 max-w-full px-4">
                  <div
                    className={cn(
                      'p-2.5 sm:p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs group-hover:scale-105 transition-all duration-300 flex-shrink-0',
                      isMobile
                        ? 'text-indigo-600 dark:text-indigo-400 group-hover:border-indigo-500/50'
                        : 'text-blue-600 dark:text-blue-400 group-hover:border-blue-500/50'
                    )}
                  >
                    {isMobile ? (
                      <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
                    ) : (
                      <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate max-w-full">
                    {project.title}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[var(--text-muted)]">
                    {isMobile ? 'iOS & Android · Cross-Platform App' : 'Responsive Web Application'}
                  </span>
                </div>
              )}

              {/* Subtle decorative grid background */}
              {!project.image && (
                <div
                  className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                    backgroundSize: '16px 16px',
                  }}
                />
              )}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between w-full max-w-full min-w-0">
            <div>
              {/* Header: Type Badge & Period */}
              <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                <span
                  className={cn(
                    'inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border',
                    isMobile
                      ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
                      : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                  )}
                >
                  {project.featured && <Star className="w-3 h-3 fill-current" />}
                  <span>{project.type}</span>
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-[var(--text-muted)]">
                  {project.period}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors flex items-center justify-between break-words">
                <span>{project.title}</span>
                {hasLiveLink && (
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-1" />
                )}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-xs sm:text-base leading-relaxed text-[var(--text-secondary)] break-words">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-3.5 flex flex-wrap gap-1 sm:gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Links */}
            {(hasLiveLink || hasGithubLink || hasAppStore || hasPlayStore) && (
              <div className="mt-5 pt-3.5 border-t border-[var(--border)] flex flex-wrap items-center gap-2 sm:gap-3">
                {hasLiveLink && (
                  <Button
                    href={project.link!}
                    target="_blank"
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    Live Demo
                  </Button>
                )}

                {hasAppStore && (
                  <Button
                    href={project.appStoreUrl!}
                    target="_blank"
                    variant="primary"
                    size="sm"
                    icon={<FaApple className="w-3.5 h-3.5" />}
                  >
                    App Store
                  </Button>
                )}

                {hasPlayStore && (
                  <Button
                    href={project.playStoreUrl!}
                    target="_blank"
                    variant="primary"
                    size="sm"
                    icon={<FaGooglePlay className="w-3.5 h-3.5" />}
                  >
                    Google Play
                  </Button>
                )}

                {hasGithubLink && (
                  <Button
                    href={project.github!}
                    target="_blank"
                    variant="secondary"
                    size="sm"
                    icon={<FaGithub className="w-3.5 h-3.5" />}
                  >
                    Source Code
                  </Button>
                )}
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
        <SectionHeading
          title="Web & Mobile Projects"
          subtitle="Production web platforms, cross-platform mobile apps, and full-stack engineering showcases."
          badge="Portfolio Work"
          badgeVariant="blue"
          icon={<FolderGit2 className="w-4 h-4" />}
          className="mb-0 sm:mb-0"
        />

        {/* Platform Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by platform"
          className="inline-flex items-center p-1 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] self-start sm:self-auto flex-wrap gap-1"
        >
          {filterTabs.map((tab) => {
            const active = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200',
                  active
                    ? 'bg-[var(--surface)] text-blue-600 dark:text-blue-400 shadow-xs border border-[var(--border)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 w-full max-w-full min-w-0">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) =>
            renderProjectCard(project, idx, activeFilter === 'all' && Boolean(project.featured) && idx === 0)
          )}
        </AnimatePresence>
      </motion.div>

      {/* Collapsible Academic / Early Web Archive */}
      {archivedProjects.length > 0 && activeFilter === 'all' && (
        <div className="mt-8 pt-6 border-t border-[var(--border)]">
          <button
            onClick={() => setShowArchived((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)] transition-all"
          >
            <Archive className="w-4 h-4 text-blue-500" />
            <span>
              {showArchived
                ? 'Hide Earlier Academic Web Projects'
                : `Show Earlier Academic Web Projects (${archivedProjects.length})`}
            </span>
            {showArchived ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {showArchived && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mt-5 overflow-hidden"
              >
                {archivedProjects.map((project, idx) => renderProjectCard(project, idx, false))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};
