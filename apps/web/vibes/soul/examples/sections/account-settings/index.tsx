import { AccountSettingsSection } from '@/vibes/soul/sections/account-settings';

import { changePasswordAction, updateAccountAction } from './actions';

export default function Preview() {
  return (
    <div className="p-10">
      <AccountSettingsSection
        account={{ firstName: '', lastName: '', email: '' }}
        changePasswordAction={changePasswordAction}
        updateAccountAction={updateAccountAction}
      />
    </div>
  );
}
