'use client';

import { clsx } from 'clsx';
import { X } from 'lucide-react';
import { ReactNode, Ref } from 'react';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --banner-focus: hsl(var(--foreground));
 *   --banner-background: hsl(var(--primary));
 *   --banner-text: hdl(var(--foreground));
 *   --banner-close-icon: hsl(var(--foreground)/50%);
 *   --banner-close-icon-hover: hdl(var(--foreground));
 *   --banner-close-background: transparent;
 *   --banner-close-background-hover: hsl(var(--background)/40%);
 *   --banner-font-family: var(--font-family-body);
 * }
 * ```
 */
export function Banner({
  children,
  hideDismiss = false,
  className,
  onDismiss,
  dismissed = false,
  initialized = true,
  ref,
}: {
  children: ReactNode;
  hideDismiss?: boolean;
  onDismiss?: () => void;
  dismissed?: boolean;
  initialized?: boolean;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}) {
  if (!initialized) return null;

  return (
    <div
      className={clsx(
        'relative flex items-center justify-between gap-4 overflow-hidden bg-[var(--banner-background,hsl(var(--primary)))] px-8 py-3 transition-all duration-300 ease-in @container',
        dismissed ? 'pointer-events-none max-h-0' : 'max-h-32',
        className,
      )}
      id="announcement-bar"
      ref={ref}
    >
      <div className="flex-1 font-[family-name:var(--banner-font-family,var(--font-family-body))] text-sm text-[var(--banner-text,hsl(var(--foreground)))] @xl:text-center @xl:text-base">
        {children}
      </div>
      {!hideDismiss && (
        <button
          aria-label="Dismiss banner"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--banner-close-background,transparent)] text-[var(--banner-close-icon,hsl(var(--foreground)/50%))] transition-colors duration-300 hover:bg-[var(--banner-close-background-hover,hsl(var(--background)/40%))] hover:text-[var(--banner-close-icon-hover,hsl(var(--foreground)))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--banner-focus,hsl(var(--foreground)))]"
          onClick={onDismiss}
        >
          <X absoluteStrokeWidth size={20} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}
