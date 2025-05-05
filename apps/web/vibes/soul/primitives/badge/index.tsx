import { clsx } from 'clsx';

export interface BadgeProps {
  children: string;
  shape?: 'pill' | 'rounded';
  variant?: 'primary' | 'warning' | 'error' | 'success' | 'info';
  className?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --badge-primary-background: var(--primary-highlight);
 *   --badge-accent-background: var(--accent);
 *   --badge-success-background: var(--success-highlight);
 *   --badge-warning-background: var(--warning-highlight);
 *   --badge-error-background: var(--error-highlight);
 *   --badge-info-background: var(--info-highlight);
 *   --badge-text: var(--foreground);
 *   --badge-font-family: var(--font-family-mono);
 * }
 * ```
 */
export function Badge({ children, shape = 'rounded', className, variant = 'primary' }: BadgeProps) {
  return (
    <span
      className={clsx(
        'px-2 py-0.5 font-(family-name:--badge-font-family,var(--font-family-mono)) text-xs tracking-tighter text-(--badge-text,var(--foreground)) uppercase',
        {
          pill: 'rounded-full',
          rounded: 'rounded',
        }[shape],
        {
          primary: 'bg-(--badge-primary-background,var(--primary-highlight))',
          warning: 'bg-(--badge-warning-background,var(--warning-highlight))',
          error: 'bg-(--badge-error-background,var(--error-highlight))',
          success: 'bg-(--badge-success-background,var(--success-highlight))',
          info: 'bg-(--badge-info-background,var(--info-highlight))',
        }[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
