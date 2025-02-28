'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export interface OffsetPaginationProps {
  pages: number;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --offset-pagination-focus: hsl(var(--primary));
 *   -offset-pagination-font-family: var(--font-family-body);
 *   --offset-pagination-ellipsis: hsl(var(--foreground))
 *   --offset-pagination-border: hsl(var(--contrast-100));
 *   --offset-pagination-text: hsl(var(--foreground));
 *   --offset-pagination-background-hover: hsl(var(--contrast-100));
 *   --offset-pagination-current-page-border: hsl(var(--foreground));
 *   --offset-pagination-current-page-background: hsl(var(--foreground));
 *   --offset-pagination-current-page-text: hsl(var(--background));
 *   --offset-pagination-current-pagebackground-hover: hsl(var(--contrast-500));
 * }
 * ```
 */
export function OffsetPagination({ pages: totalPages }: OffsetPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPage = parseInt(searchParams.get('page') ?? '1', 10);

  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    const current = parseInt(searchParams.get('page') ?? '1', 10);
    if (current !== currentPage) {
      setCurrentPage(current);
    }
  }, [currentPage, searchParams]);

  const renderPagination = () => {
    const pages = [];

    if (totalPages <= 4) {
      pages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      if (currentPage > 2 && currentPage < totalPages - 1) {
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
      } else if (currentPage <= 2) {
        pages.push(2);
        pages.push(3);
      } else {
        pages.push(totalPages - 2);
        pages.push(totalPages - 1);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex w-full justify-center py-10 font-[family-name:var(--offset-pagination-font-family,var(--font-family-body))] text-xs">
      <div className="flex gap-2">
        {renderPagination().map((page, index) =>
          typeof page === 'string' ? (
            <span
              className="hidden h-12 w-12 items-center justify-center text-[var(--offset-pagination-ellipsis,hsl(var(--foreground)))] @lg:flex"
              key={index}
            >
              ...
            </span>
          ) : (
            <Link
              className={clsx(
                'flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--offset-pagination-focus,hsl(var(--primary)))]',
                page === currentPage
                  ? 'border-[var(--offset-pagination-current-page-border,hsl(var(--foreground)))] bg-[var(--offset-pagination-current-page-background,hsl(var(--foreground)))] text-[var(--offset-pagination-current-page-text,hsl(var(--background)))] hover:bg-[var(--offset-pagination-current-pagebackground-hover,hsl(var(--contrast-500)))]'
                  : 'border-[var(--offset-pagination-border,hsl(var(--contrast-100)))] text-[var(--offset-pagination-text,hsl(var(--foreground)))] hover:bg-[var(--offset-pagination-background-hover,hsl(var(--contrast-100)))]',
              )}
              href={`${pathname}?page=${page.toString()}`}
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
