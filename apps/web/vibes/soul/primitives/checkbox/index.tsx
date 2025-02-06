import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { clsx } from 'clsx';
import { Check } from 'lucide-react';

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 * :root {
 *   --checkbox-focus: hsl(var(--primary));
 *   --checkbox-checked-border: hsl(var(--foreground));
 *   --checkbox-checked-background: hsl(var(--foreground));
 *   --checkbox-unchecked-border: hsl(var(--contrast-300));
 *   --checkbox-unchecked-background: hsl(var(--background));
 *   --checkbox-error: hsl(var(--error));
 * }
 * ```
 */
export function Checkbox({
  htmlFor,
  checked = false,
  setChecked,
  label,
  error,
  className,
}: {
  htmlFor: string;
  checked: boolean;
  setChecked?: (checked: boolean) => void;
  label: string;
  error?: string | null;
  className?: string;
}) {
  return (
    <div>
      <div className={clsx('flex items-center gap-2', className)}>
        <RadixCheckbox.Root
          checked={checked}
          className={clsx(
            'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-150',
            'focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-[var(--checkbox-focus,hsl(var(--primary)))]',
            checked
              ? 'border-[var(--checkbox-checked-border,hsl(var(--foreground)))] bg-[var(--checkbox-checked-background,hsl(var(--foreground)))]'
              : 'border-[var(--checkbox-unchecked-border,hsl(var(--contrast-300)))] bg-[var(--checkbox-unchecked-background,hsl(var(--background)))]',
            error != null
              ? 'border-[var(--checkbox-error-border,hsl(var(--error)))]'
              : 'border-[var(--checkbox-unchecked-border,hsl(var(--contrast-300)))]',
          )}
          defaultChecked
          id={htmlFor}
          onCheckedChange={setChecked}
        >
          <RadixCheckbox.Indicator>
            <Check className="h-4 w-4" color="white" />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <Label.Root className="select-none text-foreground" htmlFor={htmlFor}>
          {label}
        </Label.Root>
      </div>
      {error != null ? <span className="text-xs text-error">{error}</span> : null}
    </div>
  );
}
