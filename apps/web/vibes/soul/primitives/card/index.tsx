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
  imageSizes?: string;
  textPosition?: 'inside' | 'outside';
  textSize?: 'small' | 'medium' | 'large' | 'x-large';
  showOverlay?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --card-focus: var(--primary);
 *   --card-light-offset: var(--background);
 *   --card-light-text: var(--foreground);
 *   --card-light-icon: var(--foreground);
 *   --card-light-background: var(--contrast-100);
 *   --card-dark-offset: var(--foreground);
 *   --card-dark-text: var(--background);
 *   --card-dark-icon: var(--background);
 *   --card-dark-background: var(--contrast-500);
 *   --card-font-family: var(--font-family-body);
 *   --card-border-radius: 1rem;
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
  imageSizes = '(min-width: 42rem) 25vw, (min-width: 32rem) 33vw, (min-width: 28rem) 50vw, 100vw',
  textPosition = 'outside',
  textSize = 'small',
  showOverlay = true,
}: CardProps) {
  return (
    <article
      className={clsx(
        'group @container relative flex w-full max-w-md min-w-0 cursor-pointer flex-col gap-2 rounded-(--card-border-radius,1rem) font-(family-name:--card-font-family,var(--font-family-body))',
        {
          small: 'gap-2',
          medium: 'gap-3',
          large: 'gap-4',
          'x-large': 'gap-5',
        }[textSize],
        className,
      )}
    >
      <ArrowUpRight
        className={clsx(
          'absolute top-5 right-5 z-10 transition-transform duration-700 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5',
          {
            light: 'text-(--card-light-icon,var(--foreground))',
            dark: 'text-(--card-dark-icon,var(--background))',
          }[iconColorScheme],
        )}
        strokeWidth={1.5}
      />
      <div
        className={clsx(
          'relative overflow-hidden rounded-[inherit] group-focus:ring-(--card-focus,var(--primary)) group-focus-visible:ring-2',
          {
            light: 'bg-(--card-light-background,var(--contrast-100))',
            dark: 'bg-(--card-dark-background,var(--contrast-500))',
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
              'w-full scale-100 object-cover transition-transform duration-500 ease-out select-none group-hover:scale-110',
              {
                light: 'bg-(--card-light-background,var(--contrast-100))',
                dark: 'bg-(--card-dark-background,var(--contrast-500))',
              }[textColorScheme],
            )}
            fill
            sizes={imageSizes}
            src={image.src}
          />
        ) : (
          <div
            className={clsx(
              'pt-5 pl-5 text-4xl leading-[0.8] font-bold tracking-tighter break-words opacity-25 transition-transform duration-500 ease-out group-hover:scale-105 @xs:text-7xl',
              {
                light: 'text-(--card-light-text,var(--foreground))',
                dark: 'text-(--card-dark-text,var(--background))',
              }[textColorScheme],
            )}
          >
            {title}
          </div>
        )}
        {textPosition === 'inside' && (
          <div
            className={clsx(
              'absolute inset-0 flex items-end p-6 @xs:p-8',
              showOverlay &&
                'from-foreground/0 via-foreground/0 to-foreground/50 bg-gradient-to-b from-50% via-50% to-100%',
            )}
          >
            <h3
              className={clsx(
                'leading-tight font-medium',
                {
                  small: 'text-lg tracking-normal @xs:text-xl',
                  medium: 'text-xl tracking-normal @xs:text-2xl',
                  large: 'text-2xl tracking-tight @xs:text-3xl',
                  'x-large': 'text-3xl tracking-tight @xs:text-4xl',
                }[textSize],
                {
                  light: 'text-(--card-light-text,var(--foreground))',
                  dark: 'text-(--card-dark-text,var(--background))',
                }[textColorScheme],
              )}
            >
              {title}
            </h3>
          </div>
        )}
      </div>
      {textPosition === 'outside' && (
        <h3
          className={clsx(
            'line-clamp-1 leading-tight font-medium',
            {
              small: 'text-lg tracking-normal @xs:text-xl',
              medium: 'text-xl tracking-normal @xs:text-2xl',
              large: 'text-2xl tracking-tight @xs:text-3xl',
              'x-large': 'text-3xl tracking-tight @xs:text-4xl',
            }[textSize],
            {
              light: 'text-(--card-light-text,var(--foreground))',
              dark: 'text-(--card-dark-text,var(--background))',
            }[textColorScheme],
          )}
        >
          {title}
        </h3>
      )}
      <Link
        className={clsx(
          'absolute inset-0 rounded-(--card-border-radius,1rem) focus:outline-hidden focus-visible:ring-2 focus-visible:ring-(--card-focus,var(--primary)) focus-visible:ring-offset-4',
          {
            light: 'ring-offset-(--card-light-offset,var(--background))',
            dark: 'ring-offset-(--card-dark-offset,var(--foreground))',
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
}: Pick<CardProps, 'aspectRatio' | 'className'>) {
  return (
    <div className={clsx('@container', className)}>
      <Skeleton.Box
        className={clsx(
          'rounded-(--card-border-radius,1rem)',
          {
            '5:6': 'aspect-[5/6]',
            '3:4': 'aspect-[3/4]',
            '1:1': 'aspect-square',
          }[aspectRatio],
        )}
      />
      <div className="mt-3">
        <Skeleton.Text characterCount={10} className="rounded-sm text-lg" />
      </div>
    </div>
  );
}
