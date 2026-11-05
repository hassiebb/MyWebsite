import React, { useEffect } from 'react';
import { X, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface LightboxItem {
  title: string;
  category: string;
  subtitle?: string;
  description?: string;
  image?: string;
  tags?: string[];
}

interface LightboxModalProps {
  item: LightboxItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl overflow-hidden my-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
              <div className="min-w-0 pr-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">
                  {item.category}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[var(--text-primary)] truncate">
                  {item.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close preview"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-purple-500 transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Image Preview Area */}
            {item.image && (
              <div className="w-full max-h-[65vh] bg-black/90 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-w-full max-h-[65vh] w-auto h-auto object-contain"
                />
              </div>
            )}

            {/* Metadata Footer */}
            <div className="p-4 sm:p-6">
              {item.subtitle && (
                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1.5">
                  {item.subtitle}
                </p>
              )}
              {item.description && (
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[var(--border)] flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      <Tag className="w-3 h-3 text-purple-500" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
