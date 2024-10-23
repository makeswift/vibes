import { ComponentPropsWithoutRef } from 'react'
import { DayPicker } from 'react-day-picker'

import clsx from 'clsx'
import { ChevronLeftIcon } from 'lucide-react'

export function Calendar({
  className,
  classNames,
  ...props
}: ComponentPropsWithoutRef<typeof DayPicker>) {
  return (
    <DayPicker
      className={clsx('w-[304px] rounded-lg border border-contrast-100 p-3', className)}
      classNames={{
        months: 'relative',
        month_caption: 'flex justify-center w-full font-medium',
        nav: 'absolute flex justify-between w-full',
        button_next:
          'rotate-180 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground',
        button_previous:
          'rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground',
        weekdays: 'flex py-0.5',
        weekday: 'flex h-10 w-10 items-center justify-center text-xs font-medium',
        week: 'flex py-0.5',
        day: 'h-10 w-10 flex text-xs font-medium group',
        day_button:
          'h-full w-full flex items-center justify-center rounded-full group-data-[selected=true]:bg-primary group-data-[selected=true]/middle:bg-primary-highlight hover:border hover:border-contrast-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground disabled:hover:border-none',
        disabled: 'text-contrast-300',
        outside: 'text-contrast-300',
        range_start: 'bg-gradient-to-l from-primary-highlight',
        range_middle: 'bg-primary-highlight group/middle',
        range_end: 'bg-gradient-to-r from-primary-highlight',
        ...classNames,
      }}
      components={{
        Chevron: () => <ChevronLeftIcon className="h-5 w-5" strokeWidth={1} />,
      }}
      {...props}
    />
  )
}

Calendar.displayName = 'Calendar'
