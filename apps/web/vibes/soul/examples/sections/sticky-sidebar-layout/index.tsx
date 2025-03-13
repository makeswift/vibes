import { SidebarMenu } from '@/vibes/soul/sections/sticky-sidebar-layout/sidebar-menu';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';

const links = [
  { href: '/preview/soul/sticky-sidebar-layout-example/Electric#a', label: 'Orders' },
  { href: '/preview/soul/sticky-sidebar-layout-example/Electric#b', label: 'Addresses' },
  { href: '/preview/soul/sticky-sidebar-layout-example/Electric#c', label: 'Account' },
];

export default function Preview() {
  return (
    <StickySidebarLayout sidebar={<SidebarMenu links={links} />} sidebarSize="small">
      Put some stuff here!
    </StickySidebarLayout>
  );
}
