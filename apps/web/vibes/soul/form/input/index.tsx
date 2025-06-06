import { clsx } from 'clsx';
import { type ComponentPropsWithRef, type ReactNode, useId } from 'react';

import { FieldError } from '@/vibes/soul/form/field-error';
import { Label } from '@/vibes/soul/form/label';

export interface InputProps extends ComponentPropsWithRef<'input'> {
  prepend?: ReactNode;
  label?: string;
  errors?: string[];
  colorScheme?: 'light' | 'dark';
  hideLabel?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --input-light-background: var(--background);
 *   --input-light-text: var(--foreground);
 *   --input-light-border: var(--contrast-100);
 *   --input-light-border-error: var(--error);
 *   --input-light-focus: var(--foreground);
 *   --input-light-placeholder: var(--contrast-500);
 *   --input-dark-background: var(--foreground);
 *   --input-dark-text: var(--background);
 *   --input-dark-border: var(--contrast-500);
 *   --input-dark-border-error: var(--error);
 *   --input-dark-focus: var(--background);
 *   --input-dark-placeholder: var(--contrast-100);
 *  }
 * ```
 */
export const Input = ({
  prepend = null,
  label,
  className,
  required,
  errors,
  colorScheme = 'light',
  id,
  hideLabel = true,
  placeholder,
  ref,
  ...rest
}: InputProps) => {
  const generatedId = useId();

  return (
    <div className={clsx('w-full', className)}>
      {label !== undefined && label !== '' && (
        <Label
          className={clsx(hideLabel ? 'sr-only' : 'mb-2')}
          colorScheme={colorScheme}
          htmlFor={id ?? generatedId}
        >
          {label}
        </Label>
      )}

      <div
        className={clsx(
          'relative overflow-hidden rounded-lg border transition-colors duration-200 focus:outline-hidden',
          {
            light:
              'bg-(--input-light-background,var(--background)) focus-within:border-(--input-light-focus,var(--foreground))',
            dark: 'bg-(--input-dark-background,var(--foreground)) focus-within:border-(--input-dark-focus,var(--background))',
          }[colorScheme],
          {
            light:
              errors && errors.length > 0
                ? 'border-(--input-light-border-error,var(--error))'
                : 'border-(--input-light-border,var(--contrast-100))',
            dark:
              errors && errors.length > 0
                ? 'border-(--input-dark-border-error,var(--error))'
                : 'border-(--input-dark-border,var(--contrast-500))',
          }[colorScheme],
        )}
      >
        {prepend != null && prepend !== '' && (
          <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2">
            {prepend}
          </span>
        )}
        <input
          {...rest}
          className={clsx(
            'w-full [appearance:textfield] px-6 py-3 text-sm placeholder:font-normal focus:outline-hidden [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            {
              light:
                'bg-(--input-light-background,var(--background)) text-(--input-light-text,var(--foreground)) placeholder:text-(--input-light-placeholder,var(--contrast-500))',
              dark: 'bg-(--input-dark-background,var(--foreground)) text-(--input-dark-text,var(--background)) placeholder:text-(--input-dark-placeholder,var(--contrast-100))',
            }[colorScheme],
            { 'py-2.5 ps-12 pe-4': prepend },
          )}
          id={id ?? generatedId}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
      {errors?.map((error) => (
        <FieldError className="mt-2" key={error}>
          {error}
        </FieldError>
      ))}
    </div>
  );
};
