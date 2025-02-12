import { clsx } from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';

export interface ButtonLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'large' | 'medium' | 'small' | 'x-small';
  shape?: 'pill' | 'rounded' | 'square' | 'circle';
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --button-link-focus: hsl(var(--primary));
 *   --button-link-font-family: var(--font-family-body);
 *   --button-link-primary-background: hsl(var(--primary));
 *   --button-link-primary-background-hover: color-mix(in oklab, hsl(var(--primary)), white 75%);
 *   --button-link-primary-text: hsl(var(--foreground));
 *   --button-link-primary-border: hsl(var(--primary));
 *   --button-link-secondary-background: hsl(var(--foreground));
 *   --button-link-secondary-background-hover: hsl(var(--background));
 *   --button-link-secondary-text: hsl(var(--background));
 *   --button-link-secondary-border: hsl(var(--foreground));
 *   --button-link-tertiary-background: hsl(var(--background));
 *   --button-link-tertiary-background-hover: hsl(var(--contrast-100));
 *   --button-link-tertiary-text: hsl(var(--foreground));
 *   --button-link-tertiary-border: hsl(var(--contrast-200));
 *   --button-link-ghost-background: transparent;
 *   --button-link-ghost-background-hover: hsl(var(--foreground) / 5%);
 *   --button-link-ghost-text: hsl(var(--foreground));
 *   --button-link-ghost-border: transparent;
 * }
 * ```
 */
export function ButtonLink({
  variant = 'primary',
  size = 'large',
  shape = 'pill',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        'relative z-0 inline-flex h-fit select-none items-center justify-center overflow-hidden border text-center font-[family-name:var(--button-link-font-family)] font-semibold leading-normal after:absolute after:inset-0 after:-z-10 after:-translate-x-[105%] after:transition-[opacity,transform] after:duration-300 after:[animation-timing-function:cubic-bezier(0,0.25,0,1)] hover:after:translate-x-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus,hsl(var(--primary)))] focus-visible:ring-offset-2',
        {
          primary:
            'border-[var(--button-link-primary-border,hsl(var(--primary)))] bg-[var(--button-link-primary-background,hsl(var(--primary)))] text-[var(--button-link-primary-text)] after:bg-[var(--button-link-primary-background-hover,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
          secondary:
            'border-[var(--button-link-secondary-border,hsl(var(--foreground)))] bg-[var(--button-link-secondary-background,hsl(var(--foreground)))] text-[var(--button-link-secondary-text,hsl(var(--background)))] after:bg-[var(--button-link-secondary-background-hover,hsl(var(--background)))]',
          tertiary:
            'border-[var(--button-link-tertiary-border,hsl(var(--contrast-200)))] bg-[var(--button-link-tertiary-background,hsl(var(--background)))] text-[var(--button-link-tertiary-text,hsl(var(--foreground)))] after:bg-[var(--button-link-tertiary-background-hover,hsl(var(--contrast-100)))]',
          ghost:
            'border-[var(--button-link-ghost-border,transparent)] bg-[var(--button-link-ghost-background,transparent)] text-[var(--button-link-ghost-text,hsl(var(--foreground)))] after:bg-[var(--button-link-ghost-background-hover,hsl(var(--foreground)/5%))]',
        }[variant],
        {
          'x-small': 'min-h-8 text-xs',
          small: 'min-h-10 text-sm',
          medium: 'min-h-12 text-base',
          large: 'min-h-14 text-base',
        }[size],
        shape !== 'circle' &&
          {
            'x-small': 'gap-x-2 px-3 py-1.5',
            small: 'gap-x-2 px-4 py-2.5',
            medium: 'gap-x-2.5 px-5 py-3',
            large: 'gap-x-3 px-6 py-4',
          }[size],
        {
          pill: 'rounded-full after:rounded-full',
          rounded: 'rounded-lg after:rounded-lg',
          square: 'rounded-none after:rounded-none',
          circle: 'aspect-square rounded-full after:rounded-full',
        }[shape],
        className,
      )}
    >
      <span className={clsx(variant === 'secondary' && 'mix-blend-difference')}>{children}</span>
    </Link>
  );
}
