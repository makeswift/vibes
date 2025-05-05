import { clsx } from 'clsx';
import { CircleAlert } from 'lucide-react';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --field-error: var(--error);
 *  }
 * ```
 */
export function FieldError({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...rest}
      className={clsx(
        'flex items-center gap-1 text-xs text-(--field-error,var(--error))',
        className,
      )}
    >
      <CircleAlert size={20} strokeWidth={1.5} />

      {children}
    </div>
  );
}
