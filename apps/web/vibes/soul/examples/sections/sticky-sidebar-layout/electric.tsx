import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';
import { SidebarMenu } from '@/vibes/soul/sections/sticky-sidebar-layout/sidebar-menu';

export default function Preview() {
  return (
    <StickySidebarLayout sidebar={<SidebarMenu links={links} />} sidebarSize="sm">
      <div className="border-contrast-200 relative h-96 overflow-hidden rounded-2xl border border-dashed">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_42.86%,#d1d1d150_42.86%,#d1d1d150_50%,transparent_50%,transparent_92.86%,#d1d1d150_92.86%,#d1d1d150_100%)] bg-[size:9.90px_9.90px]" />
      </div>
    </StickySidebarLayout>
  );
}

const links = [
  { id: 'orders', href: '/preview/soul/sticky-sidebar-layout-example/Electric', label: 'Orders' },
  {
    id: 'addresses',
    href: '/preview/soul/sticky-sidebar-layout-example/Electric#addresses',
    label: 'Addresses',
  },
  {
    id: 'account',
    href: '/preview/soul/sticky-sidebar-layout-example/Electric#account',
    label: 'Account',
  },
];
