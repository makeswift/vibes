import { clsx } from 'clsx';
import { X } from 'lucide-react';
import { ReactNode } from 'react';

import { Button } from '@/vibes/soul/primitives/button';

export interface AlertProps {
  variant: 'success' | 'warning' | 'error' | 'info';
  message: ReactNode;
  description?: string;
  dismissLabel?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  onDismiss?: () => void;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --alert-success-background: var(--success-highlight);
 *   --alert-warning-background: var(--warning-highlight);
 *   --alert-error-background: var(--error-highlight);
 *   --alert-info-background: var(--background);
 *   --alert-font-family: var(--font-family-body);
 *   --alert-border: color-mix(in oklab, var(--foreground) 10%, transparent);
 *   --alert-message-text: var(--foreground);
 *   --alert-description-text: color-mix(in oklab, var(--foreground) 50%, transparent);
 * }
 * ```
 */
export function Alert({
  variant,
  message,
  description,
  action,
  dismissLabel = 'Dismiss',
  onDismiss,
}: AlertProps) {
  return (
    <div
      className={clsx(
        'flex max-w-[356px] items-center justify-between gap-2 rounded-xl border border-(--alert-border,color-mix(in_oklab,var(--foreground)_10%,transparent)) py-3 ps-4 pe-3 shadow-xs',
        {
          success: 'bg-(--alert-success-background,var(--success-highlight))',
          warning: 'bg-(--alert-warning-background,var(--warning-highlight))',
          error: 'bg-(--alert-error-background,var(--error-highlight))',
          info: 'bg-(--alert-info-background,var(--background))',
        }[variant],
      )}
      role="alert"
    >
      <div className="font-(family-name:--alert-font-family,var(--font-family-body))">
        <h5 className="text-sm font-normal text-(--alert-message-text,var(--foreground))">
          {message}
        </h5>
        {Boolean(description) && (
          <p className="text-xs font-medium text-(--alert-description-text,color-mix(in_oklab,var(--foreground)_50%,transparent))">
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-1">
        {action && (
          <Button onClick={action.onClick} size="x-small" variant="ghost">
            {action.label}
          </Button>
        )}
        <Button
          aria-label={dismissLabel}
          onClick={onDismiss}
          shape="circle"
          size="x-small"
          variant="ghost"
        >
          <X size={20} strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
