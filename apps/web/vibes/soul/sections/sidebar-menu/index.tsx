import Link from 'next/link';

import { Stream, Streamable } from '@/vibes/soul/lib/streamable';

import { SidebarMenuItem } from './sidebar-menu-item';
import { SidebarMenuSelect } from './sidebar-menu-select';

export interface SidebarMenuLink extends React.ComponentPropsWithoutRef<typeof Link> {
  label: string;
}

export interface SidebarMenuAction {
  label: string;
  action: () => void | Promise<void>;
}

interface Props {
  links: Streamable<Array<SidebarMenuLink | SidebarMenuAction>>;
  placeholderCount?: number;
}

export function SidebarMenu({ links: streamableLinks, placeholderCount = 5 }: Props) {
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
                  <SidebarMenuItem item={link}>{link.label}</SidebarMenuItem>
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

function SidebarMenuSkeleton({ placeholderCount }: { placeholderCount: number }) {
  return (
    <>
      <div className="hidden [mask-image:linear-gradient(to_bottom,_black_0%,_transparent_90%)] @2xl:block">
        <div className="w-full animate-pulse">
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <div className="flex h-10 items-center px-3" key={index}>
              <div className="h-[1lh] flex-1 rounded-lg bg-contrast-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="@2xl:hidden">
        <div className="h-[50px] w-full rounded-lg bg-contrast-100" />
      </div>
    </>
  );
}
