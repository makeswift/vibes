import { clsx } from 'clsx';

import { DynamicForm, DynamicFormAction } from '@/vibes/soul/form/dynamic-form';
import { Field, FieldGroup } from '@/vibes/soul/form/dynamic-form/schema';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export interface DynamicFormSectionProps<F extends Field> {
  title?: string;
  subtitle?: string;
  action: DynamicFormAction<F>;
  fields: Array<F | FieldGroup<F>>;
  submitLabel?: string;
  className?: string;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --dynamic-form-font-family: var(--font-family-body);
 *   --dynamic-form-title-font-family: var(--font-family-heading);
 *   --dynamic-form-title: var(--foreground);
 *   --dynamic-form-subtitle: var(--contrast-500);
 * }
 * ```
 */
export function DynamicFormSection<F extends Field>({
  className,
  title,
  subtitle,
  fields,
  submitLabel,
  action,
}: DynamicFormSectionProps<F>) {
  return (
    <SectionLayout
      className={clsx(
        'mx-auto w-full max-w-4xl font-(family-name:--dynamic-form-font-family,var(--font-family-body))',
        className,
      )}
      containerSize="lg"
    >
      {Boolean(title) && (
        <header className="pb-8 @2xl:pb-12 @4xl:pb-16">
          <h1 className="mb-5 font-(family-name:--dynamic-form-title-font-family,var(--font-family-heading)) text-4xl leading-none font-medium text-(--dynamic-form-title,var(--foreground)) @xl:text-5xl">
            {title}
          </h1>
          {Boolean(subtitle) && (
            <p className="mb-10 text-base leading-none font-light text-(--dynamic-form-subtitle,var(--contrast-500)) @xl:text-lg">
              {subtitle}
            </p>
          )}
        </header>
      )}
      <DynamicForm action={action} fields={fields} submitLabel={submitLabel} />
    </SectionLayout>
  );
}
