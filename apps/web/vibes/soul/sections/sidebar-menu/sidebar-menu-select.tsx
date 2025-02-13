'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Select } from '@/vibes/soul/form/select';

import { SidebarMenuAction, SidebarMenuLink } from '.';

export function SidebarMenuSelect({
  links,
}: {
  links: Array<SidebarMenuLink | SidebarMenuAction>;
}) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      name="sidebar-layout-link-select"
      onValueChange={(value) => {
        router.push(value);
      }}
      options={links.map((link) => {
        if ('action' in link) {
          return { label: link.label, action: link.action };
        }

        const linkPathname = typeof link.href === 'string' ? link.href : (link.href.pathname ?? '');

        return { value: linkPathname, label: link.label };
      })}
      value={pathname}
    />
  );
}
