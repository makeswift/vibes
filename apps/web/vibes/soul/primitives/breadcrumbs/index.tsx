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
      <ol className="flex flex-wrap items-center gap-x-1.5 text-sm @xl:text-base">
        {breadcrumbs.map(({ label, href }, idx) => {
          if (idx < breadcrumbs.length - 1) {
            return (
              <li className="inline-flex items-center gap-x-1.5" key={idx}>
                <Link
                  className="rounded font-medium text-contrast-500 ring-offset-4 transition-colors hover:text-foreground focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-primary"
                  href={href}
                >
                  {label}
                </Link>
                <ChevronRight
                  aria-hidden="true"
                  className="text-contrast-500"
                  size={20}
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

export function BreadcrumbsSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={clsx('flex animate-pulse flex-wrap items-center gap-x-1.5 text-base', className)}
    >
      <div className="flex h-[1lh] items-center">
        <span className="block h-[1ex] w-[4ch] rounded-sm bg-contrast-100" />
      </div>
      <ChevronRight aria-hidden="true" className="text-contrast-200" size={20} strokeWidth={1} />
      <div className="flex h-[1lh] items-center">
        <span className="block h-[1ex] w-[6ch] rounded-sm bg-contrast-100" />
      </div>
      <ChevronRight aria-hidden="true" className="text-contrast-200" size={20} strokeWidth={1} />
      <div className="flex h-[1lh] items-center">
        <span className="block h-[1ex] w-[6ch] rounded-sm bg-contrast-100" />
      </div>
    </div>
  );
}
