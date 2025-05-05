import { clsx } from 'clsx';
import { ChevronLeftIcon } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { DayPicker } from 'react-day-picker';

const components = {
  Chevron: () => <ChevronLeftIcon className="h-5 w-5" strokeWidth={1} />,
};

export type CalendarProps = ComponentPropsWithoutRef<typeof DayPicker> & {
  colorScheme?: 'light' | 'dark';
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --calendar-font-family: var(--font-family-body);
 *   --calendar-light-focus: var(--foreground);
 *   --calendar-light-border: var(--contrast-100);
 *   --calendar-light-text: var(--foreground);
 *   --calendar-light-background: var(--background);
 *   --calendar-light-button-border-hover: var(--contrast-200);
 *   --calendar-light-selected-button-background: var(--primary);
 *   --calendar-light-selected-button-text: var(--foreground);
 *   --calendar-light-selected-middle-button-background: transparent;
 *   --calendar-light-text-disabled: var(--contrast-300);
 *   --calendar-light-range-background: var(--primary-highlight);
 *   --calendar-dark-focus: var(--background);
 *   --calendar-dark-border: var(--contrast-500);
 *   --calendar-dark-text: var(--background);
 *   --calendar-dark-background: var(--foreground);
 *   --calendar-dark-button-border-hover: var(--contrast-400);
 *   --calendar-dark-selected-button-background: var(--primary);
 *   --calendar-dark-selected-button-text: var(--foreground);
 *   --calendar-dark-selected-middle-button-background: transparent;
 *   --calendar-dark-text-disabled: var(--contrast-300);
 *   --calendar-dark-range-background: color-mix(in oklab, var(--primary), white 60%);
 *  }
 * ```
 */
export function Calendar({
  colorScheme = 'light',
  className,
  classNames,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      {...props}
      className={clsx(
        'box-content w-[280px] rounded-lg border p-3 font-(family-name:--calendar-font-family,var(--font-family-body))',
        {
          light:
            'border-(--calendar-light-border,var(--contrast-100)) bg-(--calendar-light-background,var(--background)) text-(--calendar-light-text,var(--foreground))',
          dark: 'border-(--calendar-dark-border,var(--contrast-500)) bg-(--calendar-dark-background,var(--foreground)) text-(--calendar-dark-text,var(--background))',
        }[colorScheme],
        className,
      )}
      classNames={{
        months: 'relative',
        month_caption: 'flex justify-center w-full font-medium pb-0.5',
        nav: 'absolute flex justify-between w-full',
        button_next: clsx(
          'rotate-180 rounded-full focus-visible:outline-hidden focus-visible:ring-1',
          {
            light: 'focus-visible:ring-(--calendar-light-focus,var(--foreground))',
            dark: 'focus-visible:ring-(--calendar-dark-focus,var(--background))',
          }[colorScheme],
        ),
        button_previous: clsx(
          'rounded-full focus-visible:outline-hidden focus-visible:ring-1',
          {
            light: 'focus-visible:ring-(--calendar-light-focus,var(--foreground))',
            dark: 'focus-visible:ring-(--calendar-dark-focus,var(--background))',
          }[colorScheme],
        ),
        month_grid: 'flex flex-col gap-0.5',
        weeks: 'flex flex-col gap-0.5',
        weekdays: 'flex',
        weekday: 'flex h-10 w-10 items-center justify-center text-xs font-medium',
        week: 'flex',
        day: 'h-10 w-10 flex text-xs font-medium group p-0',
        day_button: clsx(
          'h-full w-full flex items-center justify-center rounded-full focus-visible:outline-hidden focus-visible:ring-1 disabled:hover:border-none',
          {
            light:
              'group-data-[selected=true]:text-(--calendar-light-selected-button-text,var(--foreground)) group-data-[selected=true]:bg-(--calendar-light-selected-button-background,var(--primary)) group-data-[selected=true]/middle:bg-(--calendar-light-selected-middle-button-background,transparent) hover:border hover:border-(--calendar-light-button-border-hover,var(--contrast-200)) focus-visible:ring-(--calendar-light-focus,var(--foreground))',
            dark: 'group-data-[selected=true]:text-(--calendar-dark-selected-button-text,var(--foreground)) group-data-[selected=true]:bg-(--calendar-dark-selected-button-background,var(--primary)) group-data-[selected=true]/middle:bg-(--calendar-dark-selected-middle-button-background,transparent) hover:border hover:border-(--calendar-dark-button-border-hover,var(--contrast-400)) focus-visible:ring-(--calendar-dark-focus,var(--background))',
          }[colorScheme],
        ),
        disabled: clsx(
          {
            light: 'text-(--calendar-light-text-disabled,var(--contrast-300))',
            dark: 'text-(--calendar-dark-text-disabled,var(--contrast-300))',
          }[colorScheme],
        ),
        outside: clsx(
          {
            light: 'text-(--calendar-light-text-disabled,var(--contrast-300))',
            dark: 'text-(--calendar-dark-text-disabled,var(--contrast-300))',
          }[colorScheme],
        ),
        range_start: clsx(
          'bg-gradient-to-l',
          {
            light: 'from-(--calendar-light-range-background,var(--primary-highlight))',
            dark: 'from-(--calendar-dark-range-background,color-mix(in_oklab,var(--primary),white_60%))',
          }[colorScheme],
        ),
        range_middle: clsx(
          'group/middle',
          {
            light: 'bg-(--calendar-light-range-background,var(--primary-highlight))',
            dark: 'bg-(--calendar-dark-range-background,color-mix(in_oklab,var(--primary),white_60%))',
          }[colorScheme],
        ),
        range_end: clsx(
          'bg-gradient-to-r',
          {
            light: 'from-(--calendar-light-range-background,var(--primary-highlight))',
            dark: 'from-(--calendar-dark-range-background,color-mix(in_oklab,var(--primary),white_60%))',
          }[colorScheme],
        ),
        ...classNames,
      }}
      components={components}
    />
  );
}
