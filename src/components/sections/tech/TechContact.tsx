import React, { useState } from 'react';
import { Mail, Check, Copy, Send, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../common/SectionHeading';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { SocialIcons } from '../../common/SocialIcons';
import { Profile } from '../../../types/portfolio';

interface TechContactProps {
  profile: Profile;
  ctaText: string;
}

export const TechContact: React.FC<TechContactProps> = ({ profile, ctaText }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 border-t border-[var(--border)] w-full max-w-full min-w-0 overflow-hidden">
      <SectionHeading
        title="Get In Touch"
        subtitle={ctaText}
        badge="Connect"
        badgeVariant="blue"
        icon={<Send className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 w-full max-w-full min-w-0">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 w-full max-w-full min-w-0"
        >
          <Card glow="blue" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
            <div className="min-w-0 max-w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2 break-words">
                Let's build something exceptional together.
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5 break-words">
                Whether you're looking for a dedicated software developer, an enterprise SAP ABAP engineer, or a high-energy creative media collaborator, my inbox is always open.
              </p>

              {/* Direct Email Action Box */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-5 max-w-full min-w-0">
                <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] sm:text-xs text-[var(--text-muted)] font-medium">Direct Email</p>
                    <p className="text-xs sm:text-base font-bold text-[var(--text-primary)] truncate">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end flex-shrink-0">
                  <Button
                    onClick={copyEmail}
                    variant="secondary"
                    size="sm"
                    icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>

                  <Button
                    href={`mailto:${profile.email}`}
                    variant="primary"
                    size="sm"
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Connection Row */}
            <div className="pt-2 min-w-0 max-w-full">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                Connect Across Social Networks
              </h4>
              <SocialIcons socials={profile.social} variant="contact" />
            </div>
          </Card>
        </motion.div>

        {/* Quick Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-full min-w-0"
        >
          <Card glow="blue" className="h-full flex flex-col justify-between w-full max-w-full min-w-0 p-5 sm:p-7">
            <div className="min-w-0 max-w-full">
              <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)] mb-3 pb-2.5 border-b border-[var(--border)]">
                Location & Details
              </h3>

              <div className="flex flex-col gap-3 sm:gap-4 min-w-0 max-w-full">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm min-w-0 max-w-full">
                  <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 max-w-full">
                    <span className="text-[11px] font-semibold text-[var(--text-muted)] block">Based in</span>
                    <span className="text-[var(--text-primary)] font-medium break-words">{profile.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs sm:text-sm min-w-0 max-w-full">
                  <Phone className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 max-w-full">
                    <span className="text-[11px] font-semibold text-[var(--text-muted)] block">Direct Phone</span>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-blue)] truncate block"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[var(--border)] text-xs text-[var(--text-muted)] leading-relaxed">
              Available for full-time roles, freelance projects, and sports media productions.
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
