import { AccountLayout } from '@/vibes/soul/sections/account-layout';
import { AccountSettingsSection } from '@/vibes/soul/sections/account-settings-section';

import { changePasswordAction, updateAccountAction } from './actions';

const links = [
  { href: '#', label: 'Orders' },
  { href: '#', label: 'Addresses' },
  { href: '/preview/soul/account-settings-section-example', label: 'Account' },
];

export default function Preview() {
  return (
    <AccountLayout links={links}>
      <AccountSettingsSection
        updateAccountAction={updateAccountAction}
        changePasswordAction={changePasswordAction}
      />
    </AccountLayout>
  );
}
