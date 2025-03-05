import { clsx } from 'clsx';

export interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  loadingAriaLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --spinner-base: hsl(var(--contrast-100));
 *   --spinner-ring: color-mix(in oklab, hsl(var(--primary)), black 75%);
 * }
 * ```
 */
export const Spinner = function Spinner({
  size = 'sm',
  loadingAriaLabel = 'Loading...',
}: SpinnerProps) {
  return (
    <span
      aria-label={loadingAriaLabel}
      className={clsx(
        'box-border inline-block animate-spin rounded-full border-[var(--spinner-base,hsl(var(--contrast-100)))] border-b-[var(--spinner-ring,color-mix(in_oklab,_hsl(var(--primary)),_black_75%))]',
        {
          xs: 'h-5 w-5 border-2',
          sm: 'h-6 w-6 border-2',
          md: 'h-10 w-10 border-[3px]',
          lg: 'h-14 w-14 border-4',
        }[size],
      )}
      role="status"
    />
  );
};
