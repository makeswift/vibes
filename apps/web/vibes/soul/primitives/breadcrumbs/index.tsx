import { clsx } from 'clsx';
import { ChevronRight } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import { AnimatedLink } from '@/vibes/soul/primitives/animated-link';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --breadcrumbs-font-family: var(--font-family-body);
 *   --breadcrumbs-primary-text: hsl(var(--foreground));
 *   --breadcrumbs-secondary-text: hsl(var(--contrast-500));
 *   --breadcrumbs-icon: hsl(var(--contrast-500));
 *   --breadcrumbs-hover: hsl(var(--primary));
 * }
 * ```
 */
export function Breadcrumbs({
  breadcrumbs: streamableBreadcrumbs,
  className,
}: {
  breadcrumbs: Streamable<Array<ComponentPropsWithoutRef<typeof AnimatedLink> & { id: string }>>;
  className?: string;
}) {
  return (
    <Stream fallback={<BreadcrumbsSkeleton />} value={streamableBreadcrumbs}>
      {(breadcrumbs) =>
        breadcrumbs.length === 0 ? (
          <div className={clsx('min-h-[1lh]', className)} />
        ) : (
          <nav aria-label="breadcrumb" className={clsx(className)}>
            <ol className="flex flex-wrap items-center gap-x-1.5 text-sm @xl:text-base">
              {breadcrumbs.map(({ text, href, id }, index) => {
                if (index < breadcrumbs.length - 1) {
                  return (
                    <li className="inline-flex items-center gap-x-1.5" key={id}>
                      <AnimatedLink
                        className="font-[family-name:var(--breadcrumbs-font-family,var(--font-family-body))] text-[var(--breadcrumbs-primary-text,hsl(var(--foreground)))] [background:linear-gradient(0deg,var(--breadcrumbs-hover,hsl(var(--primary))),var(--breadcrumbs-hover,hsl(var(--primary))))_no-repeat_left_bottom_/_0_2px]"
                        href={href}
                        text={text}
                      />
                      <ChevronRight
                        aria-hidden="true"
                        className="text-[var(--breadcrumbs-icon,hsl(var(--contrast-500)))]"
                        size={20}
                        strokeWidth={1}
                      />
                    </li>
                  );
                }

                return (
                  <li
                    className="inline-flex items-center font-[family-name:var(--breadcrumbs-font-family,var(--font-family-body))] text-[var(--breadcrumbs-secondary-text,hsl(var(--contrast-500)))]"
                    key={id}
                  >
                    <span aria-current="page" aria-disabled="true" role="link">
                      {text}
                    </span>
                  </li>
                );
              })}
            </ol>
          </nav>
        )
      }
    </Stream>
  );
}

export function BreadcrumbsSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'flex min-h-[1lh] animate-pulse flex-wrap items-center gap-x-1.5 text-base',
        className,
      )}
    >
      <div className="flex h-[1lh] items-center">
        <span className="block h-[1.25ex] w-[4ch] rounded bg-contrast-100" />
      </div>
      <ChevronRight aria-hidden="true" className="text-contrast-200" size={20} strokeWidth={1} />
      <div className="flex h-[1lh] items-center">
        <span className="block h-[1.25ex] w-[6ch] rounded bg-contrast-100" />
      </div>
      <ChevronRight aria-hidden="true" className="text-contrast-200" size={20} strokeWidth={1} />
      <div className="flex h-[1lh] items-center">
        <span className="block h-[1.25ex] w-[6ch] rounded bg-contrast-100" />
      </div>
    </div>
  );
}
