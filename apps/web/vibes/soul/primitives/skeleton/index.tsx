import { clsx } from 'clsx';

type Props = {
  parentClassName?: string;
  childClassName?: string;
  rounded?: 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
} & (
  | { type: 'text'; characterCount: number; aspectRatio?: never }
  | { type: 'image'; aspectRatio: '5:6' | '3:4' | '1:1'; characterCount?: never }
  | { type?: 'box' | 'circle'; characterCount?: never; aspectRatio?: never }
);

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --skeleton-background: hsl(var(--contrast-100));
 * }
 * ```
 */

export function Skeleton({
  parentClassName,
  childClassName,
  type = 'text',
  rounded,
  characterCount = 10,
  aspectRatio = '5:6',
}: Props) {
  if (type === 'box') {
    return (
      <div className={clsx('flex items-center', parentClassName)}>
        <div
          className={clsx(
            'bg-[var(--skeleton-background,hsl(var(--contrast-100)))]',
            typeof rounded === 'string' &&
              {
                sm: 'rounded-sm',
                base: 'rounded',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                '2xl': 'rounded-2xl',
                '3xl': 'rounded-3xl',
                full: 'rounded-full',
              }[rounded],
            childClassName,
          )}
        />
      </div>
    );
  }

  if (type === 'circle') {
    return (
      <div className={clsx('flex items-center', parentClassName)}>
        <div
          className={clsx(
            'rounded-full bg-[var(--skeleton-background,hsl(var(--contrast-100)))]',
            childClassName,
          )}
        />
      </div>
    );
  }

  if (type === 'image') {
    return (
      <div className={clsx('flex items-center', parentClassName)}>
        <div
          className={clsx(
            'bg-[var(--skeleton-background,hsl(var(--contrast-100)))]',
            typeof rounded === 'string' &&
              {
                sm: 'rounded-sm',
                base: 'rounded',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                '2xl': 'rounded-2xl',
                '3xl': 'rounded-3xl',
                full: 'rounded-full',
              }[rounded],
            {
              '5:6': 'aspect-[5/6]',
              '3:4': 'aspect-[3/4]',
              '1:1': 'aspect-square',
            }[aspectRatio],
            childClassName,
          )}
        />
      </div>
    );
  }

  return (
    <div className={clsx('flex h-[1lh] items-center', parentClassName)}>
      <div
        className={clsx(
          'h-[0.5em] bg-[var(--skeleton-background,hsl(var(--contrast-100)))]',
          typeof rounded === 'string' &&
            {
              sm: 'rounded-sm',
              base: 'rounded',
              md: 'rounded-md',
              lg: 'rounded-lg',
              xl: 'rounded-xl',
              '2xl': 'rounded-2xl',
              '3xl': 'rounded-3xl',
              full: 'rounded-full',
            }[rounded],
          childClassName,
        )}
        style={{ width: `${characterCount}ch` }}
      />
    </div>
  );
}

export function SkeletonWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx('motion-safe:animate-pulse', className)} role="status">
      <div aria-hidden="true">{children}</div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
