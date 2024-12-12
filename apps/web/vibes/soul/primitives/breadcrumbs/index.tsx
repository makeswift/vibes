import { clsx } from 'clsx';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
  className?: string;
}

export function Breadcrumbs({ breadcrumbs, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb" className={clsx(className)}>
      <ol className="flex flex-wrap items-center gap-x-2 text-sm @xl:text-base">
        {breadcrumbs.map(({ label, href }, idx) => {
          if (idx < breadcrumbs.length - 1) {
            return (
              <li className="inline-flex items-center gap-x-2" key={idx}>
                <Link
                  className="rounded font-medium text-contrast-500 ring-offset-4 transition-colors hover:text-foreground focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary"
                  href={href}
                >
                  {label}
                </Link>
                <ChevronRight
                  aria-hidden="true"
                  className="text-contrast-500"
                  size={16}
                  strokeWidth={1}
                />
              </li>
            );
          }

          return (
            <li className="inline-flex items-center text-contrast-400" key={idx}>
              <span aria-current="page" aria-disabled="true" role="link">
                {label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function BreadcrumbsSkeleton() {
  return (
    <div className="mb-6 flex animate-pulse items-center gap-2">
      <div className="h-6 w-10 rounded-md bg-contrast-100" />
      <div className="h-3 w-3 rounded-full bg-contrast-100" />
      <div className="h-6 w-11 rounded-md bg-contrast-100" />
      <div className="h-3 w-3 rounded-full bg-contrast-100" />
      <div className="h-6 w-10 rounded-md bg-contrast-100" />
    </div>
  );
}
