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
    <section id="contact" className="py-12 sm:py-16 border-t border-[var(--border)]">
      <SectionHeading
        title="Get In Touch"
        subtitle={ctaText}
        badge="Connect"
        badgeVariant="blue"
        icon={<Send className="w-4 h-4" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2"
        >
          <Card glow="blue" className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                Let's build something exceptional together.
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                Whether you're looking for a dedicated software developer, an enterprise SAP ABAP engineer, or a high-energy creative media collaborator, my inbox is always open.
              </p>

              {/* Direct Email Action Box */}
              <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-[var(--text-muted)] font-medium">Direct Email</p>
                    <p className="text-sm sm:text-base font-bold text-[var(--text-primary)] truncate">
                      {profile.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
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
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
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
        >
          <Card glow="blue" className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 pb-3 border-b border-[var(--border)]">
                Location & Details
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-muted)] block">Based in</span>
                    <span className="text-[var(--text-primary)] font-medium">{profile.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-semibold text-[var(--text-muted)] block">Direct Phone</span>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      className="text-[var(--text-primary)] font-medium hover:text-[var(--accent-blue)]"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] text-xs text-[var(--text-muted)] leading-relaxed">
              Available for full-time roles, freelance projects, and sports media productions.
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
