import { Button } from '@/vibes/soul/primitives/button';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export interface ErrorProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaAction?: () => void | Promise<void>;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *    --error-font-family: var(--font-family-body);
 *    --error-title-font-family: var(--font-family-heading);
 *    --error-title: var(--foreground);
 *    --error-subtitle: var(--contrast-500);
 * }
 * ```
 */
export function Error({
  title = 'Something went wrong!',
  subtitle = 'Please try again or contact our support team for assistance.',
  ctaLabel = 'Try again',
  ctaAction,
}: ErrorProps) {
  return (
    <SectionLayout containerSize="2xl">
      <header className="font-(family-name:--button-font-family,var(--font-family-body))">
        <h1 className="mb-3 font-(family-name:--button-font-family,var(--font-family-heading)) text-3xl leading-none font-medium text-(--error-title,var(--foreground)) @xl:text-4xl @4xl:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-(--error-subtitle,var(--contrast-500))">{subtitle}</p>
      </header>
      {ctaAction && (
        <form action={ctaAction}>
          <Button className="mt-8" size="large" type="submit" variant="primary">
            {ctaLabel}
          </Button>
        </form>
      )}
    </SectionLayout>
  );
}
