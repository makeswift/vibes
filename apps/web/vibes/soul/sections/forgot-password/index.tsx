import { ForgotPasswordAction, ForgotPasswordForm } from './forgot-password-form';

export interface ForgotPasswordProps {
  title?: string;
  subtitle?: string;
  action: ForgotPasswordAction;
  emailLabel?: string;
  submitLabel?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --forgot-password-font-family: var(--font-family-body);
 *   --forgot-password-title-font-family: var(--font-family-heading);
 *   --forgot-password-title: hsl(var(--foreground));
 *   --forgot-password-subtitle: hsl(var(--contrast-500))
 * }
 * ```
 */
export function ForgotPassword({
  title = 'Forgot your password?',
  subtitle = 'Enter the email associated with your account below. We’ll send you instructions to reset your password.',
  emailLabel,
  submitLabel,
  action,
}: ForgotPasswordProps) {
  return (
    <div className="@container">
      <div className="flex flex-col justify-center gap-y-24 px-3 py-10 @xl:flex-row @xl:px-6 @4xl:py-20 @5xl:px-20">
        <div className="flex w-full flex-col @xl:max-w-md @xl:pr-10 @4xl:pr-20">
          <header className="font-[family-name:var(--forgot-password-font-family,var(--font-family-body))]">
            <h1 className="mb-5 font-[family-name:var(--forgot-password-title-font-family,var(--font-family-heading))] text-4xl font-medium leading-none text-[var(--forgot-password-title,hsl(var(--foreground)))] @xl:text-5xl">
              {title}
            </h1>
            <p className="mb-10 text-base font-light leading-none text-[var(--forgot-password-subtitle,hsl(var(--contrast-500)))] @xl:text-lg">
              {subtitle}
            </p>
          </header>
          <ForgotPasswordForm action={action} emailLabel={emailLabel} submitLabel={submitLabel} />
        </div>
      </div>
    </div>
  );
}
