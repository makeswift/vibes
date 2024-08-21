'use client'

import { useRef, useState } from 'react'

import {
  DateValue,
  getLocalTimeZone,
  parseAbsoluteToLocal,
  parseDate,
} from '@internationalized/date'
import { DateInput, DateInputProps, DateInputValue } from '@nextui-org/date-input'

import { cn } from '@/lib/utils'
import Calendar from '@/vibes/2px/components/calendar'
import { CalendarIcon } from '@/vibes/2px/components/icons/CalendarIcon'

import useOnClickOutside from './useOnClickOutside'

interface Props extends Omit<DateInputProps, 'variant' | 'isDisabled'> {
  variant?: 'default' | 'success' | 'error'
  disabled?: boolean
  onChange?: ((value?: DateValue) => void) | undefined
}

export default function DatePicker({
  variant,
  disabled: isDisabled,
  value,
  onChange,
  ...props
}: Props) {
  const [selectedDate, setSelectedDate] = useState<DateInputValue | undefined | null>(value)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const calendarRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(calendarRef, () => setCalendarOpen(false))

  const handleCalendarSelect = (date?: Date) => {
    const formattedDate = date?.toISOString()
    ;(onChange || setSelectedDate)(
      formattedDate
        ? parseDate(parseAbsoluteToLocal(formattedDate).toString().split('T')[0])
        : undefined
    )
  }

  const valueToUse = value || selectedDate

  return (
    <div className="relative w-full">
      <DateInput
        className={cn(
          'h-[3.75rem] justify-center border-2 border-foreground px-4 text-sm font-medium uppercase leading-6 text-foreground outline-error focus-within:outline-2 hover:border-dashed',
          {
            'border-contrast-300 text-contrast-300': isDisabled,
            'border-error': variant === 'error',
            'border-success': variant === 'success',
          }
        )}
        placeholderValue={undefined}
        classNames={{
          segment:
            'text-inherit focus:border-foreground border-b-2 border-transparent rounded-none',
          inputWrapper: 'p-0',
        }}
        value={valueToUse}
        onChange={onChange || setSelectedDate}
        isDisabled={isDisabled}
        {...props}
      ></DateInput>
      <div
        className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-foreground"
        ref={calendarRef}
      >
        <button onClick={() => setCalendarOpen(!calendarOpen)} disabled={isDisabled}>
          <CalendarIcon
            className={cn({
              'stroke-foreground': !isDisabled,
              'stroke-contrast-300': isDisabled,
            })}
          />
        </button>

        <Calendar
          setSelectedDate={handleCalendarSelect}
          className={cn('absolute bottom-full left-1/2 z-10 mb-6 -translate-x-1/2', {
            hidden: !calendarOpen,
          })}
          selectedDate={valueToUse ? valueToUse?.toDate(getLocalTimeZone()) : undefined}
        />
      </div>
    </div>
  )
}
