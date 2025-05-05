'use client';

import { clsx } from 'clsx';
import { X } from 'lucide-react';
import { ReactNode, Ref, useCallback, useEffect, useState } from 'react';

export interface BannerProps {
  id: string;
  children: ReactNode;
  hideDismiss?: boolean;
  className?: string;
  onDismiss?: () => void;
  ref?: Ref<HTMLDivElement>;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --banner-focus: var(--foreground);
 *   --banner-background: var(--primary);
 *   --banner-text: var(--foreground);
 *   --banner-close-icon: color-mix(in oklab, var(--foreground) 50%, transparent);
 *   --banner-close-icon-hover: var(--foreground);
 *   --banner-close-background: transparent;
 *   --banner-close-background-hover: color-mix(in oklab, var(--background) 40%, transparent);
 *   --banner-font-family: var(--font-family-body);
 * }
 * ```
 */
export const Banner = ({
  id,
  children,
  hideDismiss = false,
  className,
  onDismiss,
  ref,
}: BannerProps) => {
  const [banner, setBanner] = useState({ dismissed: false, initialized: false });

  useEffect(() => {
    const hidden = localStorage.getItem(`${id}-hidden-banner`) === 'true';

    setBanner({ dismissed: hidden, initialized: true });
  }, [id]);

  const hideBanner = useCallback(() => {
    setBanner((prev) => ({ ...prev, dismissed: true }));
    localStorage.setItem(`${id}-hidden-banner`, 'true');
    onDismiss?.();
  }, [id, onDismiss]);

  if (!banner.initialized) return null;

  return (
    <div
      className={clsx(
        '@container overflow-hidden bg-(--banner-background,var(--primary)) transition-all duration-300 ease-in',
        banner.dismissed ? 'pointer-events-none max-h-0' : 'max-h-32',
        className,
      )}
      id="announcement-bar"
      ref={ref}
    >
      <div className="flex items-center justify-between gap-4 px-8 py-3">
        <div className="flex-1 font-(family-name:--banner-font-family,var(--font-family-body)) text-sm text-(--banner-text,var(--foreground)) @xl:text-center @xl:text-base">
          {children}
        </div>

        {!hideDismiss && (
          <button
            aria-label="Dismiss banner"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-(--banner-close-background,transparent) text-(--banner-close-icon,color-mix(in_oklab,var(--foreground)_50%,transparent)) transition-colors duration-300 hover:bg-(--banner-close-background-hover,color-mix(in_oklab,var(--background)_40%,transparent)) hover:text-(--banner-close-icon-hover,var(--foreground)) focus-visible:ring-2 focus-visible:ring-(--banner-focus,var(--foreground)) focus-visible:outline-hidden"
            onClick={(e) => {
              e.preventDefault();
              hideBanner();
            }}
          >
            <X absoluteStrokeWidth size={20} strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
};
