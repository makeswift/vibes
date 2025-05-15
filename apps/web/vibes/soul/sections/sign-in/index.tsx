import Link from 'next/link';

import { AnimatedUnderline } from '@/vibes/soul/primitives/animated-underline';
import { ButtonLink } from '@/vibes/soul/primitives/button-link';

import { SignInAction, SignInForm } from './sign-in-form';

export interface SignInProps {
  title?: string;
  signUpTitle?: string;
  signUpDescription?: string;
  signUpBenefits?: string[];
  action: SignInAction;
  submitLabel?: string;
  emailLabel?: string;
  passwordLabel?: string;
  forgotPasswordHref: string;
  forgotPasswordLabel?: string;
  signUpHref?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --sign-in-font-family: var(--font-family-body);
 *   --sign-in-title-font-family: var(--font-family-heading);
 *   --sign-in-title: var(--foreground);
 *   --sign-in-description: var(--contrast-500);
 *   --sign-in-border: var(--contrast-100);
 * }
 * ```
 */
export function SignIn({
  title = 'Sign In',
  signUpTitle = 'New Customer?',
  signUpDescription = 'Create an account with us and be able to:',
  signUpBenefits = [
    'Check out faster',
    'Save multiple shipping addresses',
    'Access your order history',
    'Track new orders',
    'Save items to your Wish List',
  ],
  action,
  submitLabel,
  emailLabel,
  passwordLabel,
  forgotPasswordHref = '/forgot-password',
  forgotPasswordLabel = 'Forgot your password?',
  signUpHref = '/sign-up',
  emailPlaceholder = 'Enter your email',
  passwordPlaceholder = 'Enter your password',
}: SignInProps) {
  return (
    <div className="@container">
      <div className="flex flex-col justify-center gap-y-24 px-3 py-10 @xl:flex-row @xl:px-6 @4xl:py-20 @5xl:px-20">
        <div className="w-full border-(--sign-in-border,var(--contrast-100)) @xl:max-w-md @xl:border-r @xl:pr-10 @4xl:pr-20">
          <h1 className="mb-10 font-(family-name:--sign-in-title-font-family,var(--font-family-heading)) text-4xl leading-none font-medium text-(--sign-in-title,var(--foreground)) @xl:text-5xl">
            {title}
          </h1>
          <SignInForm
            action={action}
            emailLabel={emailLabel}
            emailPlaceholder={emailPlaceholder}
            passwordLabel={passwordLabel}
            passwordPlaceholder={passwordPlaceholder}
            submitLabel={submitLabel}
          />
          <Link className="group/underline focus:outline-hidden" href={forgotPasswordHref}>
            <AnimatedUnderline className="mt-4 block w-fit text-sm font-semibold">
              {forgotPasswordLabel}
            </AnimatedUnderline>
          </Link>
        </div>
        <div className="flex w-full flex-col @xl:max-w-md @xl:pl-10 @4xl:pl-20">
          <div className="font-(family-name:--sign-in-font-family,var(--font-family-body))">
            <h2 className="mb-10 font-(family-name:--sign-in-title-font-family,var(--font-family-heading)) text-4xl leading-none font-medium text-(--sign-in-title,var(--foreground)) @xl:text-5xl">
              {signUpTitle}
            </h2>
            <div className="text-(--sign-in-description,var(--contrast-500))">
              <p>{signUpDescription}</p>
              <ul className="mt-4 mb-10 ml-4 list-disc">
                {signUpBenefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <ButtonLink className="mt-auto w-full" href={signUpHref} variant="secondary">
                Create Account
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
