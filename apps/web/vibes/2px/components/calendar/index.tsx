'use client'

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { ChevronLeftIcon } from '@/vibes/2px/components/icons/ChevronLeftIcon'

interface Props {
  className?: string
  selectedDate?: Date
  setSelectedDate: (value: Date | undefined) => void
}

export default function Calendar({ className, selectedDate, setSelectedDate }: Props) {
  const [displayedMonth, setDisplayedMonth] = useState<Date>(
    selectedDate ? selectedDate : new Date()
  )

  return (
    <DayPicker
      onNextClick={() =>
        setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() + 1))
      }
      onPrevClick={() =>
        setDisplayedMonth(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth() - 1))
      }
      required={false}
      selected={selectedDate}
      mode="single"
      month={displayedMonth}
      onSelect={selected => setSelectedDate(selected)}
      className={cn(
        'relative flex min-w-[19rem] flex-col gap-2 border-2 border-foreground bg-background p-3 text-center font-body text-xs leading-snug text-foreground',
        className
      )}
      modifiers={{
        previousMonth: (day: Date) =>
          day.getTime() <
          new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), 1).getTime(),
      }}
      modifiersClassNames={{
        previousMonth: 'opacity-0',
      }}
      formatters={{
        formatWeekdayName: weekday => {
          return {
            '0': 'S',
            '1': 'M',
            '2': 'T',
            '3': 'W',
            '4': 'T',
            '5': 'F',
            '6': 'S',
          }[weekday.getDay().toString()] as string
        },
      }}
      classNames={{
        month: 'w-full',
        month_grid: 'w-full  mt-2 ',
        month_caption: 'absolute left-1/2 top-[1.45rem] w-fit -translate-x-1/2 text-center text-xs',
        caption_label: 'text-xs ',
        nav: 'flex justify-between items-center',
        nav_button: 'h-4 w-4',
        outside: 'text-gray-400',
        weekdays: 'text-accent text-sm mt-2 mb-2 ',
        weekday: 'font-medium leading-6',
        day_button: 'h-10 w-10',
        weeks: 'w-full',
        day: 'hover:outline-2 hover:outline-dashed hover:outline-foreground focus:outline-foreground focus:outline-solid',
        day_disabled: 'text-contrast-300',
        selected: 'bg-foreground text-background',
      }}
      components={{
        Chevron: ({ orientation }) => {
          return (
            <div className="flex h-10 w-10 items-center justify-center">
              <ChevronLeftIcon
                className={cn('h-4 w-4 cursor-pointer text-foreground', {
                  'rotate-90': orientation === 'up',
                  'rotate-180': orientation === 'right',
                  '-rotate-90': orientation === 'down',
                })}
              />
            </div>
          )
        },
      }}
    />
  )
}
