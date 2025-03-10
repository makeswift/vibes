import { ResetPasswordAction, ResetPasswordForm } from './reset-password-form';

export interface ResetPasswordProps {
  title?: string;
  subtitle?: string;
  action: ResetPasswordAction;
  submitLabel?: string;
  newPasswordLabel?: string;
  confirmPasswordLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --reset-password-font-family: var(--font-family-body);
 *   --reset-password-title-font-family: var(--font-family-heading);
 *   --reset-password-title: hsl(var(--foreground));
 *   --reset-password-subtitle: hsl(var(--contrast-500))
 * }
 * ```
 */
export function ResetPassword({
  title = 'Reset password',
  subtitle = 'Enter a new password below to reset your account password.',
  submitLabel,
  newPasswordLabel,
  confirmPasswordLabel,
  action,
}: ResetPasswordProps) {
  return (
    <div className="@container">
      <div className="flex flex-col justify-center gap-y-24 px-3 py-10 @xl:flex-row @xl:px-6 @4xl:py-20 @5xl:px-20">
        <div className="flex w-full flex-col @xl:max-w-md @xl:pr-10 @4xl:pr-20">
          <header className="font-[family-name:var(--reset-password-font-family,var(--font-family-body))]">
            <h1 className="mb-5 font-[family-name:var(--reset-password-title-font-family,var(--font-family-heading))] text-4xl font-medium leading-none text-[var(--reset-password-title,hsl(var(--foreground)))] @xl:text-5xl">
              {title}
            </h1>
            <p className="mb-10 text-base font-light leading-none text-[var(--reset-password-subtitle,hsl(var(--contrast-500)))] @xl:text-lg">
              {subtitle}
            </p>
          </header>
          <ResetPasswordForm
            action={action}
            confirmPasswordLabel={confirmPasswordLabel}
            newPasswordLabel={newPasswordLabel}
            submitLabel={submitLabel}
          />
        </div>
      </div>
    </div>
  );
}
