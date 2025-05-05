import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface LogoProps {
  className?: string;
  logo: Streamable<string | { src: string; alt: string }>;
  label: string;
  href: string;
  width: number;
  height: number;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --logo-focus: var(--primary);
 *   --logo-font-family: var(--font-family-heading);
 *   --logo-text: var(--foreground);
 * }
 * ```
 */
export function Logo({ className, logo: streamableLogo, href, width, height, label }: LogoProps) {
  return (
    <Stream fallback={<LogoSkeleton className={className} />} value={streamableLogo}>
      {(logo) => (
        <Link
          aria-label={label}
          className={clsx(
            'relative ring-(--logo-focus,var(--primary)) ring-offset-4 outline-0 focus-visible:ring-2',
            className,
          )}
          href={href}
          style={typeof logo === 'string' ? {} : { width, height }}
        >
          {typeof logo === 'object' ? (
            <Image
              alt={logo.alt}
              className="object-contain object-left"
              fill
              sizes={`${width}px`}
              src={logo.src}
            />
          ) : (
            typeof logo === 'string' && (
              <span className="font-(family-name:--logo-font-family,var(--font-family-heading)) text-lg leading-none font-semibold text-(--logo-text,var(--foreground)) @xl:text-2xl">
                {logo}
              </span>
            )
          )}
        </Link>
      )}
    </Stream>
  );
}

export function LogoSkeleton({ className }: Pick<LogoProps, 'className'>) {
  return <Skeleton.Box className={clsx('h-6 w-16 rounded-md', className)} />;
}
