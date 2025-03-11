import { clsx } from 'clsx';

import { DynamicForm, DynamicFormAction } from '@/vibes/soul/form/dynamic-form';
import { Field, FieldGroup } from '@/vibes/soul/form/dynamic-form/schema';
import { SectionLayout } from '@/vibes/soul/sections/section-layout';

export interface DynamicFormProps<F extends Field> {
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
 *   --dynamic-form-title: hsl(var(--foreground));
 *   --dynamic-form-subtitle: hsl(var(--contrast-500));
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
}: DynamicFormProps<F>) {
  return (
    <SectionLayout
      className={clsx(
        'mx-auto w-full max-w-4xl font-[family-name:var(--dynamic-form-font-family,var(--font-family-body))]',
        className,
      )}
      containerSize="lg"
    >
      {Boolean(title) && (
        <header className="pb-8 @2xl:pb-12 @4xl:pb-16">
          <h1 className="mb-5 font-[family-name:var(--dynamic-form-title-font-family,var(--font-family-heading))] text-4xl font-medium leading-none text-[var(--dynamic-form-title,hsl(var(--foreground)))] @xl:text-5xl">
            {title}
          </h1>
          {Boolean(subtitle) && (
            <p className="mb-10 text-base font-light leading-none text-[var(--dynamic-form-subtitle,hsl(var(--contrast-500)))] @xl:text-lg">
              {subtitle}
            </p>
          )}
        </header>
      )}
      <DynamicForm action={action} fields={fields} submitLabel={submitLabel} />
    </SectionLayout>
  );
}
