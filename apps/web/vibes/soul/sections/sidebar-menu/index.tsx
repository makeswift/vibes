import { ComponentPropsWithoutRef } from 'react';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';
import * as Skeleton from '@/vibes/soul/primitives/skeleton';

import { SidebarMenuLink } from './sidebar-menu-link';
import { SidebarMenuSelect } from './sidebar-menu-select';

interface MenuLink {
  href: string;
  label: string;
  prefetch?: ComponentPropsWithoutRef<typeof SidebarMenuLink>['prefetch'];
}

export interface SidebarMenuProps {
  links: Streamable<MenuLink[]>;
  placeholderCount?: number;
}

export function SidebarMenu({ links: streamableLinks, placeholderCount = 5 }: SidebarMenuProps) {
  return (
    <Stream
      fallback={<SidebarMenuSkeleton placeholderCount={placeholderCount} />}
      value={streamableLinks}
    >
      {(links) => {
        if (!links.length) {
          return null;
        }

        return (
          <nav>
            <ul className="hidden @2xl:block">
              {links.map((link, index) => (
                <li key={index}>
                  <SidebarMenuLink href={link.href} prefetch={link.prefetch}>
                    {link.label}
                  </SidebarMenuLink>
                </li>
              ))}
            </ul>
            <div className="@2xl:hidden">
              <SidebarMenuSelect links={links} />
            </div>
          </nav>
        );
      }}
    </Stream>
  );
}

export function SidebarMenuSkeleton({
  placeholderCount = 5,
}: Pick<SidebarMenuProps, 'placeholderCount'>) {
  return (
    <>
      <Skeleton.Root
        className="hidden group-has-[[data-pending]]/sidebar-menu:animate-pulse @4xl:block"
        pending
      >
        <div className="w-full" data-pending>
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div className="flex h-10 items-center px-3 text-sm" key={index}>
              <Skeleton.Text characterCount={10} className="rounded-md" />
            </div>
          ))}
        </div>
      </Skeleton.Root>
      <Skeleton.Root
        className="group-has-[[data-pending]]/sidebar-menu:animate-pulse @4xl:hidden"
        pending
      >
        <div data-pending>
          <Skeleton.Box className="h-[50px] w-full rounded-lg" />
        </div>
      </Skeleton.Root>
    </>
  );
}
