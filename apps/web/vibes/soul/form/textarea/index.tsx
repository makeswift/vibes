import { clsx } from 'clsx';
import * as React from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *    --textarea-light-background: var(--background);
 *    --textarea-light-text: var(--foreground);
 *    --textarea-light-placeholder: var(--contrast-500);
 *    --textarea-light-border: var(--contrast-100);
 *    --textarea-light-border-focus: var(--foreground);
 *    --textarea-light-border-error: var(--error);
 *    --textarea-dark-background: var(--foreground);
 *    --textarea-dark-text: var(--background);
 *    --textarea-dark-placeholder: var(--contrast-100);
 *    --textarea-dark-border: var(--contrast-500);
 *    --textarea-dark-border-focus: var(--background);
 *    --textarea-dark-border-error: var(--error);
 *  }
 * ```
 */
export const Textarea = React.forwardRef<
  React.ComponentRef<'textarea'>,
  React.ComponentPropsWithoutRef<'textarea'> & {
    prepend?: React.ReactNode;
    label?: string;
    errors?: string[];
    colorScheme?: 'light' | 'dark';
    placeholder?: string;
  }
>(
  (
    {
      label,
      className,
      required,
      errors,
      colorScheme = 'light',
      placeholder = 'Enter some text',
      ...rest
    },
    ref,
  ) => {
    const id = React.useId();

    return (
      <div className={clsx('space-y-2', className)}>
        {label != null && label !== '' && (
          <Label colorScheme={colorScheme} htmlFor={id}>
            {label}
          </Label>
        )}
        <textarea
          {...rest}
          className={clsx(
            'w-full rounded-lg border p-3 transition-colors duration-200 placeholder:font-normal focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
            {
              light:
                'bg-(--textarea-light-background,var(--background)) text-(--textarea-light-text,var(--foreground)) placeholder-(--textarea-light-placeholder,var(--contrast-500)) focus:border-(--textarea-light-border-focus,var(--foreground))',
              dark: 'bg-(--textarea-dark-background,var(--foreground)) text-(--textarea-dark-text,var(--background)) placeholder-(--textarea-dark-placeholder,var(--contrast-100)) focus:border-(--textarea-dark-border-focus,var(--background))',
            }[colorScheme],
            {
              light:
                errors && errors.length > 0
                  ? 'border-(--textarea-light-border-error,var(--error))'
                  : 'border-(--textarea-light-border,var(--contrast-100))',
              dark:
                errors && errors.length > 0
                  ? 'border-(--textarea-dark-border-error,var(--error))'
                  : 'border-(--textarea-dark-border,var(--contrast-500))',
            }[colorScheme],
          )}
          id={id}
          placeholder={placeholder}
          ref={ref}
        />
        {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
