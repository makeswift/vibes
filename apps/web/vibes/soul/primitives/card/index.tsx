import { clsx } from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface CardContent {
  title: string;
  image?: { src: string; alt: string };
  href: string;
}

export interface CardProps extends CardContent {
  className?: string;
  textColorScheme?: 'light' | 'dark';
  iconColorScheme?: 'light' | 'dark';
  aspectRatio?: '5:6' | '3:4' | '1:1';
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-focus: hsl(var(--primary));
 *   --card-light-offset: hsl(var(--background));
 *   --card-light-text: hsl(var(--foreground));
 *   --card-light-icon: hsl(var(--foreground));
 *   --card-light-background: hsl(var(--contrast-100));
 *   --card-dark-offset: hsl(var(--foreground));
 *   --card-dark-text: hsl(var(--background));
 *   --card-dark-icon: hsl(var(--background));
 *   --card-dark-background: hsl(var(--contrast-500));
 *   --card-font-family: var(--font-family-body);
 * }
 * ```
 */
export function Card({
  className,
  title,
  image,
  href,
  textColorScheme = 'light',
  iconColorScheme = 'light',
  aspectRatio = '5:6',
}: CardProps) {
  return (
    <article
      className={clsx(
        'group relative flex w-full min-w-0 max-w-md cursor-pointer flex-col gap-2 rounded-2xl font-[family-name:var(--card-font-family,var(--font-family-body))] @container',
        className,
      )}
    >
      <ArrowUpRight
        className={clsx(
          'absolute right-5 top-5 z-10 transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:translate-x-1.5',
          {
            light: 'text-[var(--card-light-icon,hsl(var(--foreground)))]',
            dark: 'text-[var(--card-dark-icon,hsl(var(--background)))]',
          }[iconColorScheme],
        )}
        strokeWidth={1.5}
      />
      <div
        className={clsx(
          'relative overflow-hidden rounded-[inherit] group-focus:ring-[var(--card-focus,hsl(var(--primary)))] group-focus-visible:ring-2',
          {
            light: 'bg-[var(--card-light-background,hsl(var(--contrast-100)))]',
            dark: 'bg-[var(--card-dark-background,hsl(var(--contrast-500)))]',
          }[textColorScheme],
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      >
        {image != null ? (
          <Image
            alt={image.alt}
            className={clsx(
              'w-full scale-100 select-none object-cover transition-transform duration-500 ease-out group-hover:scale-110',
              {
                light: 'bg-[var(--card-light-background,hsl(var(--contrast-100)))]',
                dark: 'bg-[var(--card-dark-background,hsl(var(--contrast-500)))]',
              }[textColorScheme],
            )}
            fill
            sizes="(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw"
            src={image.src}
          />
        ) : (
          <div
            className={clsx(
              'break-words pl-5 pt-5 text-4xl font-bold leading-[0.8] tracking-tighter opacity-25 transition-transform duration-500 ease-out group-hover:scale-105 @xs:text-7xl',
              {
                light: 'text-[var(--card-light-text,hsl(var(--foreground)))]',
                dark: 'text-[var(--card-dark-text,hsl(var(--background)))]',
              }[textColorScheme],
            )}
          >
            {title}
          </div>
        )}
      </div>
      <span
        className={clsx(
          'line-clamp-1 text-lg font-medium',
          {
            light: 'text-[var(--card-light-text,hsl(var(--foreground)))]',
            dark: 'text-[var(--card-dark-text,hsl(var(--background)))]',
          }[textColorScheme],
        )}
      >
        {title}
      </span>
      <Link
        className={clsx(
          'absolute inset-0 rounded-b-lg rounded-t-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--card-focus,hsl(var(--primary)))] focus-visible:ring-offset-4',
          {
            light: 'ring-offset-[var(--card-light-offset,hsl(var(--background)))]',
            dark: 'ring-offset-[var(--card-dark-offset,hsl(var(--foreground)))]',
          }[textColorScheme],
        )}
        href={href}
      >
        <span className="sr-only">View product</span>
      </Link>
    </article>
  );
}

export function CardSkeleton({
  aspectRatio = '5:6',
  className,
}: {
  aspectRatio?: '5:6' | '3:4' | '1:1';
  className?: string;
}) {
  return (
    <div className={clsx('@container', className)}>
      <Skeleton.Box
        className={clsx(
          'rounded-2xl',
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      />
      <div className="mt-3">
        <Skeleton.Text characterCount={10} className="rounded text-lg" />
      </div>
    </div>
  );
}
