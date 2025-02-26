'use client';

import { clsx } from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { createSerializer, parseAsString } from 'nuqs';
import { ReactNode } from 'react';

import { Stream, Streamable, useStreamable } from '@/vibes/soul/lib/streamable';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

export interface CursorPaginationInfo {
  startCursorParamName?: string;
  startCursor: string | null;
  endCursorParamName?: string;
  endCursor: string | null;
}

export interface CursorPaginationProps {
  label?: Streamable<string>;
  info: Streamable<CursorPaginationInfo>;
  previousLabel?: Streamable<string>;
  nextLabel?: Streamable<string>;
  scroll?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --cursor-pagination-focus: hsl(var(--primary));
 *   --cursor-pagination-border: hsl(var(--contrast-100));
 *   --cursor-pagination-border-hover: hsl(var(--contrast-200));
 *   --cursor-pagination-icon: hsl(var(--foreground));
 *   --cursor-pagination-background: hsl(var(--background));
 *   --cursor-pagination-background-hover: hsl(var(--contrast-100));
 * ```
 */
export function CursorPagination({
  label: streamableLabel = 'pagination',
  info,
  previousLabel: streamablePreviousLabel = 'Go to previous page',
  nextLabel: streamableNextLabel = 'Go to next page',
  scroll = true,
}: CursorPaginationProps) {
  const {
    startCursorParamName = 'before',
    endCursorParamName = 'after',
    startCursor,
    endCursor,
  } = useStreamable(info);
  const searchParams = useSearchParams();
  const serialize = createSerializer({
    [startCursorParamName]: parseAsString,
    [endCursorParamName]: parseAsString,
  });

  return (
    <Stream
      fallback={<CursorPaginationSkeleton />}
      value={Streamable.all([streamableLabel, streamablePreviousLabel, streamableNextLabel])}
    >
      {([label, previousLabel, nextLabel]) => {
        return (
          <nav
            aria-label={label}
            className="py-10 text-[var(--cursor-pagination-icon,hsl(var(--foreground)))]"
            role="navigation"
          >
            <ul className="flex items-center justify-center gap-3">
              <li>
                {startCursor != null ? (
                  <PaginationLink
                    aria-label={previousLabel}
                    href={serialize(searchParams, {
                      [startCursorParamName]: startCursor,
                      [endCursorParamName]: null,
                    })}
                    scroll={scroll}
                  >
                    <ArrowLeft size={24} strokeWidth={1} />
                  </PaginationLink>
                ) : (
                  <Skeleton.Icon
                    className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-[var(--cursor-pagination-border,hsl(var(--contrast-100)))]"
                    icon={<ArrowLeft size={24} strokeWidth={1} />}
                  />
                )}
              </li>
              <li>
                {endCursor != null ? (
                  <PaginationLink
                    aria-label={nextLabel}
                    href={serialize(searchParams, {
                      [endCursorParamName]: endCursor,
                      [startCursorParamName]: null,
                    })}
                    scroll={scroll}
                  >
                    <ArrowRight size={24} strokeWidth={1} />
                  </PaginationLink>
                ) : (
                  <Skeleton.Icon
                    className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-[var(--cursor-pagination-border,hsl(var(--contrast-100)))]"
                    icon={<ArrowRight size={24} strokeWidth={1} />}
                  />
                )}
              </li>
            </ul>
          </nav>
        );
      }}
    </Stream>
  );
}

function PaginationLink({
  href,
  children,
  scroll,
  'aria-label': ariaLabel,
}: {
  href: string;
  children: ReactNode;
  scroll?: boolean;
  ['aria-label']?: string;
}) {
  return (
    <Link
      aria-label={ariaLabel}
      className={clsx(
        'flex h-12 w-12 items-center justify-center rounded-full border border-[var(--cursor-pagination-border,hsl(var(--contrast-100)))] bg-[var(--cursor-pagination-background,hsl(var(--background)))] ring-[var(--cursor-pagination-focus,hsl(var(--primary)))] transition-colors duration-300 hover:border-[var(--cursor-pagination-border-hover,hsl(var(--contrast-200)))] hover:bg-[var(--cursor-pagination-background-hover,hsl(var(--contrast-100)))] focus:outline-none focus-visible:ring-2',
      )}
      href={href}
      scroll={scroll}
    >
      {children}
    </Link>
  );
}

export function CursorPaginationSkeleton() {
  return (
    <div className="py-10 text-[var(--cursor-pagination-icon,hsl(var(--foreground)))]">
      <div className="flex items-center justify-center gap-3">
        <Skeleton.Icon
          className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-[var(--cursor-pagination-border,hsl(var(--contrast-100)))]"
          icon={<ArrowLeft size={24} strokeWidth={1} />}
        />
        <Skeleton.Icon
          className="flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-[var(--cursor-pagination-border,hsl(var(--contrast-100)))]"
          icon={<ArrowRight size={24} strokeWidth={1} />}
        />
      </div>
    </div>
  );
}
