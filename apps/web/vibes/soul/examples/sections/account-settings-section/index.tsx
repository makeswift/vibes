import { AccountLayout } from '@/vibes/soul/sections/account-layout';
import { AccountSettingsSection } from '@/vibes/soul/sections/account-settings-section';

import { changePasswordAction, updateAccountAction } from './actions';

const links = [
  { href: '/preview/soul/order-list-section-electric-example', label: 'Orders' },
  { href: '/preview/soul/address-list-section-example', label: 'Addresses' },
  { href: '/preview/soul/account-settings-section-example', label: 'Account' },
];

export default function Preview() {
  return (
    <AccountLayout links={links}>
      <AccountSettingsSection
        account={{ firstName: '', lastName: '', email: '' }}
        changePasswordAction={changePasswordAction}
        updateAccountAction={updateAccountAction}
      />
    </AccountLayout>
  );
}
