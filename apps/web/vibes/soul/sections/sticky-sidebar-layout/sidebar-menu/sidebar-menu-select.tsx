'use client';

import { usePathname, useRouter } from 'next/navigation';

import { Select } from '@/vibes/soul/form/select';

export function SidebarMenuSelect({ links }: { links: Array<{ href: string; label: string }> }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Select
      name="sidebar-layout-link-select"
      onValueChange={(value) => {
        router.push(value);
      }}
      options={links.map((link) => ({ value: link.href, label: link.label }))}
      value={pathname}
    />
  );
}
