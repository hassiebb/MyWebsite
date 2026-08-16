import React from 'react';
import { ExternalLink, FolderGit2, Star, ArrowUpRight, Globe, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { Project } from '../../../types/portfolio';

interface TechProjectsProps {
  projects: Project[];
}

export const TechProjects: React.FC<TechProjectsProps> = ({ projects }) => {
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
    return `${project.id}.local`;
  };

  return (
    <section id="projects" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of client engagements, graduation innovations, and modern web applications."
        badge="Portfolio Work"
        badgeVariant="blue"
        icon={<FolderGit2 className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 w-full max-w-full min-w-0">
        {projects.map((project, idx) => {
          const hasLiveLink = Boolean(project.link && project.link !== 'null' && project.link.trim() !== '');
          const hasGithubLink = Boolean(project.github && project.github !== 'null' && project.github.trim() !== '');

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`w-full max-w-full min-w-0 ${project.featured && idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <Card glow="blue" className="h-full flex flex-col justify-between group overflow-hidden p-0 sm:p-0 w-full max-w-full min-w-0">
                {/* Browser-Style Visual Header Preview */}
                <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden w-full max-w-full min-w-0">
                  {/* Browser Bar */}
                  <div className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 border-b border-[var(--border)] bg-[var(--surface)] w-full max-w-full min-w-0">
                    <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    <div className="flex-1 min-w-0 max-w-[200px] sm:max-w-[260px] truncate px-2 sm:px-3 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[10px] sm:text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1 sm:gap-1.5 justify-center">
                      <Globe className="w-2.5 h-2.5 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{getDisplayUrl(project)}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[var(--text-muted)] flex-shrink-0">
                      <Code className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60" />
                    </div>
                  </div>

                  {/* Visual Preview Canvas */}
                  <div className="h-28 sm:h-36 relative flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-blue-950/10 via-[var(--bg-secondary)] to-indigo-950/10 group-hover:from-blue-900/20 group-hover:to-indigo-900/20 transition-all duration-300 w-full max-w-full">
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center z-10 min-w-0 max-w-full px-2">
                      <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-xs group-hover:scale-105 group-hover:border-blue-500/50 transition-all duration-300 text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <FolderGit2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-[var(--text-primary)] truncate max-w-full">
                        {project.title}
                      </span>
                    </div>

                    {/* Subtle decorative grid background */}
                    <div
                      className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '16px 16px',
                      }}
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-7 flex-1 flex flex-col justify-between w-full max-w-full min-w-0">
                  <div>
                    {/* Header: Type Badge & Period */}
                    <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {project.featured && <Star className="w-3 h-3 fill-blue-500" />}
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
                  {(hasLiveLink || hasGithubLink) && (
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
        })}
      </div>
    </section>
  );
};
