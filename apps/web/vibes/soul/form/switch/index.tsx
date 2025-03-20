import * as SwitchPrimitive from '@radix-ui/react-switch';
import { clsx } from 'clsx';
import { Loader2 } from 'lucide-react';
import { useId } from 'react';

import * as Skeleton from '@/vibes/soul/primitives/skeleton';

interface SwitchProps {
  name?: string;
  required?: boolean;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'large' | 'medium' | 'small';
  labelPosition?: 'left' | 'right' | 'both';
  label?: string | { on: string; off: string };
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void | Promise<void>;
  disabled?: boolean;
  loading?: boolean;
}

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list,
 * along with their default values:
 *
 * ```css
 *  :root {
 *    --switch-primary-background: hsl(var(--primary));
 *    --switch-secondary-background: hsl(var(--foreground));
 *    --switch-tertiary-background: hsl(var(--background));
 *    --switch-tertiary-border: hsl(var(--contrast-200));
 *  }
 * ```
 */
export const Switch = ({
  name,
  variant = 'primary',
  size = 'medium',
  labelPosition = 'right',
  label,
  disabled,
  loading,
  checked,
  defaultChecked,
  onCheckedChange,
}: SwitchProps) => {
  const id = useId();
  const hasLabel = label != null && label !== '';

  return (
    <div className="group/switch flex items-center gap-2">
      {(labelPosition === 'left' || labelPosition === 'both') && hasLabel && (
        <SwitchLabel
          id={id}
          label={label}
          size={size}
          state={labelPosition === 'both' ? 'off' : undefined}
        />
      )}
      <SwitchPrimitive.Root
        aria-busy={loading}
        checked={checked}
        defaultChecked={defaultChecked}
        className={clsx(
          'w-12 rounded-full border border-contrast-200 p-[3px] transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 data-[disabled]:cursor-not-allowed [&:not([data-loading])]:data-[disabled]:bg-contrast-100',
        )}
        data-loading={loading ? '' : undefined}
        disabled={disabled || loading}
        id={id}
        name={name}
        onCheckedChange={onCheckedChange}
      >
        <SwitchPrimitive.Thumb
          className={clsx(
            'relative block h-5 w-5 overflow-hidden rounded-full transition-transform duration-100 data-[state=checked]:translate-x-full data-[disabled]:bg-contrast-200 data-[state=unchecked]:bg-contrast-200',
            {
              primary: 'bg-[var(--switch-primary-background,hsl(var(--primary)))]',
              secondary: 'bg-[var(--switch-secondary-background,hsl(var(--foreground)))]',
              tertiary:
                'border border-[var(--switch-tertiary-border,hsl(var(--contrast-200)))] bg-[var(--switch-tertiary-background,hsl(var(--background)))]',
            }[variant],
          )}
        >
          <span
            className={clsx(
              'absolute inset-0 grid place-content-center transition-all duration-300 ease-in-out',
              loading ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
            )}
          >
            <Loader2
              className={clsx('animate-spin', variant === 'tertiary' && 'text-foreground')}
              size={16}
            />
          </span>
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
      {(labelPosition === 'right' || labelPosition === 'both') && hasLabel && (
        <SwitchLabel
          id={id}
          label={label}
          loading={loading}
          size={size}
          state={labelPosition === 'both' ? 'on' : undefined}
        />
      )}
    </div>
  );
};

interface LabelProps {
  id: string;
  label: string | { on: string; off: string };
  size: 'large' | 'medium' | 'small';
  state?: 'off' | 'on';
  loading?: boolean;
}

function SwitchLabel({ id, label, size = 'medium', state, loading }: LabelProps) {
  const baseClass =
    '[&:not([data-loading])]:group-has-[[data-disabled]]/switch:text-contrast-400 font-semibold select-none';

  if (typeof label === 'string') {
    return (
      <label
        className={clsx(
          baseClass,
          {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
          }[size],
        )}
        data-loading={loading ? '' : undefined}
        htmlFor={id}
      >
        {label}
      </label>
    );
  }

  if (state) {
    return (
      <label
        className={clsx(
          baseClass,
          {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
          }[size],
        )}
        data-loading={loading ? '' : undefined}
        htmlFor={id}
      >
        {label[state]}
      </label>
    );
  }

  return (
    <div className="leading-[0]">
      <label
        className={clsx(
          'group-has-[[data-state=unchecked]]/switch:invisible group-has-[[data-state=checked]]/switch:block',
          baseClass,
          {
            small: 'mb-[-1px] text-sm',
            medium: 'text-base',
            large: 'text-lg',
          }[size],
        )}
        data-loading={loading ? '' : undefined}
        htmlFor={id}
      >
        {label.on}
      </label>
      <label
        className={clsx(
          'group-has-[[data-state=checked]]/switch:invisible group-has-[[data-state=unchecked]]/switch:block',
          baseClass,
          {
            small: 'mt-[-1px] text-sm',
            medium: 'text-base',
            large: 'text-lg',
          }[size],
        )}
        data-loading={loading ? '' : undefined}
        htmlFor={id}
      >
        {label.off}
      </label>
    </div>
  );
}

export function SwitchSkeleton({
  size = 'medium',
  labelPosition = 'right',
}: Pick<SwitchProps, 'size' | 'labelPosition'>) {
  return (
    <div className="flex items-center gap-2">
      {(labelPosition === 'left' || labelPosition === 'both') && (
        <Skeleton.Text
          characterCount={6}
          className={clsx(
            'rounded',
            {
              small: 'text-sm',
              medium: 'text-base',
              large: 'text-lg',
            }[size],
          )}
        />
      )}
      <Skeleton.Box className="h-6 w-12 rounded-full p-[3px]" />
      {(labelPosition === 'right' || labelPosition === 'both') && (
        <Skeleton.Text
          characterCount={6}
          className={clsx(
            'rounded',
            {
              small: 'text-sm',
              medium: 'text-base',
              large: 'text-lg',
            }[size],
          )}
        />
      )}
    </div>
  );
}
