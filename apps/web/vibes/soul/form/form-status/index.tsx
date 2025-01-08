import { clsx } from 'clsx';
import { CheckCircle, CircleAlert } from 'lucide-react';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --form-status-background-error: color-mix(in oklab, hsl(var(--error)), white 75%);
 *    --form-status-text-error: color-mix(in oklab, hsl(var(--error)), black 75%);
 *    --form-status-background-success: color-mix(in oklab, hsl(var(--success)), white 75%);
 *    --form-status-text-success: color-mix(in oklab, hsl(var(--success)), black 75%);
 *  }
 * ```
 */
export function FormStatus({
  className,
  children,
  type = 'success',
  ...rest
}: React.ComponentPropsWithoutRef<'div'> & { type?: 'error' | 'success' }) {
  return (
    <div
      {...rest}
      className={clsx(
        'flex items-center gap-3 rounded-xl px-4 py-3 text-sm',
        {
          error:
            'bg-[var(--form-status-background-error,color-mix(in_oklab,hsl(var(--error)),white_75%))] text-[var(--form-status-text-error,color-mix(in_oklab,hsl(var(--error)),black_75%))]',
          success:
            'bg-[var(--form-status-background-success,color-mix(in_oklab,hsl(var(--success)),white_75%))] text-[var(--form-status-text-success,color-mix(in_oklab,hsl(var(--success)),black_75%))]',
        }[type],
        className,
      )}
    >
      {type === 'error' && <CircleAlert className="shrink-0" size={20} strokeWidth={1.5} />}
      {type === 'success' && <CheckCircle className="shrink-0" size={20} strokeWidth={1.5} />}

      {children}
    </div>
  );
}
