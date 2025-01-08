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
 *   --input-background: transparent;
 *   --input-text: hsl(var(--foreground));
 *   --input-border: hsl(var(--contrast-100));
 *   --input-focus: hsl(var(--foreground));
 *   --input-placeholder: hsl(var(--contrast-500));
 *   --input-error: hsl(var(--error));
 *  }
 * ```
 */
export const Input = React.forwardRef<
  React.ComponentRef<'input'>,
  Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
    prepend?: React.ReactNode;
    label?: string;
    errors?: string[];
  }
>(({ prepend, label, className, required, errors, ...rest }, ref) => {
  const id = React.useId();

  return (
    <div className={clsx('w-full space-y-2', className)}>
      {label != null && label !== '' && <Label htmlFor={id}>{label}</Label>}
      <div
        className={clsx(
          'relative overflow-hidden rounded-lg border bg-[var(--input-background,transparent)] transition-colors duration-200 focus-within:border-[var(--input-focus,hsl(var(--foreground)))] focus:outline-none',
          errors && errors.length > 0
            ? 'border-[var(--input-error,hsl(var(--error)))]'
            : 'border-[var(--input-border,hsl(var(--contrast-100)))]',
        )}
      >
        {prepend != null && prepend !== '' && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
            {prepend}
          </span>
        )}
        <input
          {...rest}
          className={clsx(
            'w-full bg-[var(--input-background,transparent)] px-6 py-3 text-sm text-[var(--input-text,hsl(var(--foreground)))] [appearance:textfield] placeholder:font-normal placeholder:text-[var(--input-placeholder,hsl(var(--contrast-500)))] focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            { 'py-2.5 pe-4 ps-12': prepend },
          )}
          id={id}
          ref={ref}
        />
      </div>
      {errors?.map((error) => <FieldError key={error}>{error}</FieldError>)}
    </div>
  );
});

Input.displayName = 'Input';
