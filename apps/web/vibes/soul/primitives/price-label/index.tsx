import { clsx } from 'clsx';

export interface PriceRange {
  type: 'range';
  minValue: string;
  maxValue: string;
}

export interface PriceSale {
  type: 'sale';
  previousValue: string;
  currentValue: string;
}

export type Price = string | PriceRange | PriceSale;

export interface PriceLabelProps {
  className?: string;
  colorScheme?: 'light' | 'dark';
  price: Price;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --price-light-text: var(--foreground);
 *   --price-light-sale-text: var(--foreground);
 *   --price-dark-text: var(--background);
 *   --price-dark-sale-text: var(--background);
 * }
 * ```
 */
export function PriceLabel({ className, colorScheme = 'light', price }: PriceLabelProps) {
  if (typeof price === 'string') {
    return (
      <span
        className={clsx(
          'block font-semibold',
          {
            light: 'text-(--price-light-text,var(--foreground))',
            dark: 'text-(--price-dark-text,var(--background))',
          }[colorScheme],
          className,
        )}
      >
        {price}
      </span>
    );
  }

  switch (price.type) {
    case 'range':
      return (
        <span
          className={clsx(
            'block font-semibold',
            {
              light: 'text-(--price-light-text,var(--foreground))',
              dark: 'text-(--price-dark-text,var(--background))',
            }[colorScheme],
            className,
          )}
        >
          {`${price.minValue} – ${price.maxValue}`}
        </span>
      );
    case 'sale':
      return (
        <span className={clsx('block font-semibold', className)}>
          <span
            className={clsx(
              'font-normal line-through opacity-50',
              {
                light: 'text-(--price-light-text,var(--foreground))',
                dark: 'text-(--price-dark-text,var(--background))',
              }[colorScheme],
            )}
          >
            {price.previousValue}
          </span>{' '}
          <span
            className={clsx(
              {
                light: 'text-(--price-light-sale-text,var(--foreground))',
                dark: 'text-(--price-dark-sale-text,var(--background))',
              }[colorScheme],
            )}
          >
            {price.currentValue}
          </span>
        </span>
      );
    default:
      return null;
  }
}
