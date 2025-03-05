import { ChangePasswordAction, ChangePasswordForm } from './change-password-form';
import { Account, UpdateAccountAction, UpdateAccountForm } from './update-account-form';

export interface AccountSettingsSectionProps {
  title?: string;
  account: Account;
  updateAccountAction: UpdateAccountAction;
  updateAccountSubmitLabel?: string;
  changePasswordTitle?: string;
  changePasswordAction: ChangePasswordAction;
  changePasswordSubmitLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --account-settings-section-font-family: var(--font-family-heading);
 *   --account-settings-section-text: hsl(var(--foreground));
 *   --account-settings-section-border: hsl(var(--contrast-100));
 * }
 * ```
 */
export function AccountSettingsSection({
  title = 'Account Settings',
  account,
  updateAccountAction,
  updateAccountSubmitLabel,
  changePasswordTitle = 'Change Password',
  changePasswordAction,
  changePasswordSubmitLabel,
}: AccountSettingsSectionProps) {
  return (
    <div className="@container">
      <div className="flex flex-col gap-y-24 @xl:flex-row">
        <div className="flex w-full flex-col @xl:max-w-lg">
          <div className="pb-12">
            <h1 className="mb-10 font-[family-name:var(--account-settings-section-font-family,var(--font-family-heading))] text-4xl font-medium leading-none text-[var(--account-settings-section-text,var(--foreground))] @xl:text-4xl">
              {title}
            </h1>
            <UpdateAccountForm
              account={account}
              action={updateAccountAction}
              submitLabel={updateAccountSubmitLabel}
            />
          </div>
          <div className="border-t border-[var(--account-settings-section-border,hsl(var(--contrast-100)))] pt-12">
            <h1 className="mb-10 font-[family-name:var(--account-settings-section-font-family,var(--font-family-heading))] text-2xl font-medium leading-none text-[var(--account-settings-section-text,var(--foreground))] @xl:text-2xl">
              {changePasswordTitle}
            </h1>
            <ChangePasswordForm
              action={changePasswordAction}
              submitLabel={changePasswordSubmitLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
