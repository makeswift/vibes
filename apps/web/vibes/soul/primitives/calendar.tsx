import { clsx } from 'clsx';
import { ChevronLeftIcon } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { DayPicker } from 'react-day-picker';

const components = {
  Chevron: () => <ChevronLeftIcon className="h-5 w-5" strokeWidth={1} />,
};

/**
 * This component supports various CSS variables for theming. Here's a comprehensive list, along
 * with their default values:
 *
 * ```css
 *  :root {
 *   --calendar-focus: hsl(var(--foreground));
 *   --calendar-border: hsl(var(--contrast-100));
 *   --calendar-background: hsl(var(--background));
 *   --calendar-button-border-hover: hsl(var(--contrast-200));
 *   --calendar-selected-button-background: hsl(var(--primary));
 *   --calendar-selected-middle-button-background: transparent;
 *   --calendar-text-disabled: hsl(var(--text-contrast-300));
 *   --calendar-range-background: color-mix(in oklab, hsl(var(--primary)), white 75%);
 *  }
 * ```
 */
export function Calendar({
  className,
  classNames,
  ...props
}: ComponentPropsWithoutRef<typeof DayPicker>) {
  return (
    <DayPicker
      className={clsx(
        'box-content w-[280px] rounded-lg border border-[var(--calendar-border,hsl(var(--contrast-100)))] bg-[var(--calendar-background,hsl(var(--background)))] p-3',
        className,
      )}
      classNames={{
        months: 'relative',
        month_caption: 'flex justify-center w-full font-medium pb-0.5',
        nav: 'absolute flex justify-between w-full',
        button_next:
          'rotate-180 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--calendar-focus,hsl(var(--foreground)))]',
        button_previous:
          'rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--calendar-focus,hsl(var(--foreground)))]',
        month_grid: 'flex flex-col gap-0.5',
        weeks: 'flex flex-col gap-0.5',
        weekdays: 'flex',
        weekday: 'flex h-10 w-10 items-center justify-center text-xs font-medium',
        week: 'flex',
        day: 'h-10 w-10 flex text-xs font-medium group p-0',
        day_button:
          'h-full w-full flex items-center justify-center rounded-full group-data-[selected=true]:bg-[var(--calendar-selected-button-background,hsl(var(--primary)))] group-data-[selected=true]/middle:bg-[var(--calendar-selected-middle-button-background,transparent)] hover:border hover:border-[var(--calendar-button-border-hover,hsl(var(--contrast-200)))] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--calendar-focus,hsl(var(--foreground)))] disabled:hover:border-none',
        disabled: 'text-[var(--calendar-text-disabled,hsl(var(--text-contrast-300)))]',
        outside: 'text-[var(--calendar-text-disabled,hsl(var(--text-contrast-300)))]',
        range_start:
          'bg-gradient-to-l from-[var(--calendar-range-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
        range_middle:
          'bg-[var(--calendar-range-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))] group/middle',
        range_end:
          'bg-gradient-to-r from-[var(--calendar-range-background,color-mix(in_oklab,hsl(var(--primary)),white_75%))]',
        ...classNames,
      }}
      components={components}
      {...props}
    />
  );
}
