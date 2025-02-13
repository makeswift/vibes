'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { SidebarMenuAction, SidebarMenuLink } from '.';

interface SidebarMenuItemProps extends PropsWithChildren {
  className?: string;
  item: SidebarMenuLink | SidebarMenuAction;
}

export function SidebarMenuItem({ className, item, children }: SidebarMenuItemProps) {
  const pathname = usePathname();

  if ('action' in item) {
    return (
      <form action={item.action} className="flex">
        <button
          className={clsx(
            'flex min-h-10 flex-1 items-center rounded-md px-3 text-sm font-semibold hover:bg-contrast-100',
            className,
          )}
          type="submit"
        >
          {children}
        </button>
      </form>
    );
  }

  const { href, ...rest } = item;
  const linkPathname = typeof href === 'string' ? href : (href.pathname ?? null);

  return (
    <Link
      {...rest}
      className={clsx(
        'flex min-h-10 items-center rounded-md px-3 text-sm font-semibold',
        linkPathname !== null && pathname.includes(linkPathname)
          ? 'bg-contrast-100'
          : 'hover:bg-contrast-100',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
