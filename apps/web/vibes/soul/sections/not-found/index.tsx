import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export interface NotFoundProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --not-found-font-family: var(--font-family-body);
 *   --not-found-title-font-family: var(--font-family-heading);
 *   --not-found-title: var(--foreground);
 *   --not-found-subtitle: var(--contrast-500);
 * }
 * ```
 */
export function NotFound({
  title = 'Not found',
  subtitle = "Take a look around if you're lost.",
  className = '',
}: NotFoundProps) {
  return (
    <SectionLayout className={className} containerSize="2xl">
      <header className="font-(family-name:--not-found-font-family,var(--font-family-body))">
        <h1 className="mb-3 font-(family-name:--not-found-title-font-family,var(--font-family-heading)) text-3xl leading-none font-medium text-(--not-found-title,var(--foreground)) @xl:text-4xl @4xl:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-(--not-found-subtitle,var(--contrast-500))">{subtitle}</p>
      </header>
    </SectionLayout>
  );
}
