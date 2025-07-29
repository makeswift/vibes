import { clsx } from 'clsx';
import Link from 'next/link';
import type { ElementType, ReactNode } from 'react';

import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export type CardProps<E extends ElementType> = {
  as?: E;
  className?: string;
  children: ReactNode;
} & ({ href: string; ariaLabel: string } | { href?: never; ariaLabel?: never });

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-focus: var(--primary);
 *   --card-border-color: var(--contrast-200);
 *   --card-background: var(--background);
 *   --card-hover-background: color-mix(in oklab, var(--contrast-100) 50%,transparent);
 * }
 * ```
 */
export function Card<T extends ElementType = 'div'>({
  as,
  className,
  children,
  href,
  ariaLabel,
}: CardProps<T>) {
  const CardPrimitive = as ?? 'div';

  return (
    <CardPrimitive
      className={clsx(
        'group/card @container relative w-full rounded-2xl border p-6',
        'border-(--card-border-color,var(--contrast-200)) bg-(--card-background,var(--background)) has-[a]:hover:bg-(--card-hover-background,color-mix(in_oklab,var(--contrast-100)_50%,transparent))',
        'transition-colors duration-300 ease-linear',
        className,
      )}
    >
      {children}
      {href !== undefined && (
        <Link
          className={clsx(
            'absolute inset-0 rounded-2xl',
            'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--card-focus,var(--primary)) focus-visible:outline-solid',
          )}
          href={href}
        >
          <span className="sr-only">{ariaLabel}</span>
        </Link>
      )}
    </CardPrimitive>
  );
}

export function CardSkeleton({ className }: Pick<CardProps<ElementType>, 'className'>) {
  return (
    <div className={clsx('@container', className)}>
      <Skeleton.Box />
    </div>
  );
}
