import { AccountSettingsSection } from '@/vibes/soul/sections/account-settings-section';
import { SidebarMenu } from '@/vibes/soul/sections/sidebar-menu';
import { StickySidebarLayout } from '@/vibes/soul/sections/sticky-sidebar-layout';

import { changePasswordAction, updateAccountAction } from './actions';

const links = [
  { href: '/preview/soul/order-list-section-electric-example', label: 'Orders' },
  { href: '/preview/soul/address-list-section-example', label: 'Addresses' },
  { href: '/preview/soul/account-settings-section-example', label: 'Account' },
];

export default function Preview() {
  return (
    <StickySidebarLayout sidebar={<SidebarMenu links={links} />} sidebarSize="small">
      <AccountSettingsSection
        account={{ firstName: '', lastName: '', email: '' }}
        changePasswordAction={changePasswordAction}
        updateAccountAction={updateAccountAction}
      />
    </StickySidebarLayout>
  );
}
