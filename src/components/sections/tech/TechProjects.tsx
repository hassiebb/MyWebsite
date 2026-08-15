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
    <section id="projects" className="py-12 sm:py-16 border-t border-[var(--border)]">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of client engagements, graduation innovations, and modern web applications."
        badge="Portfolio Work"
        badgeVariant="blue"
        icon={<FolderGit2 className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
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
              className={project.featured && idx === 0 ? 'md:col-span-2' : ''}
            >
              <Card glow="blue" className="h-full flex flex-col justify-between group overflow-hidden p-0 sm:p-0">
                {/* Browser-Style Visual Header Preview */}
                <div className="border-b border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 flex items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--surface)]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    <div className="flex-1 max-w-[260px] truncate px-3 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1.5 justify-center">
                      <Globe className="w-2.5 h-2.5 text-blue-500 flex-shrink-0" />
                      <span className="truncate">{getDisplayUrl(project)}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[var(--text-muted)]">
                      <Code className="w-3.5 h-3.5 opacity-60" />
                    </div>
                  </div>

                  {/* Visual Preview Canvas */}
                  <div className="h-32 sm:h-36 relative flex items-center justify-center p-6 bg-gradient-to-br from-blue-950/10 via-[var(--bg-secondary)] to-indigo-950/10 group-hover:from-blue-900/20 group-hover:to-indigo-900/20 transition-all duration-300">
                    <div className="flex flex-col items-center gap-2 text-center z-10">
                      <div className="p-3 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-sm group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 text-blue-600 dark:text-blue-400">
                        <FolderGit2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[var(--text-primary)]">
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
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Type Badge & Period */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                        {project.featured && <Star className="w-3 h-3 fill-blue-500" />}
                        <span>{project.type}</span>
                      </span>
                      <span className="text-xs font-medium text-[var(--text-muted)]">
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-blue)] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      {hasLiveLink && (
                        <ArrowUpRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      )}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  {(hasLiveLink || hasGithubLink) && (
                    <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-wrap items-center gap-3">
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
